import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Atelier from "@/components/Atelier";
import ProductShowcase from "@/components/ProductShowcase";
import Process from "@/components/Process";
import Standard from "@/components/Standard";
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
        <Atelier />
        <ProductShowcase />
        <Process />
        <Standard />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
