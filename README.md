# iSET Website

Official marketing website for **iSET** (International Skill Enhancement Training) by **IAME** (Ideal Association for Minority Education).

- **Live site:** [https://isetonline.in](https://isetonline.in)
- **GitHub:** [https://github.com/srlsec/iset-static-website](https://github.com/srlsec/iset-static-website)

---

## Quick start

From the project root (`iset-website/`):

```bash
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. The dev server reloads automatically when you edit files.

To stop the server, press `Ctrl+C` in the terminal.

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

If you already have the folder locally, open a terminal in `iset-static-website/` and continue from step 2.

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
│   ├── favicon.ico
│   ├── iset-logo.png
│   ├── iset-logo-white.png
│   ├── hero*.jpg
│   ├── image_gallary/      # Event gallery photos
│   ├── question_bank/      # Downloadable question papers (PDFs)
│   └── social/
├── src/
│   ├── app/                # Pages (Next.js App Router)
│   │   ├── page.tsx        # Home
│   │   ├── about/
│   │   ├── curriculum/
│   │   ├── gallery/
│   │   ├── history/
│   │   ├── question-bank/
│   │   ├── layout.tsx      # Root layout (navbar + footer)
│   │   ├── sitemap.ts      # /sitemap.xml
│   │   └── robots.ts       # /robots.txt
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroCurveDivider.tsx
│   │   ├── PageHero.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── QuestionBankGrid.tsx
│   │   ├── ContactFAB.tsx
│   │   ├── StatsMarquee.tsx
│   │   └── ...
│   ├── data/
│   │   └── questionBank.ts # Question bank file list & metadata
│   └── lib/                # Shared helpers
│       ├── metadata.ts     # SEO titles, descriptions, canonical URLs
│       └── gallery-images.ts
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

---

## Pages


| Route            | Description                    |
| ---------------- | ------------------------------ |
| `/`              | Home                           |
| `/about`         | About iSET & IAME              |
| `/curriculum`    | Syllabus & exam pattern        |
| `/gallery`       | Event photo gallery            |
| `/history`       | Timeline & milestones          |
| `/question-bank` | Sample questions & exam format |


SEO files (auto-generated):

- `/sitemap.xml`
- `/robots.txt`

---

## Environment variables

**None required** for local development or Vercel deployment.

External assets load from:

- IAME logo: `iameonline.com`
- Registration: `https://iameonline.com/login/index`
- Previous papers: `https://iameonline.com/iset_previous`

If you add a **custom domain**, update the site URL in:

- `src/lib/metadata.ts` → `SITE_URL`
- `src/app/sitemap.ts` → `baseUrl`
- `src/app/robots.ts` → `sitemap` URL

---

## Deploying

### Static hosting (Apache / cPanel — current production setup)

The live site at [isetonline.in](https://isetonline.in) is deployed as static files.

1. Build locally or in CI:
  ```bash
   npm install
   npm run build
  ```
2. Upload the contents of the `**out/**` folder to your web root (for example, `public_html/` on cPanel).
3. Ensure `public/.htaccess` is included in the upload. It is copied into `out/` during the build and handles HTTPS redirects, custom 404, and directory listing.
4. Confirm the site loads at your domain and that routes like `/about/` and `/gallery/` work (trailing slashes are enabled).

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
- **Gallery / mobile menu:** Full-screen overlays use higher z-index so they appear above the navbar

Breakpoint is defined in `tailwind.config.js` as `nav: '1140px'`.

---

## Troubleshooting

### `Cannot find module './XXX.js'` or runtime webpack errors

Usually a **stale build cache**, **multiple dev servers**, or a **Next.js 15.5 devtools bug on Windows**.

**Fix (Windows PowerShell):**

```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
npm run clean
npm run dev
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


| Command         | Purpose                                                                    |
| --------------- | -------------------------------------------------------------------------- |
| `npm install`   | Install dependencies                                                       |
| `npm run clean` | Delete `.next/` dev cache                                                  |
| `npm run dev`   | Start development server at [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Create static production build in `out/`                                   |
| `npx serve out` | Preview the production build locally                                       |
| `npm run lint`  | Run ESLint                                                                 |


---

