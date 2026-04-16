import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoItsFor from "@/components/WhoItsFor";
import WhyCladCo from "@/components/WhyCladCo";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Always-visible floating WhatsApp button */}
      <FloatingWhatsApp />

      {/* Sticky navigation */}
      <Navbar />

      <main>
        {/* 1. Full-screen hero — primary conversion point */}
        <Hero />

        {/* 2. Services overview */}
        <WhatWeDo />

        {/* 3. Target audience */}
        <WhoItsFor />

        {/* 4. Value proposition */}
        <WhyCladCo />

        {/* 5. Simple 4-step process */}
        <Process />

        {/* 6. Full-width dark CTA — secondary conversion push */}
        <CTASection />

        {/* 7. Contact & trust signals */}
        <ContactSection />
      </main>

      {/* 8. Footer with WhatsApp link */}
      <Footer />
    </>
  );
}
