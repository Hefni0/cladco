"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const GOLD = "rgba(154,139,110,";

// blend: "screen" kills black bg, "multiply" kills white bg
const ITEMS = [
  { label: "Cup",      src: "/videos/cup.mp4",      blend: "multiply" },
  { label: "Notebook", src: "/videos/notebook.mp4", blend: "screen"   },
  { label: "T-Shirt",  src: "/videos/tshirt.mp4",   blend: "screen"   },
];

function FlowArrow() {
  return (
    <div className="hidden sm:flex items-center mb-6 flex-shrink-0">
      <svg width="36" height="10" viewBox="0 0 36 10" fill="none" aria-hidden>
        <path
          d="M 0,5 L 28,5 M 22,1 L 28,5 L 22,9"
          stroke={`${GOLD}0.3)`} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function BrandJourneyStrip() {
  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      style={{ background: "#1C2B45", borderTop: "1px solid rgba(154,139,110,0.14)" }}
      aria-label="Brand transformation showcase"
    >
      <div className="max-w-2xl mx-auto px-5 md:px-8 relative" style={{ zIndex: 2 }}>

        {/* Label */}
        <motion.p
          className="text-center text-[10px] tracking-[0.28em] uppercase font-semibold mb-10"
          style={{ color: `${GOLD}0.5)`, fontFamily: "Inter, system-ui, sans-serif" }}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          From Blank to Branded
        </motion.p>

        {/* Video thumbnails row */}
        <motion.div
          className="flex items-end justify-center gap-4 sm:gap-6"
          variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {ITEMS.map((item, idx) => (
            <div key={item.label} className="flex items-end gap-4 sm:gap-6">
              <motion.div
                className="flex flex-col items-center gap-2"
                variants={fadeUp}
              >
                {/* Small video card */}
                <motion.div
                  className="relative overflow-hidden"
                  style={{
                    width: 72,
                    height: 88,
                    borderRadius: 8,
                    border: `1px solid ${GOLD}0.18)`,
                    background: "transparent",
                    flexShrink: 0,
                  }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      display: "block",
                      mixBlendMode: item.blend as React.CSSProperties["mixBlendMode"],
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                </motion.div>

                {/* Label */}
                <p
                  className="text-[9px] tracking-[0.2em] uppercase font-semibold"
                  style={{ color: `${GOLD}0.45)`, fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {item.label}
                </p>
              </motion.div>

              {/* Arrow between items (not after last) */}
              {idx < ITEMS.length - 1 && <FlowArrow />}
            </div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-center mt-8 text-xs font-light"
          style={{
            color: "rgba(249,248,246,0.3)",
            letterSpacing: "0.06em",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          Your logo. Your identity. On every product we deliver.
        </motion.p>
      </div>
    </section>
  );
}
