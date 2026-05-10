"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="text-white relative overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(155,163,158,0.15)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {/* Logo + tagline */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center md:items-start gap-3 text-center md:text-left"
          >
            <motion.div
              whileHover={{ opacity: 0.85, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image src="/logo.png" alt="CladCo" width={220} height={80} className="object-contain h-14 w-auto" />
            </motion.div>
            <p className="keep-latin text-xs tracking-[0.18em] uppercase" style={{ color: "#4A5240", fontFamily: "Inter, system-ui, sans-serif" }}>Show Up Better</p>
          </motion.div>

          {/* WhatsApp button */}
          <motion.a
            variants={fadeUp}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-xs"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            <WhatsAppIcon />
            {tr.whatsapp}
          </motion.a>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(155,163,158,0.1)", color: "#AEADA9", fontFamily: "Inter, system-ui, sans-serif" }}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <p>© {year} CladCo. {tr.rights}</p>
          <p>{tr.country}</p>
        </motion.div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}
