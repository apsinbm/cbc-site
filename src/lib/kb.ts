import { promises as fs } from 'fs'
import path from 'path'

export interface KnowledgeBaseItem {
  id: string
  title: string
  content: string
  type: 'markdown' | 'json' | 'csv'
  tags: string[]
  lastModified: Date
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  priority: number
}

const KB_PATH = path.join(process.cwd(), 'kb', 'cbc-agent')

// Check if knowledge base directory exists
export async function hasKnowledgeBase(): Promise<boolean> {
  try {
    await fs.access(KB_PATH)
    return true
  } catch {
    return false
  }
}

// Load all knowledge base files
export async function loadKnowledgeBase(): Promise<KnowledgeBaseItem[]> {
  try {
    if (!(await hasKnowledgeBase())) {
      console.log('Knowledge base directory not found, skipping KB loading')
      return []
    }

    const files = await fs.readdir(KB_PATH, { withFileTypes: true })
    const kbItems: KnowledgeBaseItem[] = []

    for (const file of files) {
      if (file.isFile()) {
        const filePath = path.join(KB_PATH, file.name)
        const content = await fs.readFile(filePath, 'utf-8')
        const stats = await fs.stat(filePath)
        
        const extension = path.extname(file.name).toLowerCase()
        let type: 'markdown' | 'json' | 'csv' = 'markdown'
        
        if (extension === '.json') type = 'json'
        else if (extension === '.csv') type = 'csv'
        
        kbItems.push({
          id: file.name,
          title: path.basename(file.name, extension),
          content,
          type,
          tags: extractTags(content, type),
          lastModified: stats.mtime
        })
      }
    }

    console.log(`Loaded ${kbItems.length} knowledge base items`)
    return kbItems
  } catch (error) {
    console.warn('Failed to load knowledge base:', error)
    return []
  }
}

