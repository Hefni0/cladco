"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One-shot intersection observer.
 * Returns `inView = true` the first time the element enters the viewport,
 * then disconnects. Elements stay revealed — no re-hiding on scroll back up.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.12
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return { ref, inView };
}
