/**
 * BrandMotif — CladCo's visual signature system
 *
 * BrandIconBg uses the ACTUAL CladCo icon images:
 *   icon.png         — flat white icon on transparent bg
 *   icon-3d-raw.jpg  — 3D metallic icon on dark bg (mix-blend-screen reveals it)
 */

import React, { CSSProperties } from "react";
import Image from "next/image";

const GOLD = "#AAA369";

/* ─────────────────────────────────────────────────
   Full motif — ring + 4 wing arcs + inner hub
   Used as large ambient background element
───────────────────────────────────────────────── */
export function FullMotif({
  size = 800,
  opacity = 0.05,
  color = GOLD,
  rotate = 0,
  className = "",
  style,
}: {
  size?: number;
  opacity?: number;
  color?: string;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      <g stroke={color} strokeWidth="0.65" opacity={opacity}>
        {/* ── Outer containment ring ── */}
        <circle cx="100" cy="100" r="94" />

        {/* ── Four wing arcs (inner blade edges) ── */}
        {/* Each arc sweeps from one cardinal point to the next,
            curving through the interior — directly tracing the logo's
            blade structure. Control points at (100,53) / (147,100)
            pull the curve inward before it exits toward the next cardinal. */}
        <path d="M 100,6   C 100,53  147,100  194,100" />
        <path d="M 194,100 C 147,100 100,147  100,194" />
        <path d="M 100,194 C 100,147  53,100    6,100" />
        <path d="M   6,100 C  53,100 100, 53  100,  6" />

        {/* ── Inner hub ring ── */}
        <circle cx="100" cy="100" r="14" />

        {/* ── Cardinal accent diamonds ── */}
        {/* Small rotated squares at the four wing connection points,
            referencing the logo's radial meeting marks */}
        {[
          [100, 6],
          [194, 100],
          [100, 194],
          [6, 100],
        ].map(([cx, cy], i) => (
          <rect
            key={i}
            x={cx - 2.5}
            y={cy - 2.5}
            width="5"
            height="5"
            transform={`rotate(45 ${cx} ${cy})`}
          />
        ))}
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   Ring halo — just the outer circle + inner hub
   Used as spotlight framing around focal elements
───────────────────────────────────────────────── */
export function RingHalo({
  size = 200,
  opacity = 0.35,
  color = GOLD,
  className = "",
  style,
}: {
  size?: number;
  opacity?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Outer ring — with four subtle gaps (strokeDasharray)
          mirroring the logo's four connection points */}
      <circle
        cx="100"
        cy="100"
        r="94"
        stroke={color}
        strokeWidth="0.8"
        strokeDasharray="138 12 138 12 138 12 138 12"
        strokeDashoffset="6"
        opacity={opacity}
      />
      {/* Inner hub — the logo's central ring */}
      <circle
        cx="100"
        cy="100"
        r="14"
        stroke={color}
        strokeWidth="0.8"
        opacity={opacity * 0.7}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   Arc bracket — left
   A quarter-arc cut from one blade, used beside
   section labels. Mirrors the logo's curve language.
───────────────────────────────────────────────── */
export function ArcLeft({
  size = 13,
  color = GOLD,
  opacity = 0.55,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* Quarter-arc running top-right → bottom-left, matching
          the inward sweep of the logo's blade edges */}
      <path
        d="M 12,1 A 10.5,10.5 0 0,0 1,12"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity={opacity}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   Arc bracket — right (mirror of left)
───────────────────────────────────────────────── */
export function ArcRight({
  size = 13,
  color = GOLD,
  opacity = 0.55,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M 1,1 A 10.5,10.5 0 0,1 12,12"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity={opacity}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   BrandIconBg — real CladCo icon as ambient bg
   variant "dark"  → icon.png, mix-blend-screen  (for dark-bg sections)
   variant "light" → icon.png inverted, multiply  (for light-bg sections)
   variant "3d"    → icon-3d-raw.jpg, mix-blend-screen (metallic glow on dark)
───────────────────────────────────────────────── */
export function BrandIconBg({
  size = 500,
  opacity = 0.07,
  variant = "dark",
  animate = false,
  float = false,
  className = "",
  style,
}: {
  size?: number;
  opacity?: number;
  variant?: "dark" | "light" | "3d";
  animate?: boolean;
  float?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const src = variant === "3d" ? "/icon-3d.png" : "/icon.png";
  const blendMode = variant === "light" ? "multiply" : variant === "3d" ? "normal" : "screen";
  const extraFilter = variant === "light" ? "invert(1)" : undefined;
  // Animation goes on inner div so it never conflicts with outer positioning transform
  const animClass = animate ? "icon-bg-spin" : float ? "icon-bg-float" : "";

  return (
    // Outer div: ONLY positioning (className + centering style). No animation here.
    <div
      className={className}
      style={{ pointerEvents: "none", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", ...style }}
      aria-hidden="true"
    >
      {/* Inner div: animation + fixed size + Image fill context */}
      <div className={animClass} style={{ position: "relative", width: size, height: size }}>
        <Image
          src={src}
          alt=""
          fill
          sizes={`${size}px`}
          style={{
            objectFit: "contain",
            opacity,
            mixBlendMode: blendMode as CSSProperties["mixBlendMode"],
            filter: extraFilter,
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   SectionLabel — the branded label row used in
   every section header (replaces icon-3d flanks)
───────────────────────────────────────────────── */
export function SectionLabelRow({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center mb-3">
      <p className="section-label mb-0">{text}</p>
    </div>
  );
}
