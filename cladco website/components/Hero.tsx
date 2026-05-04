"use client";

import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const QUOTE_URL = "https://cladco-requests.netlify.app/";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 40%, rgba(154,139,110,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Atelier framing hairlines */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[min(72rem,90vw)] h-px" style={{ background: "var(--hairline-d)" }} />
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[min(72rem,90vw)] h-px" style={{ background: "var(--hairline-d)" }} />

      <div className="relative z-10 px-6 text-center" style={{ maxWidth: "60rem" }}>

        <div className="hero-line hero-d1 mb-12">
          <span className="eyebrow">{tr.badge}</span>
        </div>

        <div className="hero-logo flex justify-center mb-14">
          <Image
            src="/logo.png"
            alt="CladCo"
            width={3544}
            height={3544}
            className="w-[200px] sm:w-[260px] md:w-[300px] h-auto object-contain"
            priority
          />
        </div>

        <h1
          className="hero-line hero-d2 font-display"
          style={{
            fontSize: "clamp(2.75rem, 7vw, 5.25rem)",
            lineHeight: 1.05,
            color: "var(--cream)",
            marginBottom: "1.25rem",
          }}
        >
          {tr.headline1}{" "}
          <span style={{ color: "var(--champagne)", fontStyle: "italic" }}>
            {tr.headline2}
          </span>
        </h1>

        <p
          className="hero-line hero-d3 mx-auto"
          style={{
            color: "rgba(245,241,232,0.62)",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "32rem",
            fontWeight: 300,
            marginBottom: "3rem",
          }}
        >
          {tr.sub}
        </p>

        <div className="hero-line hero-d4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-fill">
            <WAIcon />
            {tr.cta1}
          </a>
          <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line-light">
            {tr.cta2}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-line hero-d4">
        <div className="scroll-cue" aria-hidden="true" />
      </div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
