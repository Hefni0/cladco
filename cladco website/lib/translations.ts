export type Lang = "en" | "ar";

export const t = {
  en: {
    nav: { whatsapp: "WhatsApp" },

    hero: {
      badge: "The Uniform Atelier",
      headline1: "Show up",
      headline2: "better.",
      sub: "Considered uniforms and branded merchandise, made in Saudi Arabia for the businesses that take their image seriously.",
      cta1: "Talk to us",
      cta2: "Request a quote",
      trust: "",
      scroll: "",
    },

    atelier: {
      eyebrow: "The Atelier",
      manifesto:
        "Your uniform is the first thing your guests see — and the last thing they remember. We treat it that way.",
      servicesLabel: "What we make",
      services: [
        {
          title: "Custom Uniforms",
          desc: "Tailored workwear in fabrics chosen for the way your team actually works. Embroidered, screen-printed, fitted to spec.",
        },
        {
          title: "Branded Merchandise",
          desc: "Cups, notebooks, badges, lanyards, bags. Quietly carrying your identity into every customer's hand.",
        },
        {
          title: "Brand & Design",
          desc: "Mockups, brand sheets, production-ready artwork. If you don't have a design yet, we'll build one with you.",
        },
      ],
      forLabel: "Crafted for",
      audience:
        "Restaurants · cafés · hotels · corporate teams · schools · clinics · events.",
    },

    showcase: {
      label: "Selected Work",
      heading: "Pieces that carry your brand.",
      items: [
        { key: "tshirt",   label: "Team Uniforms",        desc: "Sharp, considered uniforms — tailored to carry your brand with precision." },
        { key: "cup",      label: "Branded Drinkware",    desc: "Every cup a brand moment. Logo printed, sleeve to base." },
        { key: "notebook", label: "Notebooks & Stationery", desc: "Premium notebooks built to live on a meeting table." },
        { key: "badge",    label: "ID Badges & Lanyards", desc: "Crisp credentials, printed in your colors and finishes." },
      ],
      cta: "Every piece is fully customised to your brand",
    },

    process: {
      label: "The Process",
      heading: "Four steps, no surprises.",
      steps: [
        { step: "01", title: "You message us",         description: "WhatsApp the requirements — quantities, sizes, brand assets, deadline." },
        { step: "02", title: "We design and confirm",  description: "Mockups and physical samples. Nothing goes to production until you approve." },
        { step: "03", title: "We produce",             description: "Cut, stitched, printed, embroidered, finished. Inspected before it leaves." },
        { step: "04", title: "We deliver",             description: "Packaged carefully, on time, ready for your team to wear with pride." },
      ],
    },

    standard: {
      label: "The Standard",
      heading: "Quality you can feel before you read about it.",
      pillars: [
        {
          title: "Made well",
          desc: "Heavy-weight fabrics, reinforced seams, color-matched threads. Built to survive a real shift, not a photoshoot.",
        },
        {
          title: "Made for you",
          desc: "Every order is custom. Your colors, your logo, your fit. Nothing off the rack, ever.",
        },
        {
          title: "Made on time",
          desc: "One team handles design, production, and delivery — so you have one person to call, and one date to count on.",
        },
      ],
    },

    contactCta: {
      label: "Get in touch",
      heading1: "Ready when",
      headingItalic: "you are.",
      sub: "Send us a message on WhatsApp. No commitment, no forms, no chasing.",
      cta: "Message us on WhatsApp",
      locationLabel: "Located",
      locationValue: "Saudi Arabia",
      locationSub: "Serving the Kingdom",
      hoursLabel: "Hours",
      hoursValue: "Sun – Thu",
      hoursSub: "9:00 — 18:00 AST",
      responseLabel: "Response",
      responseValue: "Within hours",
      responseSub: "Usually minutes",
    },

    footer: {
      tagline: "A Saudi atelier producing considered uniforms and branded goods for businesses that care how they look.",
      rights: "All rights reserved.",
      country: "Made in Saudi Arabia",
      whatsapp: "WhatsApp",
    },

    floating: { tooltip: "Chat with us" },

    quote: {
      title: "Request a Quote",
      subtitle: "A few details and we'll be back on WhatsApp.",
      name: "Full name", company: "Company", businessType: "Business type",
      need: "What do you need?", quantity: "Quantity", city: "City",
      fabric: "Fabric type", fabricHint: "optional",
      submit: "Send via WhatsApp", close: "Close",
      namePlaceholder: "Your full name", companyPlaceholder: "Your company name",
      typePlaceholder: "Restaurant, café, corporate…", needPlaceholder: "Describe what you need…",
      quantityPlaceholder: "e.g. 50 pieces", cityPlaceholder: "Your city",
      fabricPlaceholder: "e.g. cotton, polyester… (optional)",
    },
  },

  ar: {
    nav: { whatsapp: "واتساب" },

    hero: {
      badge: "أتيليه اليونيفورم",
      headline1: "اظهر",
      headline2: "بأرقى صورة.",
      sub: "يونيفورم وهدايا مؤسسية مدروسة، تُصنع في المملكة العربية السعودية للمشاريع التي تأخذ صورتها على محمل الجد.",
      cta1: "تواصل معنا",
      cta2: "اطلب عرض سعر",
      trust: "",
      scroll: "",
    },

    atelier: {
      eyebrow: "الأتيليه",
      manifesto:
        "زيّ فريقك هو أول ما يراه ضيفك — وآخر ما يتذكره. نحن نعامله بهذا القدر من الجدية.",
      servicesLabel: "ما نصنعه",
      services: [
        {
          title: "يونيفورم مخصص",
          desc: "ملابس عمل مفصّلة بأقمشة مختارة بعناية لطبيعة عمل فريقك. تطريز، طباعة سيلك، مقاسات بمواصفاتك.",
        },
        {
          title: "هدايا مؤسسية",
          desc: "أكواب، دفاتر، شارات، حقائب. تحمل علامتك بصمت إلى يد كل عميل.",
        },
        {
          title: "هوية وتصميم",
          desc: "موكاب، ملفات هوية، فنون جاهزة للطباعة. ما عندك تصميم؟ نبنيه معك من الصفر.",
        },
      ],
      forLabel: "مصنوع لـ",
      audience:
        "المطاعم · المقاهي · الفنادق · الفرق المؤسسية · المدارس · العيادات · الفعاليات.",
    },

    showcase: {
      label: "أعمال مختارة",
      heading: "قطع تحمل علامتك.",
      items: [
        { key: "tshirt",   label: "يونيفورم الفريق",       desc: "يونيفورم متقن ومدروس — مفصّل ليحمل هويتك بدقة." },
        { key: "cup",      label: "أكواب بهويتك",            desc: "كل كوب لحظة هوية. شعارك يطبع من الكُم إلى القاعدة." },
        { key: "notebook", label: "دفاتر وقرطاسية مؤسسية", desc: "دفاتر فاخرة صُنعت لتعيش على طاولة الاجتماعات." },
        { key: "badge",    label: "بطاقات وشرائط تعريف",    desc: "هويات احترافية، مطبوعة بألوانك ولمساتك." },
      ],
      cta: "كل قطعة قابلة للتخصيص الكامل بهويتك",
    },

    process: {
      label: "الخطوات",
      heading: "أربع خطوات، بلا مفاجآت.",
      steps: [
        { step: "٠١", title: "تراسلنا",          description: "أرسل لنا التفاصيل عبر واتساب — الكميات، المقاسات، أصول الهوية، الموعد." },
        { step: "٠٢", title: "نصمم ونستأذن",     description: "موكاب وعينات حقيقية. لا يبدأ الإنتاج إلا بعد موافقتك." },
        { step: "٠٣", title: "ننتج",              description: "قص، خياطة، طباعة، تطريز، تشطيب. كل قطعة تُفحص قبل أن تخرج." },
        { step: "٠٤", title: "نسلّم",              description: "معبأ بعناية، في موعده، جاهز ليرتديه فريقك بثقة." },
      ],
    },

    standard: {
      label: "المعيار",
      heading: "جودة تُحَس قبل أن تُقرأ.",
      pillars: [
        {
          title: "صناعة محكمة",
          desc: "أقمشة بثقل حقيقي، خياطة معززة، خيوط بألوان مطابقة. مصنوعة لتصمد في يوم عمل حقيقي، لا في صورة فقط.",
        },
        {
          title: "مصنوع لك",
          desc: "كل طلب مخصص. ألوانك، شعارك، قصتك، مقاسك. لا شيء جاهز من الرف.",
        },
        {
          title: "في موعده",
          desc: "فريق واحد يتولى التصميم والإنتاج والتسليم — جهة اتصال واحدة، وموعد واحد تعتمد عليه.",
        },
      ],
    },

    contactCta: {
      label: "تواصل معنا",
      heading1: "متى ما",
      headingItalic: "أنت جاهز.",
      sub: "راسلنا على واتساب. بدون التزام، بدون نماذج، بدون انتظار.",
      cta: "راسلنا على واتساب",
      locationLabel: "الموقع",
      locationValue: "المملكة العربية السعودية",
      locationSub: "نخدم المملكة بأكملها",
      hoursLabel: "الدوام",
      hoursValue: "الأحد – الخميس",
      hoursSub: "٩ صباحاً — ٦ مساءً",
      responseLabel: "الرد",
      responseValue: "خلال ساعات",
      responseSub: "غالباً خلال دقائق",
    },

    footer: {
      tagline: "أتيليه سعودي يصنع يونيفورم وهدايا مؤسسية مدروسة للمشاريع التي تهتم بكيف تظهر.",
      rights: "جميع الحقوق محفوظة.",
      country: "صُنع في المملكة العربية السعودية",
      whatsapp: "واتساب",
    },

    floating: { tooltip: "راسلنا" },

    quote: {
      title: "اطلب عرض سعر",
      subtitle: "بعض التفاصيل، وسنعود لك على واتساب.",
      name: "الاسم الكامل", company: "اسم الشركة", businessType: "نوع النشاط",
      need: "وش تحتاج؟", quantity: "الكمية", city: "المدينة",
      fabric: "نوع القماش", fabricHint: "اختياري",
      submit: "إرسال عبر واتساب", close: "إغلاق",
      namePlaceholder: "اسمك الكامل", companyPlaceholder: "اسم شركتك",
      typePlaceholder: "مطعم، مقهى، شركة…", needPlaceholder: "اشرح طلبك…",
      quantityPlaceholder: "مثال: ٥٠ قطعة", cityPlaceholder: "مدينتك",
      fabricPlaceholder: "مثال: قطن، بوليستر… (اختياري)",
    },
  },
};
