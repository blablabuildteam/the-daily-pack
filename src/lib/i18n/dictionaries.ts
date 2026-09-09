export type Locale = "nl" | "en";

export const LOCALE_COOKIE = "tdp_lang";
export const DEFAULT_LOCALE: Locale = "nl";

export type Dictionary = {
  common: {
    bookIntro: string;
    bookEigen: string;
    learnMore: string;
    developedBy: string;
  };
  nav: {
    services: string;
    howItWorks: string;
    about: string;
    blog: string;
    contact: string;
    packRonde: string;
    eigenRonde: string;
    werkwijze: string;
    tijdenTarieven: string;
    packRegels: string;
    faq: string;
    aboutTdp: string;
    loopband: string;
  };
  home: {
    eyebrow: string;
    heroTitleBefore: string;
    heroTitleEm: string;
    heroText: string;
    discover: string;
    whyEyebrow: string;
    whyTitleBefore: string;
    whyTitleEm: string;
    whyIntro: string;
    reasons: { n: string; title: string; text: string }[];
    instagramEyebrow: string;
    instagramTitleBefore: string;
    instagramTitleEm: string;
    instagramIntro: string;
    instagramCta: string;
    stepsEyebrow: string;
    stepsTitleBefore: string;
    stepsTitleEm: string;
    moreInfo: string;
    steps: { title: string; text: string }[];
    offersEyebrow: string;
    offersTitleBefore: string;
    offersTitleEm: string;
    offers: { title: string; text: string }[];
    ctaTitleBefore: string;
    ctaTitleEm: string;
    ctaText: string;
  };
  contact: {
    title: string;
    intro: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  blog: {
    title: string;
    intro: string;
    readMore: string;
    back: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  nl: {
    common: {
      bookIntro: "Boek een Kennismaking",
      bookEigen: "Plan een Eigen Ronde",
      learnMore: "Meer informatie",
      developedBy: "Ontwikkeld door",
    },
    nav: {
      services: "Diensten",
      howItWorks: "Hoe het werkt",
      about: "Over ons",
      blog: "Blog",
      contact: "Contact",
      packRonde: "Pack Ronde",
      eigenRonde: "Eigen Ronde",
      werkwijze: "Werkwijze",
      tijdenTarieven: "Tijden & Tarieven",
      packRegels: "Pack Regels",
      faq: "Veelgestelde vragen",
      aboutTdp: "The Daily Pack",
      loopband: "Loopband",
    },
    home: {
      eyebrow: "Premium Hondenservice · Amsterdam-Noord",
      heroTitleBefore: "Upgrade de dag van",
      heroTitleEm: "jouw hond.",
      heroText:
        "Geen tijd om je hond goed uit te laten? Wij nemen het over. Ophalen, een echte wandeling in bos of park, en voldaan weer thuis. In kleine groepen of alleen met jouw hond, met kortere ritjes en veel aandacht.",
      discover: "Ontdek hoe het werkt",
      whyEyebrow: "Waarom",
      whyTitleBefore: "Waarom",
      whyTitleEm: "The Daily Pack?",
      whyIntro: "De belangrijkste voordelen voor jou en jouw hond.",
      reasons: [
        {
          n: "01",
          title: "Meer dan een blokje om",
          text: "Een echte wandeling in het park of bos, met de loopband als aanvulling bij slecht weer. Jouw hond komt fysiek en mentaal voldaan thuis.",
        },
        {
          n: "02",
          title: "Kleine groepen, korte ritten",
          text: "Ophalen en thuisbrengen in kleine groepen. Korte ritjes en meer persoonlijke aandacht.",
        },
        {
          n: "03",
          title: "Veilig op pad",
          text: "Vervoer in onze elektrische bus met eigen transportbox, ventilatie ook bij stilstand en GPS-tracker tijdens de wandeling.",
        },
      ],
      instagramEyebrow: "Instagram",
      instagramTitleBefore: "De roedel",
      instagramTitleEm: "op pad",
      instagramIntro:
        "De laatste avonturen, foto's en video's op onze Instagram.",
      instagramCta: "Bezoek onze Instagram",
      stepsEyebrow: "Werkwijze",
      stepsTitleBefore: "Hoe werkt",
      stepsTitleEm: "het?",
      moreInfo: "Meer informatie",
      steps: [
        {
          title: "Kennismaking",
          text: "We starten met een gratis, persoonlijke ontmoeting, bespreken de wensen en bepalen samen wat de volgende stap is.",
        },
        {
          title: "Ophalen en naar het park",
          text: "We halen jouw hond thuis op en gaan op weg naar het park of bos.",
        },
        {
          title: "Wandelen en socialiseren",
          text: "Een wandeling in het park of bos met een kleine groep. Bewegen, snuffelen, ontdekken.",
        },
        {
          title: "Loopband",
          text: "Bij slecht weer is er tijd voor de loopband. Stoom afblazen op een veilige, gecontroleerde manier.",
        },
        {
          title: "Thuisbrengen",
          text: "We brengen jouw hond terug naar huis. Moe, ontspannen en klaar voor de rest van de dag.",
        },
        {
          title: "Wandelverslag",
          text: "Na afloop ontvang je het Wandelverslag met foto's en video's.",
        },
      ],
      offersEyebrow: "Diensten",
      offersTitleBefore: "Het",
      offersTitleEm: "aanbod",
      offers: [
        {
          title: "Pack Ronde",
          text: "Doordeweeks. Vastigheid, iedere week dezelfde dag en hetzelfde moment.",
        },
        {
          title: "Eigen Ronde",
          text: "Flexibel inboeken op een moment dat past. Voor maximaal twee honden van hetzelfde adres.",
        },
      ],
      ctaTitleBefore: "Klaar voor een",
      ctaTitleEm: "voldane hond?",
      ctaText: "Zet vandaag de eerste stap voor jouw hond.",
    },
    contact: {
      title: "Contact",
      intro:
        "Vragen over onze wandelingen of benieuwd naar de mogelijkheden voor jouw hond? Neem direct contact op.",
      name: "Naam",
      email: "E-mail",
      message: "Bericht",
      send: "Verstuur bericht",
      sending: "Versturen…",
      success: "Bedankt! Je bericht is verstuurd.",
      error: "Er ging iets mis. Probeer het opnieuw of gebruik het contactformulier later nog eens.",
    },
    blog: {
      title: "Blog",
      intro: "Inzichten over beweging, rust en een voldane hond.",
      readMore: "Lees verder",
      back: "Terug naar blog",
    },
  },
  en: {
    common: {
      bookIntro: "Book an Introduction",
      bookEigen: "Plan a Private Walk",
      learnMore: "Learn more",
      developedBy: "Built by",
    },
    nav: {
      services: "Services",
      howItWorks: "How it works",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      packRonde: "Pack Walk",
      eigenRonde: "Private Walk",
      werkwijze: "Our approach",
      tijdenTarieven: "Times & Rates",
      packRegels: "Pack Rules",
      faq: "FAQ",
      aboutTdp: "The Daily Pack",
      loopband: "Treadmill",
    },
    home: {
      eyebrow: "Premium Dog Service · Amsterdam-Noord",
      heroTitleBefore: "Upgrade your",
      heroTitleEm: "dog's day.",
      heroText:
        "No time to walk your dog properly? We take over. Pick-up, a real walk in the woods or park, and home again fulfilled. In small groups or one-on-one with your dog — shorter rides and plenty of attention.",
      discover: "Discover how it works",
      whyEyebrow: "Why",
      whyTitleBefore: "Why",
      whyTitleEm: "The Daily Pack?",
      whyIntro: "The key benefits for you and your dog.",
      reasons: [
        {
          n: "01",
          title: "More than a quick loop",
          text: "A real walk in the park or woods, with the treadmill as support in bad weather. Your dog comes home physically and mentally fulfilled.",
        },
        {
          n: "02",
          title: "Small groups, short rides",
          text: "Pick-up and drop-off in small groups. Shorter rides and more personal attention.",
        },
        {
          n: "03",
          title: "Safe on the go",
          text: "Transport in our electric van with individual crates, ventilation even when parked, and a GPS tracker during the walk.",
        },
      ],
      instagramEyebrow: "Instagram",
      instagramTitleBefore: "The pack",
      instagramTitleEm: "on the move",
      instagramIntro:
        "The latest adventures, photos and videos on our Instagram.",
      instagramCta: "Visit our Instagram",
      stepsEyebrow: "Approach",
      stepsTitleBefore: "How does",
      stepsTitleEm: "it work?",
      moreInfo: "More information",
      steps: [
        {
          title: "Introduction",
          text: "We start with a free, personal meeting, discuss your wishes and decide together on the next step.",
        },
        {
          title: "Pick-up and to the park",
          text: "We collect your dog at home and head to the park or woods.",
        },
        {
          title: "Walking and socialising",
          text: "A walk in the park or woods with a small group. Moving, sniffing, exploring.",
        },
        {
          title: "Treadmill",
          text: "In bad weather there is time for the treadmill. Letting off steam in a safe, controlled way.",
        },
        {
          title: "Drop-off",
          text: "We bring your dog back home. Tired, relaxed and ready for the rest of the day.",
        },
        {
          title: "Walk report",
          text: "Afterwards you receive the Walk Report with photos and videos.",
        },
      ],
      offersEyebrow: "Services",
      offersTitleBefore: "What's",
      offersTitleEm: "on offer",
      offers: [
        {
          title: "Pack Walk",
          text: "Weekdays. Consistency — the same day and time every week.",
        },
        {
          title: "Private Walk",
          text: "Book flexibly when it suits you. For up to two dogs from the same address.",
        },
      ],
      ctaTitleBefore: "Ready for a",
      ctaTitleEm: "fulfilled dog?",
      ctaText: "Take the first step for your dog today.",
    },
    contact: {
      title: "Contact",
      intro:
        "Questions about our walks or curious about the options for your dog? Get in touch directly.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      success: "Thanks! Your message has been sent.",
      error:
        "Something went wrong. Please try again or use the contact form later.",
    },
    blog: {
      title: "Blog",
      intro: "Insights on movement, calm and a fulfilled dog.",
      readMore: "Read more",
      back: "Back to blog",
    },
  },
};
