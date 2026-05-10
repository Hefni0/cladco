// =============================================================================
// FILE: lib/translations.ts (SMART MERGE)
// CHANGES vs live site:
//   - REMOVED: t.en.process & t.ar.process (old Process section deleted)
//   - REMOVED: t.en.why.stat & statSub (now lives in Stats grid)
//   - REFINED: t.*.why.reasons[2] → "Tailored Quality" (was "Flexible Quality
//     Tiers") to better complement the new Quality Standards chart
//   - REMOVED: emoji from audience.items (cleaner premium look)
//   - ADDED: stats + charts blocks (new sections)
// =============================================================================

export type Lang = "en" | "ar";

export const t = {
  en: {
    nav: {
      whatsapp: "WhatsApp Us",
    },
    hero: {
      badge: "Professional Appearance Partner",
      headline1: "Show Up",
      headline2: "Better.",
      sub: "CladCo crafts custom uniforms, branded merchandise, and design solutions that make your business look polished, professional, and unforgettable.",
      cta1: "Contact Us on WhatsApp",
      cta2: "Get a Free Quote",
      trust: "Trusted by restaurants · cafes · corporations · schools · events",
    },
    services: {
      label: "What We Do",
      heading: "Everything your team needs to look the part",
      items: [
        { title: "Custom Uniforms",  description: "Tailored workwear that reflects your brand identity. From fabric selection to final stitch — every detail crafted for a sharp, consistent look.", tags: ["Embroidery", "Screen Print", "Custom Fit"] },
        { title: "Branded Items",    description: "Mugs, notebooks, badges, bags, and more — all branded with your logo. Reinforce your identity at every touchpoint, inside and outside your business.", tags: ["Mugs & Cups", "Notebooks", "Badges & Lanyards"] },
        { title: "Design Services",  description: "No design? No problem. Our team creates professional layouts, mockups, and brand presentation assets — so everything looks intentional and premium.", tags: ["Mockups", "Brand Guidelines", "Artwork"] },
      ],
    },
    audience: {
      label: "Who We Serve",
      heading: "Built for businesses that care about their image",
      items: [
        { label: "Restaurants",      desc: "Chef coats, server uniforms, host attire" },
        { label: "Cafes",            desc: "Branded aprons, caps, and barista wear" },
        { label: "Businesses",       desc: "Office wear, reception, sales teams" },
        { label: "Corporate Teams",  desc: "Executive uniforms & branded merch kits" },
        { label: "Schools",          desc: "Student uniforms, faculty wear, PE kits" },
        { label: "Events",           desc: "Staff vests, crew shirts, event branding" },
      ],
    },
    why: {
      label: "Why CladCo",
      heading1: "More than a supplier.",
      heading2: "A partner in",
      heading3: "presentation.",
      sub: "We don't just manufacture. We help you think about how your team represents your brand — and then we execute it flawlessly.",
      // NOTE: stat removed — moved to Stats grid section
      reasons: [
        { number: "01", title: "Professional Look, Every Time", description: "Consistency builds trust. We ensure your team looks polished and aligned — whether it's one person or one hundred." },
        { number: "02", title: "Fully Custom Solutions",         description: "Every business is different. We work with your brand colors, logo, and style to produce something uniquely yours." },
        { number: "03", title: "Tailored to Your Needs",         description: "From budget-friendly starter packs to premium production runs — we offer options that match your scale and ambition." },
        { number: "04", title: "Reliable, End-to-End",           description: "Design, produce, deliver. We own the full process so you never have to coordinate between multiple vendors." },
      ],
    },
    cta: {
      badge: "Ready to Upgrade?",
      heading1: "Let's Upgrade",
      heading2: "Your Team's Look.",
      sub: "One message is all it takes. Tell us about your team and we'll handle everything — from design to delivery.",
      button: "Chat with Us on WhatsApp",
      trust1: "No commitment required",
      trust2: "Fast response time",
      trust3: "Free consultation",
    },
    contact: {
      locationLabel: "Location",
      locationValue: "Saudi Arabia",
      locationSub: "Serving businesses across the Kingdom",
      phoneLabel: "Phone",
      phoneSub: "Sun – Thu, 9am – 6pm",
      waLabel: "WhatsApp",
      waValue: "Message us directly",
      waSub: "We typically reply within minutes",
    },
    footer: {
      tagline: "Your professional appearance partner — uniforms, branded items & design.",
      rights: "All rights reserved.",
      country: "Based in Saudi Arabia 🇸🇦",
      whatsapp: "WhatsApp Us",
    },
    floating: {
      tooltip: "💬 Chat with us!",
    },
    // ─────────────── NEW: Stats + Charts ───────────────
    stats: {
      label: "By the Numbers",
      heading1: "Built on",
      headingItalic: "precision",
      heading2: "& promises kept.",
      items: [
        { num: 100, suffix: "%", display: "", label: "Custom Production",    desc: "Every order uniquely built to your brand." },
        { num: 25,  suffix: "d", display: "", label: "Avg Lead Time",         desc: "From approval to your doorstep." },
        { num: 50,  suffix: "+", display: "", label: "Customizable Items",    desc: "Apparel, drinkware, stationery, and more." },
        { num: 24,  suffix: "h", display: "", label: "Response Time",         desc: "We reply within a working day, every time." },
      ],
    },
    charts: {
      label: "How It Works",
      heading1: "A process built for",
      headingItalic: "precision.",
      sub: "From the first message to the final delivery — every step engineered to keep your brand uncompromised.",
      tabJourney: "Order Journey",
      tabQuality: "Quality Standards",
      disclaimer: "Average timeline shown. Actual delivery time may vary based on order quantity & complexity.",
      journeyStages: [
        { day: "DAY 1",  label: "You message us",     desc: "WhatsApp · 24h reply" },
        { day: "DAY 5",  label: "Custom mockups",     desc: "Designs ready for review" },
        { day: "DAY 8",  label: "Your approval",      desc: "Production starts" },
        { day: "DAY 18", label: "Quality crafted",    desc: "Cut, stitched, branded" },
        { day: "DAY 25", label: "Delivered",          desc: "Ready to wear" },
      ],
      qualityItems: [
        { num: "01", title: "Fabric Density · 280gsm+",          desc: "Heavy-weight cotton blends that hold shape and survive daily use.",     value: 95 },
        { num: "02", title: "Stitching · 12 stitches/inch",      desc: "Reinforced double-needle seams at all stress points.",                   value: 90 },
        { num: "03", title: "Print · Plastisol & DTG",            desc: "Industrial-grade prints that don't crack, fade, or peel.",               value: 92 },
        { num: "04", title: "Color · Pantone-matched ±2 ΔE",     desc: "Your brand colors reproduced with measurable accuracy.",                value: 96 },
        { num: "05", title: "Wash Test · 50+ cycles",             desc: "Shape, color, and print integrity verified before delivery.",           value: 88 },
      ],
      radarLabels: [
        { label: "Fabric",    value: "280gsm+" },
        { label: "Stitching", value: "12 SPI" },
        { label: "Print",     value: "Plastisol" },
        { label: "Color",     value: "Pantone±2" },
        { label: "Wash",      value: "50+ cycles" },
      ],
    },
  },

  ar: {
    nav: {
      whatsapp: "راسلنا",
    },
    hero: {
      badge: "أناقة احترافية",
      headline1: "Show Up",
      headline2: "Better.",
      sub: "نصمم وننفّذ كل اللي يحتاجه فريقك عشان يطلع بصورة تليق بعلامتك.",
      cta1: "تواصل معنا",
      cta2: "اطلب عرض سعر",
      trust: "يثق بنا أصحاب المطاعم · المقاهي · الشركات · المدارس · الفعاليات",
    },
    services: {
      label: "ما نقدمه",
      heading: "كل اللي يحتاجه فريقك عشان يطلع بشكل احترافي.",
      items: [
        { title: "يونيفورم مخصص",     description: "يونيفورم مخصص لفريقك بألوان وشعار وهوية تناسب مشروعك.", tags: ["تطريز", "طباعة", "مقاسات مخصصة"] },
        { title: "منتجات بهويتك",      description: "أكواب ودفاتر وشارات ومنتجات مخصصة تساعد علامتك تكون حاضرة في كل تفصيل.", tags: ["أكواب", "دفاتر", "شارات وبطاقات"] },
        { title: "خدمات التصميم",     description: "إذا ما عندك تصميم جاهز، نساعدك تبني شكل متناسق واحترافي يناسب مشروعك.", tags: ["نماذج عرض", "دليل الهوية", "ملفات طباعة"] },
      ],
    },
    audience: {
      label: "من نخدم",
      heading: "للمشاريع اللي تهتم بالتفاصيل اللي الناس تلاحظها.",
      items: [
        { label: "المطاعم",         desc: "ملابس الشيف، زي الخدمة، طاقم الاستقبال" },
        { label: "المقاهي",         desc: "كابات، زي الباريستا، وتفاصيل تعكس هوية المقهى." },
        { label: "الشركات",         desc: "زي موحد للموظفين، الاستقبال، فرق المبيعات" },
        { label: "المؤسسات الكبرى",  desc: "يونيفورم وهوية موحدة للفرق والإدارات المختلفة." },
        { label: "المدارس",         desc: "زي طلابي، ملابس المعلمين، الزي الرياضي" },
        { label: "الفعاليات",       desc: "سترات الفريق، قمصان الطاقم، هوية الفعالية" },
      ],
    },
    why: {
      label: "لماذا كلادكو",
      heading1: "أكثر من مورد.",
      heading2: "شريك في",
      heading3: "احترافيتك.",
      sub: "مو بس ننفّذ الطلب — نهتم كيف يطلع فريقك قدام الناس.",
      reasons: [
        { number: "٠١", title: "اتساق في كل فرع",          description: "فريقك يطلع بنفس المستوى في كل فرع وكل مناسبة." },
        { number: "٠٢", title: "مخصص لك بالكامل",          description: "نخصص كل طلب حسب ألوان وشعار وطبيعة مشروعك." },
        { number: "٠٣", title: "خيارات تناسب طموحك",        description: "خيارات مختلفة تناسب احتياج مشروعك وميزانيته." },
        { number: "٠٤", title: "كل شيء تحت سقف واحد",       description: "من التصميم إلى التسليم — نهتم بكل التفاصيل في مكان واحد." },
      ],
    },
    cta: {
      badge: "جاهز ترتقي بمشروعك؟",
      heading1: "مشروعك يستحق",
      heading2: "مظهر يليق فيه.",
      sub: "نرتب معك التفاصيل من البداية للنهاية بدون تعقيد.",
      button: "راسلنا على واتساب",
      trust1: "رد سريع خلال يوم العمل",
      trust2: "استشارة أولية مجانية",
      trust3: "",
    },
    contact: {
      locationLabel: "الموقع",
      locationValue: "المملكة العربية السعودية",
      locationSub: "نخدم المشاريع في جميع أنحاء المملكة",
      phoneLabel: "الهاتف",
      phoneSub: "الأحد – الخميس · ٩ص – ٦م",
      waLabel: "واتساب",
      waValue: "راسلنا مباشرة",
      waSub: "غالباً نرد خلال دقائق",
    },
    footer: {
      tagline: "Show Up Better",
      rights: "جميع الحقوق محفوظة.",
      country: "صُنع في المملكة العربية السعودية",
      whatsapp: "راسلنا",
    },
    floating: {
      tooltip: "راسلنا الآن",
    },
    // ─────────────── NEW: Stats + Charts ───────────────
    stats: {
      label: "نهتم بالتفاصيل",
      heading1: "نهتم بالتفاصيل",
      headingItalic: "اللي تفرق",
      heading2: "فعلًا.",
      items: [
        { num: 0,  suffix: "",  display: "حسب هويتك",  label: "تخصيص كامل",        desc: "كل طلب يتنفذ بألوان وشعار مشروعك." },
        { num: 0,  suffix: "",  display: "تنفيذ منظّم", label: "متابعة من البداية", desc: "من أول الموافقة حتى التسليم النهائي." },
        { num: 50, suffix: "+", display: "",            label: "منتج قابل للتخصيص", desc: "يونيفورم، أكواب، دفاتر، شارات وأكثر." },
        { num: 0,  suffix: "",  display: "رد سريع",    label: "خلال يوم العمل",     desc: "غالبًا خلال يوم العمل." },
      ],
    },
    charts: {
      label: "كيف نعمل",
      heading1: "خطوات واضحة من",
      headingItalic: "الفكرة للتسليم.",
      sub: "نخلي كل مرحلة واضحة وسلسة — من أول تواصل حتى استلام الطلب النهائي.",
      tabJourney: "خطوات الطلب",
      tabQuality: "معايير الجودة",
      disclaimer: "مدة التنفيذ تختلف حسب نوع الطلب والكمية ومستوى التخصيص.",
      journeyStages: [
        { day: "",  label: "بداية الطلب",       desc: "نفهم احتياجك ونحدد تفاصيل الطلب." },
        { day: "",  label: "تصميم ومعاينة",     desc: "نجهز لك تصور واضح قبل بدء التنفيذ." },
        { day: "",  label: "اعتماد الطلب",       desc: "بعد الموافقة تبدأ مرحلة الإنتاج مباشرة." },
        { day: "",  label: "التنفيذ والإنتاج",   desc: "تنفيذ دقيق بالألوان والتفاصيل الخاصة بعلامتك." },
        { day: "",  label: "جاهز للاستلام",      desc: "يوصل طلبك جاهز للاستخدام من أول يوم." },
      ],
      qualityItems: [
        { num: "٠١", title: "خامات مختارة",  desc: "خامات مريحة وعملية تحافظ على شكلها مع الاستخدام اليومي.",  value: 95 },
        { num: "٠٢", title: "خياطة متقنة",   desc: "تشطيب وخياطة مرتبة تعيش لفترة أطول.",                          value: 92 },
        { num: "٠٣", title: "طباعة ثابتة",   desc: "طباعة واضحة وثابتة تتحمل الاستخدام والغسيل.",                  value: 90 },
        { num: "٠٤", title: "دقة بالألوان",  desc: "نهتم إن ألوان الطلب تكون قريبة لهوية مشروعك بأكبر دقة ممكنة.", value: 96 },
        { num: "٠٥", title: "جودة مجربة",    desc: "نراجع الجودة والتفاصيل قبل التسليم النهائي.",                  value: 88 },
      ],
      radarLabels: [
        { label: "الخامة",   value: "مختارة" },
        { label: "الخياطة",  value: "متقنة" },
        { label: "الطباعة",  value: "ثابتة" },
        { label: "الألوان",  value: "دقيقة" },
        { label: "الجودة",   value: "مجربة" },
      ],
    },
  },
};

