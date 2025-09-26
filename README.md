# Blott News Application

A modern financial news application built with Next.js, featuring smooth animations and responsive design. Displays the latest market news with a premium user experience.

## 🚀 Features

- **Server-Side Rendering** - Fast initial page loads with Next.js 15
- **Responsive Design** - Mobile-first approach with desktop enhancements  
- **Smooth Animations** - GSAP-powered scroll effects and loading transitions
- **Real-time News** - Latest financial news from Finnhub API
- **TypeScript** - Full type safety throughout the application
- **Modern Styling** - Custom design system built on Tailwind CSS v4

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **GSAP** - Professional animations and scroll triggers
- **Finnhub API** - Financial news data

## 📁 Project Structure

```
├── app/
│   ├── (pages)/
│   │   └── (home)/page.tsx     # Home page with news list
│   ├── lib/
│   │   └── actions.ts          # Server actions for API calls
│   └── globals.css             # Design system and global styles
├── components/
│   ├── NewsItemCard.tsx        # Individual news article component
│   ├── NewsList.tsx            # News grid with animations
│   ├── NewsHeading.tsx         # Animated page heading
│   └── skeletons/              # Loading state components
├── types.ts                    # TypeScript definitions
└── public/                     # Static assets and fonts
```

## 🚦 Getting Started

1. **Clone and install dependencies**
   ```bash
   git clone <repo-url>
   cd blott-news-app
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Add your Finnhub API key:
   ```
   API_TOKEN=your_finnhub_api_key
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## 🎨 Design System

Built with a custom design system featuring:
- **Typography**: Albra, Helvetica Now, and Roboto font stack
- **Responsive Grid**: 4-column desktop layout, single-column mobile
- **Custom Spacing**: Consistent padding and margin scales
- **Animation System**: GSAP-powered smooth transitions

## 📱 Key Components

- **NewsHeading** - Animated title with scroll-triggered reveals
- **NewsList** - Responsive grid with featured article layout
- **NewsItemCard** - Individual article cards with hover states
- **Loading System** - Skeleton components with smooth transitions

## 🚢 Build & Deploy

```bash
npm run build
npm start
```

Deployed on Vercel

---

*Built with Next.js, TypeScript, and GSAP*