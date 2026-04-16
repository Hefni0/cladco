"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

export default function CTASection() {
  const { lang } = useLang();
  const tr = t[lang].cta;

  return (
    <section className="py-24 md:py-36 bg-[#c2410c] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-black/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-200 mb-5">{tr.badge}</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
          {tr.heading1}
          <br />
          {tr.heading2}
        </h2>
        <p className="text-orange-100 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed">{tr.sub}</p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#0a0a0a] text-white font-semibold
                     px-10 py-4 rounded-full text-base tracking-wide
                     transition-all duration-200 hover:bg-[#1a1a1a] hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
        >
          <WhatsAppIcon />
          {tr.button}
        </a>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-orange-200 text-xs">
          <span className="flex items-center gap-2"><CheckIcon />{tr.trust1}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-orange-400/40" />
          <span className="flex items-center gap-2"><CheckIcon />{tr.trust2}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-orange-400/40" />
          <span className="flex items-center gap-2"><CheckIcon />{tr.trust3}</span>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
