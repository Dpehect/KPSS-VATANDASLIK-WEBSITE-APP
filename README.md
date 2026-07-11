# KPSS Citizenship (Vatandaşlık) Web Application - Enterprise-Grade Educational Platform

An advanced, high-performance educational platform designed for the KPSS Citizenship (Vatandaşlık) exam preparation. Engineered with a zero-latency user experience, modular asset mapping, and a robust offline-first fallback data architecture.

- **GitHub Repository**: https://github.com/Dpehect/KPSS-Vatandaslik-Web-App
- **Live Demo**: https://kpss-vatandaslik-web-app.vercel.app/

---

## Technical Highlights & Architecture

### 1. Preloaded Content Seeding Pipeline (Supabase JSON Bundling)
To support a massive load of **9,000 unique questions**, **9,000 active recall flashcards**, and **1,500 structured tests** without introducing client-side disk I/O bottlenecks or API request overhead:
- All study datasets are bundled into optimized JSON payloads representing distinct topics, questions, cards, and test entities.
- **Seeding Pipeline Optimization**: Mass database operations on free-tier Supabase instances often trigger SQL statement timeouts. To bypass this, the seeding utility (`scripts/seed-supabase-preloaded-content.mjs`) implements a throttled upsert algorithm with a batch size of 5 objects per transaction, guaranteeing error-free, atomic writes.

### 2. Tailwind CSS v4 Dataset Theme Synchronization
The application manages light and dark states dynamically via dataset attributes (`data-theme="dark"`). Because Tailwind CSS v4 defaults to media query-based theme queries, standard dark mode classes (e.g., `dark:bg-slate-950`) fail to sync with database-driven toggle states on some platforms.
- **Solution**: Extended the Tailwind v4 compilation path by adding a custom variant mapping in the global CSS:
  ```css
  @custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
  ```
- This forces compilation matching for the dataset attribute tree, correcting layout contrast regressions on white/light containers in dark mode.

### 3. Rotating Asset Allocation & Educational Content
- **Unique Asset Distribution**: Implemented an automated asset router mapping 15 custom educational legal/citizenship graphics to 90 sub-chapters. By applying a rotating mathematical offset based on topic and chapter indices, the rendering engine prevents identical assets from appearing consecutively.
- **Dynamic Context Engines**: Replaced generic question explanations with dynamically generated, context-rich legal exam tips tailored specifically to the active question concept (e.g., specific constitutional amendments, civil code rules, or administrative law procedures).

### 4. Type Safety & Local Fallbacks
- 100% strict TypeScript typing for all data structures (`Question`, `Flashcard`, `GeneratedQuestionTest`, `TopicSummary`).
- Safe local data fallback modules inside `@/data/` that automatically bootstrap the application if Supabase API rate limits or network connections fail.

---

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19 (Server & Client Components)
- **Language**: TypeScript (Strict Mode)
- **Database & Preloading**: Supabase Client (with SSR Support)
- **Styling**: Tailwind CSS v4 & Vanilla CSS variables
- **Icons & Animations**: Lucide React & Framer Motion

---

## Local Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Run Content Seeding
Populate the database with the preloaded 9,000+ questions, flashcards, and test structures:
```bash
node scripts/seed-supabase-preloaded-content.mjs
```

### 4. Start Development Server
```bash
npm run dev
```
