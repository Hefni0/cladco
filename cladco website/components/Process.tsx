// =============================================================================
// FILE: components/Process.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function Process() {
  const { lang } = useLang();
  const tr = t[lang].process;

  return (
    <section className="section section-dark process-section">
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
          <motion.h2 className="section-heading-dark" variants={fadeUp}>
            {tr.heading.split(".")[0]}.
            <br />
            <span className="italic">{tr.heading.split(".").slice(1).join(".").trim()}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.18)}
        >
          {/* Animated dotted line connecting all steps */}
          <motion.div
            className="process-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{ transformOrigin: "left" }}
          />

          {tr.steps.map((step, i) => (
            <motion.div key={i} className="process-step" variants={fadeUp}>
              <div className="process-step-num">{step.step}</div>
              <h4 className="process-step-title">{step.title}</h4>
              <p className="process-step-desc">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            {tr.cta} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

