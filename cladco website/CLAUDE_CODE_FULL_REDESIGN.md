# CLADCO WEBSITE — FULL CLONE FROM DEMO

You have full access to my live Next.js project (deployed on Vercel via GitHub auto-deploy). I want you to REPLACE my entire homepage to exactly match the design demo I approved. Apply this safely using a feature branch.

═══════════════════════════════════════════════════════════
STEP 1 — CREATE A SAFETY BRANCH
═══════════════════════════════════════════════════════════

```bash
git status
```

If there are uncommitted changes, STOP and ask me what to do.

If clean:
```bash
git checkout main
git pull origin main
git checkout -b full-redesign-v2
```

═══════════════════════════════════════════════════════════
STEP 2 — APPLY 15 FILE CHANGES
═══════════════════════════════════════════════════════════

REPLACE these 13 existing files (overwrite their contents with the code in STEP 6):
1.  `app/page.tsx`
2.  `app/globals.css`
3.  `lib/translations.ts`
4.  `lib/motion.ts`
5.  `components/Hero.tsx`
6.  `components/BrandJourneyStrip.tsx`
7.  `components/WhatWeDo.tsx`
8.  `components/WhoItsFor.tsx`
9.  `components/WhyCladCo.tsx`
10. `components/ProductShowcase.tsx`
11. `components/Process.tsx`
12. `components/CTASection.tsx`
13. `components/ContactSection.tsx`
14. `components/Footer.tsx`

CREATE this 1 new file:
15. `components/StatsAndCharts.tsx`

═══════════════════════════════════════════════════════════
STEP 3 — DO NOT TOUCH (preserve as-is)
═══════════════════════════════════════════════════════════

Do not modify or delete ANY of these files for any reason:
- `lib/LangContext.tsx`
- `lib/constants.ts`
- `app/layout.tsx`
- `app/products/page.tsx`
- `components/Navbar.tsx`
- `components/FloatingWhatsApp.tsx`
- `components/QuoteModal.tsx`
- `components/HeroParticles.tsx`
- `components/BrandMotif.tsx`
- `components/ProductsPage.tsx` (if exists)
- Anything in `public/` (logos, fonts, videos)
- `package.json` and `tailwind.config.ts` (no new dependencies needed)

═══════════════════════════════════════════════════════════
STEP 4 — IMPORTANT NOTE ABOUT VIDEOS
═══════════════════════════════════════════════════════════

The replaced `BrandJourneyStrip.tsx` and `ProductShowcase.tsx` use CSS shapes
instead of videos. The original videos in `public/videos/` (tshirt.mp4, cup.mp4,
notebook.mp4, badge.mp4) are PRESERVED in the project — Ahmed will manually
re-integrate them into the new components after the clone is in place.

DO NOT delete or move any video files. Just don't reference them in the new components.

═══════════════════════════════════════════════════════════
STEP 5 — BUILD, COMMIT, PUSH
═══════════════════════════════════════════════════════════

After applying all 15 files:

1. Verify the build passes locally:
```bash
npm run build
```

If there are errors, fix them BEFORE committing. Do not commit broken code.
Common issues to expect and fix yourself:
- Missing import for a component → add it
- TypeScript error about missing translation key → check `lib/translations.ts`
- CSS class not found → check `app/globals.css` was fully replaced

2. Commit and push to GitHub:
```bash
git add app/page.tsx app/globals.css lib/translations.ts lib/motion.ts components/Hero.tsx components/StatsAndCharts.tsx components/BrandJourneyStrip.tsx components/WhatWeDo.tsx components/WhoItsFor.tsx components/WhyCladCo.tsx components/ProductShowcase.tsx components/Process.tsx components/CTASection.tsx components/ContactSection.tsx components/Footer.tsx
git commit -m "Full redesign v2 — match approved demo (videos to be re-added manually)"
git push -u origin full-redesign-v2
```

3. Vercel will automatically create a Preview Deployment for this branch. Get the preview URL and report it back to me. It usually takes 1-2 minutes.

═══════════════════════════════════════════════════════════
STEP 6 — REPORT BACK WITH
═══════════════════════════════════════════════════════════

1. ✅ Build passed (or list any warnings)
2. ✅ Branch pushed to GitHub
3. 🔗 The Vercel Preview URL (something like `https://cladco-git-full-redesign-v2-xxx.vercel.app`)
4. 📋 Short summary of what changed (no file dumps, just bullet points)

I will then test the preview URL. If everything looks good, I will tell you to merge to main. Do NOT merge to main yourself — wait for my approval.

═══════════════════════════════════════════════════════════
STEP 7 — THE 15 FILES (full contents below)
═══════════════════════════════════════════════════════════



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: app/page.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: app/page.tsx
// Order matches cladco-fullsite-demo.html exactly:
// Hero → StatsAndCharts → BrandJourneyStrip → WhatWeDo → WhoItsFor →
// WhyCladCo → ProductShowcase → Process → CTASection → ContactSection → Footer
// =============================================================================

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsAndCharts from "@/components/StatsAndCharts";
import BrandJourneyStrip from "@/components/BrandJourneyStrip";
import WhatWeDo from "@/components/WhatWeDo";
import WhoItsFor from "@/components/WhoItsFor";
import WhyCladCo from "@/components/WhyCladCo";
import ProductShowcase from "@/components/ProductShowcase";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <Hero />
        <StatsAndCharts />
        <BrandJourneyStrip />
        <WhatWeDo />
        <WhoItsFor />
        <WhyCladCo />
        <ProductShowcase />
        <Process />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: app/globals.css
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ═══════════════════════════════════════════════════════════
   CLADCO v2 — Full demo clone styles
   All CSS below extracted directly from cladco-fullsite-demo.html
   ═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   CLADCO DEMO v3 — with real logo + Laviossa font
   Cinematic hero · Apple-Pro / Rolex aesthetic · Light dominant
   ═══════════════════════════════════════════════════════════ */

@font-face {
  font-family: "Laviossa";
  src: url('/fonts/Laviossa-Medium.otf') format('opentype');
  font-weight: 500;
  font-display: swap;
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

:root {
  --black: #0C0C0B;
  --black-deep: #050505;
  --white: #F9F8F6;
  --white-warm: #F2F0EB;
  --champagne: #9A8B6E;
  --champagne-bright: #B8A687;
  --champagne-dark: #7a6d55;
  --champagne-glow: rgba(154, 139, 110, 0.4);
  --muted: #8A8780;
  --subtle: #5C5A55;
  --line: rgba(154, 139, 110, 0.18);
  --line-dark: rgba(255, 255, 255, 0.08);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

body {
  background: var(--white);
  color: var(--black);
  font-family: "Inter", system-ui, sans-serif;
  font-weight: 400;
  overflow-x: hidden;
}

/* Custom cursor disabled per user request — using native cursor */
.cursor, .cursor-dot { display: none !important; }

h1, h2, h3, h4 {
  font-family: "Laviossa", "Times New Roman", serif;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.05;
}

a { color: inherit; text-decoration: none; }

/* ─── 1. CUSTOM CURSOR ─────────────────────────────────── */
.cursor {
  position: fixed;
  top: 0; left: 0;
  width: 36px; height: 36px;
  border: 1.5px solid var(--champagne);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.35s cubic-bezier(0.16,1,0.3,1),
              height 0.35s cubic-bezier(0.16,1,0.3,1),
              background 0.35s ease,
              border-color 0.35s ease;
  mix-blend-mode: difference;
}
.cursor-dot {
  position: fixed;
  top: 0; left: 0;
  width: 4px; height: 4px;
  background: var(--champagne);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
}
.cursor.is-hover {
  width: 72px; height: 72px;
  background: rgba(154, 139, 110, 0.12);
}

/* ─── 2. SCROLL PROGRESS ───────────────────────────────── */
.scroll-progress {
  position: fixed;
  top: 0; left: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--champagne) 30%, var(--champagne-bright));
  z-index: 9998;
  transform-origin: left;
  transform: scaleX(0);
  box-shadow: 0 0 16px var(--champagne-glow);
}

/* ─── 3. NAVBAR ────────────────────────────────────────── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
}
nav.over-light {
  background: rgba(249, 248, 246, 0);
}
nav.scrolled {
  background: rgba(249, 248, 246, 0.85);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid var(--line);
  padding: 1rem 2.5rem;
}
nav.scrolled.over-dark {
  background: rgba(12, 12, 11, 0.85);
  border-bottom: 1px solid var(--line-dark);
}

.nav-logo {
  height: 32px;
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;
}
.nav-logo img { height: 100%; width: auto; object-fit: contain; }
.nav-logo .logo-light { display: none; }
nav.over-dark .nav-logo .logo-light { display: block; }
nav.over-dark .nav-logo .logo-dark { display: none; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.nav-link {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--subtle);
  transition: color 0.25s ease;
  position: relative;
}
nav.over-dark .nav-link { color: rgba(249,248,246,0.7); }
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px; left: 0;
  width: 0; height: 1px;
  background: var(--champagne);
  transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
}
.nav-link:hover { color: var(--champagne); }
.nav-link:hover::after { width: 100%; }

.nav-cta {
  padding: 0.65rem 1.4rem;
  background: var(--champagne);
  color: var(--white);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
              box-shadow 0.4s ease;
}
.nav-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--champagne-dark);
  transform: translateY(101%);
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
  z-index: -1;
}
.nav-cta:hover::before { transform: translateY(0); }
.nav-cta:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(154,139,110,0.35); }

/* ─── 4. HERO — CINEMATIC LOGO INTRO ───────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 2000px;
}

/* Subtle ambient gold glow — very soft */
.hero-ambient {
  position: absolute;
  top: 50%; left: 50%;
  width: 900px; height: 900px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(154,139,110,0.05) 0%, rgba(154,139,110,0.015) 35%, transparent 65%);
  pointer-events: none;
  z-index: 1;
  animation: ambientPulse 10s ease-in-out infinite;
}
@keyframes ambientPulse {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.06); }
}

/* Mouse-tracking glow — much softer */
.hero-glow {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(154,139,110,0.06) 0%, transparent 60%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1),
              opacity 0.4s ease;
  filter: blur(25px);
  z-index: 2;
  opacity: 0;
}
.hero:hover .hero-glow { opacity: 1; }

/* Subtle 3D icon watermark — barely visible */
.hero-watermark {
  position: absolute;
  top: 50%; left: 50%;
  width: 700px; height: 700px;
  transform: translate(-50%, -50%);
  opacity: 0.025;
  pointer-events: none;
  z-index: 1;
  background-image: url("/icon-3d.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(3px);
  animation: watermarkRotate 90s linear infinite;
}
@keyframes watermarkRotate {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Noise texture for premium feel */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 3;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Push everything down so headline appears below the lifted logo */
  padding-top: 38vh;
}
@media (max-width: 768px) {
  .hero-content { padding-top: 32vh; }
}

/* ===== CINEMATIC LOGO INTRO — Phase 1: appears at vertical center of viewport ===== */
.hero-logo-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 720px;
  margin: 0;
  padding: 0 2rem;
  opacity: 0;
  filter: blur(60px);
  transform: translate(-50%, -50%) scale(0.3) translateZ(-800px);
  animation:
    logoCinematicIn 2.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards,
    logoLiftUp     1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.7s forwards;
  z-index: 11;
}
.hero-logo-wrap img {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 0 40px rgba(154,139,110,0.15));
}

/* Phase 1 (0 → 2.4s): blur cinematic in at viewport center */
@keyframes logoCinematicIn {
  0% {
    opacity: 0;
    filter: blur(60px);
    transform: translate(-50%, -50%) scale(0.3) translateZ(-800px);
  }
  40% {
    opacity: 0.4;
    filter: blur(20px);
  }
  70% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-50%, -50%) scale(1.05) translateZ(0);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate(-50%, -50%) scale(1) translateZ(0);
  }
}

