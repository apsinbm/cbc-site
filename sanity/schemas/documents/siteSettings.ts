import { defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteName', type: 'string', title: 'Site Name' },
    { name: 'brand', type: 'object', title: 'Brand Tokens', fields: [
      { name: 'coral', type: 'string', title: 'Brand Coral HEX' },
      { name: 'sea', type: 'string', title: 'Brand Sea HEX' },
      { name: 'sand', type: 'string', title: 'Brand Sand HEX' },
      { name: 'ink', type: 'string', title: 'Ink HEX' },
      { name: 'surface', type: 'string', title: 'Surface HEX' },
    ]},
    { name: 'whatsappNumber', type: 'string', title: 'WhatsApp Number' },
    { name: 'pressLogos', type: 'array', title: 'Press Logos', of: [{type:'image'}]},
  ],
})