"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { WHATSAPP_URL } from "@/lib/constants";
import { fadeUp, scaleUp, stagger, viewport } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────── */
interface Category {
  id: string;
  label: { en: string; ar: string };
  headline: { en: string; ar: string };
  desc: { en: string; ar: string };
  tags: { en: string[]; ar: string[] };
  video?: string;
}

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */
const CATEGORIES: Category[] = [
  {
    id: "uniforms",
    label:    { en: "Uniforms",            ar: "يونيفورم" },
    headline: { en: "Workwear that means business.", ar: "ملابس عمل تعكس احترافيتك." },
    desc: {
      en: "Chef coats, server uniforms, reception wear — tailored to your exact brand identity with premium fabrics and precise finishing.",
      ar: "معاطف طهاة، يونيفورم للموظفين والاستقبال — مصممة بدقة تعكس هوية علامتك التجارية.",
    },
    tags: { en: ["Embroidery", "Screen Print", "Custom Fit", "All Sizes"], ar: ["تطريز", "طباعة", "قياس مخصص", "جميع المقاسات"] },
  },
  {
    id: "tshirts",
    label:    { en: "T-Shirts",            ar: "تيشيرتات" },
    headline: { en: "Your logo. Every thread.", ar: "شعارك على كل خيط." },
    desc: {
      en: "Premium branded tees built for teams. From minimalist chest prints to full custom graphics — every shirt carries your identity.",
      ar: "تيشيرتات مميزة للفرق. من طباعة الصدر البسيطة إلى التصاميم المخصصة الكاملة.",
    },
    tags: { en: ["100% Cotton", "Polo", "Crew Neck", "Custom Colors"], ar: ["قطن 100%", "بولو", "رقبة مستديرة", "ألوان مخصصة"] },
    video: "/videos/tshirt.mp4",
  },
  {
    id: "caps",
    label:    { en: "Caps",                ar: "كابات" },
    headline: { en: "Top it off. Brand it right.", ar: "أتم إطلالتك. بالشعار الصحيح." },
    desc: {
      en: "Structured and unstructured caps, snapbacks, and beanies — all custom embroidered with your logo or brand mark.",
      ar: "كابات منظمة وغير منظمة، سناب باك وقبعات محبوكة — مطرزة بشعارك.",
    },
    tags: { en: ["Embroidered", "Snapback", "Bucket Hat", "Custom Strap"], ar: ["تطريز", "سناب باك", "باكيت هات", "حزام مخصص"] },
  },
  {
    id: "badges",
    label:    { en: "Badges & Lanyards",   ar: "بادجات وسحابات" },
    headline: { en: "Identity, worn with confidence.", ar: "هويتك، بكل ثقة." },
    desc: {
      en: "ID badges, lanyards, and cardholder sets that give your team a polished, professional look at every door.",
      ar: "بادجات هوية، سحابات وحوامل بطاقات تمنح فريقك مظهراً احترافياً في كل مكان.",
    },
    tags: { en: ["PVC Badges", "Metal Clips", "Custom Lanyards", "Cardholders"], ar: ["بادجات PVC", "مشابك معدنية", "سحابات مخصصة", "حوامل بطاقات"] },
    video: "/videos/badge.mp4",
  },
  {
    id: "notebooks",
    label:    { en: "Notebooks",           ar: "دفاتر" },
    headline: { en: "Branded down to the last page.", ar: "هوية علامتك في كل صفحة." },
    desc: {
      en: "Custom notebooks with your logo on the cover. Premium softcover and hardcover options — perfect for corporate gifting and daily use.",
      ar: "دفاتر مخصصة بشعارك على الغلاف. خيارات فاخرة للغلاف الناعم والصلب.",
    },
    tags: { en: ["A5 / A4", "Softcover", "Hardcover", "Custom Insert"], ar: ["A5 / A4", "غلاف ناعم", "غلاف صلب", "داخلية مخصصة"] },
    video: "/videos/notebook.mp4",
  },
  {
    id: "cups",
    label:    { en: "Tumblers & Cups",     ar: "ترامز وكؤوس" },
    headline: { en: "Every sip, branded.", ar: "كل رشفة، بهويتك." },
    desc: {
      en: "Branded tumblers, paper cups, and mugs that turn every coffee break into a brand moment. High-volume printing available.",
      ar: "ترامز، أكواب ورقية ومجات بشعارك. كل استراحة قهوة تصبح لحظة علامة تجارية.",
    },
    tags: { en: ["Stainless Steel", "Paper Cups", "Mugs", "Bulk Orders"], ar: ["ستيل", "أكواب ورقية", "مجات", "طلبات ضخمة"] },
    video: "/videos/cup.mp4",
  },
  {
    id: "packaging",
    label:    { en: "Packaging",           ar: "تغليف" },
    headline: { en: "The unboxing is part of the brand.", ar: "تجربة الفتح جزء من الهوية." },
    desc: {
      en: "Custom bags, boxes, tissue paper, and wrapping — every package tells your brand story before a word is spoken.",
      ar: "أكياس، علب، ورق تيشو وتغليف مخصص — كل طرد يحكي قصة علامتك قبل أي كلام.",
    },
    tags: { en: ["Shopping Bags", "Gift Boxes", "Tissue Paper", "Branded Tape"], ar: ["أكياس تسوق", "صناديق هدايا", "ورق تيشو", "شريط مخصص"] },
  },
  {
    id: "custom",
    label:    { en: "Custom Items",        ar: "منتجات مخصصة" },
    headline: { en: "If you can imagine it, we brand it.", ar: "إذا تخيلته، نضع عليه شعارك." },
    desc: {
      en: "From USB drives and tote bags to keychains and umbrellas — if it can carry your brand, we can produce it.",
      ar: "من USB وشنط قماش إلى مفاتيح ومظلات — أي شيء يمكن أن يحمل علامتك، نحن نصنعه.",
    },
    tags: { en: ["USB Drives", "Tote Bags", "Keychains", "Umbrellas"], ar: ["USB", "شنط قماش", "مفاتيح", "مظلات"] },
  },
];

