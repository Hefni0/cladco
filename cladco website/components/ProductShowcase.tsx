"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { WHATSAPP_URL } from "@/lib/constants";
import Reveal from "./Reveal";

const PRODUCT_IMAGES: Record<string, string> = {
  tshirt:   "/product-badge.png",
  cup:      "/product-cup-paper.png",
  notebook: "/product-notebook.png",
  badge:    "/product-badge.png",
};

export default function ProductShowcase() {
  const { lang } = useLang();
  const tr = t[lang].showcase;

  return (
    <section className="section" style={{ background: "var(--cream-d)" }}>
      <div className="shell">

        <div className="mb-20 md:mb-28">
          <Reveal>
            <p className="eyebrow mb-6">{tr.label}</p>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: 1.05,
                color: "var(--ink)",
                maxWidth: "32rem",
                fontWeight: 500,
              }}
            >
              {tr.heading}
            </h2>
          </Reveal>
        </div>

        {/* Two-column asymmetric grid: alternating large + small */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {tr.items.map((item, i) => {
            const isWide = i === 0 || i === 3; // 0,3 wide; 1,2 narrow
            const colClass = isWide ? "md:col-span-7" : "md:col-span-5";
            return (
              <Reveal
                key={item.key}
                delay={(((i % 3) + 1) as 1 | 2 | 3)}
                className={colClass}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: isWide ? "5 / 4" : "4 / 5",
                      background: "var(--cream)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PRODUCT_IMAGES[item.key] ?? "/product-badge.png"}
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        transform: "scale(1)",
                        transition: "transform 1400ms cubic-bezier(.16,1,.3,1), filter 700ms ease",
                        filter: "saturate(0.92)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.04)";
                        e.currentTarget.style.filter = "saturate(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.filter = "saturate(0.92)";
                      }}
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between">
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.35rem",
                        color: "var(--ink)",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </h3>
                    <span
                      className="eyebrow"
                      style={{ color: "var(--champagne)" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <p
                    className="mt-2"
                    style={{
                      color: "var(--ink-soft)",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      fontWeight: 300,
                      maxWidth: "26rem",
                    }}
                  >
                    {item.desc}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={2}>
          <p
            className="text-center mt-20 md:mt-24"
            style={{
              color: "var(--ink-soft)",
              fontSize: "0.78rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {tr.cta}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
