"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--navy)",
        borderTop: "1px solid var(--hairline-d)",
      }}
    >
      <div className="shell px-6 md:px-10 py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">

          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo.png"
              alt="CladCo"
              width={220}
              height={80}
              className="object-contain h-12 w-auto"
            />
            <p
              style={{
                color: "rgba(245,241,232,0.45)",
                fontSize: "0.78rem",
                maxWidth: "20rem",
                lineHeight: 1.6,
                fontWeight: 300,
                textAlign: "center",
              }}
              className="md:text-left"
            >
              {tr.tagline}
            </p>
          </div>

          <div className="text-center md:text-right" style={{ color: "rgba(245,241,232,0.5)", fontSize: "0.75rem", lineHeight: 1.8, fontWeight: 300 }}>
            <p>© {year} CladCo · {tr.rights}</p>
            <p style={{ marginTop: 4, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "0.68rem", color: "var(--champagne)" }}>
              {tr.country}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
