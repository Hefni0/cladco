// =============================================================================
// FILE: components/WhoItsFor.tsx (SMART MERGE)
// CHANGES vs live site:
//   - REMOVED emoji icons from cards (cleaner, more premium look)
//   - REPLACED with elegant numbered cards (01-06)
//   - All translations preserved (just no longer reads .emoji)
// =============================================================================

"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function WhoItsFor() {
  const { lang } = useLang();
  const tr = t[lang].audience;

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <p className="section-label">{tr.label}</p>
          <h2 className="section-heading max-w-xl mx-auto">{tr.heading}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tr.items.map((item, i) => (
            <div
              key={i}
              className="card-lift bg-[#F9F8F6] border border-[#E2E1DE] hover:border-[#9A8B6E]/40 rounded-2xl p-6 md:p-8 flex flex-col gap-3 group"
            >
              <span className="text-xs font-bold text-[#9A8B6E] tracking-widest group-hover:text-[#9A8B6E] transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-[#0C0C0B] text-base mb-1">{item.label}</h3>
                <p className="text-sm text-[#6E6E6A] leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

