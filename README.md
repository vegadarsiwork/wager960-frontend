# Wager960 ♟️

A modern, real-money Chess960 (Fischer Random) wagering platform built with Next.js 16, React 19, and Tailwind CSS 4.

## 🎯 Overview

Wager960 is the ultimate platform for skill-based chess wagering, featuring:
- **Fischer Random Chess (Chess960)** - No opening theory, pure skill
- **Skill-Based Matchmaking** - Fair games against similar-rated opponents
- **Instant Payouts** - Fast and secure withdrawals
- **Anti-Cheat Systems** - Fair play guaranteed

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd wager960

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
wager960/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # 🏠 Main landing page
│   │   ├── globals.css         # 🎨 Global styles & color tokens
│   │   ├── layout.tsx          # Root layout
│   │   ├── login/              # Login page
│   │   ├── signup/             # Signup page
│   │   └── play/               # Play page
│   │
│   ├── components/             # React components
│   │   ├── Header.tsx          # 🔝 Navigation bar (logo, links, auth)
│   │   ├── HeroSection.tsx     # 🦸 Hero with CTA buttons
│   │   ├── FeaturesGrid.tsx    # ✨ Platform benefits grid
│   │   ├── HowToPlay.tsx       # ❓ Chess960 rules FAQ
│   │   ├── StatsSection.tsx    # 📊 Live platform statistics
│   │   ├── Testimonials.tsx    # 💬 User reviews
│   │   ├── Footer.tsx          # 🔗 Footer links
│   │   └── ui/                 # Shadcn UI components
│   │
│   └── lib/                    # Utility functions
│
├── public/                     # Static assets
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `charcoal` | `#121212` | Page background |
| `navy` | `#1a2744` | Cards, sections |
| `gold` | `#d4a853` | Primary accent, CTAs |
| `off-white` | `#f5f5f5` | Primary text |
| `light-gray` | `#9ca3af` | Secondary text |

### Typography
- **Font**: Geist (auto-optimized via `next/font`)
- **Scale**: Responsive sizing with Tailwind breakpoints

---

## 🔧 Key Files to Modify

Each component is documented with inline comments. Search for these markers:

| Marker | Meaning |
|--------|---------|
| `CHANGE:` | Content or values to update |
| `ADD:` | Where to add new items |
| `REMOVE:` | Items that can be deleted |
| `STYLING:` | CSS/Tailwind customizations |
| `TODO:` | Future improvements |

### Common Modifications

| Task | File(s) |
|------|---------|
| Update branding/logo | `Header.tsx` |
| Change hero headline | `HeroSection.tsx` |
| Add/edit features | `FeaturesGrid.tsx` |
| Update FAQ content | `HowToPlay.tsx` |
| Connect live stats | `StatsSection.tsx` |
| Add testimonials | `Testimonials.tsx` |
| Update footer links | `Footer.tsx` |
| Change colors | `globals.css` |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16.0.8 | React framework |
| [React](https://react.dev) | 19.2.1 | UI library |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling |
| [Shadcn/ui](https://ui.shadcn.com) | - | Component library |
| [Lucide React](https://lucide.dev) | 0.556.0 | Icons |
| [Radix UI](https://radix-ui.com) | - | Headless components |
| [React Hook Form](https://react-hook-form.com) | 7.68.0 | Form handling |
| [Zod](https://zod.dev) | 4.1.13 | Schema validation |

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🚢 Deployment

### Vercel (Recommended)

The easiest deployment option:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js)

### Other Platforms

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

---

## 📝 License

This project is private and proprietary.

---

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` to check for issues
4. Submit a pull request

---

<p align="center">
  Built with ♟️ by the Wager960 Team
</p>
