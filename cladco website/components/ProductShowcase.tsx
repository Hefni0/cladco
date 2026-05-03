"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { SectionLabelRow } from "./BrandMotif";
import { fadeUp, scaleUp, stagger, viewport } from "@/lib/motion";

/* ─── Video sources mapped to product keys ─────────────────────────── */
const VIDEO_MAP: Record<string, { src: string; type: string }[]> = {
  tshirt:   [{ src: "/videos/tshirt.mp4",   type: "video/mp4" }],
  cup:      [{ src: "/videos/cup.mp4",       type: "video/mp4" }],
  notebook: [{ src: "/videos/notebook.mp4",  type: "video/mp4" }],
  badge:    [{ src: "/videos/badge.mp4",     type: "video/mp4" }],
};

/* ─── Product data ─────────────────────────────────────────────────── */
const PRODUCTS = [
  { key: "tshirt",   rotate: "-1.5deg" },
  { key: "cup",      rotate: "1.5deg"  },
  { key: "notebook", rotate: "-1deg"   },
  { key: "badge",    rotate: "2deg"    },
];

/* ─── Main section ─────────────────────────────────────────────────── */
export default function ProductShowcase() {
  const { lang } = useLang();
  const tr = t[lang].showcase;

  return (
    <section className="py-24 md:py-36 relative overflow-hidden" style={{ background: "#F2F1EF" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <SectionLabelRow text={tr.label} />
          <h2 className="section-heading max-w-lg mx-auto" style={{ color: "#0C0C0B" }}>
            {tr.heading}
          </h2>
          <p
            className="mt-4 text-sm max-w-sm mx-auto"
            style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            {tr.sub}
          </p>
        </motion.div>

        {/* Product grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7"
          variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {PRODUCTS.map((p) => {
            const item = tr.items.find((x) => x.key === p.key) ?? { label: "", desc: "" };
            const sources = VIDEO_MAP[p.key] ?? [];
            return (
              <motion.div
                key={p.key}
                variants={scaleUp}
                className="flex flex-col gap-4"
              >
                {/* Card */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden cursor-default aspect-square"
                  style={{
                    transform: `rotate(${p.rotate})`,
                    background: "#0C0C0B",
                    border: "1px solid rgba(154,139,110,0.18)",
                  }}
                  whileHover={{ scale: 1.04, rotate: "0deg" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  {/* Video mockup */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ display: "block" }}
                  >
                    {sources.map((s) => (
                      <source key={s.src} src={s.src} type={s.type} />
                    ))}
                  </video>

                  {/* Bottom label overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3 z-20"
                    style={{ background: "linear-gradient(to top, rgba(12,12,11,0.88) 0%, transparent 100%)" }}
                  >
                    <p
                      className="text-xs font-semibold truncate"
                      style={{ color: "#F9F8F6", fontFamily: "Inter, system-ui, sans-serif", letterSpacing: "0.06em" }}
                    >
                      {item.label}
                    </p>
                  </div>
                </motion.div>

                {/* Description below card */}
                <p
                  className="text-xs leading-relaxed text-center px-1"
                  style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer line */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <p
            className="text-xs tracking-wider"
            style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            {tr.cta}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
