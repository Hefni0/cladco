"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { SectionLabelRow } from "./BrandMotif";
import { fadeUp, scaleUp, stagger, viewport } from "@/lib/motion";

export default function Process() {
  const { lang } = useLang();
  const tr = t[lang].process;

  return (
    <section className="py-28 md:py-36" style={{ background: "#1C2B45" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <SectionLabelRow text={tr.label} />
          <h2 className="section-heading max-w-lg mx-auto mt-2" style={{ color: "#F9F8F6" }}>
            {tr.heading}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {tr.steps.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              className="flex flex-col items-center text-center"
            >
              <motion.span
                className="font-display mb-5 block"
                style={{ fontSize: "2.2rem", color: "rgba(154,139,110,0.25)", letterSpacing: "-0.02em", lineHeight: 1 }}
                whileInView={{ color: "rgba(154,139,110,0.35)" }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                viewport={viewport}
              >
                {s.step}
              </motion.span>
              <h3 className="font-display font-bold text-sm mb-2" style={{ color: "#F9F8F6" }}>
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed"
                style={{ color: "#AEADA9", fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.85 }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
