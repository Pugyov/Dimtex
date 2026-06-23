export const company = {
  nameEn: "DIMTEX LTD",
  nameBg: "ДИМТЕКС ООД",
  legalFormEn: "Bulgarian limited liability company (OOD)",
  legalFormBg: "Българско дружество с ограничена отговорност (ООД)",
  city: "Blagoevgrad",
  country: "Bulgaria",
  addressEn: "Aleksandar Stamboliyski 77, Blagoevgrad, Bulgaria",
  addressBg: "ул. Александър Стамболийски 77, Благоевград, България",
  addressPlaceholder: "Aleksandar Stamboliyski 77, Blagoevgrad, Bulgaria",
  phonePlaceholder: "+359 89 7849887",
  emailPlaceholder: "dimtex@gmail.com",
  founded: "1997",
  industryEn: "Clothing / garment manufacturing",
  industryBg: "Производство на облекло",
  activityEn: "Production of clothing / manufacture of wearing apparel",
  activityBg: "Производство на облекло / производство на облекла",
  productionFocusEn: "Men's and women's trousers",
  productionFocusBg: "Мъжки и дамски панталони",
  servicesEn: ["Garment manufacturing", "Sewing services", "Subcontract production"],
  servicesBg: ["Производство на облекло", "Шивашки услуги", "Подизпълнителско производство"],
  intermediary: "JMJ"
} as const;

export const factoryImages = {
  workshop: {
    src: "/images/factory/workshop.jpeg",
    fallbackSrc: "/images/factory/tailor's.jpeg",
    alt: {
      en: "DIMTEX workshop floor with production stations",
      bg: "Производствен цех на ДИМТЕКС с работни станции"
    }
  },
  sewingDetail: {
    src: "/images/factory/ironing.jpeg",
    fallbackSrc: "/images/factory/warehouse.jpeg",
    alt: {
      en: "DIMTEX ironing and finishing area for garment production",
      bg: "Зона за гладене и довършване на облекла в ДИМТЕКС"
    }
  },
  teamOrFamily: {
    src: "/images/factory/tailor's.jpeg",
    fallbackSrc: "/images/factory/workshop.jpeg",
    alt: {
      en: "DIMTEX cutting and tailoring room in Blagoevgrad",
      bg: "Кроялно и шивашка подготовка на ДИМТЕКС в Благоевград"
    }
  }
} as const;

export const machineryImages = [
  {
    src: "/images/machinery/IMG_1749.jpeg",
    fallbackSrc: "/images/factory/workshop.jpeg",
    machineName: {
      en: "JUKI LK-1903 / LK-1903A series",
      bg: "JUKI LK-1903 / LK-1903A серия"
    },
    caption: {
      en: "Button sewing support for clean, consistent fastening details.",
      bg: "Машина за чисто и последователно пришиване на копчета."
    },
    alt: {
      en: "JUKI LK-1903 series button attaching sewing machine at DIMTEX",
      bg: "Шевна машина JUKI LK-1903 серия за пришиване на копчета в ДИМТЕКС"
    }
  },
  {
    src: "/images/machinery/IMG_1763.jpeg",
    fallbackSrc: "/images/factory/workshop.jpeg",
    machineName: {
      en: "JUKI LK-1900A series",
      bg: "JUKI LK-1900A серия"
    },
    caption: {
      en: "High-speed bar-tacking for reinforced stress points and durable details.",
      bg: "Високоскоростна понт машина за укрепени зони и устойчиви детайли."
    },
    alt: {
      en: "JUKI LK-1900A series electronic bar-tacking machine at DIMTEX",
      bg: "Електронна понт машина JUKI LK-1900A серия в ДИМТЕКС"
    }
  },
  {
    src: "/images/machinery/IMG_1753.jpeg",
    fallbackSrc: "/images/factory/workshop.jpeg",
    machineName: {
      en: "Dürkopp Adler 745-34 / 745-34 S",
      bg: "Dürkopp Adler 745-34 / 745-34 S"
    },
    caption: {
      en: "Automatic pocket welting for precise openings and consistent pocket construction.",
      bg: "Автоматични филетки за прецизни отвори и постоянна конструкция на джоба."
    },
    alt: {
      en: "Dürkopp Adler 745-34 automatic pocket-welting machine at DIMTEX",
      bg: "Автоматична машина Dürkopp Adler 745-34 за филетки на джобове в ДИМТЕКС"
    }
  },
  {
    src: "/images/factory/workshop.jpeg",
    fallbackSrc: "/images/factory/tailor's.jpeg",
    machineName: {
      en: "Workshop floor",
      bg: "Производствен цех"
    },
    caption: {
      en: "A clear view of the production floor and the working rhythm between stations.",
      bg: "Ясен поглед към производствения цех и работния ритъм между станциите."
    },
    alt: {
      en: "DIMTEX workshop floor with sewing and production stations",
      bg: "Производствен цех на ДИМТЕКС с шевни и работни станции"
    }
  },
  {
    src: "/images/factory/tailor's.jpeg",
    fallbackSrc: "/images/factory/workshop.jpeg",
    machineName: {
      en: "Cutting and tailoring tables",
      bg: "Маси за кроене и шивашка подготовка"
    },
    caption: {
      en: "Fabric is prepared, aligned, and handled before it moves into sewing.",
      bg: "Платът се подготвя, подравнява и обработва преди преминаване към шиене."
    },
    alt: {
      en: "DIMTEX cutting and tailoring tables with fabric layers",
      bg: "Маси за кроене и шивашка подготовка с пластове плат в ДИМТЕКС"
    }
  },
  {
    src: "/images/factory/ironing.jpeg",
    fallbackSrc: "/images/factory/tailor's.jpeg",
    machineName: {
      en: "Ironing and finishing station",
      bg: "Гладене и довършителни операции"
    },
    caption: {
      en: "Pressing and finishing prepare garments for final review and packing.",
      bg: "Гладенето и довършването подготвят изделията за финален преглед и опаковане."
    },
    alt: {
      en: "DIMTEX ironing and finishing station for garments",
      bg: "Станция за гладене и довършване на облекла в ДИМТЕКС"
    }
  },
  {
    src: "/images/factory/warehouse.jpeg",
    fallbackSrc: "/images/factory/tailor's.jpeg",
    machineName: {
      en: "Warehouse and packing area",
      bg: "Склад и зона за опаковане"
    },
    caption: {
      en: "Finished garments are organized for packing, storage, and delivery.",
      bg: "Готовите изделия се организират за опаковане, съхранение и доставка."
    },
    alt: {
      en: "DIMTEX warehouse and packing area with cartons and garments",
      bg: "Склад и зона за опаковане в ДИМТЕКС с кашони и облекла"
    }
  }
] as const;

