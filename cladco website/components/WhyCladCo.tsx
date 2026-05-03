"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { slideLeft, slideRight, fadeUp, stagger, viewport } from "@/lib/motion";

function useCounter(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.round(start));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

export default function WhyCladCo() {
  const { lang } = useLang();
  const tr = t[lang].why;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(100, inView);

  return (
    <section className="py-28 md:py-36" style={{ background: "#F9F8F6" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            className="lg:sticky lg:top-28"
            variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <p className="section-label">{tr.label}</p>
            <h2 className="section-heading mt-2 mb-6" style={{ color: "#0C0C0B" }}>
              {tr.heading1}<br />{tr.heading2}<br />
              <span style={{ color: "#7a6d55" }}>{tr.heading3}</span>
            </h2>
            <p className="text-base leading-relaxed max-w-sm"
              style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.85 }}>
              {tr.sub}
            </p>

            <div className="mt-12">
              <motion.p
                className="font-display"
                style={{ fontSize: "4rem", color: "#9A8B6E", lineHeight: 1, letterSpacing: "-0.03em" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {count}%
              </motion.p>
              <p className="text-[10px] tracking-widest uppercase mt-2"
                style={{ color: "#AEADA9", fontFamily: "Inter, system-ui, sans-serif" }}>
                {tr.statSub}
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="divide-y"
            style={{ borderTop: "1px solid #EBEBEA", borderColor: "#EBEBEA" }}
            variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {tr.reasons.map((r, i) => (
              <motion.div
                key={i}
                className="py-7 flex gap-6 group cursor-default"
                style={{ borderBottom: "1px solid #EBEBEA" }}
                variants={slideRight}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <span className="text-xs font-bold tracking-widest mt-0.5 min-w-[28px] transition-colors duration-300"
                  style={{ color: "#DEDDD9", fontFamily: "Inter, system-ui, sans-serif" }}>
                  {r.number}
                </span>
                <div>
                  <h3 className="font-display font-bold mb-2 text-base" style={{ color: "#0C0C0B" }}>
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed"
                    style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1.8 }}>
                    {r.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