/* Phase 2 (2.7 → 3.9s): logo lifts up to make room for headline */
@keyframes logoLiftUp {
  0%   { top: 50%; transform: translate(-50%, -50%) scale(1); }
  100% { top: 22%; transform: translate(-50%, -50%) scale(0.85); }
}

/* Phase 3: settled position with subtle breath */
.hero-logo-wrap.settled {
  animation: logoBreath 8s ease-in-out infinite;
}
@keyframes logoBreath {
  0%, 100% { top: 22%; transform: translate(-50%, -50%) scale(0.85); }
  50%      { top: 22%; transform: translate(-50%, calc(-50% - 4px)) scale(0.86); }
}

/* HEADLINE — appears AFTER logo lifts up to top */
.hero-headline {
  font-size: clamp(3.5rem, 9vw, 8rem);
  color: var(--white);
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeUpBlur 1.2s cubic-bezier(0.16,1,0.3,1) 4s forwards;
}
.hero-headline .accent {
  color: var(--champagne);
  font-style: italic;
}
.hero-headline .line {
  display: block;
  overflow: hidden;
  position: relative;
}
.hero-headline .line-inner {
  display: inline-block;
  transform: translateY(105%);
  animation: lineUp 1s cubic-bezier(0.16,1,0.3,1) forwards;
}
.hero-headline .line-1 .line-inner { animation-delay: 4s; }
.hero-headline .line-2 .line-inner { animation-delay: 4.25s; }
@keyframes lineUp {
  to { transform: translateY(0); }
}

/* SUBLINE */
.hero-subline {
  font-size: 1.05rem;
  color: rgba(249,248,246,0.55);
  max-width: 520px;
  margin: 0 auto 3rem;
  line-height: 1.7;
  font-weight: 300;
  letter-spacing: 0.005em;
  opacity: 0;
  animation: fadeUpBlur 1s cubic-bezier(0.16,1,0.3,1) 4.7s forwards;
}

/* CTAS */
.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUpBlur 1s cubic-bezier(0.16,1,0.3,1) 5s forwards;
}

.btn {
  position: relative;
  padding: 1.05rem 2.4rem;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  overflow: hidden;
  isolation: isolate;
  border: none;
}
.btn-primary {
  background: var(--champagne);
  color: var(--white);
}
.btn-primary::before {
  content: '';
  position: absolute;
  width: 0; height: 0;
  border-radius: 50%;
  background: var(--champagne-bright);
  transition: width 0.6s cubic-bezier(0.16,1,0.3,1),
              height 0.6s cubic-bezier(0.16,1,0.3,1);
  z-index: -1;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.btn-primary:hover::before { width: 280%; height: 280%; }

.btn-ghost {
  background: transparent;
  color: var(--champagne);
  border: 1px solid var(--champagne);
}
.btn-ghost::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--champagne);
  transform: translateY(101%);
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  z-index: -1;
}
.btn-ghost:hover { color: var(--white); }
.btn-ghost:hover::before { transform: translateY(0); }

.hero-trust {
  margin-top: 4rem;
  font-size: 0.65rem;
  color: rgba(249,248,246,0.35);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0;
  animation: fadeUpBlur 1s ease-out 5.4s forwards;
}

@keyframes fadeUpBlur {
  from { opacity: 0; transform: translateY(20px); filter: blur(8px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

/* SCROLL HINT */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  opacity: 0;
  animation: fadeUpBlur 1s ease-out 5.7s forwards;
  z-index: 10;
}
.scroll-hint span {
  font-size: 0.6rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(249,248,246,0.4);
  font-weight: 500;
}
.scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, transparent, rgba(154,139,110,0.6));
  position: relative;
  overflow: hidden;
}
.scroll-line::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 50%;
  background: linear-gradient(to bottom, transparent, var(--champagne));
  animation: scrollDown 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
@keyframes scrollDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}

/* ─── 5. CLEAN HERO→LIGHT TRANSITION ───────────────────── */
/* Hero fades to black at bottom (deepens for end-of-section feel) */
.hero-fade-out {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 200px;
  background: linear-gradient(to bottom, transparent, var(--black-deep));
  pointer-events: none;
  z-index: 4;
}

/* Premium hairline divider with gold accent — separates dark from light */
.section-divider {
  background: var(--black-deep);
  padding: 0;
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.section-divider::before {
  content: '';
  position: absolute;
  left: 0; right: 0;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--champagne) 50%, transparent);
  opacity: 0.5;
}
.divider-mark {
  width: 36px; height: 36px;
  opacity: 0.3;
  background-image: url("/icon-3d.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 2;
}
.divider-mark::before, .divider-mark::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(154,139,110,0.4));
}
.divider-mark::before { right: calc(100% + 20px); transform: translateY(-50%); }
.divider-mark::after {
  left: calc(100% + 20px);
  transform: translateY(-50%);
  background: linear-gradient(-90deg, transparent, rgba(154,139,110,0.4));
}

/* ─── 6. STATS SECTION (credibility first) ─────────────── */
.stats {
  padding: 6rem 2rem 8rem;
  background: var(--white);
  position: relative;
}
.stats-container {
  max-width: 1200px;
  margin: 0 auto;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.stat {
  padding: 3rem 2rem;
  border-right: 1px solid var(--line);
  position: relative;
  cursor: pointer;
  transition: background 0.5s ease;
}
.stat:last-child { border-right: none; }
.stat::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(154,139,110,0.05));
  opacity: 0;
  transition: opacity 0.5s ease;
}
.stat:hover::before { opacity: 1; }
.stat-num {
  font-family: "Laviossa", serif;
  font-size: clamp(3.5rem, 6vw, 5rem);
  color: var(--black);
  line-height: 1;
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
  gap: 0.1rem;
  font-weight: 500;
}
.stat-num .suffix {
  font-size: 0.5em;
  color: var(--champagne);
}
.stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--subtle);
  font-weight: 600;
  margin-bottom: 0.4rem;
}
.stat-desc {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.5;
  font-weight: 300;
}

@media (max-width: 900px) {
  .stat { border-right: none; border-bottom: 1px solid var(--line); }
  .stat:last-child { border-bottom: none; }
}

/* ─── 7B. CHART SECTION (Journey + Quality) ────────────── */
.chart-section {
  padding: 8rem 2rem;
  background: var(--black);
  color: var(--white);
  position: relative;
  overflow: hidden;
}
.chart-section::before {
  content: '';
  position: absolute;
  top: 0; left: 50%;
  width: 1px; height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(154,139,110,0.08), transparent);
  pointer-events: none;
}
.chart-container {
  max-width: 1280px;
  margin: 0 auto;
}
.chart-section .section-heading { color: var(--white); }
.chart-section .section-sub { color: rgba(249,248,246,0.55); }

/* Tab switcher */
.chart-tabs {
  display: inline-flex;
  border: 1px solid var(--line);
  margin-bottom: 4rem;
  background: rgba(154,139,110,0.03);
  position: relative;
  isolation: isolate;
}
.chart-tab {
  padding: 0.85rem 1.8rem;
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(249,248,246,0.45);
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: "Inter", sans-serif;
  transition: color 0.4s ease;
  position: relative;
  z-index: 1;
}
.chart-tab.active { color: var(--white); }
.chart-tab:hover { color: rgba(249,248,246,0.85); }
.chart-tab-indicator {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  background: var(--champagne);
  z-index: 0;
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1),
              width 0.5s cubic-bezier(0.16,1,0.3,1);
}

.chart-panel {
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1);
}
.chart-panel.active {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

/* ── JOURNEY CHART (Day 1 → Day 25) — single animation, no continuous pulse ── */
.journey-chart {
  position: relative;
  padding: 4rem 0 2rem;
}
.journey-svg {
  width: 100%;
  height: auto;
  overflow: visible;
}
.journey-axis-line {
  stroke: rgba(154,139,110,0.18);
  stroke-width: 1;
  stroke-dasharray: 2 4;
}
.journey-progress-line {
  stroke: var(--champagne);
  stroke-width: 2.5;
  fill: none;
  stroke-linecap: round;
  filter: drop-shadow(0 0 6px rgba(154,139,110,0.3));
}
.journey-area {
  fill: url(#journeyGradient);
  opacity: 0;
  transition: opacity 1.2s ease 1s;
}
.chart-panel.active .journey-area { opacity: 1; }

.journey-node {
  fill: var(--black);
  stroke: var(--champagne);
  stroke-width: 2;
}
.journey-node-final {
  fill: var(--champagne);
  stroke: var(--champagne);
}

.journey-label {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 14px;
  fill: var(--champagne);
  font-weight: 500;
}
.journey-day {
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 600;
  fill: rgba(249,248,246,0.4);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.journey-desc {
  font-family: "Inter", sans-serif;
  font-size: 11px;
  fill: rgba(249,248,246,0.55);
  font-weight: 300;
}

/* Disclaimer note below journey */
.journey-disclaimer {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.78rem;
  color: rgba(249,248,246,0.45);
  font-weight: 300;
  letter-spacing: 0.02em;
  font-style: italic;
}
.journey-disclaimer .icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid var(--champagne);
  border-radius: 50%;
  text-align: center;
  line-height: 12px;
  font-size: 9px;
  font-style: normal;
  color: var(--champagne);
  margin-right: 0.5rem;
  vertical-align: middle;
  font-weight: 600;
}

/* ── QUALITY CHART (Radar) ── */
.quality-chart {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 2rem 0;
}
@media (max-width: 900px) {
  .quality-chart { grid-template-columns: 1fr; gap: 2rem; }
}

.radar-wrap {
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  aspect-ratio: 1;
}
.radar-svg {
  width: 100%; height: 100%;
  overflow: visible;
}
.radar-grid {
  fill: none;
  stroke: rgba(154,139,110,0.12);
  stroke-width: 1;
}
.radar-grid-active {
  stroke: rgba(154,139,110,0.25);
}
.radar-axis {
  stroke: rgba(154,139,110,0.15);
  stroke-width: 1;
}
.radar-shape {
  fill: rgba(154,139,110,0.18);
  stroke: var(--champagne);
  stroke-width: 2;
  stroke-linejoin: round;
  filter: drop-shadow(0 0 12px rgba(154,139,110,0.3));
  opacity: 0;
  transform: scale(0);
  transform-origin: center;
  transform-box: fill-box;
  transition: opacity 0.8s ease 0.3s,
              transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s;
}
.chart-panel.active .radar-shape {
  opacity: 1;
  transform: scale(1);
}
.radar-point {
  fill: var(--champagne);
  filter: drop-shadow(0 0 6px var(--champagne));
}
.radar-label {
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 600;
  fill: rgba(249,248,246,0.85);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.radar-value {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 13px;
  fill: var(--champagne);
}

.quality-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.quality-item {
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--line-dark);
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.2rem;
  align-items: center;
  cursor: pointer;
  transition: padding 0.4s ease;
}
.quality-item:hover { padding-left: 0.5rem; }
.quality-item:last-child { border-bottom: none; }
.quality-item-num {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 1.4rem;
  color: var(--champagne);
}
.quality-item-content h5 {
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 0.25rem;
}
.quality-item-content p {
  font-size: 0.8rem;
  color: rgba(249,248,246,0.5);
  font-weight: 300;
  line-height: 1.5;
}
.quality-item-bar {
  width: 80px;
  height: 4px;
  background: rgba(154,139,110,0.15);
  position: relative;
  overflow: hidden;
}
.quality-item-bar::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  background: var(--champagne);
  width: var(--bar-width, 0%);
  transition: width 1.5s cubic-bezier(0.16,1,0.3,1) 0.5s;
}
.chart-panel.active .quality-item-bar::after {
  width: var(--bar-width, 0%);
}

/* ─── 7. SECTION BASE ──────────────────────────────────── */
.section {
  padding: 8rem 2rem;
  position: relative;
}
.section-light { background: var(--white); }
.section-cream { background: var(--white-warm); }
.section-dark { background: var(--black); color: var(--white); }

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-label {
  font-size: 0.7rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--champagne);
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.section-label::before {
  content: '';
  width: 36px; height: 1px;
  background: var(--champagne);
}

.section-heading {
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  margin-bottom: 1.5rem;
  max-width: 900px;
  letter-spacing: -0.025em;
  color: var(--black);
}
.section-dark .section-heading { color: var(--white); }

.section-heading .italic { font-style: italic; color: var(--champagne); }

.section-sub {
  font-size: 1.1rem;
  color: var(--subtle);
  max-width: 620px;
  margin-bottom: 4rem;
  line-height: 1.7;
  font-weight: 300;
}
.section-dark .section-sub { color: rgba(249,248,246,0.6); }

/* ─── 8. SERVICES (3 cards w/ animated borders) ────────── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
.service-card {
  position: relative;
  padding: 3rem 2.5rem;
  background: var(--white);
  border: 1px solid var(--line);
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1),
              border-color 0.5s ease;
  overflow: hidden;
  isolation: isolate;
}
.service-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--champagne), transparent);
  transform: translateX(-100%);
  transition: transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.service-card:hover { 
  transform: translateY(-8px); 
  border-color: var(--champagne);
}
.service-card:hover::after { transform: translateX(100%); }

.service-num {
  font-family: "Laviossa", serif;
  font-size: 2.5rem;
  color: var(--champagne);
  line-height: 1;
  margin-bottom: 2rem;
  display: block;
  font-weight: 500;
  font-style: italic;
}
.service-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  color: var(--black);
}
.service-card p {
  font-size: 0.95rem;
  color: var(--subtle);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 300;
}
.service-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.service-tag {
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  border: 1px solid var(--line);
  color: var(--subtle);
  font-weight: 500;
  transition: all 0.3s ease;
}
.service-card:hover .service-tag {
  border-color: var(--champagne);
  color: var(--champagne);
}

/* ─── 9. AUDIENCE GRID (cream bg) ──────────────────────── */
.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0;
  border: 1px solid var(--line);
}
.audience-card {
  padding: 2.8rem 2rem;
  background: var(--white-warm);
  position: relative;
  cursor: pointer;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  transition: background 0.5s ease;
  overflow: hidden;
}
.audience-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(154,139,110,0.06) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.5s ease;
}
.audience-card:hover { background: var(--white); }
.audience-card:hover::before { opacity: 1; }
.audience-card:hover .audience-arrow { transform: translate(8px, -8px); opacity: 1; color: var(--champagne); }

