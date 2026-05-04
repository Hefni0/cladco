"use client";

import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

type Props = {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  as?: ElementType;
  className?: string;
};

export default function Reveal({ children, delay, as: Tag = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const delayClass = delay ? ` reveal-d${delay}` : "";
  return (
    <Tag
      ref={ref as never}
      className={`reveal${shown ? " in" : ""}${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
