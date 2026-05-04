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
    <section className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <p className="section-label">{tr.label}</p>
          <h2 className="section-heading max-w-xl mx-auto">{tr.heading}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tr.items.map((item, i) => (
            <div
              key={i}
              className="card-lift bg-[#141414] border border-[#1e1e1e] hover:border-[#c2410c]/40 rounded-2xl p-6 md:p-8 flex flex-col gap-3 group"
            >
              <span className="text-xs font-bold text-[#2a2a2a] tracking-widest group-hover:text-[#c2410c] transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-white text-base mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