.audience-num {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 0.95rem;
  color: var(--champagne);
  margin-bottom: 1.2rem;
  display: block;
  font-weight: 500;
}
.audience-card h4 {
  font-size: 1.5rem;
  color: var(--black);
  margin-bottom: 0.6rem;
  position: relative;
  z-index: 1;
}
.audience-card p {
  font-size: 0.85rem;
  color: var(--subtle);
  position: relative;
  z-index: 1;
  line-height: 1.6;
  font-weight: 300;
}
.audience-arrow {
  position: absolute;
  top: 1.8rem; right: 1.8rem;
  font-size: 1.3rem;
  color: var(--subtle);
  opacity: 0.4;
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
}

/* ─── 10. PRODUCTS (3D tilt + glow) ────────────────────── */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  perspective: 1500px;
}
.product-card {
  position: relative;
  aspect-ratio: 3/4;
  background: linear-gradient(160deg, var(--black) 0%, #1a1a1a 60%, var(--black) 100%);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1),
              box-shadow 0.5s ease;
  transform-style: preserve-3d;
  will-change: transform;
}
.product-card:hover {
  box-shadow: 0 40px 90px rgba(154,139,110,0.3),
              0 15px 40px rgba(0,0,0,0.5);
}
.product-inner {
  position: absolute;
  inset: 0;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateZ(40px);
}
.product-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translateZ(80px);
}
.product-shape {
  width: 65%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, var(--champagne) 0%, var(--champagne-dark) 100%);
  position: relative;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
}
.product-card:hover .product-shape {
  transform: translateY(-10px) scale(1.06);
}
.shape-tshirt { clip-path: polygon(20% 15%, 35% 5%, 65% 5%, 80% 15%, 95% 25%, 85% 35%, 80% 35%, 80% 100%, 20% 100%, 20% 35%, 15% 35%, 5% 25%); }
.shape-cup { clip-path: polygon(15% 10%, 85% 10%, 80% 95%, 20% 95%); border-radius: 0 0 30% 30%; }
.shape-notebook { clip-path: polygon(10% 5%, 90% 5%, 90% 95%, 10% 95%); }
.shape-badge { clip-path: polygon(10% 0%, 90% 0%, 100% 30%, 100% 70%, 90% 100%, 10% 100%, 0% 70%, 0% 30%); }

.product-label {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 0.85rem;
  color: var(--champagne);
  font-weight: 500;
  margin-bottom: 0.6rem;
}
.product-card h4 {
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.product-card p {
  font-size: 0.82rem;
  color: rgba(249,248,246,0.5);
  line-height: 1.55;
  font-weight: 300;
}

.product-glow {
  position: absolute;
  width: 240px; height: 240px;
  background: radial-gradient(circle, var(--champagne-glow) 0%, transparent 60%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  filter: blur(30px);
  transform: translate(-50%, -50%);
}
.product-card:hover .product-glow { opacity: 0.8; }

/* ─── 11. PROCESS (animated path, dark) ────────────────── */
.process-wrapper {
  position: relative;
  padding-top: 2rem;
}
.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}
.process-card {
  text-align: left;
  position: relative;
  cursor: pointer;
}
.process-number {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 4.5rem;
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--champagne);
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: all 0.6s cubic-bezier(0.16,1,0.3,1);
  line-height: 1;
}
.process-card:hover .process-number {
  color: var(--champagne);
  -webkit-text-stroke: 1.5px transparent;
  transform: translateX(8px);
}
.process-card h4 {
  color: var(--white);
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
}
.process-card p {
  font-size: 0.88rem;
  color: rgba(249,248,246,0.55);
  line-height: 1.65;
  font-weight: 300;
}
.process-line {
  position: absolute;
  top: 4.3rem;
  left: 0; right: 0;
  height: 2px;
  z-index: 1;
}
.process-line svg {
  width: 100%; height: 60px;
  overflow: visible;
}
.process-line path {
  stroke: var(--champagne);
  stroke-width: 1;
  fill: none;
  stroke-dasharray: 6 8;
  stroke-dashoffset: 1500;
  transition: stroke-dashoffset 2.5s cubic-bezier(0.16,1,0.3,1);
  opacity: 0.5;
}
.process-wrapper.in-view .process-line path {
  stroke-dashoffset: 0;
}
@media (max-width: 900px) { .process-line { display: none; } }

/* ─── 12. CTA SECTION (dark dramatic) ──────────────────── */
.cta-section {
  background: var(--black);
  position: relative;
  overflow: hidden;
  padding: 10rem 2rem;
}
.cta-section::before {
  content: 'CLADCO';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Laviossa", serif;
  font-size: clamp(8rem, 24vw, 24rem);
  font-weight: 500;
  color: rgba(154,139,110,0.04);
  white-space: nowrap;
  letter-spacing: -0.05em;
  pointer-events: none;
  z-index: 0;
}
.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
}
.cta-section h2 {
  color: var(--white);
  font-size: clamp(2.8rem, 6.5vw, 5.5rem);
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}
.cta-section h2 .accent { color: var(--champagne); font-style: italic; }
.cta-section p {
  color: rgba(249,248,246,0.6);
  margin-bottom: 3rem;
  font-size: 1.1rem;
  font-weight: 300;
}

/* ─── 12B. BRAND JOURNEY STRIP (3-card horizontal) ─────── */
.brand-journey-section {
  padding: 6rem 2rem;
  background: var(--white-warm);
  position: relative;
}
.brand-journey-grid {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
@media (max-width: 900px) {
  .brand-journey-grid { grid-template-columns: 1fr; }
}
.bj-card {
  position: relative;
  aspect-ratio: 4/5;
  background: linear-gradient(160deg, #1a1a1a 0%, var(--black) 100%);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
  border: 1px solid var(--line);
}
.bj-card:hover { transform: translateY(-6px); }
.bj-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.85));
  pointer-events: none;
  z-index: 1;
}
.bj-card-mock {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
}
.bj-card:hover .bj-card-mock { transform: scale(1.05); }
.bj-shape {
  width: 50%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, var(--champagne) 0%, var(--champagne-dark) 100%);
}
.bj-shape-tshirt { clip-path: polygon(20% 15%, 35% 5%, 65% 5%, 80% 15%, 95% 25%, 85% 35%, 80% 35%, 80% 100%, 20% 100%, 20% 35%, 15% 35%, 5% 25%); }
.bj-shape-cup    { clip-path: polygon(15% 10%, 85% 10%, 80% 95%, 20% 95%); border-radius: 0 0 30% 30%; }
.bj-shape-book   { clip-path: polygon(10% 5%, 90% 5%, 90% 95%, 10% 95%); }
.bj-card-content {
  position: absolute;
  bottom: 0;
  padding: 2rem;
  z-index: 2;
}
.bj-card-label {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 0.85rem;
  color: var(--champagne);
  margin-bottom: 0.4rem;
}
.bj-card-title {
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.bj-card-desc {
  font-size: 0.85rem;
  color: rgba(249,248,246,0.6);
  line-height: 1.5;
  font-weight: 300;
}

/* ─── 12C. WHY CLADCO (sticky column + reasons) ────────── */
.why-section {
  padding: 8rem 2rem;
  background: var(--white);
  position: relative;
}
.why-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 6rem;
}
@media (max-width: 900px) {
  .why-container { grid-template-columns: 1fr; gap: 3rem; }
}
.why-sticky {
  position: sticky;
  top: 8rem;
  align-self: start;
}
.why-sticky h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}
.why-sticky h2 .italic {
  color: var(--champagne);
  font-style: italic;
}
.why-sticky p {
  font-size: 1rem;
  color: var(--subtle);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  font-weight: 300;
}
.why-stat {
  padding-top: 2rem;
  border-top: 1px solid var(--line);
}
.why-stat-num {
  font-family: "Laviossa", serif;
  font-size: 4rem;
  color: var(--champagne);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.why-stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--subtle);
  font-weight: 600;
}
.why-reasons {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.why-reason {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--line);
  cursor: default;
  transition: padding-left 0.4s ease;
}
.why-reason:hover { padding-left: 0.5rem; }
.why-reason:last-child { border-bottom: none; }
.why-reason-num {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 1.6rem;
  color: var(--champagne);
  font-weight: 500;
}
.why-reason h4 {
  font-size: 1.4rem;
  color: var(--black);
  margin-bottom: 0.5rem;
}
.why-reason p {
  font-size: 0.95rem;
  color: var(--subtle);
  line-height: 1.7;
  font-weight: 300;
}

