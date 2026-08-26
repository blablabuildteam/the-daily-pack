export type Locale = "nl" | "en";

type TitleParts = {
  titleBefore: string;
  titleEm: string;
};

type ContentSection = {
  title: string;
  paragraphs: string[];
};

type PriceItem = {
  label: string;
  value: string;
};

type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

type BlogPostContent = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  sections: BlogSection[];
};

type TermsClause = {
  n: string;
  text: string;
};

type TermsArticle = {
  title: string;
  clauses: TermsClause[];
};

export type PageContent = {
  marquee: string[];
  legalLabels: {
    terms: string;
    privacy: string;
    company: string;
  };
  packRonde: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    dailyBuild: ContentSection;
    howSession: ContentSection & { linkLabel: string };
    subscription: ContentSection & {
      includedLabel: string;
      included: string[];
      ratesLinkLabel: string;
      notice: string;
    };
    noSubscription: ContentSection & { ratesLinkLabel: string };
  };
  eigenRonde: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    fullAttention: ContentSection & { ratesLinkLabel: string };
    howItLooks: ContentSection;
    ctaButtonLabel: string;
  };
  werkwijze: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    introMeeting: ContentSection;
    sessionHeading: string;
    sessionSteps: { title: string; text: string }[];
    rosterLinkLabel: string;
    treadmill: ContentSection & { linkLabel: string };
    busHeading: string;
    busFeatures: string[];
  };
  tijden: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    packRonde: ContentSection & {
      prices: PriceItem[];
      notice: string;
    };
    eigenRonde: ContentSection & {
      prices: PriceItem[];
      maxDogs: string;
      secondDogDiscount: string;
      vatNote: string;
    };
    kennismaking: ContentSection & {
      prices: PriceItem[];
    };
    availabilityHeading: string;
    weekdaysHeading: string;
    weekSlots: string[];
    holidaysNote: string;
  };
  packRegels: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    health: ContentSection;
    behaviour: ContentSection;
    packConcept: ContentSection;
    expectations: ContentSection;
    transport: ContentSection;
    planning: ContentSection;
    fullTerms: {
      title: string;
      textBefore: string;
      linkLabel: string;
      textAfter: string;
    };
  };
  overOns: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    origin: ContentSection;
    teamHeading: string;
    quote: string[];
    quoteName: string;
    quoteRole: string;
  };
  loopband: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    moreThanMovement: ContentSection;
    suitable: ContentSection & { noteLabel: string; note: string };
    buildUp: ContentSection;
    ctaText: string;
  };
  privacy: {
    title: string;
    intro: string;
    paragraphs: string[];
    questionsBefore: string;
    questionsAfter: string;
  };
  company: {
    title: string;
    intro: string;
    labels: {
      company: string;
      area: string;
      email: string;
      contact: string;
    };
    values: {
      company: string;
      area: string;
      contactForm: string;
    };
  };
  terms: {
    title: string;
    intro: string;
    articles: TermsArticle[];
    seeAlsoBefore: string;
    packRulesLabel: string;
    questionsLabel: string;
  };
  blog: {
    title: string;
    intro: string;
    readMore: string;
    back: string;
    posts: BlogPostContent[];
  };
  comingSoon: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    error: string;
    submit: string;
    loading: string;
    instagramLabel: string;
  };
  ctaDefaults: {
    readyJoin: TitleParts;
    readyStart: TitleParts;
    readyHappy: TitleParts;
    readyEigen: TitleParts & { buttonLabel: string };
  };
};

