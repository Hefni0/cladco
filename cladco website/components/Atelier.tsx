"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import Reveal from "./Reveal";

export default function Atelier() {
  const { lang } = useLang();
  const tr = t[lang].atelier;

  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="shell">

        {/* Manifesto */}
        <div className="text-center mb-32 md:mb-40">
          <Reveal>
            <p className="eyebrow mb-8">{tr.eyebrow}</p>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="font-display mx-auto"
              style={{
                fontSize: "clamp(1.85rem, 4vw, 3.25rem)",
                lineHeight: 1.25,
                color: "var(--ink)",
                maxWidth: "44rem",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {tr.manifesto}
            </h2>
          </Reveal>
        </div>

        <Reveal>
          <hr className="hairline mb-20 md:mb-24" />
        </Reveal>

        {/* Services — editorial menu (3 numbered rows) */}
        <Reveal delay={1}>
          <p className="eyebrow text-center mb-16">{tr.servicesLabel}</p>
        </Reveal>

        <div className="space-y-0">
          {tr.services.map((s, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="grid grid-cols-[auto_1fr] md:grid-cols-[3rem_18rem_1fr] gap-x-8 md:gap-x-12 gap-y-3 py-10 md:py-14"
                style={{ borderBottom: "1px solid var(--hairline)" }}
              >
                <span
                  className="font-display"
                  style={{
                    color: "var(--champagne)",
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                    lineHeight: 1,
                  }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-display col-span-1"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                    color: "var(--ink)",
                    lineHeight: 1.15,
                    fontWeight: 500,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="col-span-2 md:col-span-1"
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    fontWeight: 300,
                    maxWidth: "32rem",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Audience — single elegant line */}
        <div className="mt-24 md:mt-32 text-center">
          <Reveal>
            <p className="eyebrow mb-6">{tr.forLabel}</p>
          </Reveal>
          <Reveal delay={1}>
            <p
              className="font-display mx-auto"
              style={{
                fontSize: "clamp(1.05rem, 1.5vw, 1.35rem)",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                maxWidth: "44rem",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {tr.audience}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
