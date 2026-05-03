// =============================================================================
// FILE: components/Footer.tsx (REPLACED — matches demo)
// =============================================================================

"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { t } from "@/lib/translations";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang].footer;
  const isAr = lang === "ar";

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/logo.png" alt="CladCo" width={140} height={40} style={{ height: 36, width: "auto", marginBottom: "1.5rem" }} />
          <p className="footer-tagline">"Show Up Better"</p>
          <p className="footer-desc">{tr.tagline}</p>
        </div>

        <div className="footer-col">
          <h5>{isAr ? "استكشف" : "Explore"}</h5>
          <ul>
            <li><a href="#what-we-do">{isAr ? "ما نقدمه" : "What We Do"}</a></li>
            <li><a href="#audience">{isAr ? "من نخدم" : "Who We Serve"}</a></li>
            <li><a href="#why">{isAr ? "لماذا كلادكو" : "Why CladCo"}</a></li>
            <li><a href="/products">{isAr ? "المنتجات" : "Products"}</a></li>
            <li><a href="#process">{isAr ? "كيف نعمل" : "How It Works"}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>{isAr ? "تواصل" : "Connect"}</h5>
          <ul>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {tr.whatsapp}
              </a>
            </li>
            <li><a href="mailto:hello@cladco.co">hello@cladco.co</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Instagram</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CladCo. {tr.rights}</p>
        <p>{tr.country}</p>
      </div>
    </footer>
  );
}