export const pageContent: Record<Locale, PageContent> = {
  nl: {
    marquee: [
      "Wandelen in het park of bos",
      "Kleine groepen",
      "Ophalen en thuisbrengen",
      "Elektrische bus",
      "GPS-tracker",
      "Optionele loopband",
    ],
    legalLabels: {
      terms: "Algemene Voorwaarden",
      privacy: "Privacy",
      company: "Bedrijfsinformatie",
    },
    packRonde: {
      eyebrow: "Diensten",
      titleBefore: "De dagelijkse ",
      titleEm: "uitlaatservice.",
      intro:
        "Pack Ronde is de dagelijkse uitlaatservice van The Daily Pack. Vaste dag, vast tijdslot, vaste begeleider. Kleine groepen, zodat elk dier de aandacht krijgt die nodig is.",
      dailyBuild: {
        title: "De dagelijkse opbouw",
        paragraphs: [
          "Elke werkdag gaan we in meerdere rondes met kleine groepen op pad. Elke hond heeft een vast tijdslot. Waar mogelijk werken we met een vaste groep. Dat geeft de dieren rust en herkenning.",
          "Een volledige sessie duurt ongeveer 1 uur en 45 minuten: ophalen, wandeling in het park of bos en, bij kou, regen of veel energie, de loopband, en thuisbrengen.",
        ],
      },
      howSession: {
        title: "Hoe verloopt een sessie?",
        paragraphs: [
          "Van ophalen tot thuisbrengen regelen wij alles. Benieuwd naar de precieze stappen?",
        ],
        linkLabel: "Bekijk de werkwijze",
      },
      subscription: {
        title: "Hoe werkt een abonnement?",
        paragraphs: [
          "Pack Ronde is een abonnement met vaste dag en tijd per week. Kies één of meerdere dagen. Maandelijks vooruit betaald.",
        ],
        includedLabel: "Inbegrepen",
        included: [
          "Ophalen en thuisbrengen",
          "Wandeling in het park of bos",
          "Loopband bij kou, regen of energie",
          "Foto's en video's",
          "Wandelverslag na elke sessie",
        ],
        ratesLinkLabel: "Bekijk tijden en tarieven",
        notice:
          "Kennismaking is verplicht voor deelname. Bij het abonnement geldt een opzegtermijn van 1 kalendermaand.",
      },
      noSubscription: {
        title: "Liever geen abonnement?",
        paragraphs: [
          "Dezelfde Pack Ronde, maar dan zonder vaste verplichting. Boek een losse sessie wanneer het jou uitkomt.",
        ],
        ratesLinkLabel: "Bekijk tijden en tarieven",
      },
    },
    eigenRonde: {
      eyebrow: "Diensten",
      titleBefore: "Een sessie ",
      titleEm: "op maat.",
      intro:
        "Eigen Ronde is een privésessie voor één adres. Wandelen in het park of bos, met de loopband als aanvulling bij kou, regen of veel energie. Op afspraak en beschikbaarheid. Geen abonnement nodig.",
      fullAttention: {
        title: "Volledige aandacht, één adres",
        paragraphs: [
          "Bij een Eigen Ronde gaat de hond samen met een begeleider op pad, zonder andere dieren. Dit is ideaal voor honden die liever alleen gaan, energie kwijt moeten buiten de vaste rondes, of waarbij een tweede hond van hetzelfde adres meegaat (maximaal twee honden).",
        ],
        ratesLinkLabel: "Bekijk de tarieven voor de actuele prijzen",
      },
      howItLooks: {
        title: "Hoe ziet het eruit?",
        paragraphs: [
          "Ophalen, wandelen, loopband (bij kou, regen of veel energie) en weer terugbrengen. Net als bij de Pack Ronde, maar dan alleen voor jouw hond.",
        ],
      },
      ctaButtonLabel: "Plan een Eigen Ronde",
    },
    werkwijze: {
      eyebrow: "Hoe het werkt",
      titleBefore: "Een dag uit het leven van ",
      titleEm: "jouw hond.",
      intro:
        "Elke sessie begint met een goede basis. Wij leren jouw hond kennen, zodat we weten wat er nodig is en hoe we dit het beste kunnen begeleiden.",
      introMeeting: {
        title: "Eerst kennismaken",
        paragraphs: [
          "Voordat een hond mee kan, plannen we een Kennismaking. Een persoonlijke ontmoeting van 30 minuten. We leren de hond kennen, bespreken de wensen en bepalen samen de volgende stap.",
          "Tijdens de Kennismaking kun je dingen delen zoals waar jouw hond op reageert of bang voor is. We houden dit in de gaten en koppelen via het Wandelverslag terug hoe het gaat en de voortgang ervan.",
        ],
      },
      sessionHeading: "Wat gebeurt er tijdens de sessie?",
      sessionSteps: [
        {
          title: "Ophalen en onderweg",
          text: "Op het afgesproken moment halen wij jouw hond op. Elke hond reist in een eigen box in onze elektrische bus, rustig en op zichzelf. Door de kleine groepen zijn de ritjes kort en zit de hond niet onnodig lang in de bus.",
        },
        {
          title: "Wandelen en socialiseren",
          text: "In het park of bos wandelen we met een kleine groep. Hier draait het om meer dan beweging alleen: snuffelen, ontdekken en het ontmoeten van andere honden. De hond gebruikt zowel lichaam als kop, wat zorgt voor een voldaan gevoel. Een wandeling duurt ongeveer een uur.",
        },
        {
          title: "Loopband",
          text: "Bij kou, regen of veel energie is er terug in de bus tijd voor de loopband. Dit doen we ná de wandeling, als de hond al warm en ontspannen is. Zo raakt de hond op een veilige, gecontroleerde manier de laatste energie kwijt. Tempo en duur passen we aan op wat de hond aankan.",
        },
        {
          title: "Thuisbrengen",
          text: "Na de sessie brengen we jouw hond weer netjes thuis. Moe, voldaan en ontspannen, klaar voor de rest van de dag. Zo hou je zelf een rustige hond over, ook op drukke dagen.",
        },
        {
          title: "Wandelverslag",
          text: "Na afloop ontvang je een kort verslag met foto's en video's van de sessie. Aan de hand van een aantal vaste punten zie je hoe de dag verliep en hoe jouw hond zich ontwikkelt.",
        },
      ],
      rosterLinkLabel: "Bekijk het rooster",
      treadmill: {
        title: "De loopband",
        paragraphs: [
          "De loopband is geen vast onderdeel, maar een waardevolle aanvulling op de wandeling — bij kou, regen of veel energie. Geschikt voor alle honden met een maximale schofthoogte van 60 cm.",
        ],
        linkLabel: "Meer over de loopband",
      },
      busHeading: "Veilig vervoer in onze elektrische bus",
      busFeatures: [
        "Eigen kooi per hond",
        "Antislip vloer",
        "Ventilatie, ook wanneer de bus stilstaat",
        "GPS tracker op elke hond tijdens de wandeling",
        "Vers water",
        "EHBO kit en brandblusser aan boord",
        "Dagelijks schoongemaakt",
      ],
    },
    tijden: {
      eyebrow: "Hoe het werkt",
      titleBefore: "Tijden en ",
      titleEm: "Tarieven.",
      intro: "Overzicht van alle pakketten, prijzen en beschikbare tijden.",
      packRonde: {
        title: "Pack Ronde",
        paragraphs: [
          "Vaste dag en tijd, elke week. Kies één of meerdere dagen. Maandelijks vooruit betaald.",
          "Inbegrepen: ophalen en thuisbrengen · wandeling · loopband bij kou, regen of energie · foto's en video's · Wandelverslag",
        ],
        prices: [
          {
            label: "Weekdagen (ma–vr)",
            value: "€30 per sessie · circa 1 uur en 45 minuten",
          },
          {
            label: "Losse sessie doordeweeks",
            value: "€32 (geen abonnement)",
          },
        ],
        notice: "Kennismaking is verplicht voor deelname.",
      },
      eigenRonde: {
        title: "Eigen Ronde",
        paragraphs: [
          "Privésessie voor één adres, op afspraak en beschikbaarheid. Wandelen in het park of bos, met de loopband als aanvulling. Inclusief Wandelverslag.",
        ],
        prices: [
          { label: "30 minuten", value: "€30 per sessie" },
          { label: "60 minuten", value: "€55 per sessie" },
        ],
        maxDogs: "Maximaal 2 honden.",
        secondDogDiscount: "50% korting op de tweede hond",
        vatNote: "Prijzen inclusief BTW.",
      },
      kennismaking: {
        title: "Kennismaking",
        paragraphs: [
          "Voordat een hond mee kan, starten we met een Kennismaking. Een persoonlijke ontmoeting van 30 minuten. We leren de hond kennen en bespreken de wensen.",
          "Verplicht voor alle diensten, eenmalig. Op afspraak.",
        ],
        prices: [{ label: "Eenmalig", value: "€20 per hond" }],
      },
      availabilityHeading: "Wanneer zijn we beschikbaar?",
      weekdaysHeading: "Weekdagen",
      weekSlots: [
        "09:30–11:15 — Pack ronde, max 4 honden",
        "11:30–13:15 — Pack ronde, max 4 honden",
        "13:30–15:15 — Pack ronde, max 4 honden",
        "Op afspraak — Eigen Ronde of Kennismaking",
      ],
      holidaysNote:
        "Op officiële feestdagen is The Daily Pack gesloten, tenzij anders bepaald.",
    },
    packRegels: {
      eyebrow: "Hoe het werkt",
      titleBefore: "Pack ",
      titleEm: "Regels.",
      intro:
        "Om de veiligheid, rust en het plezier binnen The Daily Pack te garanderen, hanteren we een aantal belangrijke regels. Als je jouw hond bij ons aanmeldt, ga je akkoord met deze voorwaarden. Voor aansprakelijkheid, betaling en overige juridische zaken verwijzen we naar de Algemene Voorwaarden.",
      health: {
        title: "Gezondheid en Toelating",
        paragraphs: [
          "Alleen gezonde honden kunnen deelnemen. Dit betekent: alle vaccinaties up-to-date (met name hondenziekte, Parvo, Leptospirose en Kennelhoest), vlooien en tekenbehandeling actueel, minimaal 6 maanden oud.",
          "Zieke honden of honden met een besmettelijke aandoening mogen niet deelnemen. Toelating wordt hervat zodra de hond volledig hersteld is. Loopse teven kunnen gedurende de volledige loopsheid niet deelnemen. Honden met agressief gedrag naar andere honden of mensen kunnen worden geweigerd.",
        ],
      },
      behaviour: {
        title: "Gedrag en Socialisatie",
        paragraphs: [
          "The Daily Pack werkt met kleine groepen zodat socialisatie veilig kan plaatsvinden. We beoordelen gedrag en energie tijdens de Kennismaking. We vragen om open communicatie over temperament en triggers.",
          "Als een hond de rust of veiligheid van de groep in gevaar brengt, behoudt The Daily Pack zich het recht voor de hond tijdelijk of permanent te weigeren.",
        ],
      },
      packConcept: {
        title: "The Pack Concept",
        paragraphs: [
          "Elke hond heeft een vast tijdslot. Waar mogelijk werken we met een vaste groep. Dat geeft de dieren rust en herkenning. De groep bestaat uit de honden die op dat tijdslot zijn ingepland en kan wijzigen door uitval of nieuwe aanmeldingen.",
        ],
      },
      expectations: {
        title: "Wat je van ons mag verwachten",
        paragraphs: [
          "We halen op en brengen terug op het afgesproken moment. Na elke sessie ontvang je het Wandelverslag met foto's en video's. In geval van nood zijn we altijd bereikbaar. Bij medische noodgevallen brengen we direct naar een dierenarts en informeren we direct.",
        ],
      },
      transport: {
        title: "Transport en Veiligheid",
        paragraphs: [
          "Vervoer in onze volledig ingerichte elektrische bus. Elke hond reist in een eigen transportbox. Antislip vloer, ventilatie die altijd actief blijft ook wanneer de bus stilstaat. Elke hond draagt tijdens de wandeling een GPS tracker. EHBO kit en brandblusser aanwezig.",
          "De loopband is geschikt voor honden met een schofthoogte tot 60 cm. De eigenaar dient tijdens de uitlaattijden telefonisch bereikbaar te zijn.",
        ],
      },
      planning: {
        title: "Planning en Annulering",
        paragraphs: [
          "Voor Eigen Ronde geldt: afmelden meer dan 24 uur van tevoren betekent de sessie inhalen binnen enkele weken. Afmelden binnen 24 uur vervalt de sessie, zonder inhalen.",
          "Voor Pack Ronde geldt geen compensatie bij een gemiste sessie, omdat het abonnement een vaste plek reserveert, geen los consumptierecht.",
          "Bij Code Oranje/Rood of temperaturen boven 33 graden passen we de service aan of annuleren we. Je wordt hierover altijd direct geïnformeerd. Op officiële feestdagen is The Daily Pack gesloten, tenzij anders bepaald.",
        ],
      },
      fullTerms: {
        title: "Volledige voorwaarden",
        textBefore:
          "Voor de volledige voorwaarden omtrent aansprakelijkheid, betaling, abonnement en sleutelbeheer, zie de ",
        linkLabel: "Algemene Voorwaarden",
        textAfter: ".",
      },
    },
    overOns: {
      eyebrow: "Over ons",
      titleBefore: "Het verhaal achter ",
      titleEm: "The Daily Pack.",
      intro:
        "Een service voor baasjes die het beste willen voor hun hond, zonder dat ze er zelf altijd bij hoeven te zijn.",
      origin: {
        title: "Hoe The Daily Pack ontstond",
        paragraphs: [
          "Het idee achter The Daily Pack is simpel: een hond die goed belast is, is een fijne hond thuis. Geen kort blokje om, maar echte beweging buiten, socialiseren en de ruimte om stoom af te blazen. Op dagen dat je werkt of andere dingen te doen hebt, zit een goed rondje er niet altijd in.",
          "Wat begon met de honden van vrienden en familie, groeide uit tot een service voor meer baasjes die het beste willen voor hun hond, zonder dat ze er zelf altijd bij hoeven te zijn.",
        ],
      },
      teamHeading: "Het team",
      quote: [
        "Met twee energieke honden thuis merk ik dagelijks hoe belangrijk goede beweging is. Het zorgt voor een hond die zich beter voelt, en dat zie je terug in het gedrag: minder stress, rustiger thuis en minder reactief.",
        "Daarbij werk ik bewust met kleine groepen: dat betekent kortere tijd in de bus en meer aandacht voor iedere hond tijdens de wandeling.",
      ],
      quoteName: "Tim",
      quoteRole:
        "Oprichter en begeleider · Vakbekwaam Houder van Hond en Kat · EHBO gecertificeerd",
    },
    loopband: {
      eyebrow: "Over ons",
      titleBefore: "De ",
      titleEm: "loopband.",
      intro:
        "Gecontroleerde beweging, focus en stoom afblazen. De loopband is een waardevolle aanvulling op iedere wandeling, voor elk dier op elk niveau.",
      moreThanMovement: {
        title: "Meer dan alleen beweging",
        paragraphs: [
          "De loopband vervangt de wandeling niet, het vult aan. Waar buiten lopen zorgt voor socialisatie en mentale prikkels, biedt de loopband gecontroleerde, gerichte beweging. De hond werkt aan conditie, balans en lichaamsbesef, zonder afleidingen van buiten. Het resultaat is een dier dat niet alleen fysiek maar ook mentaal tot rust komt.",
        ],
      },
      suitable: {
        title: "Geschikt voor elke hond",
        paragraphs: [
          "De loopband is een waardevolle aanvulling op de wandeling voor elke hond. Extra beweging, focus en de kans om alle resterende energie kwijt te raken op een rustige, gecontroleerde manier. Heb je een energieke hond? Dan is de loopband helemaal geweldig. Ook bij kou of regen kan de hond zo alsnog voldoende energie kwijt.",
        ],
        noteLabel: "Note:",
        note: "De loopband in onze bus is geschikt voor honden met een schofthoogte tot 60 cm.",
      },
      buildUp: {
        title: "Rustig opbouwen, altijd begeleid",
        paragraphs: [
          "Niet elk dier stapt meteen vol vertrouwen op de loopband. Dat is normaal. We nemen de tijd om elke hond op eigen tempo te laten wennen. Eerst kennismaken, dan rustig opbouwen. Tempo en duur worden altijd aangepast.",
          "Kan een hond om welke reden dan ook niet op de loopband? Laat het weten, dan houden we daar rekening mee. De loopband wordt altijd gebruikt na de wandeling. Zo is het dier al warm, ontspannen en klaar voor de volgende stap.",
        ],
      },
      ctaText: "Begin met een Kennismaking, de eerste stap voor elke dienst.",
    },
    privacy: {
      title: "Privacy.",
      intro:
        "The Daily Pack gaat zorgvuldig om met persoonsgegevens. Deze pagina wordt aangevuld met de volledige privacyverklaring.",
      paragraphs: [
        "Wij verwerken gegevens die nodig zijn voor boekingen, communicatie en het leveren van onze dienst. Denk aan contactgegevens en informatie over jouw hond.",
      ],
      questionsBefore: "Voor vragen over privacy:",
      questionsAfter: ".",
    },
    company: {
      title: "Bedrijfsinformatie.",
      intro:
        "Contactgegevens van The Daily Pack. KvK- en BTW-gegevens kunnen hier worden aangevuld.",
      labels: {
        company: "Bedrijf",
        area: "Werkgebied",
        email: "E-mail",
        contact: "Contact",
      },
      values: {
        company: "The Daily Pack",
        area: "Amsterdam-Noord",
        contactForm: "Contactformulier",
      },
    },
    terms: {
      title: "Algemene Voorwaarden.",
      intro:
        "Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen The Daily Pack, hierna te noemen 'de Ondernemer', en de natuurlijke persoon die niet handelt in de uitoefening van een beroep of bedrijf, hierna te noemen 'de Consument', met betrekking tot de hondenuitlaatservice.",
      articles: [
        {
          title: "Artikel 1 — Definities",
          clauses: [
            {
              n: "1.1",
              text: "Ondernemer: Founder Falk, handelend onder de naam The Daily Pack, gevestigd te Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 70835225.",
            },
            {
              n: "1.2",
              text: "Consument: De natuurlijke persoon die niet handelt in de uitoefening van een beroep of bedrijf en die een overeenkomst aangaat of wenst aan te gaan met de Ondernemer.",
            },
            {
              n: "1.3",
              text: "Overeenkomst: De afspraken tussen de Ondernemer en de Consument betreffende het verlenen van de hondenuitlaatservice.",
            },
            {
              n: "1.4",
              text: "Gasthond: De hond van de Consument waarvoor een overeenkomst wordt of is gesloten.",
            },
          ],
        },
        {
          title: "Artikel 2 — Toepasselijkheid",
          clauses: [
            {
              n: "2.1",
              text: "Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen de Ondernemer en de Consument met betrekking tot de hondenuitlaatservice.",
            },
            {
              n: "2.2",
              text: "De Ondernemer behoudt zich het recht voor deze voorwaarden en tarieven te wijzigen. Wijzigingen worden ten minste één maand van tevoren schriftelijk of per e-mail bekendgemaakt.",
            },
            {
              n: "2.3",
              text: "Op deze voorwaarden zijn de bepalingen van het Burgerlijk Wetboek van toepassing.",
            },
          ],
        },
        {
          title: "Artikel 3 — Algemeen",
          clauses: [
            {
              n: "3.1",
              text: "De Ondernemer wordt niet beschouwd als eigenaar van de Gasthond.",
            },
            {
              n: "3.2",
              text: "De Gasthond dient sociaal te zijn richting andere honden en mensen.",
            },
            {
              n: "3.3",
              text: "De Ondernemer behoudt zich het recht voor honden te weigeren indien hij van mening is dat de Gasthond een risico vormt voor andere honden, medewerkers of derden.",
            },
            {
              n: "3.4",
              text: "De Ondernemer behoudt zich het recht voor honden tijdelijk niet te accepteren indien er redelijke gronden zijn om te vermoeden dat de Gasthond een besmettelijke ziekte heeft.",
            },
            {
              n: "3.5",
              text: "De eigenaar dient tijdens de uitlaattijden telefonisch bereikbaar te zijn.",
            },
            {
              n: "3.6",
              text: "Bij aanvang van de dienstverlening dient de eigenaar alle relevante informatie over de Gasthond te verstrekken die van belang is voor een goede en verantwoorde verzorging.",
            },
            {
              n: "3.7",
              text: "Puppy's mogen deelnemen vanaf de leeftijd van 6 maanden.",
            },
            {
              n: "3.8",
              text: "Tijdens de intake dient de eigenaar eerlijk te zijn over het temperament van de Gasthond, waaronder eventuele angst, zindelijkheidsproblemen of reactiviteit. Indien een hond de rust of veiligheid van de groep in gevaar brengt, behoudt de Ondernemer zich het recht voor de Gasthond tijdelijk of permanent te weigeren.",
            },
            {
              n: "3.9",
              text: "Niet-gecastreerde reuen zijn toegestaan, tenzij zij aantoonbaar problemen veroorzaken binnen de groep. De Ondernemer behoudt zich het recht voor niet-gecastreerde reuen te weigeren indien de veiligheid van de groep in het geding is.",
            },
          ],
        },
        {
          title: "Artikel 4 — Gezondheid",
          clauses: [
            {
              n: "4.1",
              text: "De Gasthond dient volledig gevaccineerd te zijn tegen hondenziekte, parvovirus, leptospirose (ziekte van Weil) en kennelhoest. Een vaccinatiebewijs wordt tijdens de intake opgevraagd.",
            },
            {
              n: "4.2",
              text: "De eigenaar is verantwoordelijk voor een preventieve behandeling van de hond tegen vlooien, teken en wormen.",
            },
            {
              n: "4.3",
              text: "Loopse teven mogen gedurende de gehele loopsheid niet deelnemen (ten minste 3 weken).",
            },
            {
              n: "4.4",
              text: "In geval van ziekte kan een losse geboekte sessie tot 18:00 uur de avond ervoor worden geannuleerd.",
            },
            {
              n: "4.5",
              text: "Zieke honden mogen niet deelnemen aan de hondenuitlaatservice.",
            },
            {
              n: "4.6",
              text: "Indien dringende medische zorg nodig is, wordt een dierenarts ingeschakeld, indien mogelijk na overleg met de eigenaar. De kosten hiervan komen voor rekening van de eigenaar.",
            },
          ],
        },
        {
          title: "Artikel 5 — Sleutelbeheer",
          clauses: [
            {
              n: "5.1",
              text: "Waar nodig wordt aan de Ondernemer een huissleutel verstrekt voor het ophalen en terugbrengen van de Gasthond.",
            },
            {
              n: "5.2",
              text: "Sleutels worden niet gekopieerd en voorzien van geen adres.",
            },
            {
              n: "5.3",
              text: "Sleutels worden alleen meegenomen op de dag(en) waarop de dienst wordt verleend.",
            },
            {
              n: "5.4",
              text: "Sleutels worden uitsluitend gebruikt voor het ophalen en terugbrengen van de Gasthond.",
            },
            {
              n: "5.5",
              text: "Op verzoek van de Consument worden sleutels direct teruggegeven, waarmee het sleutelbeheer wordt beëindigd.",
            },
          ],
        },
        {
          title: "Artikel 6 — Hondenuitlaatservice",
          clauses: [
            {
              n: "6.1",
              text: "De Ondernemer haalt de Gasthond op het afgesproken tijdstip op en brengt deze terug naar het afgesproken adres, tenzij anders overeengekomen.",
            },
            {
              n: "6.2",
              text: "De Gasthond wordt vervoerd in een transportbox in de elektrische bus van de Ondernemer.",
            },
            {
              n: "6.3",
              text: "De duur van de hondenuitlaatservice kan om veiligheidsredenen worden aangepast.",
            },
            {
              n: "6.4",
              text: "De Gasthond dient op het afgesproken tijdstip en de afgesproken plaats beschikbaar te zijn. Indien de Gasthond niet beschikbaar is, worden de kosten voor de geplande dienst in rekening gebracht.",
            },
            {
              n: "6.5",
              text: "De Ondernemer is gerechtigd de Gasthond los te laten lopen op eigen terrein, tenzij schriftelijk anders overeengekomen.",
            },
            {
              n: "6.6",
              text: "De Pack Ronde-uitlaatservice vindt uitsluitend doordeweeks plaats. Sessies in het weekend zijn alleen op afspraak en op basis van beschikbaarheid.",
            },
          ],
        },
        {
          title: "Artikel 7 — Aansprakelijkheid",
          clauses: [
            {
              n: "7.1",
              text: "De Ondernemer is niet aansprakelijk voor letsel, ziekte, infectie of verlies van de Gasthond, tenzij dit rechtstreeks is veroorzaakt door opzet of grove nalatigheid van de Ondernemer.",
            },
            {
              n: "7.2",
              text: "De Consument blijft te allen tijde wettelijk aansprakelijk voor schade die door de Gasthond wordt toegebracht aan andere honden, personen of eigendommen — vóór, tijdens en na de wandeling.",
            },
            {
              n: "7.3",
              text: "Een aansprakelijkheidsverzekering (WA) is verplicht voor deelname en wordt tijdens de intake opgevraagd.",
            },
            {
              n: "7.4",
              text: "Eventuele kosten voor dierenartsbezoek of schade veroorzaakt door de Gasthond worden op de Consument verhaald.",
            },
            {
              n: "7.5",
              text: "Indien niet duidelijk is welke hond de schade heeft veroorzaakt, worden de kosten gedeeld tussen de eigenaren van de betrokken honden.",
            },
            {
              n: "7.6",
              text: "De Ondernemer is niet aansprakelijk voor schade aan de woning of de inboedel veroorzaakt door een natte of vuile hond.",
            },
            {
              n: "7.7",
              text: "In geval van een weglopende hond wordt alles wat redelijkerwijs mogelijk is gedaan om de Gasthond te lokaliseren. Aansprakelijkheid voor verlies is uitgesloten, tenzij grove nalatigheid van de Ondernemer kan worden aangetoond.",
            },
          ],
        },
        {
          title: "Artikel 8 — Boeking & Annulering",
          clauses: [
            {
              n: "8.1",
              text: "Voor losse boekingen (kennismaking, losse Pack Ronde-sessie, Eigen Ronde) dienen annuleringen uiterlijk om 18:00 uur de avond ervoor te worden doorgegeven. Dit geldt ook in geval van ziekte. Bij annuleringen na 18:00 uur wordt het volledige tarief in rekening gebracht.",
            },
            {
              n: "8.2",
              text: "Sessies binnen een abonnement kunnen niet afzonderlijk worden geannuleerd. Aangezien de plek van de hond wekelijks is gereserveerd, wordt een gemiste sessie niet gecrediteerd of ingehaald.",
            },
            {
              n: "8.3",
              text: "De enige uitzondering is aaneengesloten afwezigheid (zoals een vakantie). Indien de Consument één of meer aaneengesloten weken afwezig is, geldt een reserveringsvergoeding van 50% om de plek van de hond voor de gemiste sessies te behouden, mits dit ten minste twee weken van tevoren wordt gemeld.",
            },
            {
              n: "8.4",
              text: "De Ondernemer is gesloten op officiële feestdagen.",
            },
            {
              n: "8.5",
              text: "Bij extreme weersomstandigheden (Code Oranje/Rood of temperaturen boven 33°C) kan de dienst worden aangepast of geannuleerd. De Consument wordt hierover direct via WhatsApp geïnformeerd.",
            },
          ],
        },
        {
          title: "Artikel 9 — Betaling",
          clauses: [
            {
              n: "9.1",
              text: "Betaling geschiedt maandelijks vooraf, uiterlijk op de 1e van de maand.",
            },
            {
              n: "9.2",
              text: "Het abonnementsbedrag wordt in rekening gebracht ongeacht het aantal daadwerkelijk afgenomen wandelingen.",
            },
            {
              n: "9.3",
              text: "Bij uitblijven van betaling wordt na 30 dagen een toeslag van 10% van het totaalbedrag toegepast. Na 60 dagen wordt een toeslag van 30% toegepast.",
            },
            {
              n: "9.4",
              text: "In geval van langdurige ziekte van de Gasthond (aangetoond met een medische verklaring) kan een ziekteperiode van maximaal 2 maanden worden toegekend. Gedurende deze periode wordt 50% van het normale tarief in rekening gebracht.",
            },
            {
              n: "9.5",
              text: "Betaling geschiedt via automatische incasso of bankoverschrijving, tenzij schriftelijk anders overeengekomen.",
            },
          ],
        },
        {
          title: "Artikel 10 — Abonnement & Opzegging",
          clauses: [
            {
              n: "10.1",
              text: "De Ondernemer werkt bij voorkeur met vaste abonnementen om een consistente groepssamenstelling te waarborgen.",
            },
            {
              n: "10.2",
              text: "De opzegtermijn bedraagt één kalendermaand.",
            },
            {
              n: "10.3",
              text: "Bij tussentijdse beëindiging worden reeds betaalde bedragen niet gerestitueerd.",
            },
            {
              n: "10.4",
              text: "Bij herhaaldelijke schending van deze voorwaarden behoudt de Ondernemer zich het recht voor de overeenkomst met onmiddellijke ingang te beëindigen.",
            },
            {
              n: "10.5",
              text: "Bij aanhoudend uitblijven van betaling kan de Ondernemer de overeenkomst eenzijdig beëindigen.",
            },
          ],
        },
        {
          title: "Artikel 11 — Privacy",
          clauses: [
            {
              n: "11.1",
              text: "De Ondernemer verwerkt de persoonsgegevens van de Consument in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG). Persoonsgegevens worden uitsluitend gebruikt voor de uitvoering van de overeenkomst en worden zonder toestemming van de Consument niet met derden gedeeld.",
            },
            {
              n: "11.2",
              text: "De Consument heeft het recht op inzage, rectificatie en verwijdering van zijn persoonsgegevens. Verzoeken kunnen worden ingediend via info@thedailypack.nl.",
            },
          ],
        },
        {
          title: "Artikel 12 — Toepasselijk recht",
          clauses: [
            {
              n: "12.1",
              text: "Op alle overeenkomsten tussen de Ondernemer en de Consument is Nederlands recht van toepassing.",
            },
            {
              n: "12.2",
              text: "Eventuele geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Amsterdam.",
            },
          ],
        },
      ],
      seeAlsoBefore: "Zie ook de",
      packRulesLabel: "Pack Regels",
      questionsLabel: "Vragen?",
    },
    blog: {
      title: "Blog.",
      intro: "Inzichten over beweging, rust en een voldane hond.",
      readMore: "Lees verder",
      back: "Terug naar blog",
      posts: [
        {
          slug: "hond-moe-maken-waarom-intensief-bewegen-meer-is-dan-energie-kwijt",
          title:
            "Hond moe maken: waarom intensief bewegen meer is dan energie kwijt",
          date: "2026-06-18",
          dateLabel: "18 jun",
          excerpt:
            "Drie blokjes om en de hond zit alsnog te springen tegen de deur. Moe maken lijkt een kwestie van genoeg meters stapelen, maar dat klopt niet helemaal.",
          sections: [
            {
              paragraphs: [
                "Elke hondenbezitter kent het. Drie blokjes om en de hond zit alsnog te springen tegen de deur. Moe maken lijkt een kwestie van genoeg meters stapelen, maar dat klopt niet helemaal. Onderzoek van antropoloog David Raichlen aan de universiteit van Arizona laat zien dat het niet om de afstand gaat, maar om de intensiteit.",
              ],
            },
            {
              heading: "Het bewijs zit in het bloed",
              paragraphs: [
                "Raichlen zette mensen, honden en fretten dertig minuten op een loopband en nam daarna bloed af. Bij zowel de mensen als de honden steeg de hoeveelheid endocannabinoïden flink, dezelfde stofgroep die ook in cannabis voorkomt en een gevoel van euforie oproept. Bij de fretten gebeurde helemaal niets. Een rustige wandeling gaf trouwens ook geen stijging te zien, alleen het stevige tempo deed het verschil.",
                "Dat is opvallend, want het betekent dat de klassieke ronde om het blok simpelweg niet het effect heeft dat veel baasjes ervan verwachten. De hond legt afstand af, maar het systeem dat voor rust en voldoening zorgt komt niet in actie.",
              ],
            },
            {
              heading: "Waarom mens en hond hierin samen optrekken",
              paragraphs: [
                "Raichlen denkt dat dit een evolutionair cadeautje is. Soorten die goed zijn in het afleggen van lange, stevige afstanden, hadden vroeger een streepje voor bij jagen en overleven. De hersenen leerden dat harde inspanning beloond werd met een goed gevoel, zodat het lichaam gemotiveerd bleef om in beweging te komen. Mens en hond deelden die evolutionaire weg, en dat verklaart waarom dit mechanisme bij beiden teruggevonden wordt en bij de fret niet.",
                "Het verklaart ook iets dat elke eigenaar herkent: de bijna absurde opwinding zodra de riem tevoorschijn komt. De hond weet, lang voordat er ook maar één stap gezet is, dat er iets goeds aankomt.",
              ],
            },
            {
              heading: "Wat dit betekent voor de dagelijkse wandeling",
              paragraphs: [
                "Tien minuten sloffend rondjes lopen voorkomt verveling, maar bouwt dat dieperliggende rustgevoel niet op. Daarvoor is een stevig tempo nodig, vol te houden gedurende een langere periode. Niet elke hond kan dat zomaar opbrengen. Conditie bouwt zich op, net als bij mensen, en een hond die nooit de kans krijgt om door te zetten, raakt ook nooit op het niveau waar deze beloning intreedt.",
                "Dat is precies waarom bij The Daily Pack niet gewoon een blokje omgegaan wordt. Een sessie bestaat uit een groep honden die samen een serieuze afstand aflegt, in een tempo dat aanslaat. Voor de ene hond is dat stevig doorstappen, voor de andere meer een huppelende sukkeldraf, maar het uitgangspunt blijft hetzelfde: genoeg inspanning om dat systeem echt aan het werk te zetten.",
                "Het resultaat is een hond die na de sessie niet alleen moe is, maar ook merkbaar voldaan. Geen rusteloos gedrag, geen energie die ergens anders een uitweg zoekt, maar een dier dat de rest van de dag tevreden op de bank ligt.",
              ],
            },
            {
              heading: "Meer dan een rondje om het blok",
              paragraphs: [
                "Een hond uitlaten draait niet om vakjes afvinken op de dagplanning. Het gaat om een lichaam en brein die allebei iets nodig hebben dat verder gaat dan wat frisse lucht. De wetenschap bevestigt wat veel hondenbezitters al aanvoelden: een stevige inspanning doet meer dan alleen calorieën verbranden.",
                "Wandel zelf weleens een stevig blokje met de hond erbij en let op het verschil achteraf. De kans is groot dat zowel de hond als de eigenaar zelf dat gevoel van rust merkt.",
              ],
            },
          ],
        },
      ],
    },
    comingSoon: {
      eyebrow: "Amsterdam-Noord",
      titleBefore: "Coming ",
      titleEm: "soon",
      intro:
        "De nieuwe website van The Daily Pack is bijna klaar. Voor een sneak peek, vul het wachtwoord in.",
      passwordLabel: "Wachtwoord",
      passwordPlaceholder: "Wachtwoord",
      error: "Onjuist wachtwoord. Probeer opnieuw.",
      submit: "Bekijk de site",
      loading: "Even geduld…",
      instagramLabel: "Instagram",
    },
    ctaDefaults: {
      readyJoin: {
        titleBefore: "Klaar om ",
        titleEm: "aan te sluiten?",
      },
      readyStart: {
        titleBefore: "Klaar om ",
        titleEm: "te starten?",
      },
      readyHappy: {
        titleBefore: "Klaar voor een voldane en ",
        titleEm: "gelukkige hond?",
      },
      readyEigen: {
        titleBefore: "Klaar voor een ",
        titleEm: "Eigen Ronde?",
        buttonLabel: "Plan een Eigen Ronde",
      },
    },
  },

  en: {
    marquee: [
      "Walking in the park or woods",
      "Small groups",
      "Pick-up and drop-off",
      "Electric van",
      "GPS tracker",
      "Optional treadmill",
    ],
    legalLabels: {
      terms: "Terms & Conditions",
      privacy: "Privacy",
      company: "Company information",
    },
    packRonde: {
      eyebrow: "Services",
      titleBefore: "The daily ",
      titleEm: "walking service.",
      intro:
        "Pack Walk is The Daily Pack's daily dog-walking service. Fixed day, fixed time slot, fixed handler. Small groups, so every dog gets the attention they need.",
      dailyBuild: {
        title: "The daily structure",
        paragraphs: [
          "Every weekday we head out in several rounds with small groups. Each dog has a fixed time slot. Where possible we work with a consistent group. That gives the dogs calm and familiarity.",
          "A full session lasts about 1 hour and 45 minutes: pick-up, a walk in the park or woods and, in cold, rain or high energy, the treadmill, and drop-off.",
        ],
      },
      howSession: {
        title: "How does a session work?",
        paragraphs: [
          "From pick-up to drop-off, we take care of everything. Curious about the exact steps?",
        ],
        linkLabel: "See our approach",
      },
      subscription: {
        title: "How does a subscription work?",
        paragraphs: [
          "Pack Walk is a subscription with a fixed day and time each week. Choose one or more days. Paid monthly in advance.",
        ],
        includedLabel: "Included",
        included: [
          "Pick-up and drop-off",
          "Walk in the park or woods",
          "Treadmill in cold, rain or high energy",
          "Photos and videos",
          "Walk report after every session",
        ],
        ratesLinkLabel: "See times and rates",
        notice:
          "An introduction is required to take part. Subscriptions have a notice period of 1 calendar month.",
      },
      noSubscription: {
        title: "Prefer not to subscribe?",
        paragraphs: [
          "The same Pack Walk, but without a fixed commitment. Book a single session whenever it suits you.",
        ],
        ratesLinkLabel: "See times and rates",
      },
    },
    eigenRonde: {
      eyebrow: "Services",
      titleBefore: "A session ",
      titleEm: "tailored to you.",
      intro:
        "Private Walk is a private session for one address. Walking in the park or woods, with the treadmill as support in cold, rain or high energy. By appointment and availability. No subscription required.",
      fullAttention: {
        title: "Full attention, one address",
        paragraphs: [
          "On a Private Walk, the dog goes out with a handler alone — no other dogs. Ideal for dogs that prefer to walk alone, need to burn energy outside the fixed rounds, or when a second dog from the same address comes along (maximum two dogs).",
        ],
        ratesLinkLabel: "See rates for current prices",
      },
      howItLooks: {
        title: "What does it look like?",
        paragraphs: [
          "Pick-up, walk, treadmill (in cold, rain or high energy) and drop-off. Just like Pack Walk, but only for your dog.",
        ],
      },
      ctaButtonLabel: "Plan a Private Walk",
    },
    werkwijze: {
      eyebrow: "How it works",
      titleBefore: "A day in the life of ",
      titleEm: "your dog.",
      intro:
        "Every session starts with a solid foundation. We get to know your dog so we know what is needed and how best to support them.",
      introMeeting: {
        title: "Introduction first",
        paragraphs: [
          "Before a dog can join, we schedule an Introduction — a personal 30-minute meeting. We get to know the dog, discuss your wishes and decide together on the next step.",
          "During the Introduction you can share things like what your dog reacts to or is afraid of. We keep an eye on this and report back via the Walk Report on how things are going and the progress.",
        ],
      },
      sessionHeading: "What happens during the session?",
      sessionSteps: [
        {
          title: "Pick-up and on the way",
          text: "At the agreed time we collect your dog. Each dog travels in their own crate in our electric van — calm and on their own. Small groups mean short rides, so the dog is not in the van longer than necessary.",
        },
        {
          title: "Walking and socialising",
          text: "In the park or woods we walk with a small group. It is about more than movement alone: sniffing, exploring and meeting other dogs. The dog uses both body and mind, which leads to a sense of fulfilment. A walk lasts about an hour.",
        },
        {
          title: "Treadmill",
          text: "In cold, rain or high energy, there is time for the treadmill back in the van. We do this after the walk, when the dog is already warm and relaxed. That way the dog can safely and controllably burn off remaining energy. Pace and duration are adjusted to what the dog can handle.",
        },
        {
          title: "Drop-off",
          text: "After the session we bring your dog neatly home. Tired, fulfilled and relaxed — ready for the rest of the day. You keep a calm dog, even on busy days.",
        },
        {
          title: "Walk report",
          text: "Afterwards you receive a short report with photos and videos of the session. Using a set of fixed points, you see how the day went and how your dog is developing.",
        },
      ],
      rosterLinkLabel: "See the schedule",
      treadmill: {
        title: "The treadmill",
        paragraphs: [
          "The treadmill is not a fixed part of every session, but a valuable addition to the walk — in cold, rain or high energy. Suitable for all dogs with a maximum withers height of 60 cm.",
        ],
        linkLabel: "More about the treadmill",
      },
      busHeading: "Safe transport in our electric van",
      busFeatures: [
        "Individual crate per dog",
        "Non-slip floor",
        "Ventilation, even when the van is parked",
        "GPS tracker on every dog during the walk",
        "Fresh water",
        "First-aid kit and fire extinguisher on board",
        "Cleaned daily",
      ],
    },
    tijden: {
      eyebrow: "How it works",
      titleBefore: "Times and ",
      titleEm: "Rates.",
      intro: "Overview of all packages, prices and available times.",
      packRonde: {
        title: "Pack Walk",
        paragraphs: [
          "Fixed day and time, every week. Choose one or more days. Paid monthly in advance.",
          "Included: pick-up and drop-off · walk · treadmill in cold, rain or high energy · photos and videos · Walk report",
        ],
        prices: [
          {
            label: "Weekdays (Mon–Fri)",
            value: "€30 per session · about 1 hour and 45 minutes",
          },
          {
            label: "Single weekday session",
            value: "€32 (no subscription)",
          },
        ],
        notice: "An introduction is required to take part.",
      },
      eigenRonde: {
        title: "Private Walk",
        paragraphs: [
          "Private session for one address, by appointment and availability. Walking in the park or woods, with the treadmill as support. Includes Walk report.",
        ],
        prices: [
          { label: "30 minutes", value: "€30 per session" },
          { label: "60 minutes", value: "€55 per session" },
        ],
        maxDogs: "Maximum 2 dogs.",
        secondDogDiscount: "50% off the second dog",
        vatNote: "Prices include VAT.",
      },
      kennismaking: {
        title: "Introduction",
        paragraphs: [
          "Before a dog can join, we start with an Introduction — a personal 30-minute meeting. We get to know the dog and discuss your wishes.",
          "Required for all services, one-time. By appointment.",
        ],
        prices: [{ label: "One-time", value: "€20 per dog" }],
      },
      availabilityHeading: "When are we available?",
      weekdaysHeading: "Weekdays",
      weekSlots: [
        "09:30–11:15 — Pack Walk, max 4 dogs",
        "11:30–13:15 — Pack Walk, max 4 dogs",
        "13:30–15:15 — Pack Walk, max 4 dogs",
        "By appointment — Private Walk or Introduction",
      ],
      holidaysNote:
        "On official public holidays The Daily Pack is closed, unless otherwise agreed.",
    },
    packRegels: {
      eyebrow: "How it works",
      titleBefore: "Pack ",
      titleEm: "Rules.",
      intro:
        "To guarantee safety, calm and enjoyment within The Daily Pack, we apply a number of important rules. By registering your dog with us, you agree to these terms. For liability, payment and other legal matters we refer to the Terms & Conditions.",
      health: {
        title: "Health and admission",
        paragraphs: [
          "Only healthy dogs may take part. That means: all vaccinations up to date (especially distemper, Parvo, Leptospirosis and Kennel Cough), flea and tick treatment current, at least 6 months old.",
          "Sick dogs or dogs with a contagious condition may not take part. Admission resumes once the dog has fully recovered. Bitches in season cannot take part for the full heat cycle. Dogs with aggressive behaviour towards other dogs or people may be refused.",
        ],
      },
      behaviour: {
        title: "Behaviour and socialisation",
        paragraphs: [
          "The Daily Pack works with small groups so socialisation can take place safely. We assess behaviour and energy during the Introduction. We ask for open communication about temperament and triggers.",
          "If a dog endangers the calm or safety of the group, The Daily Pack reserves the right to refuse the dog temporarily or permanently.",
        ],
      },
      packConcept: {
        title: "The Pack concept",
        paragraphs: [
          "Each dog has a fixed time slot. Where possible we work with a consistent group. That gives the dogs calm and familiarity. The group consists of the dogs scheduled for that slot and may change due to cancellations or new registrations.",
        ],
      },
      expectations: {
        title: "What you can expect from us",
        paragraphs: [
          "We pick up and drop off at the agreed time. After every session you receive the Walk Report with photos and videos. In an emergency we are always reachable. In medical emergencies we go straight to a vet and inform you immediately.",
        ],
      },
      transport: {
        title: "Transport and safety",
        paragraphs: [
          "Transport in our fully equipped electric van. Each dog travels in their own crate. Non-slip floor, ventilation that stays active even when the van is parked. Every dog wears a GPS tracker during the walk. First-aid kit and fire extinguisher on board.",
          "The treadmill is suitable for dogs with a withers height up to 60 cm. The owner must be reachable by phone during walking times.",
        ],
      },
      planning: {
        title: "Planning and cancellation",
        paragraphs: [
          "For Private Walk: cancelling more than 24 hours in advance means the session can be made up within a few weeks. Cancelling within 24 hours means the session is forfeited, with no make-up.",
          "For Pack Walk there is no compensation for a missed session, because the subscription reserves a fixed place — it is not a pay-per-use right.",
          "In Code Orange/Red or temperatures above 33°C we adjust or cancel the service. You are always informed directly. On official public holidays The Daily Pack is closed, unless otherwise agreed.",
        ],
      },
      fullTerms: {
        title: "Full terms",
        textBefore:
          "For the full terms on liability, payment, subscription and key management, see the ",
        linkLabel: "Terms & Conditions",
        textAfter: ".",
      },
    },
    overOns: {
      eyebrow: "About",
      titleBefore: "The story behind ",
      titleEm: "The Daily Pack.",
      intro:
        "A service for owners who want the best for their dog, without always having to be there themselves.",
      origin: {
        title: "How The Daily Pack began",
        paragraphs: [
          "The idea behind The Daily Pack is simple: a dog that is properly exercised is a pleasant dog at home. Not a quick loop around the block, but real outdoor movement, socialising and room to let off steam. On days when you work or have other things to do, a proper walk is not always possible.",
          "What started with friends' and family's dogs grew into a service for more owners who want the best for their dog, without always having to be there themselves.",
        ],
      },
      teamHeading: "The team",
      quote: [
        "With two energetic dogs at home I notice every day how important good exercise is. It leads to a dog that feels better, and you see it in their behaviour: less stress, calmer at home and less reactive.",
        "I deliberately work with small groups: that means less time in the van and more attention for every dog during the walk.",
      ],
      quoteName: "Tim",
      quoteRole:
        "Founder and handler · Qualified Dog and Cat Keeper · First-aid certified",
    },
    loopband: {
      eyebrow: "About",
      titleBefore: "The ",
      titleEm: "treadmill.",
      intro:
        "Controlled movement, focus and letting off steam. The treadmill is a valuable addition to every walk, for every dog at every level.",
      moreThanMovement: {
        title: "More than just movement",
        paragraphs: [
          "The treadmill does not replace the walk — it complements it. Where outdoor walking provides socialisation and mental stimulation, the treadmill offers controlled, focused exercise. The dog builds fitness, balance and body awareness without outside distractions. The result is an animal that settles both physically and mentally.",
        ],
      },
      suitable: {
        title: "Suitable for every dog",
        paragraphs: [
          "The treadmill is a valuable addition to the walk for every dog. Extra movement, focus and the chance to burn remaining energy in a calm, controlled way. Have an energetic dog? Then the treadmill is especially great. In cold or rain, the dog can still burn enough energy this way.",
        ],
        noteLabel: "Note:",
        note: "The treadmill in our van is suitable for dogs with a withers height up to 60 cm.",
      },
      buildUp: {
        title: "Build up gently, always supervised",
        paragraphs: [
          "Not every dog steps onto the treadmill with full confidence straight away. That is normal. We take the time to let each dog get used to it at their own pace. First an introduction, then a gradual build-up. Pace and duration are always adjusted.",
          "If a dog cannot use the treadmill for any reason, let us know and we will take that into account. The treadmill is always used after the walk. That way the dog is already warm, relaxed and ready for the next step.",
        ],
      },
      ctaText: "Start with an Introduction — the first step for every service.",
    },
    privacy: {
      title: "Privacy.",
      intro:
        "The Daily Pack handles personal data with care. This page will be expanded with the full privacy statement.",
      paragraphs: [
        "We process data needed for bookings, communication and delivering our service. Think contact details and information about your dog.",
      ],
      questionsBefore: "For privacy questions:",
      questionsAfter: ".",
    },
    company: {
      title: "Company information.",
      intro:
        "Contact details for The Daily Pack. Chamber of Commerce and VAT details can be added here.",
      labels: {
        company: "Company",
        area: "Service area",
        email: "Email",
        contact: "Contact",
      },
      values: {
        company: "The Daily Pack",
        area: "Amsterdam-Noord",
        contactForm: "Contact form",
      },
    },
    terms: {
      title: "Terms & Conditions.",
      intro:
        "These terms and conditions apply to all agreements between The Daily Pack, hereinafter 'the Entrepreneur', and the natural person who is not acting in the course of a profession or business, hereinafter 'the Consumer', regarding the dog-walking service.",
      articles: [
        {
          title: "Article 1 — Definitions",
          clauses: [
            {
              n: "1.1",
              text: "Entrepreneur: Founder Falk, trading under the name The Daily Pack, established in Amsterdam, registered with the Chamber of Commerce under number 70835225.",
            },
            {
              n: "1.2",
              text: "Consumer: The natural person who is not acting in the course of a profession or business and who enters into or wishes to enter into an agreement with the Entrepreneur.",
            },
            {
              n: "1.3",
              text: "Agreement: The arrangements between the Entrepreneur and the Consumer concerning the provision of the dog-walking service.",
            },
            {
              n: "1.4",
              text: "Guest dog: The Consumer's dog for which an agreement is or has been concluded.",
            },
          ],
        },
        {
          title: "Article 2 — Applicability",
          clauses: [
            {
              n: "2.1",
              text: "These terms and conditions apply to all agreements between the Entrepreneur and the Consumer relating to the dog-walking service.",
            },
            {
              n: "2.2",
              text: "The Entrepreneur reserves the right to amend these terms and rates. Changes will be announced in writing or by email at least one month in advance.",
            },
            {
              n: "2.3",
              text: "The provisions of the Dutch Civil Code apply to these terms.",
            },
          ],
        },
        {
          title: "Article 3 — General",
          clauses: [
            {
              n: "3.1",
              text: "The Entrepreneur is not considered the owner of the Guest dog.",
            },
            {
              n: "3.2",
              text: "The Guest dog must be social towards other dogs and people.",
            },
            {
              n: "3.3",
              text: "The Entrepreneur reserves the right to refuse dogs if he believes the Guest dog poses a risk to other dogs, staff or third parties.",
            },
            {
              n: "3.4",
              text: "The Entrepreneur reserves the right to temporarily refuse dogs if there are reasonable grounds to suspect the Guest dog has a contagious disease.",
            },
            {
              n: "3.5",
              text: "The owner must be reachable by phone during walking times.",
            },
            {
              n: "3.6",
              text: "At the start of the service the owner must provide all relevant information about the Guest dog that is important for proper and responsible care.",
            },
            {
              n: "3.7",
              text: "Puppies may take part from the age of 6 months.",
            },
            {
              n: "3.8",
              text: "During the intake the owner must be honest about the Guest dog's temperament, including any fear, house-training issues or reactivity. If a dog endangers the calm or safety of the group, the Entrepreneur reserves the right to refuse the Guest dog temporarily or permanently.",
            },
            {
              n: "3.9",
              text: "Intact (non-neutered) males are allowed unless they demonstrably cause problems within the group. The Entrepreneur reserves the right to refuse intact males if the safety of the group is at stake.",
            },
          ],
        },
        {
          title: "Article 4 — Health",
          clauses: [
            {
              n: "4.1",
              text: "The Guest dog must be fully vaccinated against distemper, parvovirus, leptospirosis (Weil's disease) and kennel cough. A vaccination certificate will be requested during the intake.",
            },
            {
              n: "4.2",
              text: "The owner is responsible for preventive treatment of the dog against fleas, ticks and worms.",
            },
            {
              n: "4.3",
              text: "Bitches in season may not take part for the entire heat cycle (at least 3 weeks).",
            },
            {
              n: "4.4",
              text: "In case of illness, a single booked session may be cancelled until 18:00 the evening before.",
            },
            {
              n: "4.5",
              text: "Sick dogs may not take part in the dog-walking service.",
            },
            {
              n: "4.6",
              text: "If urgent medical care is needed, a veterinarian will be engaged, where possible after consulting the owner. The costs are borne by the owner.",
            },
          ],
        },
        {
          title: "Article 5 — Key management",
          clauses: [
            {
              n: "5.1",
              text: "Where necessary, a house key is provided to the Entrepreneur for collecting and returning the Guest dog.",
            },
            {
              n: "5.2",
              text: "Keys are not copied and are not labelled with an address.",
            },
            {
              n: "5.3",
              text: "Keys are only taken on the day(s) on which the service is provided.",
            },
            {
              n: "5.4",
              text: "Keys are used exclusively for collecting and returning the Guest dog.",
            },
            {
              n: "5.5",
              text: "At the Consumer's request, keys are returned immediately, ending key management.",
            },
          ],
        },
        {
          title: "Article 6 — Dog-walking service",
          clauses: [
            {
              n: "6.1",
              text: "The Entrepreneur collects the Guest dog at the agreed time and returns them to the agreed address, unless otherwise agreed.",
            },
            {
              n: "6.2",
              text: "The Guest dog is transported in a crate in the Entrepreneur's electric van.",
            },
            {
              n: "6.3",
              text: "The duration of the dog-walking service may be adjusted for safety reasons.",
            },
            {
              n: "6.4",
              text: "The Guest dog must be available at the agreed time and place. If the Guest dog is not available, the costs for the scheduled service will be charged.",
            },
            {
              n: "6.5",
              text: "The Entrepreneur is entitled to let the Guest dog off-leash on their own grounds, unless otherwise agreed in writing.",
            },
            {
              n: "6.6",
              text: "The Pack Walk service takes place on weekdays only. Weekend sessions are by appointment and subject to availability only.",
            },
          ],
        },
        {
          title: "Article 7 — Liability",
          clauses: [
            {
              n: "7.1",
              text: "The Entrepreneur is not liable for injury, illness, infection or loss of the Guest dog, unless directly caused by intent or gross negligence of the Entrepreneur.",
            },
            {
              n: "7.2",
              text: "The Consumer remains legally liable at all times for damage caused by the Guest dog to other dogs, persons or property — before, during and after the walk.",
            },
            {
              n: "7.3",
              text: "Third-party liability insurance (WA) is required for participation and will be requested during the intake.",
            },
            {
              n: "7.4",
              text: "Any veterinary costs or damage caused by the Guest dog will be recovered from the Consumer.",
            },
            {
              n: "7.5",
              text: "If it is unclear which dog caused the damage, the costs will be shared between the owners of the dogs involved.",
            },
            {
              n: "7.6",
              text: "The Entrepreneur is not liable for damage to the home or furnishings caused by a wet or dirty dog.",
            },
            {
              n: "7.7",
              text: "If a dog escapes, everything reasonably possible will be done to locate the Guest dog. Liability for loss is excluded unless gross negligence of the Entrepreneur can be demonstrated.",
            },
          ],
        },
        {
          title: "Article 8 — Booking & cancellation",
          clauses: [
            {
              n: "8.1",
              text: "For single bookings (introduction, single Pack Walk session, Private Walk), cancellations must be notified by 18:00 the evening before. This also applies in case of illness. Cancellations after 18:00 will be charged at the full rate.",
            },
            {
              n: "8.2",
              text: "Sessions within a subscription cannot be cancelled individually. As the dog's place is reserved weekly, a missed session is not credited or made up.",
            },
            {
              n: "8.3",
              text: "The only exception is consecutive absence (such as a holiday). If the Consumer is absent for one or more consecutive weeks, a 50% reservation fee applies to keep the dog's place for the missed sessions, provided this is reported at least two weeks in advance.",
            },
            {
              n: "8.4",
              text: "The Entrepreneur is closed on official public holidays.",
            },
            {
              n: "8.5",
              text: "In extreme weather (Code Orange/Red or temperatures above 33°C) the service may be adjusted or cancelled. The Consumer will be informed directly via WhatsApp.",
            },
          ],
        },
        {
          title: "Article 9 — Payment",
          clauses: [
            {
              n: "9.1",
              text: "Payment is made monthly in advance, by the 1st of the month at the latest.",
            },
            {
              n: "9.2",
              text: "The subscription fee is charged regardless of the number of walks actually taken.",
            },
            {
              n: "9.3",
              text: "If payment is outstanding, a surcharge of 10% of the total amount applies after 30 days. After 60 days a surcharge of 30% applies.",
            },
            {
              n: "9.4",
              text: "In case of prolonged illness of the Guest dog (demonstrated with a medical statement), a sick leave period of up to 2 months may be granted. During this period 50% of the normal rate is charged.",
            },
            {
              n: "9.5",
              text: "Payment is made by direct debit or bank transfer, unless otherwise agreed in writing.",
            },
          ],
        },
        {
          title: "Article 10 — Subscription & termination",
          clauses: [
            {
              n: "10.1",
              text: "The Entrepreneur preferably works with fixed subscriptions to ensure a consistent group composition.",
            },
            {
              n: "10.2",
              text: "The notice period is one calendar month.",
            },
            {
              n: "10.3",
              text: "On early termination, amounts already paid will not be refunded.",
            },
            {
              n: "10.4",
              text: "In case of repeated breach of these terms, the Entrepreneur reserves the right to terminate the agreement with immediate effect.",
            },
            {
              n: "10.5",
              text: "In case of persistent non-payment, the Entrepreneur may terminate the agreement unilaterally.",
            },
          ],
        },
        {
          title: "Article 11 — Privacy",
          clauses: [
            {
              n: "11.1",
              text: "The Entrepreneur processes the Consumer's personal data in accordance with the General Data Protection Regulation (GDPR). Personal data are used solely for performing the agreement and are not shared with third parties without the Consumer's consent.",
            },
            {
              n: "11.2",
              text: "The Consumer has the right to access, rectify and erase their personal data. Requests can be submitted via info@thedailypack.nl.",
            },
          ],
        },
        {
          title: "Article 12 — Governing law",
          clauses: [
            {
              n: "12.1",
              text: "Dutch law applies to all agreements between the Entrepreneur and the Consumer.",
            },
            {
              n: "12.2",
              text: "Any disputes will be submitted to the competent court in the district of Amsterdam.",
            },
          ],
        },
      ],
      seeAlsoBefore: "See also the",
      packRulesLabel: "Pack Rules",
      questionsLabel: "Questions?",
    },
    blog: {
      title: "Blog.",
      intro: "Insights on movement, calm and a fulfilled dog.",
      readMore: "Read more",
      back: "Back to blog",
      posts: [
        {
          slug: "hond-moe-maken-waarom-intensief-bewegen-meer-is-dan-energie-kwijt",
          title:
            "Tiring out your dog: why intense exercise is more than burning energy",
          date: "2026-06-18",
          dateLabel: "18 Jun",
          excerpt:
            "Three loops around the block and the dog is still jumping at the door. Tiring them out seems like a matter of stacking enough metres — but that is not quite right.",
          sections: [
            {
              paragraphs: [
                "Every dog owner knows it. Three loops around the block and the dog is still jumping at the door. Tiring them out seems like a matter of stacking enough metres — but that is not quite right. Research by anthropologist David Raichlen at the University of Arizona shows that it is not about distance, but about intensity.",
              ],
            },
            {
              heading: "The evidence is in the blood",
              paragraphs: [
                "Raichlen put people, dogs and ferrets on a treadmill for thirty minutes and then took blood samples. In both people and dogs, levels of endocannabinoids rose sharply — the same group of compounds found in cannabis that produces a sense of euphoria. In ferrets, nothing happened at all. A gentle walk also showed no rise; only a solid pace made the difference.",
                "That is striking, because it means the classic loop around the block simply does not have the effect many owners expect from it. The dog covers distance, but the system that creates calm and fulfilment never kicks in.",
              ],
            },
            {
              heading: "Why humans and dogs share this",
              paragraphs: [
                "Raichlen thinks this is an evolutionary gift. Species that were good at covering long, steady distances once had an edge in hunting and survival. The brain learned that hard effort was rewarded with a good feeling, so the body stayed motivated to keep moving. Humans and dogs shared that evolutionary path — which explains why this mechanism shows up in both, and not in the ferret.",
                "It also explains something every owner recognises: the almost absurd excitement the moment the lead appears. Long before a single step is taken, the dog knows something good is coming.",
              ],
            },
            {
              heading: "What this means for the daily walk",
              paragraphs: [
                "Ten minutes of ambling around prevents boredom, but it does not build that deeper sense of calm. For that you need a solid pace, sustained over a longer period. Not every dog can manage that straight away. Fitness builds up, just as in people, and a dog that never gets the chance to push through never reaches the level where this reward kicks in.",
                "That is exactly why The Daily Pack does not simply do a quick loop. A session is a group of dogs covering real distance together, at a pace that lands. For one dog that means a brisk walk; for another more of a bouncing trot — but the principle stays the same: enough effort to really switch that system on.",
                "The result is a dog that after the session is not only tired, but noticeably fulfilled. No restless behaviour, no energy looking for another outlet — just an animal content to spend the rest of the day on the sofa.",
              ],
            },
            {
              heading: "More than a loop around the block",
              paragraphs: [
                "Walking a dog is not about ticking boxes on the day's schedule. It is about a body and a brain that both need something beyond a bit of fresh air. Science confirms what many dog owners already sensed: solid exercise does more than burn calories.",
                "Try a brisk stretch yourself with the dog along, and notice the difference afterwards. Chances are both dog and owner feel that sense of calm.",
              ],
            },
          ],
        },
      ],
    },
    comingSoon: {
      eyebrow: "Amsterdam-Noord",
      titleBefore: "Coming ",
      titleEm: "soon",
      intro:
        "The new The Daily Pack website is almost ready. For a sneak peek, enter the password.",
      passwordLabel: "Password",
      passwordPlaceholder: "Password",
      error: "Incorrect password. Please try again.",
      submit: "View the site",
      loading: "One moment…",
      instagramLabel: "Instagram",
    },
    ctaDefaults: {
      readyJoin: {
        titleBefore: "Ready to ",
        titleEm: "join?",
      },
      readyStart: {
        titleBefore: "Ready to ",
        titleEm: "get started?",
      },
      readyHappy: {
        titleBefore: "Ready for a fulfilled and ",
        titleEm: "happy dog?",
      },
      readyEigen: {
        titleBefore: "Ready for a ",
        titleEm: "Private Walk?",
        buttonLabel: "Plan a Private Walk",
      },
    },
  },
};

export const blogSlugs = [
  "hond-moe-maken-waarom-intensief-bewegen-meer-is-dan-energie-kwijt",
] as const;

export function getPageContent(locale: Locale) {
  return pageContent[locale];
}