/* ─── 12D. CONTACT SECTION (3-column) ──────────────────── */
.contact-section {
  padding: 6rem 2rem;
  background: var(--white);
  border-top: 1px solid var(--line);
}
.contact-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
}
.contact-card {
  text-align: left;
  cursor: default;
}
.contact-icon {
  width: 48px;
  height: 48px;
  border: 1.5px solid var(--champagne);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--champagne);
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
}
.contact-card:hover .contact-icon {
  background: var(--champagne);
  color: var(--white);
  transform: rotate(-8deg) scale(1.05);
}
.contact-label {
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--champagne);
  font-weight: 600;
  margin-bottom: 0.6rem;
}
.contact-value {
  font-family: "Laviossa", serif;
  font-size: 1.4rem;
  color: var(--black);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.contact-sub {
  font-size: 0.85rem;
  color: var(--subtle);
  font-weight: 300;
}


footer {
  background: var(--black-deep);
  color: var(--white);
  padding: 6rem 2rem 3rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--line-dark);
}

.footer-grid {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}
@media (max-width: 1000px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
}

.footer-brand img {
  height: 36px;
  margin-bottom: 1.5rem;
  width: auto;
  object-fit: contain;
}
.footer-tagline {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 1.1rem;
  color: var(--champagne);
  margin-bottom: 1rem;
}
.footer-desc {
  font-size: 0.85rem;
  color: rgba(249,248,246,0.5);
  line-height: 1.7;
  font-weight: 300;
  max-width: 280px;
}

.footer-col h5 {
  font-family: "Inter", sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--champagne);
  margin-bottom: 1.5rem;
}
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 0.7rem; }
.footer-col a {
  font-size: 0.88rem;
  color: rgba(249,248,246,0.6);
  font-weight: 300;
  transition: color 0.3s ease, padding-left 0.3s ease;
}
.footer-col a:hover {
  color: var(--champagne);
  padding-left: 4px;
}

/* ── REAL JEDDAH MAP (image-based) ── */
.jeddah-map-wrap {
  position: relative;
  background: linear-gradient(165deg, #060606 0%, #0a0d11 100%);
  border: 1px solid var(--line-dark);
  padding: 1.2rem;
  overflow: hidden;
  aspect-ratio: 1 / 1.05;
  display: flex;
  flex-direction: column;
}

/* Subtle grid overlay (blueprint feel) */
.jeddah-map-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(154,139,110,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(154,139,110,0.04) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  z-index: 1;
}

/* Soft vignette so center pops */
.jeddah-map-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%);
  pointer-events: none;
  z-index: 3;
}

.jeddah-map-img-wrap {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.jeddah-map-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.65;
  filter: drop-shadow(0 0 8px rgba(154,139,110,0.15));
  transition: opacity 0.5s ease, filter 0.5s ease;
}
.jeddah-map-wrap:hover .jeddah-map-img {
  opacity: 0.85;
  filter: drop-shadow(0 0 12px rgba(154,139,110,0.3));
}

/* Pin overlay positioned over the map (Tahlia / Al-Hamra area) */
.jeddah-map-pin {
  position: absolute;
  top: 50%;
  left: 30%;
  width: 20px;
  height: 20px;
  z-index: 4;
  transform: translate(-50%, -50%);
}
.jeddah-map-pin::before,
.jeddah-map-pin::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  border-radius: 50%;
  background: var(--champagne);
  transform: translate(-50%, -50%);
}
.jeddah-map-pin::before {
  width: 8px; height: 8px;
  box-shadow: 0 0 12px var(--champagne);
}
.jeddah-map-pin::after {
  width: 20px; height: 20px;
  background: transparent;
  border: 1.5px solid var(--champagne);
  animation: pinRing 2.4s cubic-bezier(0.16,1,0.3,1) infinite;
}
@keyframes pinRing {
  0% { width: 8px; height: 8px; opacity: 0.7; }
  100% { width: 60px; height: 60px; opacity: 0; }
}

/* Map info overlay (top-left + bottom labels) */
.jeddah-map-info-overlay {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 5;
  pointer-events: none;
}
.jeddah-map-title {
  font-family: "Laviossa", serif;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--champagne);
  margin-bottom: 0.2rem;
  line-height: 1;
}
.jeddah-map-coords {
  font-family: "Inter", sans-serif;
  font-size: 0.6rem;
  color: rgba(249,248,246,0.5);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;
}

/* Compass rose top-right */
.jeddah-map-compass {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 32px;
  height: 32px;
  z-index: 5;
  pointer-events: none;
}
.jeddah-map-compass svg {
  width: 100%; height: 100%;
}

/* Scale bar bottom-left */
.jeddah-map-scale {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  z-index: 5;
  pointer-events: none;
  font-family: "Inter", sans-serif;
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  color: rgba(249,248,246,0.5);
}
.jeddah-map-scale-bar {
  width: 50px;
  height: 1px;
  background: rgba(154,139,110,0.5);
  margin-top: 4px;
  position: relative;
}
.jeddah-map-scale-bar::before,
.jeddah-map-scale-bar::after {
  content: '';
  position: absolute;
  width: 1px; height: 6px;
  background: rgba(154,139,110,0.5);
  top: -2.5px;
}
.jeddah-map-scale-bar::before { left: 0; }
.jeddah-map-scale-bar::after { right: 0; }

.footer-map-info {
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: rgba(249,248,246,0.5);
  font-weight: 300;
  padding-top: 1rem;
  border-top: 1px solid var(--line-dark);
}
.footer-map-info strong {
  color: var(--champagne);
  font-weight: 600;
  letter-spacing: 0.05em;
}

