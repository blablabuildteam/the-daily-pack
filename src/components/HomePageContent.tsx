"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-context";
import { site } from "@/lib/site";

const whyImages = [
  "/media/home/why-1.jpg",
  "/media/home/why-2.jpg",
  "/media/home/why-3.jpg",
];

const galleryImages = [
  "/media/home/why-1.jpg",
  "/media/home/why-2.jpg",
  "/media/home/why-3.jpg",
  "/media/home/offer-pack.jpg",
];

const offerMeta = [
  { href: "/diensten/pack-ronde", img: "/media/home/offer-pack.jpg" },
  { href: "/diensten/eigen-ronde", img: "/media/home/offer-eigen.jpg" },
];

export function HomePageContent() {
  const { t } = useLocale();
  const { home } = t;

  return (
    <>
      <section className="on-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden theme-4">
        <Image
          src="/media/home/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(6,117,64,0.06),transparent_50%)]" />

        <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 pb-20 pt-40 md:px-8 md:pb-28">
          <p className="eyebrow animate-fade-up mb-7 text-green-light">
            {home.eyebrow}
          </p>
          <h1 className="animate-fade-up delay-1 max-w-3xl text-[clamp(3rem,8vw,5.75rem)] leading-[0.98] text-white">
            {home.heroTitleBefore} <em>{home.heroTitleEm}</em>
          </h1>
          <p className="animate-fade-up delay-2 mt-7 max-w-xl text-[16px] leading-relaxed text-white/80 md:text-[17px]">
            {home.heroText}
          </p>
          <div className="animate-fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.collar.kennismaking} variant="on-dark">
              {t.common.bookIntro}
            </Button>
            <Button
              href="/hoe-het-werkt/werkwijze"
              variant="secondary"
              className="!border-white/70 !text-white hover:!border-white hover:!bg-white/10 hover:!text-white"
            >
              {home.discover}
            </Button>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Waarom — header full-width, images + reasons aligned */}
      <section className="theme-1 grain">
        <div className="relative z-[1] mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-6 text-green">{home.whyEyebrow}</p>
            <h2 className="text-[clamp(2.2rem,4vw,3rem)]">
              {home.whyTitleBefore} <em>{home.whyTitleEm}</em>
            </h2>
            <p className="mt-5 max-w-lg text-[16px] text-ink/70">
              {home.whyIntro}
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={0.08}>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="arch relative col-span-2 aspect-[16/10]">
                  <Image
                    src={whyImages[0]}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={whyImages[1]}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={whyImages[2]}
                    alt=""
                    fill
                    className="object-cover object-[center_40%]"
                    sizes="(max-width: 1024px) 50vw, 250px"
                  />
                </div>
              </div>
            </Reveal>

            <div className="lg:pt-1">
              {home.reasons.map((item, i) => (
                <Reveal
                  key={item.n}
                  delay={i * 0.08}
                  className="group border-t border-ink/12 py-8 first:border-t-0 first:pt-0 md:py-9"
                >
                  <div className="flex gap-5 md:gap-7">
                    <span className="w-12 shrink-0 font-[family-name:var(--font-cormorant)] text-[clamp(2rem,3.2vw,2.75rem)] font-light leading-none text-green/40 transition-colors duration-500 group-hover:text-green md:w-14">
                      {item.n}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="mb-2.5 text-[clamp(1.3rem,2vw,1.6rem)]">
                        {item.title}
                      </h3>
                      <p className="text-[15.5px] leading-relaxed text-ink/70">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="theme-5">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-6 text-green">{home.instagramEyebrow}</p>
              <h2 className="text-[clamp(2.2rem,4vw,3rem)]">
                {home.instagramTitleBefore} <em>{home.instagramTitleEm}</em>
              </h2>
              <p className="mt-4 max-w-md text-[16px] text-ink/70">
                {home.instagramIntro}
              </p>
            </div>
            <Button href={site.instagram} variant="secondary" external>
              {home.instagramCta}
            </Button>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-5">
            {galleryImages.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 0.07}
                className={i % 2 === 1 ? "md:translate-y-8" : ""}
              >
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-beige-1"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 translate-y-2 text-[13px] font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    @thedailypack.dog
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het — compact grid i.p.v. lange strook */}
      <section className="theme-2 grain">
        <div className="relative z-[1] mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-6 text-green">{home.stepsEyebrow}</p>
              <h2 className="text-[clamp(2.2rem,4vw,3rem)]">
                {home.stepsTitleBefore} <em>{home.stepsTitleEm}</em>
              </h2>
            </div>
            <Button href="/hoe-het-werkt/werkwijze" variant="secondary">
              {home.moreInfo}
            </Button>
          </Reveal>

          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {home.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05} className="relative">
                <li className="h-full border-t border-green/25 pt-6">
                  <span className="mb-4 inline-flex font-[family-name:var(--font-cormorant)] text-[2rem] font-light leading-none text-green/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2.5 text-[clamp(1.25rem,1.8vw,1.5rem)]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/70">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Aanbod — witte achtergrond voor duidelijke scheiding */}
      <section className="theme-5">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow mb-6 text-green">{home.offersEyebrow}</p>
            <h2 className="text-[clamp(2.2rem,4vw,3rem)]">
              {home.offersTitleBefore} <em>{home.offersTitleEm}</em>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-8 lg:gap-10">
            {home.offers.map((offer, i) => (
              <Reveal key={offerMeta[i].href} delay={i * 0.1}>
                <Link href={offerMeta[i].href} className="group block">
                  <div className="arch relative aspect-[5/4] w-full md:aspect-[4/5]">
                    <Image
                      src={offerMeta[i].img}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.7rem,2.8vw,2.25rem)] font-light text-white">
                        {offer.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-5 pt-5">
                    <p className="max-w-sm text-[15.5px] leading-relaxed text-ink/70">
                      {offer.text}
                    </p>
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:border-green group-hover:bg-green group-hover:text-white">
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

      <section className="theme-3 grain relative overflow-hidden">
        <Image
          src="/logo.png"
          alt=""
          width={560}
          height={512}
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 hidden w-[480px] -translate-y-1/2 opacity-[0.13] brightness-[3] lg:block"
        />
        <div className="relative z-[1] mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <h2 className="max-w-2xl text-[clamp(2.4rem,5vw,3.75rem)] text-white">
              {home.ctaTitleBefore} <em>{home.ctaTitleEm}</em>
            </h2>
            <p className="mt-6 max-w-md text-[16px] text-white/85">
              {home.ctaText}
            </p>
            <div className="mt-10">
              <Button href={site.collar.kennismaking} variant="on-green">
                {t.common.bookIntro}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
