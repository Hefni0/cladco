// =============================================================================
// FILE: components/StatsAndCharts.tsx (NEW)
// Two parts in one component:
//   1. Stats grid (4 stats with animated counters, light bg)
//   2. Charts section (tabbed: Journey + Quality, dark bg)
// Uses translations from t[lang].stats and t[lang].charts
// =============================================================================

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─────────── Animated Counter ─────────── */
function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 2200;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="stat-num-anim inline-flex items-baseline gap-[2px]">
      <span>{val}</span>
      {suffix && (
        <span className="text-[0.5em]" style={{ color: "var(--champagne)" }}>{suffix}</span>
      )}
    </span>
  );
}

/* ─────────── Journey Chart ─────────── */
function JourneyChart({ stages, disclaimer }: {
  stages: { day: string; label: string; desc: string }[];
  disclaimer: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<SVGPathElement | null>(null);
  const inView = useInView(wrapRef, { once: true, threshold: 0.3 } as never);

  useEffect(() => {
    if (!inView || !lineRef.current) return;
    const path = lineRef.current;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.getBoundingClientRect(); // force reflow
    path.style.transition = "stroke-dashoffset 2.4s cubic-bezier(0.16,1,0.3,1)";
    path.style.strokeDashoffset = "0";
  }, [inView]);

  // Map stage index to (x, y) on the SVG canvas
  const points = [
    { x: 80,   y: 165 }, // Day 1
    { x: 315,  y: 105 }, // Day 5
    { x: 550,  y: 70  }, // Day 8
    { x: 785,  y: 50  }, // Day 18
    { x: 1020, y: 20  }, // Day 25
  ];

  // Where to position labels (above or below the curve)
  const labelOffsets = [
    { y: -65, descY: -45 }, // Day 1 — labels above
    { y: -50, descY: -30 },
    { y: -30, descY: -10 },
    { y: 60,  descY: 80  }, // Day 18 — labels BELOW
    { y: 100, descY: 120 }, // Day 25 — labels BELOW
  ];

  return (
    <div ref={wrapRef} className="relative pt-12 pb-4">
      <svg
        className="w-full h-auto overflow-visible"
        viewBox="0 0 1100 360"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="journeyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9A8B6E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9A8B6E" stopOpacity="0" />
          </linearGradient>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line className="journey-axis-line" x1="80" y1="200" x2="1020" y2="200" />

        {/* Day labels along axis */}
        {stages.map((s, i) => (
          <text key={i} className="journey-day" x={points[i].x} y={225} textAnchor="middle">
            {s.day}
          </text>
        ))}

        {/* Animated area under curve */}
        <motion.path
          className="journey-area"
          d="M 80 165 C 200 160, 250 130, 315 105 C 400 75, 470 60, 550 70 C 650 80, 720 70, 785 50 C 880 30, 950 25, 1020 20 L 1020 200 L 80 200 Z"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1, ease }}
        />

        {/* Animated progress line */}
        <path
          ref={lineRef}
          className="journey-progress-line"
          d="M 80 165 C 200 160, 250 130, 315 105 C 400 75, 470 60, 550 70 C 650 80, 720 70, 785 50 C 880 30, 950 25, 1020 20"
        />

        {/* Stage nodes + labels */}
        {stages.map((s, i) => {
          const isFinal = i === stages.length - 1;
          const off = labelOffsets[i];
          const delay = 0.3 + i * 0.3;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay, ease }}
            >
              <text
                className="journey-label"
                x={points[i].x}
                y={points[i].y + off.y}
                textAnchor="middle"
              >
                {s.label}
              </text>
              <text
                className="journey-desc"
                x={points[i].x}
                y={points[i].y + off.descY}
                textAnchor="middle"
              >
                {s.desc}
              </text>
              <motion.circle
                className={isFinal ? "journey-node journey-node-final" : "journey-node"}
                cx={points[i].x}
                cy={points[i].y}
                r={isFinal ? 9 : 7}
                filter="url(#nodeGlow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: delay + 0.05, ease }}
                style={{ transformOrigin: `${points[i].x}px ${points[i].y}px` }}
              />
            </motion.g>
          );
        })}
      </svg>

      {/* Disclaimer */}
      <div
        className="mt-6 text-center font-light italic"
        style={{ fontSize: "0.78rem", color: "rgba(249,248,246,0.45)" }}
      >
        <span
          className="inline-block w-3.5 h-3.5 rounded-full text-center align-middle mr-2 not-italic font-semibold"
          style={{
            border: "1px solid var(--champagne)",
            color: "var(--champagne)",
            fontSize: "9px",
            lineHeight: "12px",
          }}
        >
          i
        </span>
        {disclaimer}
      </div>
    </div>
  );
}

