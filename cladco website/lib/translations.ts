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
        { num: 100, suffix: "%", label: "Custom Production",    desc: "Every order uniquely built to your brand." },
        { num: 25,  suffix: "d", label: "Avg Lead Time",         desc: "From approval to your doorstep." },
        { num: 50,  suffix: "+", label: "Customizable Items",    desc: "Apparel, drinkware, stationery, and more." },
        { num: 24,  suffix: "h", label: "Response Time",         desc: "We reply within a working day, every time." },
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
      whatsapp: "واتساب",
    },
    hero: {
      badge: "شريك المظهر المهني",
      headline1: "اظهر",
      headline2: "بأفضل صورة.",
      sub: "كلادكو تصمم يونيفورم مخصص، منتجات مُبرندة، وحلول تصميم تجعل مشروعك يبدو احترافياً وأنيقاً لا يُنسى.",
      cta1: "تواصل معنا على واتساب",
      cta2: "احصل على عرض سعر",
      trust: "نثق بنا المطاعم · المقاهي · الشركات · المدارس · الفعاليات",
    },
    services: {
      label: "ما نقدمه",
      heading: "كل ما يحتاجه فريقك ليبدو في أفضل صورة",
      items: [
        { title: "يونيفورم مخصص",      description: "ملابس عمل مفصّلة تعكس هوية علامتك التجارية. من اختيار القماش حتى آخر غرزة — كل تفصيل مصمم لمظهر حاد ومتسق.", tags: ["تطريز", "طباعة سيلك", "مقاسات مخصصة"] },
        { title: "منتجات مُبرندة",      description: "أكواب، دفاتر، شارات، حقائب والمزيد — كلها مطبوعة بشعارك. عزز هويتك في كل نقطة تواصل داخل مشروعك وخارجه.", tags: ["أكواب", "دفاتر", "شارات وبطاقات"] },
        { title: "خدمات التصميم",       description: "لا تملك تصميماً؟ لا مشكلة. فريقنا يُعدّ تصاميم احترافية وعروضاً توضيحية — لتبدو كل تفاصيل علامتك متقنة وراقية.", tags: ["موكاب", "دليل الهوية", "ملفات الطباعة"] },
      ],
    },
    audience: {
      label: "من نخدم",
      heading: "مصمم للشركات التي تهتم بمظهرها",
      items: [
        { label: "المطاعم",            desc: "مرايل الشيف، يونيفورم الخدمة، زي الاستقبال" },
        { label: "المقاهي",            desc: "مرايل مُبرندة، قبعات، زي الباريستا" },
        { label: "الشركات",            desc: "ملابس مكتبية، استقبال، فرق المبيعات" },
        { label: "الفرق المؤسسية",     desc: "يونيفورم تنفيذي وحقائب هدايا مُبرندة" },
        { label: "المدارس",            desc: "زي طلابي، هيئة تدريسية، ملابس رياضية" },
        { label: "الفعاليات",          desc: "سترات الطاقم، تيشيرتات، هوية الفعالية" },
      ],
    },
    why: {
      label: "لماذا كلادكو",
      heading1: "أكثر من مورد.",
      heading2: "شريك في",
      heading3: "المظهر.",
      sub: "نحن لا نصنع فقط. نساعدك على التفكير في كيفية تمثيل فريقك لعلامتك التجارية — ثم ننفّذ ذلك باحترافية.",
      // NOTE: stat removed — moved to Stats grid section
      reasons: [
        { number: "٠١", title: "مظهر احترافي دائماً",     description: "الاتساق يبني الثقة. نضمن أن يبدو فريقك أنيقاً ومتناسقاً — سواء كان شخصاً واحداً أو مئة شخص." },
        { number: "٠٢", title: "حلول مخصصة بالكامل",      description: "كل مشروع مختلف. نعمل مع ألوانك وشعارك وأسلوبك لننتج شيئاً يخصك أنت فقط." },
        { number: "٠٣", title: "نفصّل الجودة على مقاسك",   description: "من باقات البداية الاقتصادية إلى الإنتاج الراقي — لدينا خيارات تناسب حجمك وطموحك." },
        { number: "٠٤", title: "موثوق من البداية للنهاية", description: "تصميم، إنتاج، توصيل. نتولى العملية كاملة لتتفرغ لعملك." },
      ],
    },
    cta: {
      badge: "هل أنت مستعد للترقية؟",
      heading1: "لنرتقِ بمظهر",
      heading2: "فريقك.",
      sub: "رسالة واحدة تكفي. أخبرنا عن فريقك وسنتولى كل شيء — من التصميم حتى التوصيل.",
      button: "تواصل معنا على واتساب",
      trust1: "بدون أي التزام",
      trust2: "رد سريع",
      trust3: "استشارة مجانية",
    },
    contact: {
      locationLabel: "الموقع",
      locationValue: "المملكة العربية السعودية",
      locationSub: "نخدم الشركات في جميع أنحاء المملكة",
      phoneLabel: "الهاتف",
      phoneSub: "الأحد – الخميس، ٩ص – ٦م",
      waLabel: "واتساب",
      waValue: "راسلنا مباشرة",
      waSub: "عادةً نرد في غضون دقائق",
    },
    footer: {
      tagline: "شريكك في المظهر المهني — يونيفورم، منتجات مُبرندة وتصميم.",
      rights: "جميع الحقوق محفوظة.",
      country: "🇸🇦 المملكة العربية السعودية",
      whatsapp: "واتساب",
    },
    floating: {
      tooltip: "💬 تواصل معنا!",
    },
    // ─────────────── NEW: Stats + Charts ───────────────
    stats: {
      label: "بالأرقام",
      heading1: "مبني على",
      headingItalic: "الدقة",
      heading2: "والوعود المحفوظة.",
      items: [
        { num: 100, suffix: "٪", label: "إنتاج مخصص بالكامل",  desc: "كل طلب يُصنع خصيصاً لعلامتك." },
        { num: 25,  suffix: "ي", label: "متوسط الإنتاج",         desc: "من الموافقة إلى باب مكانك." },
        { num: 50,  suffix: "+", label: "منتج قابل للتخصيص",     desc: "ملابس، أكواب، قرطاسية، والمزيد." },
        { num: 24,  suffix: "س", label: "زمن الاستجابة",          desc: "نرد خلال يوم العمل، دائماً." },
      ],
    },
    charts: {
      label: "كيف نعمل",
      heading1: "عملية مبنية على",
      headingItalic: "الدقة.",
      sub: "من أول رسالة حتى آخر تسليم — كل خطوة مهندَسة بعناية لحماية هويتك.",
      tabJourney: "رحلة الطلب",
      tabQuality: "معايير الجودة",
      disclaimer: "الجدول الزمني المعروض هو متوسط تقريبي. مدة التسليم الفعلية قد تختلف حسب الكمية ومستوى التخصيص.",
      journeyStages: [
        { day: "اليوم ١",  label: "تراسلنا",          desc: "واتساب · رد خلال ٢٤ ساعة" },
        { day: "اليوم ٥",  label: "تصاميم مخصصة",     desc: "موكاب جاهز للمراجعة" },
        { day: "اليوم ٨",  label: "موافقتك",          desc: "يبدأ الإنتاج" },
        { day: "اليوم ١٨", label: "إنتاج بجودة عالية", desc: "قص، خياطة، طباعة بهويتك" },
        { day: "اليوم ٢٥", label: "تم التسليم",         desc: "جاهز للارتداء" },
      ],
      qualityItems: [
        { num: "٠١", title: "كثافة القماش · ٢٨٠ غم/م² فأكثر",  desc: "قطن ثقيل يحافظ على شكله ويقاوم الاستخدام اليومي.",       value: 95 },
        { num: "٠٢", title: "الخياطة · ١٢ غرزة/إنش",             desc: "غرز مزدوجة معززة في كل نقاط الضغط.",                       value: 90 },
        { num: "٠٣", title: "الطباعة · بلاستيزول و DTG",         desc: "طباعة صناعية لا تتشقق ولا تبهت ولا تتقشر.",                value: 92 },
        { num: "٠٤", title: "اللون · مطابقة بانتون ±٢ ΔE",        desc: "ألوان علامتك مُستنسخة بدقة قياسية.",                       value: 96 },
        { num: "٠٥", title: "اختبار الغسيل · ٥٠+ دورة",            desc: "الشكل واللون والطباعة مُتحقَّق منها قبل التسليم.",         value: 88 },
      ],
      radarLabels: [
        { label: "القماش",   value: "٢٨٠+ غم" },
        { label: "الخياطة",  value: "١٢ غرزة" },
        { label: "الطباعة",  value: "بلاستيزول" },
        { label: "اللون",    value: "بانتون±٢" },
        { label: "الغسيل",   value: "٥٠+ دورة" },
      ],
    },
  },
};

