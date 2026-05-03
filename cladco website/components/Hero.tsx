"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import HeroParticles from "./HeroParticles";
import { BrandIconBg } from "./BrandMotif";

const ease = [0.16, 1, 0.3, 1] as const;
const QUOTE_URL = "https://cladco-requests.netlify.app/";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  const logoControls = useAnimation();
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const logoWrapRef = useRef<HTMLDivElement | null>(null);

  const pulseLogo = async () => {
    await logoControls.start({
      scale: [1, 1.1, 0.97, 1],
      rotate: [0, 2, -1.5, 0],
      transition: { duration: 0.55, ease },
    });
  };

  // Mouse-tracking gold glow inside hero
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      glow.style.left = `${e.clientX - rect.left}px`;
      glow.style.top = `${e.clientY - rect.top}px`;
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  // Add settled class AFTER both intro animations complete (3.9s)
  useEffect(() => {
    const timer = setTimeout(() => {
      logoWrapRef.current?.classList.add("settled");
    }, 3900);
    return () => clearTimeout(timer);
  }, []);

  // Magnetic buttons
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    const handlers: { el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }[] = [];

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
      style={{ background: "#1C2B45" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(154,139,110,0.10) 0%, transparent 60%)" }}
      />
      <BrandIconBg size={700} opacity={0.12} variant="3d" animate />
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none hero-glow-pulse"
        style={{ background: "radial-gradient(ellipse, rgba(154,139,110,0.06) 0%, transparent 60%)" }}
      />

      {/* Mouse-tracking gold glow */}
      <div ref={glowRef} className="hero-mouse-glow" aria-hidden="true" />

      <HeroParticles />

      {/* Industry ticker */}
      <div
        className="absolute bottom-20 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.6) 88%, transparent 100%)" }}
      >
        <div className="ticker-track items-center py-2">
          {["Restaurant","Café","Corporate","School","Hotel","Events","Retail","Clinic","Sports","Hospitality","Government","Agency",
            "Restaurant","Café","Corporate","School","Hotel","Events","Retail","Clinic","Sports","Hospitality","Government","Agency"].map((label, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5">
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase whitespace-nowrap" style={{ color: "rgba(154,139,110,0.4)", fontFamily: "Inter, system-ui, sans-serif" }}>{label}</span>
              <span style={{ color: "rgba(154,139,110,0.18)", fontSize: 6 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none" style={{ background: "linear-gradient(to top, #1C2B45, transparent)" }} />

      {/* LOGO — absolutely positioned at viewport center, then lifts up via globals.css keyframes */}
      <div
        ref={logoWrapRef}
        className="logo-cinematic"
        style={{ pointerEvents: "auto" }}
      >
        <motion.div animate={logoControls} style={{ display: "block" }}>
          <Image
            src="/logo.png"
            alt="CladCo"
            width={3544}
            height={3544}
            className="w-full h-auto object-contain"
            style={{ filter: "drop-shadow(0 0 40px rgba(154,139,110,0.15))" }}
            priority
          />
        </motion.div>
      </div>

      {/* CONTENT — Headline + sub + CTAs appear after logo lifts up */}
      <div className="hero-content-v2 relative max-w-5xl mx-auto px-5 md:px-8 text-center pb-16" style={{ zIndex: 10 }}>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{ border: "1px solid rgba(154,139,110,0.25)", background: "rgba(154,139,110,0.07)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.9, duration: 0.7, ease }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#9A8B6E" }} />
          <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: "#9A8B6E", fontFamily: "Inter, system-ui, sans-serif" }}>{tr.badge}</span>
        </motion.div>

        {/* Headline — letter-by-letter reveal (4.0s and 4.25s delays) */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-8">
          <span className="headline-mask">
            <span
              className="headline-inner block"
              style={{ color: "#F9F8F6", animationDelay: "4s" }}
            >
              {tr.headline1}
            </span>
          </span>
          <span className="headline-mask">
            <span
              className="headline-inner block"
              style={{ color: "#9A8B6E", fontStyle: "italic", animationDelay: "4.25s" }}
            >
              {tr.headline2}
            </span>
          </span>
        </h1>

        {/* Sub */}
        <motion.p
          className="text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light"
          style={{ color: "#AEADA9", fontFamily: "Inter, system-ui, sans-serif" }}
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 4.7, duration: 0.9, ease }}
        >
          {tr.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.7, ease }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="btn-primary btn-magnetic btn-magnetic-primary text-sm w-full sm:w-auto justify-center gap-3"
            onClick={pulseLogo}
          >
            <WAIcon />
            {tr.cta1}
          </a>
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="btn-outline btn-magnetic btn-magnetic-ghost text-sm w-full sm:w-auto justify-center"
            onClick={pulseLogo}
          >
            {tr.cta2}
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="mt-10 text-xs tracking-wider"
          style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.4, duration: 0.8 }}
        >
          {tr.trust}
        </motion.p>
      </div>

      {/* Scroll indicator (line only) */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.7, duration: 0.8 }}
      >
        <div className="scroll-indicator-line" aria-hidden="true" />
      </motion.div>
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
