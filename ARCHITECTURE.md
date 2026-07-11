# Kundli & Astrology Platform Architecture

## Project Structure Overview
This project uses the Next.js App Router paradigm with a deep focus on component modularity, serverless API handling, and optimized asset delivery for animations.

```
/
├── app/                  # Next.js App Router (Pages, Layouts, API Routes)
│   ├── api/              # Serverless API Proxy Routes
│   │   └── kundli/
│   │       └── route.ts  # Proxies frontend requests to B2B Astrology API securely
│   ├── (dashboard)/      # Grouped routes for logged-in / personalized views
│   │   └── home/
│   │       └── page.tsx  # Daily horoscope, Panchang, profiles
│   ├── layout.tsx        # Root layout, wraps providers and sets global dark theme
│   ├── page.tsx          # Landing page containing the Hero / Onboarding
│   └── globals.css       # Tailwind entry and global CSS variables
├── components/           # Reusable React components
│   ├── ui/               # Generic UI components (buttons, inputs, modals)
│   ├── forms/            # Complex forms (Hero form, Guna Milan form)
│   ├── charts/           # Visual renderers for North/South Indian charts
│   ├── animations/       # Wrappers for Lottie and Three.js elements
│   │   ├── ManifestationLoading.tsx
│   │   └── CosmicBackground.tsx
│   └── ads/              # Monetization component slots (Banners, Interstitial triggers)
├── lib/                  # Utilities and business logic
│   ├── db.ts             # Dexie.js (IndexedDB) setup for local profile storage
│   ├── utils.ts          # Tailwind merge, formatting helpers
│   └── types.ts          # TypeScript interfaces for API payloads and user profiles
├── public/               # Static assets
│   ├── lottie/           # Lottie JSON files (Indian deities, transitions)
│   ├── images/           # Placeholder graphics, fallback assets
│   └── fonts/            # Custom fonts if applicable
└── tailwind.config.ts    # Tailwind config defining neon saffron, electric blue, glassmorphism
```

## Key Architectural Decisions

1. **API Security:** All requests to the B2B Astrology provider (Vedic Rishi/Prokerala) will flow through `/app/api/kundli/route.ts`. This ensures that sensitive API keys are kept on the server and never exposed to the client.
2. **Local Storage (Dexie.js):** To ensure a fast, private user experience without mandatory backend accounts, user profiles (self, family, friends) are stored in the browser's IndexedDB.
3. **Animation Strategy:**
   - Page transitions and UI micro-interactions use `framer-motion`.
   - Vector-based character animations (mythology integrations) use `lottie-react` loading JSON files from the `public/lottie` directory.
   - The deep space interactive background is handled by `@react-three/fiber`.
4. **Monetization Readiness:** Components in `components/ads` act as placeholders. The layout is designed to insert Banners seamlessly, while interstitials are triggered via a global state or contextual route changes before revealing high-value data (like the Kundli chart).
5. **Aesthetics:** The app uses a strict dark mode base (`#0B0E14` or similar deep space color), overlaid with neon saffron (`#FF9933`) and electric blue (`#00E5FF`) accents, utilizing backdrop-blur for glassmorphism panels.