/* ─────────────────────────────────────────────────────────────────
   CATEGORY CARD
───────────────────────────────────────────────────────────────── */
function CategoryCard({ cat, index, lang }: { cat: Category; index: number; lang: "en" | "ar" }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const label    = cat.label[lang];
  const headline = cat.headline[lang];
  const desc     = cat.desc[lang];
  const tags     = cat.tags[lang];

  return (
    <div
      className="group relative flex flex-col overflow-hidden cursor-default"
      style={{
        background: hovered ? "#1a1816" : "#F9F8F6",
        border: `1px solid ${hovered ? "rgba(154,139,110,0.3)" : "#E2E1DE"}`,
        transition: "background 0.45s cubic-bezier(0.16,1,0.3,1), border-color 0.45s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0px)",
        boxShadow: hovered ? "0 24px 60px rgba(28,43,69,0.18), 0 6px 20px rgba(0,0,0,0.08)" : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video / visual area */}
      <div
        className="relative overflow-hidden"
        style={{ height: 220, background: hovered ? "#0C0C0B" : "#F2F1EF", transition: "background 0.45s ease" }}
      >
        {cat.video ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              display: "block",
              transition: "opacity 0.4s ease, transform 0.5s ease",
              opacity: hovered ? 1 : 0.72,
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          >
            <source src={cat.video} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ padding: "2rem" }}
          >
            <span
              className="font-display text-center leading-none select-none"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                color: hovered ? "rgba(154,139,110,0.22)" : "rgba(28,43,69,0.09)",
                letterSpacing: "-0.02em",
                transition: "color 0.45s ease",
                lineHeight: 1,
              }}
            >
              {label}
            </span>
          </div>
        )}

        {/* Category index number */}
        <span
          className="absolute top-4 left-4 font-display"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            color: hovered ? "rgba(154,139,110,0.6)" : "rgba(154,139,110,0.45)",
            transition: "color 0.4s ease",
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 600,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.24em",
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#9A8B6E",
          }}
        >
          {label}
        </p>

        <h3
          className="font-display"
          style={{
            fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: hovered ? "#F9F8F6" : "#0C0C0B",
            transition: "color 0.45s ease",
          }}
        >
          {headline}
        </h3>

        <p
          style={{
            fontSize: "0.8rem",
            lineHeight: 1.75,
            color: hovered ? "rgba(249,248,246,0.55)" : "#6E6E6A",
            fontFamily: "Inter, system-ui, sans-serif",
            transition: "color 0.45s ease",
            flexGrow: 1,
          }}
        >
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                padding: "3px 9px",
                border: `1px solid ${hovered ? "rgba(154,139,110,0.3)" : "#E2E1DE"}`,
                color: hovered ? "rgba(154,139,110,0.8)" : "#AEADA9",
                transition: "all 0.4s ease",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow indicator */}
        <div className="mt-3 flex items-center gap-2">
          <div
            style={{
              width: hovered ? 28 : 16,
              height: 1,
              background: "#9A8B6E",
              transition: "width 0.35s ease",
            }}
          />
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#9A8B6E",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.35s ease",
            }}
          >
            {lang === "en" ? "Request Quote" : "اطلب عرض سعر"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────────── */
function ProductsHero({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar";
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
      style={{ background: "#F9F8F6" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            className="section-label mb-6"
            style={{ letterSpacing: "0.26em" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {isAr ? "منتجاتنا" : "Our Products"}
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="font-display"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              color: "#0C0C0B",
              maxWidth: 720,
            }}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
          >
            {isAr
              ? <>{`منتجات تجعل`}<br /><span style={{ color: "#9A8B6E" }}>علامتك</span>{` تبرز.`}</>
              : <>{`Products that make your`}<br /><span style={{ color: "#9A8B6E" }}>brand</span>{` show up better.`}</>
            }
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="mt-6 max-w-xl"
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#6E6E6A",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.22 }}
          >
            {isAr
              ? "يونيفورمات احترافية ومنتجات مخصصة لكل بيزنس يريد أن يظهر بأفضل صورة."
              : "Premium uniforms and branded merchandise — for every business that wants to look the part, every single day."}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.34 }}
          >
            <motion.a
              href="#categories"
              className="btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              {isAr ? "استعرض المنتجات" : "Browse Products"}
              <ArrowDown />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CATEGORIES GRID SECTION
───────────────────────────────────────────────────────────────── */
function CategoriesGrid({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar";

  return (
    <section
      id="categories"
      className="py-20 md:py-28"
      style={{ background: "#F2F1EF" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Section header */}
        <motion.div
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <div>
            <p className="section-label mb-3">
              {isAr ? "الكتالوج" : "Full Catalogue"}
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "#0C0C0B",
              }}
            >
              {isAr ? "كل ما تحتاجه\nفي مكان واحد." : "Everything your team\nneeds, in one place."}
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              lineHeight: 1.7,
              color: "#6E6E6A",
              fontFamily: "Inter, system-ui, sans-serif",
              maxWidth: 300,
              flexShrink: 0,
            }}
          >
            {isAr
              ? "تصفح الفئات، وتواصل معنا لأي استفسار أو عرض سعر مخصص."
              : "Browse the categories below. Reach out for a custom quote on any product or combination."}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "#E2E1DE" }}
          variants={stagger(0.055)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
        >
          {CATEGORIES.map((cat, i) => (
            <motion.div key={cat.id} variants={scaleUp}>
              <CategoryCard cat={cat} index={i} lang={lang} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center mt-10"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.16em",
            fontFamily: "Inter, system-ui, sans-serif",
            color: "#AEADA9",
            textTransform: "uppercase",
          }}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {isAr
            ? "لا ترى ما تبحث عنه؟ تواصل معنا وسنعمل على طلبك المخصص."
            : "Don't see what you need? We produce custom items on request."}
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PROCESS STRIP
───────────────────────────────────────────────────────────────── */
function ProcessStrip({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar";

  const steps = isAr
    ? ["أخبرنا ما تحتاج", "نصمم ونؤكد", "ننتج", "نوصل"]
    : ["Tell us what you need", "We design & confirm", "We produce", "We deliver"];

  return (
    <section
      style={{ background: "#1a1816", borderTop: "1px solid rgba(154,139,110,0.12)" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            <div className="flex items-center gap-4 flex-1">
              <span
                className="font-display flex-shrink-0"
                style={{
                  fontSize: "1.8rem",
                  color: "rgba(154,139,110,0.25)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                    color: "rgba(249,248,246,0.7)",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {step}
                </p>
              </div>
            </div>
            {/* Divider between steps on desktop */}
            {i < steps.length - 1 && (
              <div
                className="hidden md:block"
                style={{
                  width: 1,
                  height: 32,
                  background: "rgba(154,139,110,0.15)",
                  flexShrink: 0,
                  margin: "0 2rem",
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   BOTTOM CTA SECTION
───────────────────────────────────────────────────────────────── */
function ProductsCTA({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar";

  return (
    <section
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "#F9F8F6" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        className="max-w-6xl mx-auto px-5 md:px-8 text-center relative"
        variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewport}
      >
        <motion.p
          variants={fadeUp}
          className="section-label mb-5"
          style={{ letterSpacing: "0.26em" }}
        >
          {isAr ? "ابدأ الآن" : "Get Started"}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-display mx-auto"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            color: "#0C0C0B",
            maxWidth: 680,
          }}
        >
          {isAr ? "جاهز لترقية إطلالة فريقك؟" : "Ready to upgrade your team's look?"}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-5 mx-auto"
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.8,
            color: "#6E6E6A",
            fontFamily: "Inter, system-ui, sans-serif",
            maxWidth: 420,
          }}
        >
          {isAr
            ? "تواصل معنا على واتساب وابدأ طلبك المخصص."
            : "Message us on WhatsApp and we'll have your first mockup ready within 24 hours."}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-xs"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            <WAIcon />
            {isAr ? "ابدأ طلبك" : "Start Your Order"}
          </motion.a>
          <motion.a
            href="/"
            className="btn-outline px-8 py-4 text-xs"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            {isAr ? "الرئيسية" : "Back to Home"}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ICON COMPONENTS
───────────────────────────────────────────────────────────────── */
function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────────────────────────────── */
export default function ProductsPage() {
  const { lang } = useLang();

  return (
    <>
      <ProductsHero lang={lang} />
      <CategoriesGrid lang={lang} />
      <ProcessStrip lang={lang} />
      <ProductsCTA lang={lang} />
    </>
  );
}