.footer-bottom {
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid var(--line-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-bottom p {
  font-size: 0.75rem;
  color: rgba(249,248,246,0.4);
  letter-spacing: 0.05em;
}

/* ─── REVEAL ON SCROLL ─────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  filter: blur(6px);
  transition: opacity 1s cubic-bezier(0.16,1,0.3,1),
              transform 1s cubic-bezier(0.16,1,0.3,1),
              filter 0.8s ease;
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.reveal-stagger > * {
  opacity: 0;
  transform: translateY(40px);
  filter: blur(6px);
  transition: opacity 1s cubic-bezier(0.16,1,0.3,1),
              transform 1s cubic-bezier(0.16,1,0.3,1),
              filter 0.8s ease;
}
.reveal-stagger.in-view > * {
  opacity: 1; transform: translateY(0); filter: blur(0);
}
.reveal-stagger.in-view > *:nth-child(1) { transition-delay: 0.05s; }
.reveal-stagger.in-view > *:nth-child(2) { transition-delay: 0.18s; }
.reveal-stagger.in-view > *:nth-child(3) { transition-delay: 0.31s; }
.reveal-stagger.in-view > *:nth-child(4) { transition-delay: 0.44s; }
.reveal-stagger.in-view > *:nth-child(5) { transition-delay: 0.57s; }
.reveal-stagger.in-view > *:nth-child(6) { transition-delay: 0.7s; }

/* ─── FLOATING WHATSAPP ────────────────────────────────── */
.float-wa {
  position: fixed;
  bottom: 2rem; right: 2rem;
  width: 56px; height: 56px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90;
  box-shadow: 0 12px 40px rgba(37,211,102,0.4);
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
  opacity: 0;
  animation: fadeUpBlur 0.8s ease 4.5s forwards;
}
.float-wa::before {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid #25d366;
  animation: waPulse 2s ease-out infinite;
  opacity: 0;
}
@keyframes waPulse {
  0% { transform: scale(0.9); opacity: 0.7; }
  100% { transform: scale(1.5); opacity: 0; }
}
.float-wa:hover { transform: scale(1.1); }
.float-wa svg { fill: white; }

/* MOBILE */
@media (max-width: 768px) {
  .section { padding: 5rem 1.5rem; }
  .stats { padding: 4rem 1.5rem 5rem; }
  nav { padding: 1rem 1.2rem; }
  .nav-links { display: none; }
  .hero-headline { font-size: clamp(2.8rem, 12vw, 5rem); }
  .hero-logo-wrap { max-width: 320px; margin-bottom: 2.5rem; }
  .scroll-hint { display: none; }
}


/* ═══════════════════════════════════════════════════════════
   Tailwind layer overrides (kept minimal — most styling above)
   ═══════════════════════════════════════════════════════════ */
@layer base {
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
  * { box-sizing: border-box; }
}

@layer components {
  .btn-primary {
    background-color: var(--champagne);
    color: var(--white);
    padding: 1.05rem 2.4rem;
    font-size: 0.7rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    overflow: hidden;
    isolation: isolate;
    border: none;
    position: relative;
  }
  .btn-primary::before {
    content: '';
    position: absolute;
    width: 0; height: 0;
    border-radius: 50%;
    background: var(--champagne-bright);
    transition: width 0.6s cubic-bezier(0.16,1,0.3,1),
                height 0.6s cubic-bezier(0.16,1,0.3,1);
    z-index: -1;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn-primary:hover::before { width: 280%; height: 280%; }

  .btn-outline {
    background: transparent;
    color: var(--champagne);
    border: 1px solid var(--champagne);
    padding: 1.05rem 2.4rem;
    font-size: 0.7rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    overflow: hidden;
    isolation: isolate;
    position: relative;
  }
  .btn-outline::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--champagne);
    transform: translateY(101%);
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
    z-index: -1;
  }
  .btn-outline:hover { color: var(--white); }
  .btn-outline:hover::before { transform: translateY(0); }
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: lib/translations.ts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```ts
// =============================================================================
// FILE: lib/translations.ts
// CHANGES vs old file:
//   - APPENDED `stats` and `charts` keys to BOTH t.en and t.ar
//   - All existing keys preserved as-is
// =============================================================================

export type Lang = "en" | "ar";

export const t = {
  en: {
    nav: { whatsapp: "WhatsApp Us" },
    hero: {
      badge: "Smart Premium",
      headline1: "Show Up",
      headline2: "Better.",
      sub: "Premium uniforms and branded merchandise for every business that wants to look the part.",
      cta1: "Contact Us",
      cta2: "Get a Free Quote",
      trust: "Trusted by restaurants · cafes · corporations · schools · events",
      scroll: "Scroll",
    },
    services: {
      label: "What We Do",
      heading: "Everything your team needs to look the part",
      items: [
        { title: "Custom Uniforms", description: "Tailored workwear that reflects your brand identity. From fabric selection to final stitch — every detail crafted for a sharp, consistent look.", tags: ["Embroidery", "Screen Print", "Custom Fit"] },
        { title: "Branded Items", description: "Mugs, notebooks, badges, bags, and more — all branded with your logo. Reinforce your identity at every touchpoint, inside and outside your business.", tags: ["Mugs & Cups", "Notebooks", "Badges & Lanyards"] },
        { title: "Design Services", description: "No design? No problem. Our team creates professional layouts, mockups, and brand presentation assets — so everything looks intentional and premium.", tags: ["Mockups", "Brand Guidelines", "Artwork"] },
      ],
    },
    audience: {
      label: "Who We Serve",
      heading: "Built for businesses that care about their image",
      items: [
        { label: "Restaurants",    desc: "Chef coats, server uniforms, host attire" },
        { label: "Cafes",          desc: "Branded aprons, caps, and barista wear" },
        { label: "Businesses",     desc: "Office wear, reception, sales teams" },
        { label: "Corporate Teams",desc: "Executive uniforms & branded merch kits" },
        { label: "Schools",        desc: "Student uniforms, faculty wear, PE kits" },
        { label: "Events",         desc: "Staff vests, crew shirts, event branding" },
      ],
    },
    why: {
      label: "Why CladCo",
      heading1: "More than a supplier.",
      heading2: "A partner in",
      heading3: "presentation.",
      sub: "We don't just manufacture. We help you think about how your team represents your brand — and then we execute it flawlessly.",
      stat: "100%",
      statSub: "Custom Production",
      reasons: [
        { number: "01", title: "Professional Look, Every Time",  description: "Consistency builds trust. We ensure your team looks polished and aligned — whether it's one person or one hundred." },
        { number: "02", title: "Fully Custom Solutions",         description: "Every business is different. We work with your brand colors, logo, and style to produce something uniquely yours." },
        { number: "03", title: "Flexible Quality Tiers",         description: "From budget-friendly starter packs to premium production runs — we offer options that match your scale and ambition." },
        { number: "04", title: "Reliable, End-to-End",           description: "Design, produce, deliver. We own the full process so you never have to coordinate between multiple vendors." },
      ],
    },
    process: {
      label: "How It Works",
      heading: "Simple process. Professional results.",
      cta: "Start the Process",
      steps: [
        { step: "01", title: "Tell Us What You Need",    description: "Send us a message on WhatsApp. Share your requirements, team size, and any ideas you have." },
        { step: "02", title: "We Design & Confirm",      description: "Our team prepares mockups and samples. You review, provide feedback, and approve before anything goes to production." },
        { step: "03", title: "We Produce",               description: "Once approved, production begins with quality materials and careful attention to your brand details." },
        { step: "04", title: "We Deliver",               description: "Your order arrives on time, packaged properly, ready for your team to wear with pride." },
      ],
    },
    showcase: {
      label: "Our Products",
      heading: "Crafted to represent your brand.",
      sub: "Every item is produced to the highest standard, carrying your identity at every detail.",
      cta: "All products can be fully customised with your brand identity",
      items: [
        { key: "tshirt",   label: "Team Uniforms",        desc: "Sharp black uniforms — tailored to carry your brand with precision." },
        { key: "cup",      label: "Branded Cups",         desc: "Every sip is a brand moment — your logo on every cup." },
        { key: "notebook", label: "Branded Notebooks",    desc: "Premium notebooks that carry your brand into every meeting." },
        { key: "badge",    label: "ID Badges & Lanyards", desc: "Professional credentials printed with your brand identity." },
      ],
    },
    cta: {
      badge: "Ready to Upgrade?",
      heading1: "Your team deserves uniforms",
      heading2: "that work as hard as they do.",
      sub: "From order to delivery — your brand, uncompromised.",
      button: "Chat with Us on WhatsApp",
      trust1: "No commitment required",
      trust2: "Fast response time",
      trust3: "Free consultation",
    },
    contact: {
      locationLabel: "Location",
      locationValue: "Saudi Arabia",
      locationSub: "Serving businesses across the Kingdom",
      phoneLabel: "Phone",
      phoneSub: "Sun – Thu, 9am – 6pm",
      waLabel: "WhatsApp",
      waValue: "Message us directly",
      waSub: "We typically reply within minutes",
    },
    footer: {
      tagline: "Show Up Better — Quality without noise, precision without pretension.",
      rights: "All rights reserved.",
      country: "Based in Saudi Arabia 🇸🇦",
      whatsapp: "WhatsApp Us",
    },
    floating: { tooltip: "💬 Chat with us!" },
    quote: {
      title: "Get a Free Quote",
      subtitle: "Fill in the details and we'll get back to you on WhatsApp.",
      name: "Full Name", company: "Company Name", businessType: "Business Type",
      need: "What do you need exactly?", quantity: "Quantity", city: "City",
      fabric: "Fabric Type", fabricHint: "optional",
      submit: "Send Request via WhatsApp", close: "Close",
      namePlaceholder: "Your full name", companyPlaceholder: "Your company or business name",
      typePlaceholder: "Restaurant, Café, Corporate...", needPlaceholder: "Describe what you need...",
      quantityPlaceholder: "e.g. 50 pieces", cityPlaceholder: "Your city",
      fabricPlaceholder: "e.g. Cotton, Polyester... (optional)",
    },
    // ─────────── NEW: Stats + Charts (v2 upgrade) ───────────
    stats: {
      label: "By the Numbers",
      heading1: "Built on",
      headingItalic: "precision",
      heading2: "& promises kept.",
      items: [
        { num: 100, suffix: "%", label: "Custom Production",    desc: "Every order uniquely built to your brand." },
        { num: 25,  suffix: "d", label: "Avg Lead Time",         desc: "From approval to your doorstep." },
        { num: 50,  suffix: "+", label: "Customizable Items",    desc: "Apparel, drinkware, stationery, and more." },
        { num: 24,  suffix: "h", label: "Response Time",         desc: "We reply within a working day, every time." },
      ],
    },
    charts: {
      label: "Why CladCo",
      heading1: "A process built for",
      headingItalic: "precision.",
      sub: "From the first message to the final delivery — every step engineered to keep your brand uncompromised.",
      tabJourney: "Order Journey",
      tabQuality: "Quality Standards",
      disclaimer: "Average timeline shown. Actual delivery time may vary based on order quantity & complexity.",
      journeyStages: [
        { day: "DAY 1",  label: "You message us",     desc: "WhatsApp · 24h reply" },
        { day: "DAY 5",  label: "Custom mockups",     desc: "Designs ready for review" },
        { day: "DAY 8",  label: "Your approval",      desc: "Production starts" },
        { day: "DAY 18", label: "Quality crafted",    desc: "Cut, stitched, branded" },
        { day: "DAY 25", label: "Delivered",          desc: "Ready to wear" },
      ],
      qualityItems: [
        { num: "01", title: "Fabric Density · 280gsm+",          desc: "Heavy-weight cotton blends that hold shape and survive daily use.",     value: 95 },
        { num: "02", title: "Stitching · 12 stitches/inch",      desc: "Reinforced double-needle seams at all stress points.",                   value: 90 },
        { num: "03", title: "Print · Plastisol & DTG",            desc: "Industrial-grade prints that don't crack, fade, or peel.",               value: 92 },
        { num: "04", title: "Color · Pantone-matched ±2 ΔE",     desc: "Your brand colors reproduced with measurable accuracy.",                value: 96 },
        { num: "05", title: "Wash Test · 50+ cycles",             desc: "Shape, color, and print integrity verified before delivery.",           value: 88 },
      ],
      radarLabels: [
        { label: "Fabric",    value: "280gsm+" },
        { label: "Stitching", value: "12 SPI" },
        { label: "Print",     value: "Plastisol" },
        { label: "Color",     value: "Pantone±2" },
        { label: "Wash",      value: "50+ cycles" },
      ],
    },
  },

  ar: {
    nav: { whatsapp: "راسلنا" },
    hero: {
      badge: "راقٍ واحترافي",
      headline1: "اظهر",
      headline2: "بأفضل صورة.",
      sub: "يونيفورم راقٍ وهدايا مؤسسية بهويتك — لكل مشروع يريد أن يترك انطباعاً لا يُنسى.",
      cta1: "تواصل معنا",
      cta2: "احصل على عرض سعر",
      trust: "يثق بنا أصحاب المطاعم · المقاهي · الشركات · المدارس · الفعاليات",
      scroll: "تمرير",
    },
    services: {
      label: "ما نقدمه",
      heading: "كل ما يحتاجه فريقك ليمثّل علامتك باحترافية",
      items: [
        { title: "يونيفورم مخصص", description: "ملابس عمل مصممة خصيصاً لتعكس هوية علامتك. من اختيار القماش حتى آخر غرزة — كل تفصيل يعكس مستوى مشروعك.", tags: ["تطريز", "طباعة سيلك", "مقاسات مخصصة"] },
        { title: "هدايا مؤسسية بهويتك", description: "أكواب، دفاتر، شارات، حقائب والمزيد — كلها تحمل شعارك. علامتك حاضرة في كل لحظة تواصل مع عملائك وفريقك.", tags: ["أكواب", "دفاتر", "شارات وبطاقات"] },
        { title: "خدمات التصميم", description: "ما عندك تصميم؟ لا مشكلة. فريقنا يبدأ من الصفر ويُعدّ لك تصاميم وموكاب احترافي — لتكون هويتك متكاملة ومتقنة من أول نظرة.", tags: ["موكاب احترافي", "دليل الهوية", "ملفات الطباعة"] },
      ],
    },
    audience: {
      label: "من نخدم",
      heading: "لكل مشروع يهتم بكيف يظهر أمام الناس",
      items: [
        { label: "المطاعم",      desc: "جاكيت الشيف، زي الخدمة، ملابس الاستقبال" },
        { label: "المقاهي",      desc: "مرايل بهويتك، كابات، زي الباريستا" },
        { label: "الشركات",      desc: "زي موحد للموظفين، الاستقبال، فرق المبيعات" },
        { label: "المؤسسات الكبرى", desc: "زي تنفيذي راقٍ وهدايا مؤسسية بهوية متكاملة" },
        { label: "المدارس",      desc: "زي طلابي، ملابس المعلمين، الزي الرياضي" },
        { label: "الفعاليات",    desc: "سترات الفريق، قمصان الطاقم، هوية الفعالية" },
      ],
    },
    why: {
      label: "لماذا كلادكو",
      heading1: "أكثر من مورد.",
      heading2: "شريك في",
      heading3: "احترافيتك.",
      sub: "ما نكتفي بالتصنيع فقط — نفكر معك في كيف يُمثّل فريقك علامتك، ثم ننفّذ ذلك بدقة واحترافية تامة.",
      stat: "١٠٠٪",
      statSub: "إنتاج مخصص",
      reasons: [
        { number: "٠١", title: "مظهر موحد ومتسق دائماً",  description: "الاتساق يبني الثقة. فريقك يبدو دائماً بمستوى واحد — سواء كان شخصاً واحداً أو مئة." },
        { number: "٠٢", title: "مخصص لك بالكامل",          description: "كل مشروع له طابعه الخاص. نعمل بألوانك وشعارك وأسلوبك لننتج هوية بصرية لا تشبه غيرها." },
        { number: "٠٣", title: "خيارات تناسب كل ميزانية",  description: "من الباقات الأساسية إلى الإنتاج الراقي — عندنا ما يناسب حجم مشروعك وطموحاتك." },
        { number: "٠٤", title: "كل شيء تحت سقف واحد",      description: "تصميم، إنتاج، توصيل. نتولى كل خطوة حتى لا تضطر للتعامل مع أطراف متعددة." },
      ],
    },
    process: {
      label: "كيف نعمل",
      heading: "خطوات واضحة. نتائج تتكلم عن نفسها.",
      cta: "ابدأ الآن",
      steps: [
        { step: "٠١", title: "راسلنا وأخبرنا",      description: "تواصل معنا على واتساب وأخبرنا بمتطلباتك وحجم فريقك وأي أفكار في بالك." },
        { step: "٠٢", title: "نصمم ونعرض عليك",     description: "نُعدّ موكاب وعينات. تشوفها، تعطينا ملاحظاتك، وما نبدأ الإنتاج إلا بعد موافقتك الكاملة." },
        { step: "٠٣", title: "ننطلق في الإنتاج",    description: "بعد الموافقة يبدأ الإنتاج بمواد عالية الجودة مع الاعتناء بكل تفاصيل هويتك." },
        { step: "٠٤", title: "يوصلك الطلب",          description: "طلبك يصلك في الوقت المحدد، مُعبّأ بعناية، جاهز ليرتديه فريقك بكل ثقة." },
      ],
    },
    showcase: {
      label: "منتجاتنا",
      heading: "مصنوعة لتحمل هويتك.",
      sub: "كل قطعة تُنتج بأعلى المعايير — علامتك حاضرة في كل تفصيل.",
      cta: "جميع المنتجات قابلة للتخصيص الكامل بهوية علامتك",
      items: [
        { key: "tshirt",   label: "يونيفورم الفريق",      desc: "يونيفورم أنيق ومتسق — يعكس احترافية مشروعك من أول نظرة." },
        { key: "cup",      label: "أكواب بهويتك",          desc: "شعارك على كل كوب — كل رشفة فرصة يتذكرك فيها عميلك." },
        { key: "notebook", label: "دفاتر مؤسسية",         desc: "دفاتر راقية تحمل علامتك لكل اجتماع وكل لحظة عمل." },
        { key: "badge",    label: "بطاقات وشرائط تعريف",  desc: "هويات موظفين احترافية تُكمل صورة فريقك المتكاملة." },
      ],
    },
    cta: {
      badge: "جاهز ترتقي بمظهر فريقك؟",
      heading1: "فريقك يستحق زياً",
      heading2: "بمستوى جدّيته.",
      sub: "من أول طلب حتى آخر تسليم — هويتك التجارية محفوظة بالكامل.",
      button: "تواصل معنا على واتساب",
      trust1: "بدون أي التزام مسبق",
      trust2: "رد سريع في نفس اليوم",
      trust3: "استشارة أولية مجانية",
    },
    contact: {
      locationLabel: "الموقع",
      locationValue: "المملكة العربية السعودية",
      locationSub: "نخدم المشاريع في جميع أنحاء المملكة",
      phoneLabel: "الهاتف",
      phoneSub: "الأحد – الخميس، ٩ص – ٦م",
      waLabel: "واتساب",
      waValue: "راسلنا مباشرة",
      waSub: "عادةً نرد خلال دقائق",
    },
    footer: {
      tagline: "اظهر بأفضل صورة — جودة حقيقية، احترافية بلا تكلّف.",
      rights: "جميع الحقوق محفوظة.",
      country: "🇸🇦 المملكة العربية السعودية",
      whatsapp: "راسلنا",
    },
    floating: { tooltip: "💬 راسلنا الآن" },
    quote: {
      title: "احصل على عرض سعر",
      subtitle: "أكمل البيانات وسنتواصل معك على واتساب في أقرب وقت.",
      name: "الاسم الكامل", company: "اسم الشركة أو المشروع", businessType: "نوع النشاط",
      need: "وش تحتاج بالضبط؟", quantity: "الكمية", city: "المدينة",
      fabric: "نوع القماش", fabricHint: "اختياري",
      submit: "إرسال الطلب عبر واتساب", close: "إغلاق",
      namePlaceholder: "اسمك الكامل", companyPlaceholder: "اسم شركتك أو مشروعك",
      typePlaceholder: "مطعم، مقهى، شركة...", needPlaceholder: "اشرح طلبك باختصار...",
      quantityPlaceholder: "مثال: ٥٠ قطعة", cityPlaceholder: "مدينتك",
      fabricPlaceholder: "مثال: قطن، بوليستر... (اختياري)",
    },
    // ─────────── NEW: Stats + Charts (v2 upgrade) ───────────
    stats: {
      label: "بالأرقام",
      heading1: "مبني على",
      headingItalic: "الدقة",
      heading2: "والوعود المحفوظة.",
      items: [
        { num: 100, suffix: "٪", label: "إنتاج مخصص بالكامل",  desc: "كل طلب يُصنع خصيصاً لعلامتك." },
        { num: 25,  suffix: "ي", label: "متوسط الإنتاج",         desc: "من الموافقة إلى باب مكانك." },
        { num: 50,  suffix: "+", label: "منتج قابل للتخصيص",     desc: "ملابس، أكواب، قرطاسية، والمزيد." },
        { num: 24,  suffix: "س", label: "زمن الاستجابة",          desc: "نرد خلال يوم العمل، دائماً." },
      ],
    },
    charts: {
      label: "لماذا كلادكو",
      heading1: "عملية مبنية على",
      headingItalic: "الدقة.",
      sub: "من أول رسالة حتى آخر تسليم — كل خطوة مهندَسة بعناية لحماية هويتك.",
      tabJourney: "رحلة الطلب",
      tabQuality: "معايير الجودة",
      disclaimer: "الجدول الزمني المعروض هو متوسط تقريبي. مدة التسليم الفعلية قد تختلف حسب الكمية ومستوى التخصيص.",
      journeyStages: [
        { day: "اليوم ١",  label: "تراسلنا",          desc: "واتساب · رد خلال ٢٤ ساعة" },
        { day: "اليوم ٥",  label: "تصاميم مخصصة",     desc: "موكاب جاهز للمراجعة" },
        { day: "اليوم ٨",  label: "موافقتك",          desc: "يبدأ الإنتاج" },
        { day: "اليوم ١٨", label: "إنتاج بجودة عالية", desc: "قص، خياطة، طباعة بهويتك" },
        { day: "اليوم ٢٥", label: "تم التسليم",         desc: "جاهز للارتداء" },
      ],
      qualityItems: [
        { num: "٠١", title: "كثافة القماش · ٢٨٠ غم/م² فأكثر",  desc: "قطن ثقيل يحافظ على شكله ويقاوم الاستخدام اليومي.",       value: 95 },
        { num: "٠٢", title: "الخياطة · ١٢ غرزة/إنش",             desc: "غرز مزدوجة معززة في كل نقاط الضغط.",                       value: 90 },
        { num: "٠٣", title: "الطباعة · بلاستيزول و DTG",         desc: "طباعة صناعية لا تتشقق ولا تبهت ولا تتقشر.",                value: 92 },
        { num: "٠٤", title: "اللون · مطابقة بانتون ±٢ ΔE",        desc: "ألوان علامتك مُستنسخة بدقة قياسية.",                       value: 96 },
        { num: "٠٥", title: "اختبار الغسيل · ٥٠+ دورة",            desc: "الشكل واللون والطباعة مُتحقَّق منها قبل التسليم.",         value: 88 },
      ],
      radarLabels: [
        { label: "القماش",   value: "٢٨٠+ غم" },
        { label: "الخياطة",  value: "١٢ غرزة" },
        { label: "الطباعة",  value: "بلاستيزول" },
        { label: "اللون",    value: "بانتون±٢" },
        { label: "الغسيل",   value: "٥٠+ دورة" },
      ],
    },
  },
};

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: lib/motion.ts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```ts
// =============================================================================
// FILE: lib/motion.ts
// CHANGES vs old file:
//   - APPENDED: cinematicLogo, letterReveal, magneticHover variants
//   - All existing exports preserved
// =============================================================================

import type { Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -36, filter: "blur(3px)" },
  visible: { opacity: 1, x: 0,   filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 36,  filter: "blur(3px)" },
  visible: { opacity: 1, x: 0,   filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.94, y: 20 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.65, ease: EASE } },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay } },
});

