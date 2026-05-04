// =============================================================================
// FILE: app/page.tsx
// SMART MERGE: replaced Process with new StatsAndCharts. The Order Journey
// chart inside StatsAndCharts now serves as the "process" — visually richer.
// WhyCladCo is preserved (without its old 100% stat — now in Stats grid).
// =============================================================================

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsAndCharts from "@/components/StatsAndCharts";
import WhatWeDo from "@/components/WhatWeDo";
import WhoItsFor from "@/components/WhoItsFor";
import WhyCladCo from "@/components/WhyCladCo";
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
        {/* Stats + Order Journey (replaces old Process section) */}
        <StatsAndCharts />
        <WhatWeDo />
        <WhoItsFor />
        <WhyCladCo />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

