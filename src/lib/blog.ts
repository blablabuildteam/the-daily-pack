export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
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
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