export const viewport = { once: true, margin: "-60px" } as const;

// ─────────── NEW v2 Motion variants ───────────

/** Cinematic logo entrance: from far away with heavy blur, settles to position. */
export const cinematicLogo: Variants = {
  hidden:  { opacity: 0, scale: 0.3, filter: "blur(60px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 2.2, ease: EASE, times: [0, 0.7, 1] },
  },
};

/** Letter-by-letter reveal for headlines (use with overflow:hidden parent). */
export const letterReveal: Variants = {
  hidden:  { y: "105%" },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
};

/** Subtitle / caption fade with slight blur. */
export const subtleFadeUp: Variants = {
  hidden:  { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
};

/** Card hover lift used by stat tiles + chart panels. */
export const cardLift: Variants = {
  rest:  { y: 0, transition: { duration: 0.4, ease: EASE } },
  hover: { y: -6, transition: { duration: 0.4, ease: EASE } },
};

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/Hero.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/Hero.tsx
// CHANGES vs old file:
//   - NEW logo flow: appears at viewport CENTER first (2.4s), then LIFTS UP (1.2s),
//     then headline + sub + CTAs cascade in (4.0s+)
//   - Mouse-tracking gold glow inside hero
//   - Magnetic CTA buttons (translate toward cursor)
//   - Letter-by-letter headline reveal
//   - Scroll indicator without "Scroll" text — just animated line
//   - Preserves: HeroParticles, BrandIconBg, click pulse, ticker, all translations
// =============================================================================

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import HeroParticles from "./HeroParticles";
import { BrandIconBg } from "./BrandMotif";

const ease = [0.16, 1, 0.3, 1] as const;
const QUOTE_URL = "https://cladco-requests.netlify.app/";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  const logoControls = useAnimation();
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const logoWrapRef = useRef<HTMLDivElement | null>(null);

  const pulseLogo = async () => {
    await logoControls.start({
      scale: [1, 1.1, 0.97, 1],
      rotate: [0, 2, -1.5, 0],
      transition: { duration: 0.55, ease },
    });
  };

  // Mouse-tracking gold glow inside hero
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      glow.style.left = `${e.clientX - rect.left}px`;
      glow.style.top = `${e.clientY - rect.top}px`;
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  // Add settled class AFTER both intro animations complete (3.9s)
  useEffect(() => {
    const timer = setTimeout(() => {
      logoWrapRef.current?.classList.add("settled");
    }, 3900);
    return () => clearTimeout(timer);
  }, []);

  // Magnetic buttons
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    const handlers: { el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }[] = [];

    buttons.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
      };
      const leave = () => { btn.style.transform = "translate(0, 0)"; };
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      handlers.push({ el: btn, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0C0C0B" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(154,139,110,0.10) 0%, transparent 60%)" }}
      />
      <BrandIconBg size={700} opacity={0.12} variant="3d" animate />
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none hero-glow-pulse"
        style={{ background: "radial-gradient(ellipse, rgba(154,139,110,0.06) 0%, transparent 60%)" }}
      />

      {/* Mouse-tracking gold glow */}
      <div ref={glowRef} className="hero-mouse-glow" aria-hidden="true" />

      <HeroParticles />

      {/* Industry ticker */}
      <div
        className="absolute bottom-20 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.6) 88%, transparent 100%)" }}
      >
        <div className="ticker-track items-center py-2">
          {["Restaurant","Café","Corporate","School","Hotel","Events","Retail","Clinic","Sports","Hospitality","Government","Agency",
            "Restaurant","Café","Corporate","School","Hotel","Events","Retail","Clinic","Sports","Hospitality","Government","Agency"].map((label, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5">
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase whitespace-nowrap" style={{ color: "rgba(154,139,110,0.4)", fontFamily: "Inter, system-ui, sans-serif" }}>{label}</span>
              <span style={{ color: "rgba(154,139,110,0.18)", fontSize: 6 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none" style={{ background: "linear-gradient(to top, #0C0C0B, transparent)" }} />

      {/* ============================================================
          LOGO — absolutely positioned at viewport CENTER first,
          then animates UP to top via globals.css keyframes
          ============================================================ */}
      <div
        ref={logoWrapRef}
        className="logo-cinematic"
        style={{ pointerEvents: "auto" }}
      >
        <motion.div animate={logoControls} style={{ display: "block" }}>
          <Image
            src="/logo.png"
            alt="CladCo"
            width={3544}
            height={3544}
            className="w-full h-auto object-contain"
            style={{ filter: "drop-shadow(0 0 40px rgba(154,139,110,0.15))" }}
            priority
          />
        </motion.div>
      </div>

      {/* ============================================================
          CONTENT — Headline + sub + CTAs appear AFTER logo lifts up
          padding-top:38vh keeps them below the lifted logo position
          ============================================================ */}
      <div className="hero-content-v2 relative max-w-5xl mx-auto px-5 md:px-8 text-center pb-16" style={{ zIndex: 10 }}>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{ border: "1px solid rgba(154,139,110,0.25)", background: "rgba(154,139,110,0.07)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.9, duration: 0.7, ease }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#9A8B6E" }} />
          <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: "#9A8B6E", fontFamily: "Inter, system-ui, sans-serif" }}>{tr.badge}</span>
        </motion.div>

        {/* Headline — letter-by-letter reveal (4.0s and 4.25s delays) */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-8">
          <span className="headline-mask">
            <span
              className="headline-inner block"
              style={{ color: "#F9F8F6", animationDelay: "4s" }}
            >
              {tr.headline1}
            </span>
          </span>
          <span className="headline-mask">
            <span
              className="headline-inner block"
              style={{ color: "#9A8B6E", fontStyle: "italic", animationDelay: "4.25s" }}
            >
              {tr.headline2}
            </span>
          </span>
        </h1>

        {/* Sub */}
        <motion.p
          className="text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light"
          style={{ color: "#AEADA9", fontFamily: "Inter, system-ui, sans-serif" }}
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 4.7, duration: 0.9, ease }}
        >
          {tr.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.7, ease }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="btn-primary btn-magnetic btn-magnetic-primary text-sm w-full sm:w-auto justify-center gap-3"
            onClick={pulseLogo}
          >
            <WAIcon />
            {tr.cta1}
          </a>
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="btn-outline btn-magnetic btn-magnetic-ghost text-sm w-full sm:w-auto justify-center"
            onClick={pulseLogo}
          >
            {tr.cta2}
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="mt-10 text-xs tracking-wider"
          style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.4, duration: 0.8 }}
        >
          {tr.trust}
        </motion.p>
      </div>

      {/* Scroll indicator (line only, no text) */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.7, duration: 0.8 }}
      >
        <div className="scroll-indicator-line" aria-hidden="true" />
      </motion.div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/StatsAndCharts.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/StatsAndCharts.tsx (NEW)
