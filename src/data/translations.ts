import { company } from "./company";

export type Locale = "en" | "bg";

export const siteCopy = {
  en: {
    localeName: "English",
    otherLocaleName: "Български",
    brand: company.nameEn,
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact"
    },
    actions: {
      contact: "Contact Us",
      sendInquiry: "Send Inquiry"
    },
    footer: {
      strapline: "Garment production and sewing services based in Blagoevgrad.",
      legal: "DIMTEX LTD"
    },
    forms: {
      contactTitle: "For production, subcontract work, and general manufacturing contact.",
      inquiryTypes: ["Manufacturing", "Subcontract production", "General inquiry"]
    }
  },
  bg: {
    localeName: "Български",
    otherLocaleName: "English",
    brand: company.nameBg,
    nav: {
      home: "Начало",
      about: "За нас",
      contact: "Контакт"
    },
    actions: {
      contact: "Свържете се с нас",
      sendInquiry: "Изпратете запитване"
    },
    footer: {
      strapline: "Шивашки услуги и производство на облекло в Благоевград.",
      legal: "ДИМТЕКС ООД"
    },
    forms: {
      contactTitle: "За производство, подизпълнителска работа и общ производствен контакт.",
      inquiryTypes: ["Производство", "Подизпълнителско производство", "Общо запитване"]
    }
  }
} as const;

export const pageMeta = {
  en: {
    home: {
      title: "DIMTEX LTD | Clothing Manufacturing in Bulgaria",
      description: "Reliable garment production and sewing services from Blagoevgrad, Bulgaria."
    },
    about: {
      title: "About DIMTEX LTD | Clothing Manufacturer in Blagoevgrad",
      description: "DIMTEX LTD is a clothing manufacturing company based in Blagoevgrad, Bulgaria, focused on sewing services, subcontract production, and men's and women's trousers."
    },
    contact: {
      title: "Contact DIMTEX LTD",
      description: "Contact DIMTEX LTD for garment production, subcontract manufacturing, or general inquiries."
    }
  },
  bg: {
    home: {
      title: "ДИМТЕКС ООД | Производство на облекло в България",
      description: "Надеждно производство на облекло и шивашки услуги от Благоевград, България."
    },
    about: {
      title: "За ДИМТЕКС ООД | Производител на облекло в Благоевград",
      description: "ДИМТЕКС ООД е компания за производство на облекло в Благоевград, България, с фокус върху шивашки услуги, подизпълнителско производство и мъжки и дамски панталони."
    },
    contact: {
      title: "Контакт с ДИМТЕКС ООД",
      description: "Свържете се с ДИМТЕКС ООД за производство на облекло, подизпълнение или общи запитвания."
    }
  }
} as const;
