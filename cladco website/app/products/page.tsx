import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductsPage from "@/components/ProductsPage";

export const metadata: Metadata = {
  title: "Products — CladCo",
  description: "Premium uniforms, branded merchandise, and custom items for businesses that want to show up better.",
};

export default function Products() {
  return (
    <>
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </>
  );
}