// Two parts in one component:
//   1. Stats grid (4 stats with animated counters, light bg)
//   2. Charts section (tabbed: Journey + Quality, dark bg)
// Uses translations from t[lang].stats and t[lang].charts
// =============================================================================

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─────────── Animated Counter ─────────── */
function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 2200;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="stat-num-anim inline-flex items-baseline gap-[2px]">
      <span>{val}</span>
      {suffix && (
        <span className="text-[0.5em]" style={{ color: "var(--champagne)" }}>{suffix}</span>
      )}
    </span>
  );
}

/* ─────────── Journey Chart ─────────── */
function JourneyChart({ stages, disclaimer }: {
  stages: { day: string; label: string; desc: string }[];
  disclaimer: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<SVGPathElement | null>(null);
  const inView = useInView(wrapRef, { once: true, threshold: 0.3 } as never);

  useEffect(() => {
    if (!inView || !lineRef.current) return;
    const path = lineRef.current;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.getBoundingClientRect(); // force reflow
    path.style.transition = "stroke-dashoffset 2.4s cubic-bezier(0.16,1,0.3,1)";
    path.style.strokeDashoffset = "0";
  }, [inView]);

  // Map stage index to (x, y) on the SVG canvas
  const points = [
    { x: 80,   y: 165 }, // Day 1
    { x: 315,  y: 105 }, // Day 5
    { x: 550,  y: 70  }, // Day 8
    { x: 785,  y: 50  }, // Day 18
    { x: 1020, y: 20  }, // Day 25
  ];

  // Where to position labels (above or below the curve)
  const labelOffsets = [
    { y: -65, descY: -45 }, // Day 1 — labels above
    { y: -50, descY: -30 },
    { y: -30, descY: -10 },
    { y: 60,  descY: 80  }, // Day 18 — labels BELOW
    { y: 100, descY: 120 }, // Day 25 — labels BELOW
  ];

  return (
    <div ref={wrapRef} className="relative pt-12 pb-4">
      <svg
        className="w-full h-auto overflow-visible"
        viewBox="0 0 1100 360"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="journeyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9A8B6E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9A8B6E" stopOpacity="0" />
          </linearGradient>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line className="journey-axis-line" x1="80" y1="200" x2="1020" y2="200" />

        {/* Day labels along axis */}
        {stages.map((s, i) => (
          <text key={i} className="journey-day" x={points[i].x} y={225} textAnchor="middle">
            {s.day}
          </text>
        ))}

        {/* Animated area under curve */}
        <motion.path
          className="journey-area"
          d="M 80 165 C 200 160, 250 130, 315 105 C 400 75, 470 60, 550 70 C 650 80, 720 70, 785 50 C 880 30, 950 25, 1020 20 L 1020 200 L 80 200 Z"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1, ease }}
        />

        {/* Animated progress line */}
        <path
          ref={lineRef}
          className="journey-progress-line"
          d="M 80 165 C 200 160, 250 130, 315 105 C 400 75, 470 60, 550 70 C 650 80, 720 70, 785 50 C 880 30, 950 25, 1020 20"
        />

        {/* Stage nodes + labels */}
        {stages.map((s, i) => {
          const isFinal = i === stages.length - 1;
          const off = labelOffsets[i];
          const delay = 0.3 + i * 0.3;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay, ease }}
            >
              <text
                className="journey-label"
                x={points[i].x}
                y={points[i].y + off.y}
                textAnchor="middle"
              >
                {s.label}
              </text>
              <text
                className="journey-desc"
                x={points[i].x}
                y={points[i].y + off.descY}
                textAnchor="middle"
              >
                {s.desc}
              </text>
              <motion.circle
                className={isFinal ? "journey-node journey-node-final" : "journey-node"}
                cx={points[i].x}
                cy={points[i].y}
                r={isFinal ? 9 : 7}
                filter="url(#nodeGlow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: delay + 0.05, ease }}
                style={{ transformOrigin: `${points[i].x}px ${points[i].y}px` }}
              />
            </motion.g>
          );
        })}
      </svg>

      {/* Disclaimer */}
      <div
        className="mt-6 text-center font-light italic"
        style={{ fontSize: "0.78rem", color: "rgba(249,248,246,0.45)" }}
      >
        <span
          className="inline-block w-3.5 h-3.5 rounded-full text-center align-middle mr-2 not-italic font-semibold"
          style={{
            border: "1px solid var(--champagne)",
            color: "var(--champagne)",
            fontSize: "9px",
            lineHeight: "12px",
          }}
        >
          i
        </span>
        {disclaimer}
      </div>
    </div>
  );
}