// Extract tags from content based on file type
function extractTags(content: string, type: 'markdown' | 'json' | 'csv'): string[] {
  const tags: string[] = []
  
  switch (type) {
    case 'markdown':
      // Extract from frontmatter or hashtags
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
      if (frontmatterMatch) {
        const tagsMatch = frontmatterMatch[1].match(/tags:\s*\[(.*?)\]/)
        if (tagsMatch) {
          tags.push(...tagsMatch[1].split(',').map(tag => tag.trim().replace(/['"]/g, '')))
        }
      }
      // Also extract hashtags from content
      const hashtagMatches = content.match(/#[\w-]+/g)
      if (hashtagMatches) {
        tags.push(...hashtagMatches.map(tag => tag.slice(1)))
      }
      break
      
    case 'json':
      try {
        const parsed = JSON.parse(content)
        if (parsed.tags && Array.isArray(parsed.tags)) {
          tags.push(...parsed.tags)
        }
        if (parsed.category) {
          tags.push(parsed.category)
        }
      } catch {
        // Invalid JSON, skip tag extraction
      }
      break
      
    case 'csv':
      // Assume first row contains headers, look for common tag-like columns
      const lines = content.split('\n')
      if (lines.length > 0) {
        const headers = lines[0].toLowerCase().split(',')
        if (headers.includes('category') || headers.includes('tags') || headers.includes('type')) {
          tags.push('structured-data')
        }
      }
      break
  }
  
  return [...new Set(tags)] // Remove duplicates
}

// Load and parse FAQs from knowledge base
export async function loadFAQs(): Promise<FAQ[]> {
  try {
    const kbItems = await loadKnowledgeBase()
    const faqs: FAQ[] = []
    
    for (const item of kbItems) {
      if (item.type === 'json' && item.id.toLowerCase().includes('faq')) {
        try {
          const parsed = JSON.parse(item.content)
          
          if (Array.isArray(parsed)) {
            // Array of FAQ objects
            faqs.push(...parsed.map((faq, index) => ({
              id: `${item.id}-${index}`,
              question: faq.question || faq.q || '',
              answer: faq.answer || faq.a || '',
              category: faq.category || 'General',
              priority: faq.priority || 0
            })))
          } else if (parsed.faqs && Array.isArray(parsed.faqs)) {
            // Object with faqs array
            faqs.push(...parsed.faqs.map((faq: any, index: number) => ({
              id: `${item.id}-${index}`,
              question: faq.question || faq.q || '',
              answer: faq.answer || faq.a || '',
              category: faq.category || parsed.category || 'General',
              priority: faq.priority || 0
            })))
          }
        } catch (error) {
          console.warn(`Failed to parse FAQ file ${item.id}:`, error)
        }
      } else if (item.type === 'markdown' && item.tags.includes('faq')) {
        // Extract Q&A from markdown
        const qaPairs = extractQAFromMarkdown(item.content)
        faqs.push(...qaPairs.map((qa, index) => ({
          id: `${item.id}-${index}`,
          question: qa.question,
          answer: qa.answer,
          category: item.tags.find(tag => tag !== 'faq') || 'General',
          priority: 0
        })))
      }
    }
    
    // Sort by priority (higher first) then alphabetically
    faqs.sort((a, b) => {
      if (a.priority !== b.priority) return b.priority - a.priority
      return a.question.localeCompare(b.question)
    })
    
    console.log(`Loaded ${faqs.length} FAQs from knowledge base`)
    return faqs
  } catch (error) {
    console.warn('Failed to load FAQs:', error)
    return []
  }
}

// Extract Q&A pairs from markdown content
function extractQAFromMarkdown(content: string): { question: string; answer: string }[] {
  const qaPairs: { question: string; answer: string }[] = []
  
  // Look for patterns like "Q:" or "Question:" followed by "A:" or "Answer:"
  const qaPattern = /(?:Q:|Question:)\s*(.*?)\n(?:A:|Answer:)\s*(.*?)(?=\n(?:Q:|Question:)|$)/gi
  let match
  
  while ((match = qaPattern.exec(content)) !== null) {
    qaPairs.push({
      question: match[1].trim(),
      answer: match[2].trim()
    })
  }
  
  // Also look for heading-based Q&A
  if (qaPairs.length === 0) {
    const headingPattern = /^#+\s*(.*\?)\s*\n(.*?)(?=\n#+|\n\n|$)/gm
    while ((match = headingPattern.exec(content)) !== null) {
      qaPairs.push({
        question: match[1].trim(),
        answer: match[2].trim()
      })
    }
  }
  
  return qaPairs
}

// Get knowledge base summary for chatbot context
export async function getKBSummary(): Promise<string> {
  try {
    const kbItems = await loadKnowledgeBase()
    
    if (kbItems.length === 0) {
      return "No additional knowledge base available."
    }
    
    const summary = [
      `Knowledge Base Summary (${kbItems.length} documents):`,
      '',
      ...kbItems.map(item => {
        const tags = item.tags.length > 0 ? ` [${item.tags.join(', ')}]` : ''
        return `- ${item.title}${tags}: ${item.content.substring(0, 100)}...`
      }),
      '',
      'This information can be used to provide more detailed and accurate responses about CBC services and policies.'
    ]
    
    return summary.join('\n')
  } catch (error) {
    console.warn('Failed to generate KB summary:', error)
    return "Knowledge base unavailable."
  }
}

// Search knowledge base
export async function searchKnowledgeBase(query: string): Promise<KnowledgeBaseItem[]> {
  try {
    const kbItems = await loadKnowledgeBase()
    const searchTerms = query.toLowerCase().split(' ')
    
    return kbItems.filter(item => {
      const searchText = `${item.title} ${item.content} ${item.tags.join(' ')}`.toLowerCase()
      return searchTerms.some(term => searchText.includes(term))
    }).sort((a, b) => {
      // Simple relevance scoring based on title matches
      const aScore = searchTerms.reduce((score, term) => 
        score + (a.title.toLowerCase().includes(term) ? 2 : 0) +
               (a.content.toLowerCase().includes(term) ? 1 : 0), 0)
      const bScore = searchTerms.reduce((score, term) => 
        score + (b.title.toLowerCase().includes(term) ? 2 : 0) +
               (b.content.toLowerCase().includes(term) ? 1 : 0), 0)
      return bScore - aScore
    })
  } catch (error) {
    console.warn('Failed to search knowledge base:', error)
    return []
  }
}