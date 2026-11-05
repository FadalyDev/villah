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
        { name: "نسكافيه بلاك", price: 30 },
        { name: "نسكافيه حليب", price: 45 },
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
        { name: "كوكتيل اعشاب", price: 40 },
      ],
    },
    {
      id: "warm",
      name_ar: "الدفء",
      items: [
        { name: "سحلب", price: 35 },
        { name: "سحلب مكسرات", price: 45 },
        { name: "سحلب عسل مكسرات", price: 50 },
        { name: "هوت شوكلت", price: 50 },
        { name: "حمص", price: 40 },
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
          name: "جوافة نعناع",
          price: 60,
        },
        {
          name: "فراولة نعناع",
          price: 65,
        },
        {
          name: "بطيخ نعناع",
          price: 65,
        },
        {
          name: "يوم فري",
          price: 80,
          description: "جوافة + موز + آيس كريم + فانيليا + نعناع",
        },
        {
          name: "زبادي فواكه",
          price: 75,
          description: "بيري + مانجو + فراوله + موز",
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
        { name: "مانجو", price: 60 },
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
        { name: "سموزي مانجو", price: 70 },
        { name: "سموزي فراولة", price: 60 },
        { name: "سموزي بيري", price: 65 },
        { name: "سموزي كيوي", price: 75 },
        { name: "سموزي بطيخ", price: 60 },
        { name: "سموزي بطيخ نعناع", price: 75 },
        { name: "سموزي ليمون", price: 40 },
        { name: "سموزي ليمون نعناع", price: 50 },
        { name: "سموزي جوافة نعناع", price: 70 },
        { name: "سموزي بيناكولادا", price: 90 },
        { name: "سموزي اناناس", price: 70 },
        { name: "سموزي ميكس بيري", price: 75 },
      ],
    },
    {
      id: "power",
      name_ar: "الباور العالي",
      items: [
        {
          name: "صن رايز",
          price: 70,
          description: "سفن + ليمون + اناناس + فليفر رمان",
        },
        {
          name: "صن شاين",
          price: 70,
          description: "سفن + ليمون + برتقال + نعناع + فليفر نعناع",
        },
        { name: "موخيتو ريد بول", price: 120 },
        {
          name: "بلو بلو",
          price: 110,
          description: "سفن + سموزي بلو بيري + فليفر بلو كرواساو + ليمون + نعناع",
        },
        {
          name: "بلو اورانج",
          price: 55,
          description: "سفن + ليمون + فليفر بلو كوراساو",
        },
        {
          name: "باشون فروت",
          price: 50,
          description: "سفن + ليمون + فليفر باشون فروت",
        },
        {
          name: "اورانج بلاك",
          price: 110,
          description: "سفن + برتقال + دبل اسبريسو",
        },
        {
          name: "موخيتو",
          price: 55,
          description: "سفن + ليمون + نعناع + فليفر نعناع", 
        },
      ],
    },
    {
      id: "egypt",
      name_ar: "شغل ايجيبت",
      items: [
        { name: "ايس لاتيه", price: 70 },
        { name: "ايس اسبانيش لاتيه", price: 85 },
        { name: "ايس ميكاتو كراميل", price: 60 },
        { name: "ايس موكا دارك", price: 75 },
        { name: "ايس موكا وايت", price: 75 },
        { name: "ايس امريكانو بلاك", price: 65 },
        { name: "فرابيه شوكليت", price: 85 },
        { name: "فرابيه فانيليا", price: 85 },
      ],
    },
    {
      id: "shake",
      name_ar: "حلاوة روح",
      items: [
        {
          name: "ميلك شيك شوكليت",
          price: 60,
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
