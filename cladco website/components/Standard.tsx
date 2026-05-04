"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import Reveal from "./Reveal";

export default function Standard() {
  const { lang } = useLang();
  const tr = t[lang].standard;

  return (
    <section className="section" style={{ background: "var(--cream-d)" }}>
      <div className="shell">
        <div className="text-center mb-20 md:mb-28">
          <Reveal>
            <p className="eyebrow mb-6">{tr.label}</p>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display mx-auto"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.1,
                color: "var(--ink)",
                maxWidth: "38rem",
                fontWeight: 500,
              }}
            >
              {tr.heading}
            </h2>
          </Reveal>
        </div>

        {/* 3 pillars in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12">
          {tr.pillars.map((p, i) => (
            <Reveal key={i} delay={((i + 1) as 1 | 2 | 3)}>
              <div className="text-center md:text-left">
                <span
                  className="font-display block mb-6"
                  style={{
                    color: "var(--champagne)",
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                  }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-display mb-4"
                  style={{
                    fontSize: "1.4rem",
                    color: "var(--ink)",
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
