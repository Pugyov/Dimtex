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
    src: "/images/factory/Garment Factory Construction Guidelines.jpeg",
    fallbackSrc: "/images/placeholders/production-floor.svg",
    alt: {
      en: "DIMTEX garment production workshop in Blagoevgrad",
      bg: "Производствено помещение на ДИМТЕКС в Благоевград"
    }
  },
  sewingDetail: {
    src: "/images/gallery/Garment Factory Image.jpg",
    fallbackSrc: "/images/placeholders/machines.svg",
    alt: {
      en: "Sewing detail from trouser production",
      bg: "Детайл от шиене при производство на панталони"
    }
  },
  teamOrFamily: {
    src: "/images/gallery/teamphoto.jpg",
    fallbackSrc: "/images/placeholders/team.svg",
    alt: {
      en: "DIMTEX family-owned production team",
      bg: "Семеен производствен екип на ДИМТЕКС"
    }
  }
} as const;

export const homeContent = {
  en: {
    heroLabel: "Blagoevgrad, Bulgaria",
    heroTitle: "Family-owned trouser production since 1997.",
    heroIntro: "DIMTEX makes men's and women's trousers for clients who need close communication, careful sewing, and dependable subcontract production.",
    primaryAction: "Send inquiry",
    secondaryAction: "View company",
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
    heroLabel: "Благоевград, България",
    heroTitle: "Семейно производство на панталони от 1997 г.",
    heroIntro: "ДИМТЕКС произвежда мъжки и дамски панталони за клиенти, които търсят директна комуникация, прецизно шиене и надеждно подизпълнение.",
    primaryAction: "Изпратете запитване",
    secondaryAction: "Вижте компанията",
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
    heroTitle: "Garment production in Blagoevgrad since 1997.",
    heroIntro: "DIMTEX is a family-owned clothing manufacturer focused on men's and women's trousers, sewing services, and subcontract production.",
    profileTitle: "A practical production partner.",
    profileParagraphs: [
      "From our base in Blagoevgrad, Bulgaria, we support apparel clients with focused garment manufacturing and direct communication.",
      "Our work is organized around repeatable trouser production, consistent sewing, and clear handover from technical requirements to finished garments."
    ],
    capabilitiesLabel: "What we do",
    capabilities: [
      {
        title: "Trouser production",
        text: "Men's and women's trousers produced to client specifications."
      },
      {
        title: "Sewing services",
        text: "Focused sewing support for apparel production runs."
      },
      {
        title: "Subcontract manufacturing",
        text: "Production capacity for partners who need organized execution."
      }
    ],
    snapshots: [
      {
        label: "Family-owned",
        title: "Decisions stay close to the floor.",
        text: "The company is run with direct responsibility, short communication lines, and long-term working relationships."
      },
      {
        label: "Production focus",
        title: "Trousers for men and women.",
        text: "The workshop is organized around repeatable garment production, fit, finishing, and consistency."
      },
      {
        label: "Experience",
        title: "Built through international work.",
        text: "Intermediary partnerships have shaped a practical understanding of apparel standards and client requirements."
      }
    ],
    closingTitle: "Send us your production details.",
    closingAction: "Contact us"
  },
  bg: {
    heroLabel: "За ДИМТЕКС ООД",
    heroTitle: "Производство на облекло в Благоевград от 1997 г.",
    heroIntro: "ДИМТЕКС е семейна компания за производство на облекло с фокус върху мъжки и дамски панталони, шивашки услуги и подизпълнение.",
    profileTitle: "Практичен производствен партньор.",
    profileParagraphs: [
      "От нашата база в Благоевград подпомагаме клиенти в сферата на облеклото с фокусирано производство и директна комуникация.",
      "Работата ни е организирана около повторяемо производство на панталони, постоянно качество на шиене и ясно изпълнение на техническите изисквания."
    ],
    capabilitiesLabel: "Какво правим",
    capabilities: [
      {
        title: "Производство на панталони",
        text: "Мъжки и дамски панталони по клиентски спецификации."
      },
      {
        title: "Шивашки услуги",
        text: "Фокусирана шивашка подкрепа за производствени серии."
      },
      {
        title: "Подизпълнително производство",
        text: "Производствен капацитет за партньори, които търсят организирано изпълнение."
      }
    ],
    snapshots: [
      {
        label: "Семейна компания",
        title: "Решения близо до производството.",
        text: "Компанията работи с пряка отговорност, кратка комуникация и дългосрочни производствени отношения."
      },
      {
        label: "Производствен фокус",
        title: "Панталони за мъже и жени.",
        text: "Базата е организирана около повторяемо производство, силует, завършек и постоянство."
      },
      {
        label: "Опит",
        title: "Изграден чрез международна работа.",
        text: "Партньорства чрез посредници оформят практическо разбиране за стандарти и клиентски изисквания."
      }
    ],
    closingTitle: "Изпратете производствено запитване.",
    closingAction: "Свържете се с нас"
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
