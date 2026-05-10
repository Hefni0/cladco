"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { SectionLabelRow } from "./BrandMotif";
import { fadeUp, scaleUp, stagger, viewport } from "@/lib/motion";

const icons = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H5v10c0 1.1.9 2 2 2h10a2 2 0 002-2V10h1.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
  </svg>,
];

export default function WhatWeDo() {
  const { lang } = useLang();
  const tr = t[lang].services;

  return (
    <section id="services" className="py-28 md:py-36" style={{ background: "#1a1816" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <SectionLabelRow text={tr.label} />
          <h2 className="section-heading max-w-xl mx-auto mt-2" style={{ color: "#F9F8F6" }}>
            {tr.heading}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {tr.items.map((service, i) => (
            <motion.div key={i} variants={scaleUp}>
              <motion.div
                className="group rounded-2xl p-8 h-full relative overflow-hidden cursor-default"
                style={{
                  background: "#F9F8F6",
                  border: "1px solid #E2E1DE",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08), 0 4px 12px rgba(154,139,110,0.1)",
                  borderColor: "rgba(154,139,110,0.35)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-7"
                  style={{ background: "#F2F1EF", color: "#7a6d55" }}>
                  {icons[i]}
                </div>

                <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#0C0C0B" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.8 }}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1"
                      style={{ background: "#F2F1EF", color: "#7a6d55", border: "1px solid #E2E1DE", borderRadius: 0 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