type PartnerLogo = {
  name: string;
  src: `/images/Partners/${string}`;
  alt: {
    en: string;
    bg: string;
  };
};

export const partnerLogos = [
  {
    name: "Maria de la Orden",
    src: "/images/Partners/Maria de la Orden Logo.avif",
    alt: {
      en: "Maria de la Orden logo",
      bg: "Лого на Maria de la Orden"
    }
  },
  {
    name: "Anne Fontaine",
    src: "/images/Partners/Anne Fontaine Logo.svg",
    alt: {
      en: "Anne Fontaine logo",
      bg: "Лого на Anne Fontaine"
    }
  },
  {
    name: "Kenzo",
    src: "/images/Partners/Kenzo Logo.png",
    alt: {
      en: "Kenzo logo",
      bg: "Лого на Kenzo"
    }
  },
  {
    name: "JOSEPH",
    src: "/images/Partners/JOSEPH Logo 2023.webp",
    alt: {
      en: "JOSEPH logo",
      bg: "Лого на JOSEPH"
    }
  },
  {
    name: "Me and My",
    src: "/images/Partners/Me and My Logo.png",
    alt: {
      en: "Me and My logo",
      bg: "Лого на Me and My"
    }
  },
  {
    name: "Figaro Fashion",
    src: "/images/Partners/Figaro Fashion Logo.png",
    alt: {
      en: "Figaro Fashion logo",
      bg: "Лого на Figaro Fashion"
    }
  }
] as const satisfies readonly PartnerLogo[];

