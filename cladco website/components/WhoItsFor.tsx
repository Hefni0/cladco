"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { SectionLabelRow } from "./BrandMotif";
import { fadeUp, scaleUp, stagger, viewport } from "@/lib/motion";

export default function WhoItsFor() {
  const { lang } = useLang();
  const tr = t[lang].audience;

  return (
    <section className="py-28 md:py-36" style={{ background: "#1C2B45" }}>
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
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          variants={stagger(0.07)} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {tr.items.map((item, i) => (
            <motion.div key={i} variants={scaleUp}>
              <motion.div
                className="p-6 md:p-7 h-full cursor-default"
                style={{
                  background: "#1e2e4a",
                  border: "1px solid rgba(154,139,110,0.1)",
                }}
                whileHover={{
                  background: "#243652",
                  borderColor: "rgba(154,139,110,0.28)",
                  y: -4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <h3 className="font-display font-bold text-base mb-2" style={{ color: "#F9F8F6" }}>
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif" }}>
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
