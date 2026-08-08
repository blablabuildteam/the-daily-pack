export const site = {
  name: "The Daily Pack",
  shortName: "TDP",
  tagline: "Premium hondenuitlaatservice Amsterdam-Noord",
  email: "info@thedailypack.nl",
  phone: "+316 2131 7772",
  phoneHref: "tel:+31621317772",
  emailHref: "mailto:info@thedailypack.nl",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/thedailypack/",
  collar: {
    kennismaking:
      process.env.NEXT_PUBLIC_COLLAR_KENNISMAKING_URL ?? "#boek-kennismaking",
    eigenRonde:
      process.env.NEXT_PUBLIC_COLLAR_EIGEN_RONDE_URL ?? "#boek-eigen-ronde",
  },
} as const;

export const nav = [
  {
    label: "Diensten",
    href: "/diensten/pack-ronde",
    children: [
      { label: "Pack Ronde", href: "/diensten/pack-ronde" },
      { label: "Eigen Ronde", href: "/diensten/eigen-ronde" },
    ],
  },
  {
    label: "Hoe het werkt",
    href: "/hoe-het-werkt/werkwijze",
    children: [
      { label: "Werkwijze", href: "/hoe-het-werkt/werkwijze" },
      { label: "Tijden & Tarieven", href: "/hoe-het-werkt/tijden-tarieven" },
      { label: "Pack Regels", href: "/hoe-het-werkt/pack-regels" },
    ],
  },
  {
    label: "Over ons",
    href: "/over-ons",
    children: [
      { label: "The Daily Pack", href: "/over-ons" },
      { label: "Loopband", href: "/over-ons/loopband" },
    ],
  },
] as const;

export const footerLegal = [
  { label: "Algemene Voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Privacy", href: "/privacy" },
  { label: "Bedrijfsinformatie", href: "/bedrijfsinformatie" },
] as const;
