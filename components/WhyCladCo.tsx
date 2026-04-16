"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function WhyCladCo() {
  const { lang } = useLang();
  const tr = t[lang].why;

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="section-label">{tr.label}</p>
            <h2 className="section-heading mb-6">
              {tr.heading1}
              <br />
              {tr.heading2}
              <br />
              {tr.heading3}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">{tr.sub}</p>
            <div className="mt-10 bg-[#c2410c] rounded-2xl p-6 text-white max-w-xs">
              <p className="text-3xl font-black mb-1">{tr.stat}</p>
              <p className="text-sm text-orange-200 leading-snug">{tr.statSub}</p>
            </div>
          </div>

          <div className="space-y-0 divide-y divide-[#1e1e1e]">
            {tr.reasons.map((r, i) => (
              <div key={i} className="py-8 flex gap-6 group">
                <span className="text-xs font-bold text-[#2a2a2a] tracking-widest mt-1 min-w-[28px] group-hover:text-[#c2410c] transition-colors">
                  {r.number}
                </span>
                <div>
                  <h3 className="font-bold text-white mb-2 text-base">{r.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