export const homeContent = {
  en: {
    heroLabel: "Built to sew, trusted to deliver",
    heroTitle: "Family-owned trouser production since 1997.",
    heroIntro: "DIMTEX makes men's and women's trousers for clients who need close communication, careful sewing, and dependable subcontract production.",
    primaryAction: "Send inquiry",
    secondaryAction: "View company",
    partnersLabel: "Our Biggest Clients",
    heroHighlights: [
      { label: "Since", title: "1997", text: "Family-owned garment production in Blagoevgrad." },
      { label: "Focus", title: "Trousers", text: "Men's and women's trouser manufacturing." },
      { label: "Work", title: "Subcontract", text: "Organized sewing capacity for apparel partners." }
    ],
    processLabel: "Production flow",
    processTitle: "Clear steps, close control.",
    processIntro: "A compact workshop rhythm keeps the work visible from first sample to finished delivery.",
    processSteps: [
      { label: "Cutting", text: "Materials are prepared around client specifications and production needs." },
      { label: "Sewing", text: "Operators focus on consistent construction, fit, and finishing." },
      { label: "Checking", text: "Details are reviewed through the run, not only at the end." },
      { label: "Delivery", text: "Production stays organized around timing, packaging, and handover." }
    ],
    finalTitle: "Looking for trouser production capacity in Bulgaria?",
    finalBody: "Share the garment type, expected quantities, timing, and technical requirements.",
    finalAction: "Contact DIMTEX"
  },
  bg: {
    heroLabel: "Шием прецизно, доставяме сигурно",
    heroTitle: "Семейно производство на панталони от 1997 г.",
    heroIntro: "ДИМТЕКС произвежда мъжки и дамски панталони за клиенти, които търсят директна комуникация, прецизно шиене и надеждно подизпълнение.",
    primaryAction: "Изпратете запитване",
    secondaryAction: "Вижте компанията",
    partnersLabel: "Нашите партньори",
    heroHighlights: [
      { label: "От", title: "1997", text: "Семейно производство на облекло в Благоевград." },
      { label: "Фокус", title: "Панталони", text: "Производство на мъжки и дамски панталони." },
      { label: "Работа", title: "Подизпълнение", text: "Организиран шивашки капацитет за партньори." }
    ],
    processLabel: "Производствен процес",
    processTitle: "Ясни стъпки, близък контрол.",
    processIntro: "Компактният работен ритъм поддържа видимост от първата мостра до готовата доставка.",
    processSteps: [
      { label: "Кроене", text: "Материалите се подготвят според спецификациите и нуждите на поръчката." },
      { label: "Шиене", text: "Екипът следи за постоянна конструкция, силует и завършек." },
      { label: "Проверка", text: "Детайлите се преглеждат по време на производството, не само накрая." },
      { label: "Доставка", text: "Работата се организира около срокове, опаковане и предаване." }
    ],
    finalTitle: "Търсите производствен капацитет за панталони в България?",
    finalBody: "Изпратете тип изделие, очаквани количества, срокове и технически изисквания.",
    finalAction: "Свържете се с ДИМТЕКС"
  }
} as const;

