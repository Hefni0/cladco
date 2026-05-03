import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

export const metadata: Metadata = {
  title: "CladCo — Professional Appearance for Your Team",
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
    title: "CladCo — Professional Appearance for Your Team",
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