/* ─────────── Quality Radar Chart ─────────── */
function QualityChart({
  items,
  radarLabels,
  active,
}: {
  items: { num: string; title: string; desc: string; value: number }[];
  radarLabels: { label: string; value: string }[];
  active: boolean;
}) {
  // Pentagon vertex coordinates (scaled to ~95% chart radius)
  const vertices = [
    { x: 0,    y: -171 }, // top
    { x: 154,  y: -50  },
    { x: 97,   y: 134  },
    { x: -102, y: 140  },
    { x: -150, y: -49  },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center py-8">
      {/* Radar SVG */}
      <div className="relative w-full max-w-[480px] mx-auto aspect-square">
        <svg className="w-full h-full overflow-visible" viewBox="-220 -220 440 440">
          {/* Grid pentagons (5 levels) */}
          <polygon className="radar-grid" points="0,-180 171,-56 106,146 -106,146 -171,-56" />
          <polygon className="radar-grid" points="0,-144 137,-44 85,117 -85,117 -137,-44" />
          <polygon className="radar-grid" points="0,-108 103,-33 64,87 -64,87 -103,-33" />
          <polygon className="radar-grid" points="0,-72 68,-22 42,58 -42,58 -68,-22" />
          <polygon className="radar-grid radar-grid-active" points="0,-36 34,-11 21,29 -21,29 -34,-11" />

          {/* Axes */}
          {vertices.map((v, i) => (
            <line key={i} className="radar-axis" x1={0} y1={0} x2={v.x * 1.1} y2={v.y * 1.1} />
          ))}

          {/* Data shape (animated scale) */}
          <motion.polygon
            className="radar-shape"
            points={vertices.map((v) => `${v.x},${v.y}`).join(" ")}
            initial={{ scale: 0, opacity: 0 }}
            animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            style={{ transformOrigin: "center" }}
          />

          {/* Data points */}
          {vertices.map((v, i) => (
            <motion.circle
              key={i}
              className="radar-point"
              cx={v.x}
              cy={v.y}
              r={4}
              initial={{ scale: 0 }}
              animate={active ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease }}
              style={{ transformOrigin: `${v.x}px ${v.y}px` }}
            />
          ))}

          {/* Labels around radar */}
          {radarLabels.map((lbl, i) => {
            const v = vertices[i];
            const lx = v.x * 1.18;
            const ly = v.y * 1.18 - 10;
            return (
              <g key={i}>
                <text className="radar-label" x={lx} y={ly} textAnchor="middle">
                  {lbl.label}
                </text>
                <text className="radar-value" x={lx} y={ly + 13} textAnchor="middle">
                  {lbl.value}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Side list */}
      <div className="flex flex-col gap-2">
        {items.map((it, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-[auto_1fr_auto] gap-5 items-center py-4"
            style={{ borderBottom: i < items.length - 1 ? "1px solid rgba(154,139,110,0.08)" : "none" }}
            initial={{ opacity: 0, x: 20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease }}
          >
            <div
              className="font-display italic text-2xl"
              style={{ color: "var(--champagne)" }}
            >
              {it.num}
            </div>
            <div>
              <h5
                className="text-base font-semibold mb-1"
                style={{ color: "#F9F8F6", fontFamily: "Inter, sans-serif" }}
              >
                {it.title}
              </h5>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(249,248,246,0.5)" }}
              >
                {it.desc}
              </p>
            </div>
            <div className="quality-bar-track">
              <div
                className="quality-bar-fill"
                style={{ width: active ? `${it.value}%` : "0%" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Main Component ─────────── */
export default function StatsAndCharts() {
  const { lang } = useLang();
  const ts = t[lang].stats;
  const tc = t[lang].charts;
  const [tab, setTab] = useState<"journey" | "quality">("journey");

  return (
    <>
      {/* ════════ Stats Section (light bg) ════════ */}
      <section className="py-24 md:py-28 px-5 md:px-8" style={{ background: "#F9F8F6" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            <motion.div variants={fadeUp} className="section-label">
              {ts.label}
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-heading mb-12 max-w-3xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {ts.heading1}{" "}
              <span style={{ color: "var(--champagne)", fontStyle: "italic" }}>
                {ts.headingItalic}
              </span>{" "}
              {ts.heading2}
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y"
            style={{ borderColor: "rgba(154,139,110,0.18)" }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger(0.12)}
          >
            {ts.items.map((it, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 lg:p-10 relative cursor-default"
                style={{
                  borderRight: "1px solid rgba(154,139,110,0.18)",
                }}
              >
                <div
                  className="font-display mb-4 leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "var(--black)",
                  }}
                >
                  <AnimatedCounter to={it.num} suffix={it.suffix} />
                </div>
                <div
                  className="text-xs font-semibold tracking-[0.22em] uppercase mb-2"
                  style={{ color: "#5C5A55" }}
                >
                  {it.label}
                </div>
                <div
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "#8A8780" }}
                >
                  {it.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ Charts Section (dark bg) ════════ */}
      <section className="chart-section-bg py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            <motion.div
              variants={fadeUp}
              className="section-label"
              style={{ color: "var(--champagne)" }}
            >
              {tc.label}
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-heading mb-4 max-w-3xl"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#F9F8F6",
              }}
            >
              {tc.heading1}{" "}
              <span style={{ color: "var(--champagne)", fontStyle: "italic" }}>
                {tc.headingItalic}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base max-w-xl mb-12 font-light leading-relaxed"
              style={{ color: "rgba(249,248,246,0.55)" }}
            >
              {tc.sub}
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="chart-tabs-wrap mb-10 inline-flex"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
          >
            <span
              className="chart-tab-indicator"
              style={{
                width: "50%",
                transform: tab === "quality" ? "translateX(100%)" : "translateX(0%)",
              }}
            />
            <button
              type="button"
              className={`chart-tab-btn ${tab === "journey" ? "active" : ""}`}
              onClick={() => setTab("journey")}
            >
              {tc.tabJourney}
            </button>
            <button
              type="button"
              className={`chart-tab-btn ${tab === "quality" ? "active" : ""}`}
              onClick={() => setTab("quality")}
            >
              {tc.tabQuality}
            </button>
          </motion.div>

          {/* Panels */}
          <div className="relative">
            {tab === "journey" ? (
              <JourneyChart stages={tc.journeyStages} disclaimer={tc.disclaimer} />
            ) : (
              <QualityChart
                items={tc.qualityItems}
                radarLabels={tc.radarLabels}
                active={tab === "quality"}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/BrandJourneyStrip.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/BrandJourneyStrip.tsx (REPLACED — matches demo exactly)
// NOTE: Demo uses CSS shapes. Original videos in /public/videos/ are preserved
// — Ahmed will re-integrate them manually after this clone is in place.
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function BrandJourneyStrip() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const cards = isAr
    ? [
        { tag: "— ملابس",     title: "تيشيرتات مخصصة",  desc: "تصميمك. قماش راقٍ. طباعة دقيقة.",          shape: "tshirt" },
        { tag: "— أكواب",     title: "أكواب بهويتك",     desc: "نقاط تواصل يومية مع علامتك.",            shape: "cup"    },
        { tag: "— قرطاسية",   title: "دفاتر",             desc: "ورق راقٍ. أغلفة بهويتك. انطباع يدوم.",   shape: "book"   },
      ]
    : [
        { tag: "— Apparel",    title: "Custom T-shirts",   desc: "Your design. Premium fabric. Sharp prints.",        shape: "tshirt" },
        { tag: "— Drinkware",  title: "Branded Cups",      desc: "Daily touchpoints with your brand identity.",       shape: "cup"    },
        { tag: "— Stationery", title: "Notebooks",         desc: "Premium paper. Branded covers. Lasting impressions.", shape: "book"   },
      ];

  const heading = isAr ? "شاهد علامتك " : "Watch your brand ";
  const headingItalic = isAr ? "تنبض بالحياة." : "come to life.";
  const label = isAr ? "من الفراغ إلى الهوية" : "From Blank to Branded";

  return (
    <section className="brand-journey-section">
      <div className="container">
        <motion.div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp} style={{ justifyContent: "center" }}>
            {label}
          </motion.div>
          <motion.h2 className="section-heading" variants={fadeUp} style={{ margin: "0 auto" }}>
            {heading}<span className="italic">{headingItalic}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="brand-journey-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {cards.map((c, i) => (
            <motion.div key={i} className="bj-card" variants={fadeUp}>
              <div className="bj-card-mock">
                <div className={`bj-shape bj-shape-${c.shape}`} />
              </div>
              <div className="bj-card-content">
                <div className="bj-card-label">{c.tag}</div>
                <div className="bj-card-title">{c.title}</div>
                <div className="bj-card-desc">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/WhatWeDo.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/WhatWeDo.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function WhatWeDo() {
  const { lang } = useLang();
  const tr = t[lang].services;

  return (
    <section className="section section-light">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp}>
            {tr.label}
          </motion.div>
          <motion.h2 className="section-heading" variants={fadeUp}>
            {tr.heading.split(" ").slice(0, -2).join(" ")} {" "}
            <span className="italic">{tr.heading.split(" ").slice(-2).join(" ")}</span>
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>
            {lang === "ar"
              ? "ثلاثة محاور. فلسفة واحدة: دقة بدون تكلّف."
              : "Three pillars. One philosophy: precision without pretension."}
          </motion.p>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.15)}
        >
          {tr.items.map((item, i) => (
            <motion.div key={i} className="service-card" variants={fadeUp}>
              <div className="service-num">0{i + 1}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.description}</p>
              <div className="service-tags">
                {item.tags.map((tag, j) => (
                  <span key={j} className="service-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/WhoItsFor.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/WhoItsFor.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function WhoItsFor() {
  const { lang } = useLang();
  const tr = t[lang].audience;

  return (
    <section className="section section-cream">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp}>
            {tr.label}
          </motion.div>
          <motion.h2 className="section-heading" variants={fadeUp}>
            {tr.heading}
          </motion.h2>
        </motion.div>

        <motion.div
          className="audience-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          {tr.items.map((item, i) => (
            <motion.div key={i} className="audience-card" variants={fadeUp}>
              <div className="audience-num">0{i + 1}</div>
              <h4 className="audience-label">{item.label}</h4>
              <p className="audience-desc">{item.desc}</p>
              <div className="audience-arrow">→</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/WhyCladCo.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/WhyCladCo.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function WhyCladCo() {
  const { lang } = useLang();
  const tr = t[lang].why;

  return (
    <section className="why-section">
      <div className="why-container">
        <motion.div
          className="why-sticky"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp}>
            {tr.label}
          </motion.div>
          <motion.h2 variants={fadeUp}>
            {tr.heading1} {tr.heading2} <span className="italic">{tr.heading3}</span>
          </motion.h2>
          <motion.p variants={fadeUp}>{tr.sub}</motion.p>
          <motion.div className="why-stat" variants={fadeUp}>
            <div className="why-stat-num">{tr.stat}</div>
            <div className="why-stat-label">{tr.statSub}</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="why-reasons"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {tr.reasons.map((r, i) => (
            <motion.div key={i} className="why-reason" variants={fadeUp}>
              <div className="why-reason-num">{r.number}</div>
              <div>
                <h4>{r.title}</h4>
                <p>{r.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/ProductShowcase.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/ProductShowcase.tsx (REPLACED — matches demo)
// NOTE: Demo uses CSS shapes. Original videos in /public/videos/ are preserved
// — Ahmed will re-integrate them manually after this clone is in place.
// =============================================================================

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function ProductShowcase() {
  const { lang } = useLang();
  const tr = t[lang].showcase;
  const sectionRef = useRef<HTMLElement | null>(null);

  // 3D tilt effect on hover
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".product-card-tilt");
    if (!cards) return;

    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-8px) scale(1.02)`;
      };
      const leave = () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [lang]);

  return (
    <section className="section section-cream" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp}>
            {tr.label}
          </motion.div>
          <motion.h2 className="section-heading" variants={fadeUp}>
            {tr.heading.split(" ").slice(0, -2).join(" ")} {" "}
            <span className="italic">{tr.heading.split(" ").slice(-2).join(" ")}</span>
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>
            {tr.sub}
          </motion.p>
        </motion.div>

        <motion.div
          className="products-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {tr.items.map((item, i) => (
            <motion.div key={item.key} className="product-card-tilt" variants={fadeUp}>
              <div className="product-mock-area">
                <div className={`product-shape product-shape-${item.key}`} />
              </div>
              <div className="product-card-content">
                <h4 className="product-label">{item.label}</h4>
                <p className="product-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="products-cta-note"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {tr.cta}
        </motion.p>
      </div>
    </section>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/Process.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/Process.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function Process() {
  const { lang } = useLang();
  const tr = t[lang].process;

  return (
    <section className="section section-dark process-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp}>
            {tr.label}
          </motion.div>
          <motion.h2 className="section-heading-dark" variants={fadeUp}>
            {tr.heading.split(".")[0]}.
            <br />
            <span className="italic">{tr.heading.split(".").slice(1).join(".").trim()}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.18)}
        >
          {/* Animated dotted line connecting all steps */}
          <motion.div
            className="process-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{ transformOrigin: "left" }}
          />

          {tr.steps.map((step, i) => (
            <motion.div key={i} className="process-step" variants={fadeUp}>
              <div className="process-step-num">{step.step}</div>
              <h4 className="process-step-title">{step.title}</h4>
              <p className="process-step-desc">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            {tr.cta} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/CTASection.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/CTASection.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function CTASection() {
  const { lang } = useLang();
  const tr = t[lang].cta;

  // Magnetic effect on the CTA button
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>(".cta-magnetic-btn");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    buttons.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
      };
      const leave = () => { btn.style.transform = "translate(0, 0)"; };
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      handlers.push({ el: btn, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-ghost-text">CLADCO</div>

      <motion.div
        className="cta-content"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(0.12)}
      >
        <motion.div className="section-label" variants={fadeUp} style={{ justifyContent: "center" }}>
          {tr.badge}
        </motion.div>
        <motion.h2 className="cta-heading" variants={fadeUp}>
          {tr.heading1}
          <br />
          <span className="italic">{tr.heading2}</span>
        </motion.h2>
        <motion.p className="cta-sub" variants={fadeUp}>
          {tr.sub}
        </motion.p>

        <motion.div variants={fadeUp}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-magnetic-btn btn-primary text-sm"
            style={{ padding: "1.2rem 2.6rem" }}
          >
            <WAIcon />
            {tr.button}
          </a>
        </motion.div>

        <motion.div className="cta-trust-row" variants={fadeUp}>
          <span>✓ {tr.trust1}</span>
          <span>✓ {tr.trust2}</span>
          <span>✓ {tr.trust3}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginInlineEnd: "0.5rem" }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/ContactSection.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/ContactSection.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function ContactSection() {
  const { lang } = useLang();
  const tr = t[lang].contact;

  return (
    <section className="contact-section">
      <motion.div
        className="contact-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(0.12)}
      >
        <motion.div className="contact-card" variants={fadeUp}>
          <div className="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="contact-label">{tr.locationLabel}</div>
          <div className="contact-value">{tr.locationValue}</div>
          <div className="contact-sub">{tr.locationSub}</div>
        </motion.div>

        <motion.div className="contact-card" variants={fadeUp}>
          <div className="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <div className="contact-label">{tr.phoneLabel}</div>
          <div className="contact-value">+966 53 601 0519</div>
          <div className="contact-sub">{tr.phoneSub}</div>
        </motion.div>

        <motion.div className="contact-card" variants={fadeUp}>
          <div className="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div className="contact-label">{tr.waLabel}</div>
          <div className="contact-value">{tr.waValue}</div>
          <div className="contact-sub">{tr.waSub}</div>
        </motion.div>
      </motion.div>
    </section>
  );
}

```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE: components/Footer.tsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```tsx
// =============================================================================
// FILE: components/Footer.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang].footer;
  const isAr = lang === "ar";

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/logo.png" alt="CladCo" width={140} height={40} style={{ height: 36, width: "auto", marginBottom: "1.5rem" }} />
          <p className="footer-tagline">"Show Up Better"</p>
          <p className="footer-desc">{tr.tagline}</p>
        </div>

        <div className="footer-col">
          <h5>{isAr ? "استكشف" : "Explore"}</h5>
          <ul>
            <li><a href="#what-we-do">{isAr ? "ما نقدمه" : "What We Do"}</a></li>
            <li><a href="#audience">{isAr ? "من نخدم" : "Who We Serve"}</a></li>
            <li><a href="#why">{isAr ? "لماذا كلادكو" : "Why CladCo"}</a></li>
            <li><a href="/products">{isAr ? "المنتجات" : "Products"}</a></li>
            <li><a href="#process">{isAr ? "كيف نعمل" : "How It Works"}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>{isAr ? "تواصل" : "Connect"}</h5>
          <ul>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {tr.whatsapp}
              </a>
            </li>
            <li><a href="mailto:hello@cladco.co">hello@cladco.co</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Instagram</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CladCo. {tr.rights}</p>
        <p>{tr.country}</p>
      </div>
    </footer>
  );
}

```


═══════════════════════════════════════════════════════════
RULES — READ ONCE MORE BEFORE STARTING
═══════════════════════════════════════════════════════════

- Do NOT merge to `main`. Push to `full-redesign-v2` only and wait for my approval.
- Do NOT modify files outside the 15 listed above.
- Do NOT delete or rename anything in `public/` (especially videos).
- Do NOT install new npm packages.
- Do NOT "improve" working code I didn't ask to improve.
- If the build fails, fix only what's broken. Do not refactor.
- If you encounter ambiguity, ASK ME before proceeding.
- Stay surgical.

Begin now.
