"use client";

import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const icons = [
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H5v10c0 1.1.9 2 2 2h10a2 2 0 002-2V10h1.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
  </svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
  </svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" /><line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
  </svg>,
];

export default function WhatWeDo() {
  const { lang } = useLang();
  const tr = t[lang].services;

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <p className="section-label">{tr.label}</p>
          <h2 className="section-heading max-w-xl mx-auto">{tr.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tr.items.map((service, i) => (
            <div key={i} className="card-lift group border border-[#1e1e1e] rounded-2xl p-8 bg-[#141414] hover:border-[#c2410c]/40">
              <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] flex items-center justify-center text-[#c2410c] mb-6 group-hover:bg-[#c2410c] group-hover:text-white transition-colors duration-200">
                {icons[i]}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-[#1e1e1e] text-gray-500 rounded-full px-3 py-1 border border-[#2a2a2a]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
