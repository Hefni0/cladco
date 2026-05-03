// =============================================================================
// FILE: components/WhyCladCo.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function WhyCladCo() {
  const { lang } = useLang();
  const tr = t[lang].why;

  return (
    <section className="why-section">
      <div className="why-container">
        <motion.div
          className="why-sticky"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp}>
            {tr.label}
          </motion.div>
          <motion.h2 variants={fadeUp}>
            {tr.heading1} {tr.heading2} <span className="italic">{tr.heading3}</span>
          </motion.h2>
          <motion.p variants={fadeUp}>{tr.sub}</motion.p>
          <motion.div className="why-stat" variants={fadeUp}>
            <div className="why-stat-num">{tr.stat}</div>
            <div className="why-stat-label">{tr.statSub}</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="why-reasons"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {tr.reasons.map((r, i) => (
            <motion.div key={i} className="why-reason" variants={fadeUp}>
              <div className="why-reason-num">{r.number}</div>
              <div>
                <h4>{r.title}</h4>
                <p>{r.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

