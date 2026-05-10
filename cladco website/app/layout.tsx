// =============================================================================
// FILE: app/layout.tsx (SMART MERGE)
// CHANGES vs live site:
//   - Added <LogoCursor /> mounted at root so it works on every page
//   - All metadata, fonts, LangProvider preserved
// =============================================================================

import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import LogoCursor from "@/components/LogoCursor";

export const metadata: Metadata = {
  title: "CladCo — Show Up Better",
  description:
    "CladCo helps businesses look more professional through custom uniforms, branded items, and design services. Serving restaurants, cafes, corporations, schools, and events across Saudi Arabia.",
  keywords: [
    "uniforms Saudi Arabia",
    "branded workwear",
    "corporate uniforms",
    "custom uniforms Riyadh",
    "branded merchandise",
    "restaurant uniforms",
    "team uniforms",
  ],
  openGraph: {
    title: "CladCo — Show Up Better",
    description:
      "Custom uniforms, branded items & design services. Elevate your team's look with CladCo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="antialiased">
        <LangProvider>
          <LogoCursor />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}

