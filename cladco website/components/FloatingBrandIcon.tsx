"use client";

/**
 * FloatingBrandIcon — CladCo's always-visible persistent logo mark.
 *
 * Positioned bottom-left (opposite the WhatsApp button), it uses the same
 * four-wing geometry as the logo:  ring + blade arcs + inner hub.
 * Three nested animations: slow spin, vertical float, glow pulse.
 * Intentionally subtle — feels alive but never competes with content.
 */

import { useEffect, useState } from "react";

const GOLD = "#AAA369";

export default function FloatingBrandIcon() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div
      className="fixed bottom-7 left-7 z-40 pointer-events-none select-none"
      aria-hidden="true"
      style={{ animation: "brandFloat 7s ease-in-out infinite" }}
    >
      {/* Inner spin wrapper — independent rotation axis */}
      <div style={{ animation: "brandSpin 28s linear infinite" }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 200 200"
          fill="none"
          style={{ animation: "brandGlow 4.5s ease-in-out infinite alternate" }}
        >
          {/* ── Outer containment ring ── */}
          <circle
            cx="100" cy="100" r="94"
            stroke={GOLD} strokeWidth="2.5" opacity="0.5"
          />

          {/* ── Four wing arcs (logo blade geometry) ── */}
          <path d="M 100,6   C 100,53  147,100  194,100" stroke={GOLD} strokeWidth="2.5" fill="none" opacity="0.65" />
          <path d="M 194,100 C 147,100 100,147  100,194" stroke={GOLD} strokeWidth="2.5" fill="none" opacity="0.65" />
          <path d="M 100,194 C 100,147  53,100    6,100"  stroke={GOLD} strokeWidth="2.5" fill="none" opacity="0.65" />
          <path d="M   6,100 C  53,100 100, 53  100,  6"  stroke={GOLD} strokeWidth="2.5" fill="none" opacity="0.65" />

          {/* ── Inner hub ── */}
          <circle
            cx="100" cy="100" r="14"
            stroke={GOLD} strokeWidth="2.5" opacity="0.4"
          />

          {/* ── Cardinal accent diamonds ── */}
          {([
            [100, 6],
            [194, 100],
            [100, 194],
            [6, 100],
          ] as [number, number][]).map(([cx, cy], i) => (
            <rect
              key={i}
              x={cx - 3} y={cy - 3}
              width="6" height="6"
              transform={`rotate(45 ${cx} ${cy})`}
              fill={GOLD}
              opacity="0.5"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
