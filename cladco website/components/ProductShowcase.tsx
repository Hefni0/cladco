// =============================================================================
// FILE: components/ProductShowcase.tsx (REPLACED — matches demo)
// NOTE: Demo uses CSS shapes. Original videos in /public/videos/ are preserved
// — Ahmed will re-integrate them manually after this clone is in place.
// =============================================================================

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function ProductShowcase() {
  const { lang } = useLang();
  const tr = t[lang].showcase;
  const sectionRef = useRef<HTMLElement | null>(null);

  // 3D tilt effect on hover
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".product-card-tilt");
    if (!cards) return;

    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-8px) scale(1.02)`;
      };
      const leave = () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [lang]);

  return (
    <section className="section section-cream" ref={sectionRef}>
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
            {tr.sub}
          </motion.p>
        </motion.div>

        <motion.div
          className="products-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {tr.items.map((item, i) => (
            <motion.div key={item.key} className="product-card-tilt" variants={fadeUp}>
              <div className="product-mock-area">
                <div className={`product-shape product-shape-${item.key}`} />
              </div>
              <div className="product-card-content">
                <h4 className="product-label">{item.label}</h4>
                <p className="product-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="products-cta-note"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {tr.cta}
        </motion.p>
      </div>
    </section>
  );
}

