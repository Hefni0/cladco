"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLang();
  const tr = t[lang].nav;
  const isAr = lang === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <>
      {/* Navbar — slides in from top on mount */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1a1816]/95 backdrop-blur-md shadow-sm border-b border-[#2a2724]"
            : "bg-transparent"
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ opacity: 0.85 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo.png"
              alt="CladCo"
              width={300}
              height={108}
              className="object-contain h-16 w-auto"
              priority
            />
          </motion.a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7">
            <motion.a
              href="/"
              style={{ fontSize: "0.7rem", letterSpacing: "0.18em", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, textTransform: "uppercase", color: "#AEADA9" }}
              whileHover={{ color: "#9A8B6E", y: -1 } as never}
              transition={{ duration: 0.18 }}
            >
              {isAr ? "الرئيسية" : "Home"}
            </motion.a>
            <motion.a
              href="/products"
              style={{ fontSize: "0.7rem", letterSpacing: "0.18em", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, textTransform: "uppercase", color: "#9A8B6E" }}
              whileHover={{ color: "#F9F8F6", y: -1 } as never}
              transition={{ duration: 0.18 }}
            >
              {isAr ? "المنتجات" : "Products"}
            </motion.a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <motion.button
              onClick={toggle}
              className="flex items-center gap-1.5 border border-[#3A3A38] rounded-full px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase"
              style={{ color: "#6E6E6A", fontFamily: "Inter, system-ui, sans-serif" }}
              whileHover={{ borderColor: "#9A8B6E", color: "#9A8B6E" } as never}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
              aria-label="Toggle language"
            >
              <GlobeIcon />
              {lang === "en" ? "العربية" : "English"}
            </motion.button>

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary text-xs px-5 py-2.5 gap-2"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <WAIcon />
              {tr.whatsapp}
            </motion.a>

            {/* Hamburger — mobile only */}
            <motion.button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9"
              onClick={(e) => { e.stopPropagation(); setMenuOpen((o) => !o); }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.12 }}
              aria-label="Open menu"
            >
              <motion.span
                style={{ width: 22, height: 1.5, background: menuOpen ? "#9A8B6E" : "#AEADA9", display: "block" }}
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
                transition={{ duration: 0.25, ease }}
              />
              <motion.span
                style={{ width: 22, height: 1.5, background: menuOpen ? "#9A8B6E" : "#AEADA9", display: "block" }}
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                style={{ width: 22, height: 1.5, background: menuOpen ? "#9A8B6E" : "#AEADA9", display: "block" }}
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
                transition={{ duration: 0.25, ease }}
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown — AnimatePresence for mount/unmount */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed top-20 left-0 right-0 z-40 overflow-hidden"
            style={{
              background: "#1a1816",
              borderBottom: "1px solid rgba(154,139,110,0.15)",
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="px-6 py-6 flex flex-col gap-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {[
                { href: "/", label: isAr ? "الرئيسية" : "Home" },
                { href: "/products", label: isAr ? "المنتجات" : "Products" },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="py-3 text-sm font-semibold tracking-widest uppercase"
                  style={{ color: "#AEADA9", fontFamily: "Inter, system-ui, sans-serif", borderBottom: "1px solid rgba(154,139,110,0.1)", letterSpacing: "0.18em" }}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease } },
                  }}
                  whileHover={{ color: "#9A8B6E" } as never}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 justify-center"
                onClick={() => setMenuOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
                }}
                whileTap={{ scale: 0.97 }}
              >
                <WAIcon />
                {tr.whatsapp}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
