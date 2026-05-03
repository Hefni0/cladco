// =============================================================================
// FILE: components/WhoItsFor.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function WhoItsFor() {
  const { lang } = useLang();
  const tr = t[lang].audience;

  return (
    <section className="section section-cream">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp}>
            {tr.label}
          </motion.div>
          <motion.h2 className="section-heading" variants={fadeUp}>
            {tr.heading}
          </motion.h2>
        </motion.div>

        <motion.div
          className="audience-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          {tr.items.map((item, i) => (
            <motion.div key={i} className="audience-card" variants={fadeUp}>
              <div className="audience-num">0{i + 1}</div>
              <h4 className="audience-label">{item.label}</h4>
              <p className="audience-desc">{item.desc}</p>
              <div className="audience-arrow">→</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

