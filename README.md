# Cosmiq Consultancy

A professional AI consultancy website built with React, TypeScript, and Vercel.

**Live Site:** https://cosmiq-six.vercel.app

## Features

- **Services Showcase** - AI consultancy services with detailed offerings
- **Appointment Booking** - Calendly integration for scheduling consultations
- **Testimonials System** - Full admin panel for managing client testimonials
  - Submit testimonials via form
  - Admin approval workflow
  - Location tracking
  - 4-column grid display
- **AI Chat Assistant** - Powered by Gemini API for visitor queries
- **Multi-language Support** - German and English translations
- **Responsive Design** - Mobile-first with Tailwind CSS

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Vercel KV (Redis)
- Google Gemini API

## Admin Access

**URL:** `/admin/testimonials`  
**Password:** `Cosmiq@consultancy.pass`

## Environment Variables

Required for deployment:

```env
# Vercel KV (Required for testimonials)
KV_URL=
KV_REST_API_URL=
KV_REST_API_TOKEN=

# Gemini API (Required for chat)
GEMINI_API_KEY=

# Google Analytics (Optional)
VITE_GA_ID=G-4SM1EJL413
```

## Client Handoff Checklist

When transferring to client, update these URLs/details:

| Item | Current | Client Should Change To |
|------|---------|------------------------|
| Calendly | `signup90593` | Client's Calendly URL |
| Google Analytics | `G-4SM1EJL413` | Client's GA ID |
| Contact Email | Check `src/translations.ts` | Client's email |
| Phone/WhatsApp | Check `src/translations.ts` | Client's number |
| Social Links | Check `src/components/Footer.tsx` | Client's profiles |
| Impressum | `src/pages/Impressum.tsx` | Client's legal info |
| Privacy Policy | `src/pages/Privacy.tsx` | Client's details |

## Local Development

```bash
# Install dependencies
npm install

# Set environment variables in .env.local
# See .env.local.example

# Start dev server
npm run dev
```

## Deployment

1. Push to GitHub
2. Import to Vercel
3. Add KV database in Vercel dashboard
4. Set environment variables
5. Deploy

## License

MIT - Built for Cosmiq Consultancy
