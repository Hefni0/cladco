// =============================================================================
// FILE: components/Hero.tsx (SMART MERGE)
// CHANGES vs live site:
//   - Cinematic 3-phase logo entrance (center → lift → settle)
//   - Letter-by-letter headline reveal
//   - Magnetic CTA buttons
//   - Mouse-tracking gold/orange glow
//   - Industry ticker at bottom
//   - Scroll indicator without "Scroll" text
//   - All translations + WhatsApp link preserved
// NO external dependencies (HeroParticles/BrandMotif removed — were not in live site)
// =============================================================================

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const QUOTE_URL = "https://cladco-requests.netlify.app/";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const logoWrapRef = useRef<HTMLDivElement | null>(null);

  // Mouse-tracking glow inside hero
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      glow.style.left = `${e.clientX - rect.left}px`;
      glow.style.top = `${e.clientY - rect.top}px`;
    };
    hero.addEventListener("mousemove", onMove, { passive: true });
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  // Add settled class after both intro animations finish (3.9s)
  useEffect(() => {
    const timer = setTimeout(() => {
      logoWrapRef.current?.classList.add("settled");
    }, 3900);
    return () => clearTimeout(timer);
  }, []);

  // Magnetic buttons
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
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
      style={{ background: "#1a1816" }}
    >
      {/* 3D CladCo logo — blurred, slow rotation, centered behind everything */}
      <div className="hero-3d-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon-3d.png" alt="" />
      </div>

      {/* Static ambient glow */}
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none hero-glow-pulse"
        style={{ background: "radial-gradient(ellipse, rgba(194,65,12,0.06) 0%, transparent 60%)" }}
      />

      {/* Mouse-tracking glow */}
      <div ref={glowRef} className="hero-mouse-glow" aria-hidden="true" />

      {/* Industry ticker at bottom */}
      <div
        className="absolute bottom-20 left-0 right-0 overflow-hidden pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.6) 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.6) 88%, transparent 100%)",
        }}
      >
        <div className="ticker-track items-center py-2">
          {[
            "Restaurant", "Café", "Corporate", "School", "Hotel", "Events",
            "Retail", "Clinic", "Sports", "Hospitality", "Government", "Agency",
            "Restaurant", "Café", "Corporate", "School", "Hotel", "Events",
            "Retail", "Clinic", "Sports", "Hospitality", "Government", "Agency",
          ].map((label, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5">
              <span
                className="text-[10px] font-semibold tracking-[0.22em] uppercase whitespace-nowrap"
                style={{ color: "rgba(194,65,12,0.4)", fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {label}
              </span>
              <span style={{ color: "rgba(194,65,12,0.18)", fontSize: 6 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1816] to-transparent pointer-events-none" />

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c2410c] to-transparent opacity-60" />

      {/* ============================================================
          LOGO — absolutely positioned, animates from center → top
          ============================================================ */}
      <div ref={logoWrapRef} className="logo-cinematic">
        <Image
          src="/logo.png"
          alt="CladCo"
          width={3544}
          height={3544}
          className="w-full h-auto object-contain mx-auto max-w-[400px]"
          style={{ filter: "drop-shadow(0 0 40px rgba(194,65,12,0.15))" }}
          priority
        />
      </div>

      {/* ============================================================
          CONTENT — appears below logo after it lifts up (4.0s+)
          ============================================================ */}
      <div className="hero-content-v2 relative max-w-5xl mx-auto px-5 md:px-8 text-center pb-16 z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 opacity-0 hero-fade"
          style={{
            border: "1px solid rgba(194,65,12,0.25)",
            background: "rgba(194,65,12,0.07)",
            animationDelay: "3.9s",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#c2410c" }} />
          <span
            className="text-xs font-medium tracking-[0.22em] uppercase"
            style={{ color: "#c2410c", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            {tr.badge}
          </span>
        </div>

        {/* Headline — letter-by-letter reveal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
          <span className="headline-mask">
            <span className="headline-inner block" style={{ color: "#ffffff", animationDelay: "4s" }}>
              {tr.headline1}
            </span>
          </span>
          <span className="headline-mask">
            <span
              className="headline-inner block"
              style={{ color: "#c2410c", fontStyle: "italic", animationDelay: "4.25s" }}
            >
              {tr.headline2}
            </span>
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light text-gray-400 opacity-0 hero-fade"
          style={{ animationDelay: "4.7s" }}
        >
          {tr.sub}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 hero-fade"
          style={{ animationDelay: "5s" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="btn-whatsapp btn-magnetic text-sm w-full sm:w-auto justify-center"
          >
            <WAIcon />
            {tr.cta1}
          </a>
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="btn-outline btn-magnetic text-sm w-full sm:w-auto justify-center"
          >
            {tr.cta2}
          </a>
        </div>

        {/* Trust line */}
        <p
          className="mt-10 text-xs tracking-wider text-gray-600 opacity-0 hero-fade"
          style={{ animationDelay: "5.4s" }}
        >
          {tr.trust}
        </p>
      </div>

      {/* Scroll indicator (line only, no text) */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 hero-fade"
        style={{ animationDelay: "5.7s" }}
      >
        <div className="scroll-indicator-line" aria-hidden="true" />
      </div>
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

