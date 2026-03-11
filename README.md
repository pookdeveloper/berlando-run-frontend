# Berlando Run - Luxury Trail Running Apparel Platform

Premium trail running apparel e-commerce platform built with Next.js 15, featuring luxury aesthetics, community features, and editorial content.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL + Prisma ORM
- **State Management**: Zustand 5 (cart)
- **UI Components**: Radix UI primitives
- **Image Optimization**: Next.js Image + Cloudinary
- **Payments**: Stripe
- **Maps**: React Leaflet
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your:
- Database connection string
- Stripe keys
- Cloudinary credentials

3. Initialize database:
```bash
npm run db:push
```

4. (Optional) Seed sample data:
```bash
npm run db:seed
```

5. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js 15 App Router pages
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── products/          # Product listing & detail
│   ├── cart/              # Shopping cart
│   ├── community/         # Run clubs, events, challenges
│   └── journal/           # Editorial blog
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # Reusable UI components
│   ├── home/              # Home page sections
│   ├── product/           # Product components
│   ├── cart/              # Cart components
│   ├── community/         # Community features
│   └── journal/           # Journal components
├── lib/
│   ├── prisma.ts          # Prisma client
│   ├── utils.ts           # Utility functions
│   └── fonts.ts           # Font configuration
└── stores/
    └── cartStore.ts       # Zustand cart store

prisma/
└── schema.prisma          # Database schema
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema to database
- `npm run db:seed` - Seed sample data
- `npm run db:studio` - Open Prisma Studio
- `npm run db:generate` - Generate Prisma Client

## Features

### E-Commerce Core
- Product catalog with variants (size, color)
- Product detail pages with image galleries
- Shopping cart with persistent storage
- Stripe checkout integration

### Brand Experience
- Hero video on home page
- Product storytelling (material stories, technical specs)
- Minimalist luxury design system
- Custom typography and color palette

### Community Platform
- Interactive run clubs map (Madrid, Barcelona, Paris, Berlin, London)
- Events calendar (sunrise runs, trail weekends, urban exploration)
- Monthly challenges (mileage, elevation, segments)

### Editorial Journal
- Running philosophy articles
- Trail route guides
- Athlete profiles
- Gear reviews

## Database Models

- **Product**: Products with variants and images
- **ProductVariant**: Size/color combinations with stock
- **ProductImage**: Multiple images per product
- **RunClub**: Run clubs with geolocation
- **Event**: Community events with types
- **Challenge**: Monthly running challenges
- **JournalPost**: Editorial content
- **Newsletter**: Email subscribers

## Design System

### Colors
- **Black** (#000000): Primary base
- **Stone** (#F5F5F0): Background
- **Olive** (#4A5D3F): Outdoor reference
- **Sand** (#D4C4A8): Natural tone
- **Silver** (#C0C0C0): Technical accent

### Typography
- **Primary**: Modern grotesk (clean, minimal)
- **Secondary**: Technical monospace (specs, data)

## Performance Targets

- Lighthouse Score: 95+
- Largest Contentful Paint (LCP): <1.5s
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1

## License

Proprietary - Berlando Run
