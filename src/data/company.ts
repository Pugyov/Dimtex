export const company = {
  nameEn: "DIMTEX LTD",
  nameBg: "ДИМТЕКС ООД",
  legalFormEn: "Bulgarian limited liability company (OOD)",
  legalFormBg: "Българско дружество с ограничена отговорност (ООД)",
  eik: "101066449",
  vat: "BG101066449",
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

export const aboutContent = {
  showNamedClients: false,
  en: {
    heroLabel: "ABOUT",
    heroTitle: "A clothing manufacturer rooted in Blagoevgrad since 1997.",
    heroIntro:
      "DIMTEX LTD is a garment manufacturing partner based in Blagoevgrad, Bulgaria, specializing in the production of men's and women's trousers. Since 1997, we have supported fashion and apparel clients with reliable sewing, subcontract manufacturing, and consistent production execution.",
    overviewTitle: "OUR COMPANY",
    overviewParagraphs: [
      "Founded in 1997, DIMTEX LTD has built its work around dependable garment production, clear communication, and long-term manufacturing relationships.",
      "From our base in Blagoevgrad, Bulgaria, we provide sewing and subcontract production services for clients who need focused, consistent, and well-organized manufacturing support."
    ],
    productionTitle: "WHAT WE PRODUCE",
    productionParagraphs: [
      "Our main production focus is trousers for men and women. We work according to client specifications, technical requirements, and production standards, with attention to fit, finishing, consistency, and delivery discipline.",
      "We are not a fashion label. We are a manufacturing partner — focused on transforming client requirements into reliable, repeatable garment production."
    ],
    experienceTitle: "PRODUCTION EXPERIENCE",
    namedExperienceParagraphs: [
      "We have production experience connected to international fashion clients through intermediary partnerships. Through these production relationships, we have experience connected to brands such as Joseph, Anne Fontaine, Maria De La Orden, and smaller-volume work related to Kenzo.",
      "Our work is best understood as manufacturing support and subcontract production within broader commercial relationships rather than direct brand-side representation."
    ],
    safeExperienceParagraphs: [
      "Through established intermediary partnerships, DIMTEX LTD has contributed to production connected with international fashion clients. This experience has shaped the way we work: precise execution, respect for client requirements, and a practical understanding of apparel production standards.",
      "Our role is to provide dependable manufacturing support within broader commercial and production relationships."
    ],
    factsLabel: "Facts",
    factsIntro: "Conservative company information for orientation and direct contact.",
    facts: [
      { label: "Founded", value: company.founded },
      { label: "Location", value: `${company.city}, ${company.country}` },
      { label: "Focus", value: company.productionFocusEn },
      { label: "Services", value: company.servicesEn.join(", ") },
      { label: "Legal", value: company.nameEn },
      { label: "EIK", value: company.eik },
      { label: "VAT", value: company.vat }
    ],
    closingTitle: "Looking for reliable trouser production capacity in Bulgaria?",
    closingAction: "Contact us"
  },
  bg: {
    heroLabel: "ЗА НАС",
    heroTitle: "Производител на облекло с корени в Благоевград от 1997 г.",
    heroIntro:
      "ДИМТЕКС ООД е производствен партньор в сферата на облеклото, базиран в Благоевград, България, със специализация в производството на мъжки и дамски панталони. От 1997 г. подпомагаме модни и облеклови клиенти с надеждно шиене, подизпълнително производство и последователно изпълнение на производството.",
    overviewTitle: "НАШАТА КОМПАНИЯ",
    overviewParagraphs: [
      "Основана през 1997 г., ДИМТЕКС ООД изгражда работата си върху надеждно производство на облекло, ясна комуникация и дългосрочни производствени отношения.",
      "От нашата база в Благоевград, България, предоставяме шивашки услуги и подизпълнително производство за клиенти, които търсят фокусирана, последователна и добре организирана производствена подкрепа."
    ],
    productionTitle: "КАКВО ПРОИЗВЕЖДАМЕ",
    productionParagraphs: [
      "Основният ни производствен фокус са мъжките и дамските панталони. Работим по клиентски спецификации, технически изисквания и производствени стандарти, с внимание към силуета, завършека, последователността и дисциплината при изпълнение.",
      "Ние не сме моден бранд. Ние сме производствен партньор — фокусиран върху превръщането на клиентските изисквания в надеждно и повторяемо производство на изделия."
    ],
    experienceTitle: "ПРОИЗВОДСТВЕН ОПИТ",
    namedExperienceParagraphs: [
      "Имаме производствен опит, свързан с международни модни клиенти чрез посреднически партньорства. Чрез тези производствени отношения имаме опит, свързан с марки като Joseph, Anne Fontaine, Maria De La Orden, както и с по-малки обеми работа, свързани с Kenzo.",
      "Тази дейност следва да се разбира като производствена поддръжка и подизпълнителско производство в рамките на по-широки търговски отношения, а не като директно представителство на марки."
    ],
    safeExperienceParagraphs: [
      "Чрез установени посреднически партньорства ДИМТЕКС ООД е участвала в производство, свързано с международни модни клиенти. Този опит оформя начина, по който работим: прецизно изпълнение, уважение към клиентските изисквания и практическо разбиране на стандартите в производството на облекло.",
      "Нашата роля е да осигуряваме надеждна производствена подкрепа в рамките на по-широки търговски и производствени отношения."
    ],
    factsLabel: "Факти",
    factsIntro: "Консервативна фирмена информация за ориентация и директен контакт.",
    facts: [
      { label: "Основана", value: company.founded },
      { label: "Локация", value: "Благоевград, България" },
      { label: "Фокус", value: company.productionFocusBg },
      { label: "Услуги", value: company.servicesBg.join(", ") },
      { label: "Юридическо име", value: company.nameBg },
      { label: "ЕИК", value: company.eik },
      { label: "ДДС", value: company.vat }
    ],
    closingTitle: "Търсите надежден производствен капацитет за панталони в България?",
    closingAction: "Свържете се с нас"
  }
} as const;

export const companyFacts = [
  { labelEn: "Founded", labelBg: "Основана", value: company.founded },
  {
    labelEn: "Location",
    labelBg: "Локация",
    value: `${company.city}, ${company.country}`
  },
  {
    labelEn: "Focus",
    labelBg: "Фокус",
    value: "Garment manufacturing and sewing services"
  }
] as const;
