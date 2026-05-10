// =============================================================================
// FILE: components/WhyCladCo.tsx (SMART MERGE)
// CHANGES vs live site:
//   - REMOVED the orange 100% stat box (now in Stats grid section above)
//   - All other content preserved exactly
// =============================================================================

"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function WhyCladCo() {
  const { lang } = useLang();
  const tr = t[lang].why;

  return (
    <section className="py-24 md:py-32" style={{ background: "#1C2B45" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="section-label">{tr.label}</p>
            <h2 className="section-heading mb-6" style={{ color: "#F9F8F6" }}>
              {tr.heading1}
              <br />
              {tr.heading2}
              <br />
              {tr.heading3}
            </h2>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: "rgba(249,248,246,0.55)" }}>{tr.sub}</p>
            {/* The orange 100% stat block was removed — that data is now in
                the Stats grid section higher up the page. */}
          </div>

          <div className="space-y-4">
            {tr.reasons.map((r, i) => (
              <div
                key={i}
                className="p-6 grid grid-cols-[1fr_auto] gap-x-6 items-start group"
                style={{ background: "#1a1816", border: "1px solid rgba(154,139,110,0.20)" }}
              >
                <div className="min-w-0">
                  <h3 className="font-semibold mb-2 text-lg leading-snug" style={{ color: "#F9F8F6" }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(249,248,246,0.55)" }}>{r.description}</p>
                </div>
                <span
                  className="text-xs font-semibold tracking-[0.2em] mt-1 select-none transition-colors"
                  style={{ color: "#9A8B6E" }}
                  aria-hidden="true"
                >
                  {r.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

