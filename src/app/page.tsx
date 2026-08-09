import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hondenuitlaatservice Amsterdam-Noord | The Daily Pack",
  description:
    "Upgrade de dag van jouw hond. Wandelen, socialiseren en loopband in kleine groepen. Ophalen en thuisbrengen in Amsterdam-Noord.",
};

const reasons = [
  {
    n: "01",
    title: "Meer dan een blokje om",
    text: "Wandelen én loopband in één sessie. Jouw hond komt fysiek en mentaal voldaan thuis.",
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
];

const steps = [
  {
    title: "Kennismaking",
    text: "We starten met een persoonlijke ontmoeting, bespreken de wensen en bepalen samen wat de volgende stap is.",
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
    text: "Terug in de bus is het tijd voor de loopband. Stoom afblazen op een veilige, gecontroleerde manier.",
  },
  {
    title: "Thuisbrengen",
    text: "We brengen jouw hond terug naar huis. Moe, ontspannen en klaar voor de rest van de dag.",
  },
  {
    title: "Wandelverslag",
    text: "Na afloop ontvang je het Wandelverslag met foto's en video's.",
  },
];

const instagramImages = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=800&q=80",
];

export default function HomePage() {
  return (
    <>
      {/* ---------- 1. Hero — Thema 4 ---------- */}
      <section className="on-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden theme-4">
        <Image
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2400&q=80"
          alt="Honden samen op pad in het bos"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(6,117,64,0.28),transparent_55%)]" />

        <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 pb-20 pt-40 md:px-8 md:pb-28">
          <p className="eyebrow animate-fade-up mb-7 text-green-light">
            Hondenuitlaatservice Amsterdam-Noord · Premium
          </p>
          <h1 className="animate-fade-up delay-1 max-w-3xl text-[clamp(3rem,8vw,5.75rem)] leading-[0.98] text-white">
            Upgrade de dag van <em>jouw hond.</em>
          </h1>
          <p className="animate-fade-up delay-2 mt-7 max-w-xl text-[16px] leading-relaxed text-white/80 md:text-[17px]">
            Drukke dagen of andere verplichtingen? The Daily Pack haalt op, gaat
            de natuur in en brengt een voldane hond terug. Wandelen, socialiseren
            en stoom afblazen op de loopband. In kleine groepen, met volledige
            aandacht.
          </p>
          <div className="animate-fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.collar.kennismaking} variant="on-dark">
              Boek een Kennismaking
            </Button>
            <Button
              href="/hoe-het-werkt/werkwijze"
              variant="secondary"
              className="!border-white/70 !text-white hover:!border-white hover:!bg-white/10 hover:!text-white"
            >
              Ontdek hoe het werkt
            </Button>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ---------- 2. Waarom — Thema 1 ---------- */}
      <section className="theme-1 grain">
        <div className="relative z-[1] mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
          <div className="grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <p className="eyebrow mb-6 text-green">Waarom</p>
                <h2 className="text-[clamp(2.2rem,4vw,3rem)]">
                  Waarom <em>The Daily Pack?</em>
                </h2>
                <p className="mt-5 max-w-sm text-[16px] text-ink/70">
                  De belangrijkste voordelen voor jou en jouw hond.
                </p>
              </Reveal>

              <Reveal delay={0.15} className="mt-10 hidden lg:block">
                <div className="arch relative aspect-[4/5] w-full max-w-[340px]">
                  <Image
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=80"
                    alt="Hond geniet buiten van de aandacht"
                    fill
                    className="object-cover"
                    sizes="340px"
                  />
                </div>
              </Reveal>
            </div>

            <div>
              {reasons.map((item, i) => (
                <Reveal
                  key={item.n}
                  delay={i * 0.08}
                  className="group border-t border-ink/12 py-10 first:border-t-0 first:pt-0 md:py-12"
                >
                  <div className="flex gap-6 md:gap-10">
                    <span className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-none text-green/35 transition-colors duration-500 group-hover:text-green">
                      {item.n}
                    </span>
                    <div className="pt-1">
                      <h3 className="mb-3 text-[clamp(1.35rem,2.2vw,1.7rem)]">
                        {item.title}
                      </h3>
                      <p className="max-w-md text-[15.5px] leading-relaxed text-ink/70">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.25} className="border-t border-ink/12 pt-10 md:pt-12">
                <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,2.6vw,2rem)] font-light italic text-green">
                  7 dagen per week beschikbaar.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 3. Instagram — Thema 5 ---------- */}
      <section className="theme-5">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow mb-6 text-green">Instagram</p>
            <h2 className="text-[clamp(2.2rem,4vw,3rem)]">
              De roedel <em>op pad</em>
            </h2>
            <p className="mt-4 max-w-md text-[16px] text-ink/70">
              De laatste avonturen, foto&apos;s en video&apos;s op onze
              Instagram.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {instagramImages.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 0.07}
                className={i % 2 === 1 ? "md:translate-y-10" : ""}
              >
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-beige-1"
                >
                  <Image
                    src={src}
                    alt="Hond van The Daily Pack tijdens een wandeling"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 translate-y-2 text-[13px] font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    @thedailypack
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-16 text-[13px] text-muted md:mt-20">
            Placeholder-beelden — eigen Instagram-feed volgt.
          </p>
        </div>
      </section>

      {/* ---------- 4. Hoe werkt het — Thema 2 ---------- */}
      <section className="theme-2 grain">
        <div className="relative z-[1] mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
          <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-6 text-green">Werkwijze</p>
              <h2 className="text-[clamp(2.2rem,4vw,3rem)]">
                Hoe werkt <em>het?</em>
              </h2>
            </div>
            <Button href="/hoe-het-werkt/werkwijze" variant="secondary">
              Meer informatie
            </Button>
          </Reveal>

          <div className="relative">
            {/* wandelpad */}
            <div className="dotted-path absolute bottom-4 left-[19px] top-4 hidden md:block" />

            <ol className="space-y-12 md:space-y-16">
              {steps.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={i * 0.05}
                  className="relative md:pl-24"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-green/40 bg-beige-2 font-[family-name:var(--font-cormorant)] text-[19px] text-green md:absolute md:left-0 md:top-0 md:mb-0">
                    {i + 1}
                  </span>
                  <div className="max-w-xl">
                    <h3 className="mb-2.5 text-[clamp(1.3rem,2vw,1.6rem)]">
                      {step.title}
                    </h3>
                    <p className="text-[15.5px] leading-relaxed text-ink/70">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- 5. Het aanbod — Thema 1 ---------- */}
      <section className="theme-1">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
          <Reveal>
            <p className="eyebrow mb-6 text-green">Diensten</p>
            <h2 className="text-[clamp(2.2rem,4vw,3rem)]">
              Het <em>aanbod</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
            {[
              {
                title: "Pack Ronde",
                text: "Doordeweeks of in het weekend. Vastigheid, iedere week dezelfde dag en hetzelfde moment.",
                href: "/diensten/pack-ronde",
                img: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1200&q=80",
                alt: "Groep honden samen tijdens de Pack Ronde",
              },
              {
                title: "Eigen Ronde",
                text: "Flexibel inboeken op een moment dat past. Voor maximaal twee honden van hetzelfde adres.",
                href: "/diensten/eigen-ronde",
                img: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80",
                alt: "Hond krijgt individuele aandacht tijdens een Eigen Ronde",
              },
            ].map((offer, i) => (
              <Reveal key={offer.href} delay={i * 0.1}>
                <Link href={offer.href} className="group block">
                  <div className="arch relative aspect-[4/5] w-full">
                    <Image
                      src={offer.img}
                      alt={offer.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,3vw,2.4rem)] font-light text-white">
                        {offer.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-6 pt-6">
                    <p className="max-w-sm text-[15.5px] leading-relaxed text-ink/70">
                      {offer.text}
                    </p>
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:border-green group-hover:bg-green group-hover:text-white">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M2 8h11M9 3.5 13.5 8 9 12.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 6. CTA — Thema 3 ---------- */}
      <section className="theme-3 grain relative overflow-hidden">
        <Image
          src="/logo.png"
          alt=""
          width={560}
          height={512}
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 hidden w-[480px] -translate-y-1/2 opacity-[0.13] brightness-[3] lg:block"
        />
        <div className="relative z-[1] mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
          <Reveal>
            <h2 className="max-w-2xl text-[clamp(2.4rem,5vw,3.75rem)] text-white">
              Klaar voor een <em>voldane hond?</em>
            </h2>
            <p className="mt-6 max-w-md text-[16px] text-white/85">
              Zet vandaag de eerste stap voor jouw hond.
            </p>
            <div className="mt-10">
              <Button href={site.collar.kennismaking} variant="on-green">
                Boek een Kennismaking
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
