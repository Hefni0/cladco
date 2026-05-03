// =============================================================================
// FILE: components/WhatWeDo.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function WhatWeDo() {
  const { lang } = useLang();
  const tr = t[lang].services;

  return (
    <section className="section section-light">
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
            {tr.heading.split(" ").slice(0, -2).join(" ")} {" "}
            <span className="italic">{tr.heading.split(" ").slice(-2).join(" ")}</span>
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>
            {lang === "ar"
              ? "ثلاثة محاور. فلسفة واحدة: دقة بدون تكلّف."
              : "Three pillars. One philosophy: precision without pretension."}
          </motion.p>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.15)}
        >
          {tr.items.map((item, i) => (
            <motion.div key={i} className="service-card" variants={fadeUp}>
              <div className="service-num">0{i + 1}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.description}</p>
              <div className="service-tags">
                {item.tags.map((tag, j) => (
                  <span key={j} className="service-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

