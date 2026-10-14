export interface ThemeColors {
  bg1: string;
  bg2: string;
  ink: string;
  soft: string;
  gold: string;
}

export interface CafeTheme {
  light: ThemeColors;
  dark: ThemeColors;
}

export interface Product {
  name: string;
  price: number;
  description?: string;
}

export interface Category {
  id: string;
  name_ar: string;
  items: Product[];
}

export interface CafeData {
  shop: {
    name_ar: string;
    name_en: string;
    language: string;
    direction: string;
    theme: CafeTheme;
    font: string;
  };
  categories: Category[];
}

export const cafeData: CafeData = {
  shop: {
    name_ar: "كافيه الفيلا",
    name_en: "Café Al-Villa",
    language: "ar",
    direction: "rtl",
    theme: {
      light: {
        bg1: "#f6ead0",
        bg2: "#ecd9b0",
        ink: "#4a2c10",
        soft: "#7a5a36",
        gold: "#a97a22",
      },
      dark: {
        bg1: "#21150b",
        bg2: "#150d06",
        ink: "#f3e4c2",
        soft: "#c9b387",
        gold: "#e0b862",
      },
    },
    font: "Cairo",
  },
  categories: [
    {
      id: "soft",
      name_ar: "سوفت درينك",
      items: [
        { name: "مياه", price: 10 },
        { name: "بيبسي", price: 30 },
        { name: "سفن", price: 30 },
        { name: "شويبس", price: 35 },
        { name: "فيروز", price: 35 },
        { name: "بريل", price: 35 },
        { name: "ريد بول", price: 95 },
        { name: "مونستر", price: 95 },
        { name: "فيوري", price: 40 },
        { name: "استينج", price: 35 },
      ],
    },
    {
      id: "mazaj",
      name_ar: "مزاج",
      items: [
        { name: "شاي", price: 15 },
        { name: "شاي باكت", price: 20 },
        { name: "شاي أخضر", price: 20 },
        { name: "شاي فواكه", price: 25 },
        { name: "شاي بحليب", price: 25 },
        { name: "شاي قرنفل", price: 15 },
        { name: "شاي نعناع", price: 15 },
        { name: "شاي سبيشال", price: 25 },
        { name: "براد شاي", price: 30 },
      ],
    },
    {
      id: "kif",
      name_ar: "الكيف",
      items: [
        { name: "قهوة تركي سنجل", price: 30 },
        { name: "قهوة تركي دبل", price: 40 },
        { name: "قهوة فرنساوي", price: 45 },
        { name: "قهوة بندق", price: 45 },
        { name: "قهوة نوتيلا", price: 45 },
        { name: "اسبرسو سنجل", price: 40 },
        { name: "اسبرسو دبل", price: 60 },
        { name: "ميكاتو سنجل", price: 45 },
        { name: "ميكاتو دبل", price: 65 },
        { name: "كابتشينو", price: 70 },
        { name: "قهوة غامق", price: 40 },
        { name: "فلات وايت", price: 75 },
        { name: "امريكان بلاك", price: 50 },
        { name: "اسبانيش لاتيه", price: 75 },
        { name: "موكا دارك", price: 65 },
        { name: "موكا وايت", price: 65 },
        { name: "نسكافيه بلاك", price: 25 },
        { name: "نسكافيه حليب", price: 35 },
      ],
    },

    {
      id: "herbs",
      name_ar: "أعشاب",
      items: [
        { name: "ينسون", price: 20 },
        { name: "قرفة", price: 25 },
        { name: "نعناع", price: 20 },
        { name: "زنجبيل", price: 35 },
        { name: "ليمون", price: 20 },
        { name: "زنجبيل حليب", price: 35 },
        { name: "قرفة حليب", price: 35 },
        { name: "قرفة زنجبيل", price: 30 },
        { name: "هوت سيدر", price: 40 },
        { name: "كوكتيل اعشاب", price: 35 },
        { name: "صيدلية", price: 40 },
      ],
    },
    {
      id: "warm",
      name_ar: "الدفء",
      items: [
        { name: "سحلب", price: 35 },
        { name: "سحلب مكسرات", price: 45 },
        { name: "سحلب عسل مكسرات", price: 50 },
        { name: "هوت شوكولاتة", price: 30 },
        { name: "هوت شوكولاتة مارشميلو", price: 40 },
        { name: "حمص", price: 35 },
      ],
    },
    {
      id: "rooqan",
      name_ar: "روقان",
      items: [
        {
          name: "ترافيل ميكس",
          price: 70,
          description: "برتقال + أناناس + فراولة",
        },
        {
          name: "فلوريدا",
          price: 65,
          description: "فراولة + مانجو + جوافة",
        },
        {
          name: "اركاديا",
          price: 80,
          description: "مانجو + موز + آيس كريم + فليفر فراولة",
        },
        {
          name: "هافانا",
          price: 80,
          description: "كيوي + أناناس",
        },
        {
          name: "بيناكولادا",
          price: 80,
          description: "أناناس + جوز هند + آيس كريم",
        },
        {
          name: "روقانك",
          price: 60,
          description: "جوافة + نعناع",
        },
        {
          name: "فوقانك",
          price: 65,
          description: "فراولة + نعناع",
        },
        {
          name: "نعنشتك",
          price: 65,
          description: "بطيخ + نعناع",
        },
        {
          name: "يوم فري",
          price: 75,
          description: "جوافة + موز + آيس كريم + فانيليا + نعناع",
        },
        {
          name: "كركديه بيري",
          price: 55,
          description: " كركديه + بلوبيري + نعناع",
        },
        {
          name: "زبادي فواكه",
          price: 75,
          description: "مانجو + فراوله + موز",
        },
        {
          name: "مانجو كيوي",
          price: 80,
          description: "مانجو + كيوي ",
        },
        {
          name: "كانجو مانجو",
          price: 80,
          description: "مانجو + خوخ ",
        },
        {
          name: "تروبيكانا",
          price: 95,
          description: "خوخ + مانجو + اناناس + مكسرات",
        },
        {
          name: "روقان الفيلا",
          price: 120,
        },
      ],
    },

    {
      id: "fresh",
      name_ar: "خليك فريش",
      items: [
        { name: "مانجو", price: 50 },
        { name: "فراولة", price: 50 },
        { name: "جوافة", price: 45 },
        { name: "موز", price: 45 },
        { name: "بطيخ", price: 50 },
        { name: "كيوي", price: 60 },
        { name: "اناناس", price: 60 },
        { name: "برتقال", price: 45 },
        { name: "ليمون", price: 35 },
        { name: "ليمون نعناع", price: 45 },
        { name: "افوكادو", price: 85 },
        { name: "بلح", price: 55 },
      ],
    },
    {
      id: "smoothie",
      name_ar: "طري على قلبك",
      items: [
        { name: "مانجو سموزي", price: 60 },
        { name: "فراولة سموزي", price: 60 },
        { name: "بلوبيري سموزي", price: 65 },
        { name: "كيوي سموزي", price: 65 },
        { name: "بطيخ سموزي", price: 60 },
        { name: "بطيخ نعناع سموزي", price: 80 },
        { name: "ليمون سموزي", price: 40 },
        { name: "ليمون نعناع سموزي", price: 50 },
      ],
    },
    {
      id: "power",
      name_ar: "الباور العالي",
      items: [
        {
          name: "صن رايز",
          price: 50,
          description: "سفن + ليمون + نعناع + فليفر نعناع",
        },
        {
          name: "صن شاين",
          price: 50,
          description: "سفن + ليمون + نعناع + فليفر فراولة",
        },
        { name: "موخيتو ريد بول", price: 120 },
        {
          name: "بلو اورانج",
          price: 50,
          description: "سفن + برتقال + فليفر رمان",
        },
        {
          name: "بلو اوشن",
          price: 55,
          description: "سفن + ليمون + فليفر بلو كوراساو",
        },
        {
          name: "باشون سبلاش",
          price: 45,
          description: "سفن + ليمون + فليفر باشون فروت",
        },
      ],
    },
    {
      id: "egypt",
      name_ar: "شغل ايجيبت",
      items: [
        { name: "ايس لاتيه", price: 55 },
        { name: "ايس اسبانيش لاتيه", price: 85 },
        { name: "ايس ميكاتو كراميل", price: 60 },
        { name: "ايس موكا دارك", price: 75 },
        { name: "ايس موكا وايت", price: 75 },
        { name: "ايس امريكانو بلاك", price: 65 },
        { name: "فرابتشينو كوفي", price: 60 },
        { name: "فرابتشينو فليفر", price: 85 },
      ],
    },
    {
      id: "shake",
      name_ar: "حلاوة روح",
      items: [
        {
          name: "ميلك شيك",
          price: 60,
          description: "شوكولاتة، فانيليا، فراولة، مانجو",
        },
        { name: "ميلك شيك اوريو", price: 75 },
        { name: "ميلك شيك تونكز", price: 75 },
        { name: "ميلك شيك هوهوز", price: 75 },
        { name: "بلوبيري شيك", price: 75 },
        { name: "كراميل شيك", price: 75 },
      ],
    },

    {
      id: "dessert",
      name_ar: "الديزيرت والإضافات",
      items: [
        { name: "وافل فليفر", price: 70 },
        { name: "وافل فواكه", price: 100 },
        { name: "وافل ميكس", price: 120 },
        { name: "فليفر", price: 15 },
        { name: "عسل", price: 15 },
        { name: "مكسرات", price: 25 },
      ],
    },
  ],
};
