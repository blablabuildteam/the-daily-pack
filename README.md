# The Daily Pack

Website voor The Daily Pack — premium mobiele hondenuitlaatservice in Amsterdam-Noord.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Motion (scroll reveals)

## Lokaal starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Omgevingsvariabelen

Kopieer `.env.example` naar `.env.local` en vul de Collar-boekingslinks in:

```bash
NEXT_PUBLIC_COLLAR_KENNISMAKING_URL=
NEXT_PUBLIC_COLLAR_EIGEN_RONDE_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
```

## Pagina's

- `/` — Homepage
- `/diensten/pack-ronde`
- `/diensten/eigen-ronde`
- `/hoe-het-werkt/werkwijze`
- `/hoe-het-werkt/tijden-tarieven`
- `/hoe-het-werkt/pack-regels`
- `/over-ons`
- `/over-ons/loopband`
- `/algemene-voorwaarden`, `/privacy`, `/bedrijfsinformatie`

## Nog te doen (buiten code)

- Collar-boekingsflows koppelen
- Instagram-feed (nu placeholders)
- Eigen foto's van bus, honden en wandelingen
- Volledige AV / privacytekst
- `info@thedailypack.nl` activeren