/* ─────────── Quality Radar Chart ─────────── */
function QualityChart({
  items,
  radarLabels,
  active,
}: {
  items: { num: string; title: string; desc: string; value: number }[];
  radarLabels: { label: string; value: string }[];
  active: boolean;
}) {
  // Pentagon vertex coordinates (scaled to ~95% chart radius)
  const vertices = [
    { x: 0,    y: -171 }, // top
    { x: 154,  y: -50  },
    { x: 97,   y: 134  },
    { x: -102, y: 140  },
    { x: -150, y: -49  },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center py-8">
      {/* Radar SVG */}
      <div className="relative w-full max-w-[480px] mx-auto aspect-square">
        <svg className="w-full h-full overflow-visible" viewBox="-220 -220 440 440">
          {/* Grid pentagons (5 levels) */}
          <polygon className="radar-grid" points="0,-180 171,-56 106,146 -106,146 -171,-56" />
          <polygon className="radar-grid" points="0,-144 137,-44 85,117 -85,117 -137,-44" />
          <polygon className="radar-grid" points="0,-108 103,-33 64,87 -64,87 -103,-33" />
          <polygon className="radar-grid" points="0,-72 68,-22 42,58 -42,58 -68,-22" />
          <polygon className="radar-grid radar-grid-active" points="0,-36 34,-11 21,29 -21,29 -34,-11" />

          {/* Axes */}
          {vertices.map((v, i) => (
            <line key={i} className="radar-axis" x1={0} y1={0} x2={v.x * 1.1} y2={v.y * 1.1} />
          ))}

          {/* Data shape (animated scale) */}
          <motion.polygon
            className="radar-shape"
            points={vertices.map((v) => `${v.x},${v.y}`).join(" ")}
            initial={{ scale: 0, opacity: 0 }}
            animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            style={{ transformOrigin: "center" }}
          />

          {/* Data points */}
          {vertices.map((v, i) => (
            <motion.circle
              key={i}
              className="radar-point"
              cx={v.x}
              cy={v.y}
              r={4}
              initial={{ scale: 0 }}
              animate={active ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease }}
              style={{ transformOrigin: `${v.x}px ${v.y}px` }}
            />
          ))}

          {/* Labels around radar */}
          {radarLabels.map((lbl, i) => {
            const v = vertices[i];
            const lx = v.x * 1.18;
            const ly = v.y * 1.18 - 10;
            return (
              <g key={i}>
                <text className="radar-label" x={lx} y={ly} textAnchor="middle">
                  {lbl.label}
                </text>
                <text className="radar-value" x={lx} y={ly + 13} textAnchor="middle">
                  {lbl.value}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Side list */}
      <div className="flex flex-col gap-2">
        {items.map((it, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-[auto_1fr_auto] gap-5 items-center py-4"
            style={{ borderBottom: i < items.length - 1 ? "1px solid rgba(154,139,110,0.08)" : "none" }}
            initial={{ opacity: 0, x: 20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease }}
          >
            <div
              className="font-display italic text-2xl"
              style={{ color: "var(--champagne)" }}
            >
              {it.num}
            </div>
            <div>
              <h5
                className="text-base font-semibold mb-1"
                style={{ color: "#F9F8F6", fontFamily: "Inter, sans-serif" }}
              >
                {it.title}
              </h5>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(249,248,246,0.5)" }}
              >
                {it.desc}
              </p>
            </div>
            <div className="quality-bar-track">
              <div
                className="quality-bar-fill"
                style={{ width: active ? `${it.value}%` : "0%" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Main Component ─────────── */
export default function StatsAndCharts() {
  const { lang } = useLang();
  const ts = t[lang].stats;
  const tc = t[lang].charts;
  const [tab, setTab] = useState<"journey" | "quality">("journey");

  return (
    <>
      {/* ════════ Stats Section (light bg) ════════ */}
      <section className="py-24 md:py-28 px-5 md:px-8" style={{ background: "#F9F8F6" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            <motion.div variants={fadeUp} className="section-label">
              {ts.label}
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-heading mb-12 max-w-3xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {ts.heading1}{" "}
              <span style={{ color: "var(--champagne)", fontStyle: "italic" }}>
                {ts.headingItalic}
              </span>{" "}
              {ts.heading2}
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y"
            style={{ borderColor: "rgba(154,139,110,0.18)" }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger(0.12)}
          >
            {ts.items.map((it, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 lg:p-10 relative cursor-default"
                style={{
                  borderRight: "1px solid rgba(154,139,110,0.18)",
                }}
              >
                <div
                  className="font-display mb-4 leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "var(--black)",
                  }}
                >
                  <AnimatedCounter to={it.num} suffix={it.suffix} />
                </div>
                <div
                  className="text-xs font-semibold tracking-[0.22em] uppercase mb-2"
                  style={{ color: "#5C5A55" }}
                >
                  {it.label}
                </div>
                <div
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "#8A8780" }}
                >
                  {it.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ Charts Section (dark bg) ════════ */}
      <section className="chart-section-bg py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            <motion.div
              variants={fadeUp}
              className="section-label"
              style={{ color: "var(--champagne)" }}
            >
              {tc.label}
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="section-heading mb-4 max-w-3xl"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#F9F8F6",
              }}
            >
              {tc.heading1}{" "}
              <span style={{ color: "var(--champagne)", fontStyle: "italic" }}>
                {tc.headingItalic}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base max-w-xl mb-12 font-light leading-relaxed"
              style={{ color: "rgba(249,248,246,0.55)" }}
            >
              {tc.sub}
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="chart-tabs-wrap mb-10 inline-flex"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
          >
            <span
              className="chart-tab-indicator"
              style={{
                width: "50%",
                transform: tab === "quality" ? "translateX(100%)" : "translateX(0%)",
              }}
            />
            <button
              type="button"
              className={`chart-tab-btn ${tab === "journey" ? "active" : ""}`}
              onClick={() => setTab("journey")}
            >
              {tc.tabJourney}
            </button>
            <button
              type="button"
              className={`chart-tab-btn ${tab === "quality" ? "active" : ""}`}
              onClick={() => setTab("quality")}
            >
              {tc.tabQuality}
            </button>
          </motion.div>

          {/* Panels */}
          <div className="relative">
            {tab === "journey" ? (
              <JourneyChart stages={tc.journeyStages} disclaimer={tc.disclaimer} />
            ) : (
              <QualityChart
                items={tc.qualityItems}
                radarLabels={tc.radarLabels}
                active={tab === "quality"}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

