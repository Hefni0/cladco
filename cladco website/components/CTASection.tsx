"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function CTASection() {
  const { lang } = useLang();
  const tr = t[lang].cta;

  return (
    <section className="py-28 md:py-40" style={{ background: "#1a1816" }}>
      <motion.div
        className="max-w-4xl mx-auto px-5 md:px-8 text-center"
        variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewport}
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-medium tracking-[0.26em] uppercase mb-5"
          style={{ color: "#9A8B6E", fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {tr.badge}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
          style={{ color: "#F9F8F6" }}
        >
          {tr.heading1}
          <br />
          <span style={{ color: "#9A8B6E" }}>{tr.heading2}</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: "#AEADA9", fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {tr.sub}
        </motion.p>

        <motion.div variants={fadeUp}>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-base"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            <WAIcon />
            {tr.button}
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
