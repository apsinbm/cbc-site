# Coral Beach & Tennis Club Website

A modern, responsive website for Bermuda's premier private beach and tennis club, built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## 🏖️ Project Overview

This is a standalone website for Coral Beach & Tennis Club featuring:

- **Next.js 14** with App Router and TypeScript
- **Sanity v3** headless CMS for content management
- **Tailwind CSS** + **shadcn/ui** for modern styling
- **CBC-Agent** chatbot integration
- **WhatsApp** business integration
- **Security-first** architecture with CSP headers
- **Responsive design** optimized for all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/cbc-site.git
   cd cbc-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.local .env.local.example
   ```
   
   Edit `.env.local` with your configuration values.

4. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Configure these variables in your `.env.local` file:

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your site URL | `https://coralbeachclub.com` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | `abc123def` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset | `production` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `WHATSAPP_NUMBER` | WhatsApp business number | `+14415551234` |
| `EMAIL_FROM` | Sender email address | `noreply@coralbeachclub.com` |
| `EMAIL_TO` | Contact form recipient | `reservations@coralbeachclub.com` |
| `POSTMARK_API_TOKEN` | Postmark API token | (optional) |
| `NEXT_PUBLIC_CBC_AGENT_ENABLED` | Enable CBC Agent | `true` |
| `NEXT_PUBLIC_CBC_AGENT_SRC` | CBC Agent script URL | (optional) |

## 📊 Sanity Studio

### Accessing the Studio

1. **Local development**: Visit [http://localhost:3000/studio](http://localhost:3000/studio)
2. **Production**: Visit `your-domain.com/studio`

### Content Schema Overview

The CMS includes these content types:

- **Events**: Club events, activities, and special occasions
- **Room Types**: Accommodation categories with amenities
- **Cottages**: Private cottage accommodations  
- **Dining Venues**: Restaurant and dining locations
- **Menus**: Food and beverage offerings
- **Event Venues**: Spaces for weddings and gatherings
- **Reciprocal Clubs**: Partner clubs worldwide
- **Staff**: Team member profiles
- **Announcements**: Important club notices
- **Site Settings**: Global configuration and branding

### Adding Content

1. **Events**: Create events with categories (Dining, Tennis, Spa, etc.)
2. **Menus**: Add structured menu items with dietary tags
3. **Reciprocal Clubs**: Manage global club network with locations

## 🔒 Security Features

This website implements comprehensive security measures:

### Headers
- **CSP (Content Security Policy)**: Prevents XSS attacks
- **HSTS**: Enforces HTTPS in production
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing

### API Protection
- **Rate limiting**: 100 requests per hour per IP
- **Input validation**: Zod schema validation
- **Bot detection**: Honeypot fields and spam filtering
- **Sanitization**: All user input is sanitized

### Middleware
- Automatic security header injection
- Suspicious request blocking
- Request logging and monitoring

## 🤖 CBC-Agent Integration

### Setup

1. **Enable the agent**:
   ```env
   NEXT_PUBLIC_CBC_AGENT_ENABLED=true
   ```

2. **Configure script source**:
   ```env
   NEXT_PUBLIC_CBC_AGENT_SRC=https://your-cdn.com/cbc-agent/widget.js
   ```

3. **Knowledge Base** (optional):
   Create `/kb/cbc-agent/` directory with:
   - Markdown files (`.md`)
   - JSON files (`.json`)  
   - CSV files (`.csv`)

### Knowledge Base Structure

```
kb/
└── cbc-agent/
    ├── faqs.json
    ├── policies.md
    ├── services.csv
    └── club-rules.md
```

### Widget Context

The CBC-Agent automatically receives page context:
- `/dine` pages: "dining" context
- `/play/tennis` pages: "tennis" context  
- `/gather` pages: "weddings" context
- `/membership` pages: "membership" context

## 📱 WhatsApp Integration

### Configuration

1. **Set your WhatsApp number**:
   ```env
   WHATSAPP_NUMBER=+14415551234
   ```

2. **Customize messages**: Edit the default message in `WhatsAppButton.tsx`

### Features

- **Smart detection**: Opens native app on mobile, web on desktop
- **Pre-filled messages**: Context-aware default messages
- **Floating button**: Persistent access across all pages

## 🔮 Future Northstar Integration

Placeholder stubs are included for future SSO and deep link integration:

### Planned Features

- **SAML/OAuth2 authentication**
- **Member profile management**
- **Dining reservations**
- **Tennis court booking**
- **Spa appointments** 
- **Event RSVPs**
- **Reciprocal club letters**
- **Mobile app deep links**

### Implementation Location

All Northstar integration stubs are in:
```
src/lib/integrations/northstar.ts
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy**: Automatic deployments on push to main

### Environment Setup

```bash
# Production environment variables
NEXT_PUBLIC_SITE_URL=https://coralbeachclub.com
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
SANITY_API_TOKEN=your_production_token
POSTMARK_API_TOKEN=your_postmark_token
```

### Custom Domain

1. Add your domain in Vercel settings
2. Configure DNS records
3. Enable automatic HTTPS

## 📁 Project Structure

```
cbc-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/          # Public routes
│   │   ├── (member)/          # Member routes (scaffold)
│   │   ├── api/               # API endpoints
│   │   └── studio/            # Sanity Studio
│   ├── components/            # React components
│   │   ├── global/           # Header, Footer, Navigation
│   │   ├── ui/               # shadcn/ui components  
│   │   └── features/         # CBC-specific components
│   └── lib/                   # Utilities
│       ├── sanity/           # Sanity client & queries
│       └── integrations/     # External service integrations
├── sanity/                    # Sanity configuration
│   └── schemas/              # Content type definitions
├── kb/                        # Knowledge base (optional)
│   └── cbc-agent/            # CBC-Agent training data
└── public/                    # Static assets
```

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Code Quality

- **ESLint**: Strict linting rules
- **Prettier**: Automatic code formatting
- **TypeScript**: Strict mode enabled
- **Husky**: Pre-commit hooks

## 📝 Content Management

### Event Management

1. **Create events** in Sanity Studio
2. **Set categories**: Dining, Tennis, Spa, Fitness, Junior, Social
3. **Configure RSVPs**: Enable/disable as needed
4. **Add recurrence**: For recurring events

### Menu Management

1. **Create menus** with effective dates
2. **Add items** with descriptions and prices
3. **Tag dietary requirements**: Vegetarian, vegan, gluten-free
4. **Link to venues**: Associate menus with dining locations

### Accommodation Management

1. **Define room types** with amenities
2. **Add cottage details** with location notes
3. **Set occupancy limits** and member priority
4. **Upload images** for visual showcase

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript strict mode
- Use semantic commit messages
- Maintain test coverage
- Update documentation for new features

## 🛠️ Troubleshooting

### Common Issues

**Sanity Studio not loading**
- Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
- Verify Sanity project exists and is accessible

**CBC-Agent not appearing**  
- Ensure `NEXT_PUBLIC_CBC_AGENT_ENABLED=true`
- Check `NEXT_PUBLIC_CBC_AGENT_SRC` URL is valid
- Verify script loads without CORS errors

**WhatsApp button not working**
- Confirm `WHATSAPP_NUMBER` format: `+1234567890`
- Test on mobile device for native app integration

**Build failures**
- Run `npm run type-check` to identify TypeScript errors
- Check all environment variables are set
- Verify all dependencies are installed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Sanity](https://sanity.io/) - Content management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vercel](https://vercel.com/) - Deployment platform

---

**Built with ❤️ for Coral Beach & Tennis Club**
