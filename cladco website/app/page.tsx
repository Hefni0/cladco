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