export const aboutContent = {
  en: {
    heroLabel: "About DIMTEX LTD",
    heroTitle: "Inside a focused trouser workshop.",
    heroIntro: "Since 1997, DIMTEX has produced men's and women's trousers in Blagoevgrad with direct communication, skilled sewing, and reliable subcontract capacity.",
    profileTitle: "Reliable trouser production with direct oversight.",
    profileParagraphs: [
      "Clients work with a focused Bulgarian workshop that turns approved specifications into organized production runs.",
      "Our team supports sampling, sewing, finishing, and delivery with clear communication throughout the order."
    ],
    walkthroughLabel: "Workshop walkthrough",
    walkthroughTitle: "From brief to finished garments.",
    walkthroughIntro: "See the key stages clients can expect when an order enters our workshop.",
    walkthroughSteps: [
      {
        label: "01 / Briefing",
        title: "Clear production brief",
        text: "Style details, quantities, materials, timing, and finish requirements are aligned before work begins."
      },
      {
        label: "02 / Setup",
        title: "Production setup",
        text: "The order is prepared across the right sewing and finishing stations for the garment."
      },
      {
        label: "03 / Review",
        title: "In-process checks",
        text: "Fit, seams, closures, and finishing details are reviewed while production is active."
      },
      {
        label: "04 / Handover",
        title: "Ready for delivery",
        text: "Garments are finished, packed, and prepared for handover from Blagoevgrad."
      }
    ],
    galleryLabel: "Workshop gallery",
    galleryTitle: "Workshop details ready for client review.",
    galleryIntro: "",
    galleryPreviousLabel: "Previous gallery photo",
    galleryNextLabel: "Next gallery photo",
    capabilitiesLabel: "Client assessment",
    capabilities: [
      {
        title: "Trouser specialization",
        text: "Men's and women's trousers built around construction, fit, and finish expectations."
      },
      {
        title: "Accessible decisions",
        text: "Production questions are handled close to the people making the garments."
      },
      {
        title: "Subcontract fit",
        text: "A focused setup for partners who need dependable sewing capacity and consistent delivery."
      }
    ],
    snapshots: [
      {
        label: "Owner-led",
        title: "Direct responsibility on every order.",
        text: "A family-owned workshop with long-term client relationships and clear accountability."
      },
      {
        label: "Production focus",
        title: "Trousers for men and women.",
        text: "The workshop is arranged around steady trouser work, fit, finishing, and consistency."
      }
    ],
    partnerStandardLabel: "Working standard",
    partnerStandardTitle: "Clear communication supports every production run.",
    partnerStandardIntro: "DIMTEX gives clients practical answers while the work is being planned and produced.",
    partnerStandardItems: [
      "Requirements are aligned before production starts.",
      "Production questions are resolved quickly.",
      "Repeat styles are kept consistent across future orders."
    ]
  },
  bg: {
    heroLabel: "За ДИМТЕКС ООД",
    heroTitle: "Вътре във фокусиран шивашки цех за панталони.",
    heroIntro: "От 1997 г. ДИМТЕКС произвежда мъжки и дамски панталони в Благоевград с директна комуникация, прецизно шиене и надежден подизпълнителски капацитет.",
    profileTitle: "Надеждно производство на панталони, близо до реалната работа.",
    profileParagraphs: [
      "Клиентите работят с фокусиран български цех, който превръща одобрени спецификации в организирани производствени серии.",
      "Екипът ни подкрепя мостри, шиене, довършване и доставка с ясна комуникация през цялата поръчка."
    ],
    walkthroughLabel: "Разходка през цеха",
    walkthroughTitle: "От задание до готови изделия.",
    walkthroughIntro: "Вижте основните етапи, които клиентите могат да очакват, когато поръчката влезе в нашия цех.",
    walkthroughSteps: [
      {
        label: "01 / Задание",
        title: "Ясно производствено задание",
        text: "Детайли по модела, количества, материали, срокове и изисквания за завършек се уточняват преди работа."
      },
      {
        label: "02 / Подготовка",
        title: "Подготовка за производство",
        text: "Поръчката се разпределя към правилните шевни и довършителни станции според изделието."
      },
      {
        label: "03 / Преглед",
        title: "Проверки в процеса",
        text: "Силует, шевове, закопчаване и довършителни детайли се преглеждат, докато производството е активно."
      },
      {
        label: "04 / Предаване",
        title: "Готови за доставка",
        text: "Изделията се довършват, опаковат и подготвят за предаване от Благоевград."
      }
    ],
    galleryLabel: "Галерия от цеха",
    galleryTitle: "Детайли от цеха, готови за клиентски преглед.",
    galleryIntro: "",
    galleryPreviousLabel: "Предишна снимка от галерията",
    galleryNextLabel: "Следваща снимка от галерията",
    capabilitiesLabel: "За оценка от клиенти",
    capabilities: [
      {
        title: "Специализация в панталони",
        text: "Мъжки и дамски модели, изградени около конструкция, силует и очакван завършек."
      },
      {
        title: "Близки решения",
        text: "Производствените въпроси се решават близо до хората, които изработват изделията."
      },
      {
        title: "Подходящо подизпълнение",
        text: "Фокусирана организация за партньори, които търсят надежден шивашки капацитет и постоянна доставка."
      }
    ],
    snapshots: [
      {
        label: "Собственическо управление",
        title: "Пряка отговорност във всяка поръчка.",
        text: "Семеен цех с дългосрочни клиентски отношения и ясна отговорност."
      },
      {
        label: "Производствен фокус",
        title: "Панталони за мъже и жени.",
        text: "Базата е подредена около стабилна работа с панталони, силует, завършек и постоянство."
      }
    ],
    partnerStandardLabel: "Стандарт на работа",
    partnerStandardTitle: "Ясната комуникация подкрепя всяка производствена серия.",
    partnerStandardIntro: "ДИМТЕКС дава на клиентите практични отговори, докато работата се планира и произвежда.",
    partnerStandardItems: [
      "Изискванията се уточняват преди старт на производството.",
      "Въпросите от цеха се решават бързо.",
      "Повтарящите се модели се поддържат последователно в бъдещи поръчки."
    ]
  }
} as const;

export const contactContent = {
  en: {
    heroLabel: "Contact",
    heroTitle: "Send a production inquiry.",
    heroIntro: "For trouser production, sewing services, subcontract work, or general manufacturing contact.",
    formTitle: "Tell us what you need produced.",
    formIntro: "Share the garment type, quantities, timing, and any technical requirements. We will respond directly with the next practical step.",
    imageCaption: "Workshop contact for production planning, timing, and technical requirements."
  },
  bg: {
    heroLabel: "Контакт",
    heroTitle: "Изпратете производствено запитване.",
    heroIntro: "За производство на панталони, шивашки услуги, подизпълнение или общ производствен контакт.",
    formTitle: "Опишете какво трябва да произведем.",
    formIntro: "Споделете вид изделие, количества, срокове и технически изисквания. Ще отговорим директно с практична следваща стъпка.",
    imageCaption: "Контакт за планиране на производство, срокове и технически изисквания."
  }
} as const;
