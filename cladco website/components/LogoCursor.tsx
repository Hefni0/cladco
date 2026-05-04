// =============================================================================
// FILE: components/LogoCursor.tsx (NEW)
// 3D logo cursor that follows the mouse precisely on fine-pointer devices.
// Mounted in app/layout.tsx so it works on every page.
// =============================================================================

"use client";

import { useEffect, useRef, useState } from "react";

export default function LogoCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Detect fine pointer (mouse) vs coarse pointer (touch)
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFinePointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Track mouse + interactive states
  useEffect(() => {
    if (!isFinePointer) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Direct DOM transform updates — no React state, no transition lag
    const onMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onLeave = () => { cursor.style.opacity = "0"; };
    const onEnter = () => { cursor.style.opacity = "1"; };
    const onDown  = () => cursor.classList.add("clicking");
    const onUp    = () => cursor.classList.remove("clicking");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    // Interactive grow on common elements
    const interactiveSelectors =
      'a, button, [role="button"], input[type="checkbox"], input[type="radio"], input[type="submit"], input[type="button"], select, .card-lift';
    const els = document.querySelectorAll<HTMLElement>(interactiveSelectors);
    const onElEnter = () => cursor.classList.add("interactive");
    const onElLeave = () => cursor.classList.remove("interactive");
    els.forEach((el) => {
      el.addEventListener("mouseenter", onElEnter);
      el.addEventListener("mouseleave", onElLeave);
    });

    // Fade out on text inputs (so the native text caret is visible)
    const textInputs = document.querySelectorAll<HTMLElement>(
      'input[type="text"], input[type="email"], input[type="tel"], input[type="search"], input[type="url"], input:not([type]), textarea'
    );
    const onTextEnter = () => cursor.classList.add("text-mode");
    const onTextLeave = () => cursor.classList.remove("text-mode");
    textInputs.forEach((el) => {
      el.addEventListener("mouseenter", onTextEnter);
      el.addEventListener("mouseleave", onTextLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onElEnter);
        el.removeEventListener("mouseleave", onElLeave);
      });
      textInputs.forEach((el) => {
        el.removeEventListener("mouseenter", onTextEnter);
        el.removeEventListener("mouseleave", onTextLeave);
      });
    };
  }, [isFinePointer]);

  // Don't render anything on touch devices — keep native cursor
  if (!isFinePointer) return null;

  return <div ref={cursorRef} className="logo-cursor" aria-hidden="true" />;
}

