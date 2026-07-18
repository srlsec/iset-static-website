# iSET Website

Official marketing website for **iSET** (International Skill Enhancement Training) by **IAME** (Ideal Association for Minority Education).

- **Live site (target domain):** [https://isetonline.in](https://isetonline.in)
- **GitHub:** [https://github.com/srlsec/iset-static-website](https://github.com/srlsec/iset-static-website)

> **Hosting handoff:** See **[HOSTING.md](./HOSTING.md)** for the deployment package the hosting team needs. Upload the contents of `out/` only — no Node.js on the server.

---

## Quick start

From the project root:

```bash
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. The dev server reloads automatically when you edit files.

To stop the server, press `Ctrl+C` in the terminal.

On Windows, if you hit webpack cache errors after many edits:

```bash
npm run dev:fresh
```

---

## Production run command

Use this project in production mode with:

```bash
npm run build && npx serve out
```

This project uses static export, so `npm start` is not used here.

---

## Tech stack

| Tool                                          | Version         |
| --------------------------------------------- | --------------- |
| [Next.js](https://nextjs.org/)                | 15 (App Router) |
| [React](https://react.dev/)                   | 19              |
| [TypeScript](https://www.typescriptlang.org/) | 5               |
| [Tailwind CSS](https://tailwindcss.com/)      | 3               |
| Fonts                                         | Inter + Bricolage Grotesque via `next/font/google` |

---

## Prerequisites

Install **Node.js 20 LTS or newer** (includes npm):

- Download: [https://nodejs.org/](https://nodejs.org/)
- Verify:

```bash
node -v
npm -v
```

---

## Getting started

### 1. Clone or download the repo

```bash
git clone https://github.com/srlsec/iset-static-website.git
cd iset-static-website
```

If you already have the folder locally, open a terminal in the project root and continue from step 2.

### 2. Install dependencies

```bash
npm install
```

This reads `package.json` and installs packages into `node_modules/`.

> **Note:** Do **not** copy or send `node_modules/`, `.next/`, or `out/` when sharing the project. Anyone setting up the repo should run `npm install` on their own machine.

---

## Running locally

### Development (recommended while editing)

```bash
npm run dev
```

Then open: **[http://localhost:3000](http://localhost:3000)**

The dev server hot-reloads when you save files. If port 3000 is busy, Next.js uses the next free port (for example, 3001) and prints the URL in the terminal.

### Fresh dev start (Windows)

```bash
npm run dev:fresh
```

Clears `.next/` and starts the dev server — use this if you see stale webpack chunk errors.

### Production build (test before deploy)

This project is configured for **static export** (`output: 'export'` in `next.config.mjs`). A build generates plain HTML/CSS/JS files in the `out/` folder — there is no Node server to run in production.

```bash
npm run build
```

Preview the built site locally with any static file server:

```bash
npx serve out
```

Then open the URL shown in the terminal (usually **[http://localhost:3000](http://localhost:3000)**).

> **Note:** `npm start` is for server-rendered Next.js apps and does **not** apply here. Use `npx serve out` (or upload the `out/` folder to your host) after building.

### Lint

```bash
npm run lint
```

---

## Project structure

```
iset-website/
├── public/                 # Static assets
│   ├── brochures/          # Official iSET brochure PDF
│   ├── favicon.ico
│   ├── iset-logo.png
│   ├── iset-logo-white.png
│   ├── question_bank/      # Downloadable question papers (PDFs)
│   └── social/
├── src/
│   ├── app/                # Pages (Next.js App Router)
│   │   ├── page.tsx        # Home
│   │   ├── about/
│   │   ├── curriculum/
│   │   ├── history/
│   │   ├── question-bank/
│   │   ├── layout.tsx      # Root layout (navbar + footer + fonts)
│   │   ├── sitemap.ts      # /sitemap.xml
│   │   └── robots.ts       # /robots.txt
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── PageHero.tsx
│   │   ├── QuestionBankGrid.tsx
│   │   ├── ContactFAB.tsx
│   │   ├── StatsMarquee.tsx
│   │   └── ...
│   ├── data/
│   │   └── questionBank.ts # Question bank file list & metadata
│   └── lib/                # Shared helpers
│       └── metadata.ts     # SEO titles, descriptions, SITE_URL
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

---

## Pages

| Route             | Description                    |
| ----------------- | ------------------------------ |
| `/`               | Home                           |
| `/about/`         | About iSET & IAME              |
| `/curriculum/`    | Syllabus & exam pattern (2026) |
| `/history/`       | Timeline & milestones          |
| `/question-bank/` | Sample questions & exam format |

Static assets:

| Path                              | Description              |
| --------------------------------- | ------------------------ |
| `/brochures/iset-brochure.pdf`    | Official iSET brochure   |

SEO files (auto-generated on build):

- `/sitemap.xml`
- `/robots.txt`

### Sitemap (`src/app/sitemap.ts`)

Generated URLs (all on `https://isetonline.in`, trailing slashes on pages):

| URL                                         | Priority | Change freq |
| ------------------------------------------- | -------- | ----------- |
| `/`                                         | 1.0      | weekly      |
| `/about/`                                   | 0.8      | monthly     |
| `/curriculum/`                              | 0.9      | weekly      |
| `/history/`                                 | 0.6      | yearly      |
| `/question-bank/`                           | 0.7      | monthly     |
| `/brochures/iset-brochure.pdf`              | 0.5      | monthly     |

- **lastmod:** `2026-07-17`
- **No `/gallery/`** — gallery page was removed

### Robots (`src/app/robots.txt`)

```
User-Agent: *
Allow: /
Disallow: /gallery/

Host: isetonline.in
Sitemap: https://isetonline.in/sitemap.xml
```

---

## Environment variables

**None required** for local development or static hosting.

External links used by the site:

- Registration: `https://iameonline.com/login/index`
- Previous papers: `https://iameonline.com/iset_previous`
- Syllabus: `https://iameonline.com/syllabus`

Site URL is configured in `src/lib/metadata.ts` → `SITE_URL` (`https://isetonline.in`). Sitemap and robots derive from this constant.

---

## Deploying

### Static hosting (Apache / cPanel — current production setup)

The live site at [isetonline.in](https://isetonline.in) is deployed as static files.

1. Build locally or in CI:
   ```bash
   npm install
   npm run build
   ```
2. Upload the contents of the **`out/`** folder to your web root (for example, `public_html/` on cPanel).
3. Ensure `public/.htaccess` is included in the upload. It is copied into `out/` during the build and handles HTTPS redirects, custom 404, and directory listing.
4. Confirm the site loads at your domain and that routes like `/about/` and `/curriculum/` work (trailing slashes are enabled).

### Deploying to Vercel

Static export works on Vercel with default Next.js settings:

1. Push the repo to GitHub (or import the folder in [Vercel](https://vercel.com/)).
2. Create a new project and connect the repo.
3. Use these settings:

   | Setting          | Value           |
   | ---------------- | --------------- |
   | Framework        | Next.js         |
   | Build command    | `npm run build` |
   | Output directory | `out`           |
   | Install command  | `npm install`   |

4. Deploy. Vercel rebuilds on every push to `main`.

---

## Responsive behaviour

- **Desktop nav (≥ 1140px):** Horizontal links + Register button
- **Below 1140px:** Hamburger menu with left slide-in drawer

Breakpoint is defined in `tailwind.config.js` as `nav: '1140px'`.

---

## Troubleshooting

### `Cannot find module './XXX.js'` or runtime webpack errors

Usually a **stale build cache**, **multiple dev servers**, or a **Next.js 15.5 devtools bug on Windows**.

**Fix (Windows PowerShell):**

```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
npm run dev:fresh
```

**Fix (macOS / Linux):**

```bash
pkill node
npm run clean
npm run dev
```

Then hard-refresh the browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac).

> **Note:** This project pins Next.js to `15.5.18` and disables devtools segment explorer in `next.config.mjs` to avoid the `__webpack_modules__[moduleId] is not a function` error during local development.

### Port 3000 already in use

Next.js will try the next port (e.g. 3001). Stop other Node processes or use:

```bash
npx kill-port 3000
npm run dev
```

### Images from IAME not loading

`next.config.mjs` allows images from `iameonline.com`. If the remote host changes, update `remotePatterns` in that file.

---

## Scripts reference

| Command            | Purpose                                                                    |
| ------------------ | -------------------------------------------------------------------------- |
| `npm install`      | Install dependencies                                                       |
| `npm run clean`    | Delete `.next/` dev cache                                                  |
| `npm run dev`      | Start development server at [http://localhost:3000](http://localhost:3000) |
| `npm run dev:fresh`| Clear cache and start dev server (recommended on Windows)                  |
| `npm run build`    | Create static production build in `out/`                                   |
| `npx serve out`    | Preview the production build locally                                       |
| `npm run lint`     | Run ESLint                                                                 |

---

## 2026 content notes

- **iSET '26** exam pattern: Prelims → LTS/UTS → **TalentX Summit** (Calicut, 30 Dec 2026)
- **4 syllabus bands:** LKG & UKG | Grade I–VII | Grade VIII–X | XI–XII
- **OMR sheets:** Grade 3 and above
- **Brochure:** self-hosted at `/brochures/iset-brochure.pdf`
- **Gallery page removed** — `/gallery/` disallowed in robots.txt
- **Do not publish entry fee** anywhere on the site
