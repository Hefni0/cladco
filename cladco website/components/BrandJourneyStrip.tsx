// =============================================================================
// FILE: components/BrandJourneyStrip.tsx (REPLACED — matches demo exactly)
// NOTE: Demo uses CSS shapes. Original videos in /public/videos/ are preserved
// — Ahmed will re-integrate them manually after this clone is in place.
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function BrandJourneyStrip() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const cards = isAr
    ? [
        { tag: "— ملابس",     title: "تيشيرتات مخصصة",  desc: "تصميمك. قماش راقٍ. طباعة دقيقة.",          shape: "tshirt" },
        { tag: "— أكواب",     title: "أكواب بهويتك",     desc: "نقاط تواصل يومية مع علامتك.",            shape: "cup"    },
        { tag: "— قرطاسية",   title: "دفاتر",             desc: "ورق راقٍ. أغلفة بهويتك. انطباع يدوم.",   shape: "book"   },
      ]
    : [
        { tag: "— Apparel",    title: "Custom T-shirts",   desc: "Your design. Premium fabric. Sharp prints.",        shape: "tshirt" },
        { tag: "— Drinkware",  title: "Branded Cups",      desc: "Daily touchpoints with your brand identity.",       shape: "cup"    },
        { tag: "— Stationery", title: "Notebooks",         desc: "Premium paper. Branded covers. Lasting impressions.", shape: "book"   },
      ];

  const heading = isAr ? "شاهد علامتك " : "Watch your brand ";
  const headingItalic = isAr ? "تنبض بالحياة." : "come to life.";
  const label = isAr ? "من الفراغ إلى الهوية" : "From Blank to Branded";

  return (
    <section className="brand-journey-section">
      <div className="container">
        <motion.div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="section-label" variants={fadeUp} style={{ justifyContent: "center" }}>
            {label}
          </motion.div>
          <motion.h2 className="section-heading" variants={fadeUp} style={{ margin: "0 auto" }}>
            {heading}<span className="italic">{headingItalic}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="brand-journey-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.12)}
        >
          {cards.map((c, i) => (
            <motion.div key={i} className="bj-card" variants={fadeUp}>
              <div className="bj-card-mock">
                <div className={`bj-shape bj-shape-${c.shape}`} />
              </div>
              <div className="bj-card-content">
                <div className="bj-card-label">{c.tag}</div>
                <div className="bj-card-title">{c.title}</div>
                <div className="bj-card-desc">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

