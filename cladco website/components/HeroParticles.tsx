"use client";

/**
 * HeroParticles — ambient gold dust in the hero background.
 * Client-only to avoid hydration mismatch on random values.
 * Some particles glow softly; all drift on organic paths.
 */

import { useEffect, useState } from "react";

type Dot = {
  x: number; y: number;
  size: number;
  dx: number; dy: number;
  delay: number; dur: number;
  glow: boolean;
};

export default function HeroParticles() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const r = (a: number, b: number) => a + Math.random() * (b - a);
    setDots(
      Array.from({ length: 34 }, () => {
        const g = Math.random() > 0.65;
        return {
          x: r(2, 98), y: r(5, 95),
          size: g ? r(2.2, 4.0) : r(0.9, 2.2),
          dx: r(-22, 22), dy: r(-38, -8),
          delay: r(0, 8), dur: r(5, 11),
          glow: g,
        };
      })
    );
  }, []);

  if (!dots.length) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`, top: `${d.y}%`,
            width: `${d.size}px`, height: `${d.size}px`,
            background: d.glow
              ? `radial-gradient(circle, rgba(241,234,218,0.95) 0%, rgba(170,163,105,0.7) 60%, transparent 100%)`
              : "rgba(170,163,105,0.8)",
            boxShadow: d.glow
              ? `0 0 ${d.size * 4}px ${d.size * 2}px rgba(170,163,105,0.45)`
              : undefined,
            ["--dx" as string]: `${d.dx}px`,
            ["--dy" as string]: `${d.dy}px`,
            animation: `particleFloat ${d.dur}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
