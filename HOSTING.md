# iSET Website — Hosting Handoff

**Domain:** [https://isetonline.in](https://isetonline.in)  
**Build date reference:** 2026-07-17  
**Site type:** Static HTML/CSS/JS (no Node.js required on the server)

---

## What to deploy

Upload **everything inside the `out/` folder** to the web root (e.g. `public_html/` on cPanel).

Do **not** upload `node_modules/`, `src/`, or `.next/` — those are for development only.

### Required files & folders in `out/`

| Path | Purpose |
|------|---------|
| `index.html` | Home page |
| `about/` | About page |
| `curriculum/` | Curriculum & syllabus |
| `history/` | History timeline |
| `question-bank/` | Question bank page |
| `brochures/iset-brochure.pdf` | Official iSET brochure (local download) |
| `question_bank/*.pdf` | Grade-wise question paper PDFs |
| `robots.txt` | Search engine rules |
| `sitemap.xml` | Search engine sitemap |
| `.htaccess` | Apache HTTPS redirect, 404, security |
| `404.html` | Custom not-found page |
| `_next/` | Compiled CSS & JavaScript (required) |
| Images, logos, favicon | Root-level assets (`*.png`, `favicon.ico`, etc.) |

---

## Deployment steps (Apache / cPanel)

1. Build the site (if rebuilding from source):
   ```bash
   npm install
   npm run build
   ```
2. Open the `out/` folder locally.
3. Upload **all contents** of `out/` to the domain document root.
4. Confirm `.htaccess` is present in the web root (may be hidden — enable “show hidden files”).
5. Point DNS for `isetonline.in` to this hosting account.
6. Enable SSL/HTTPS on the domain (`.htaccess` redirects HTTP → HTTPS).

---

## Post-deploy checklist

- [ ] `https://isetonline.in/` loads the home page
- [ ] `https://isetonline.in/about/` works
- [ ] `https://isetonline.in/curriculum/` works
- [ ] `https://isetonline.in/history/` works
- [ ] `https://isetonline.in/question-bank/` works
- [ ] `https://isetonline.in/brochures/iset-brochure.pdf` downloads the brochure
- [ ] `https://isetonline.in/sitemap.xml` is accessible
- [ ] `https://isetonline.in/robots.txt` is accessible
- [ ] `https://isetonline.in/gallery/` returns **404** (page removed by design)
- [ ] Register buttons link to `https://iameonline.com/login/index`
- [ ] HTTPS redirect works (http → https)

---

## SEO files (already generated)

### `sitemap.xml`

| URL | Priority |
|-----|----------|
| `https://isetonline.in/` | 1.0 |
| `https://isetonline.in/about/` | 0.8 |
| `https://isetonline.in/curriculum/` | 0.9 |
| `https://isetonline.in/history/` | 0.6 |
| `https://isetonline.in/question-bank/` | 0.7 |
| `https://isetonline.in/brochures/iset-brochure.pdf` | 0.5 |

All entries: **lastmod 2026-07-17**. No `/gallery/` entry.

### `robots.txt`

```
User-Agent: *
Allow: /
Disallow: /gallery/

Host: isetonline.in
Sitemap: https://isetonline.in/sitemap.xml
```

---

## Server requirements

| Requirement | Details |
|-------------|---------|
| Runtime | **None** — static files only |
| Web server | Apache (recommended — `.htaccess` included) or any static host |
| PHP / Node | Not required |
| Database | Not required |
| SSL | Required (HTTPS redirect in `.htaccess`) |

### Nginx alternative

If using Nginx instead of Apache, convert `.htaccess` rules manually:

- Force HTTPS
- Custom 404 → `/404.html`
- Disable directory listing
- Serve `index.html` for trailing-slash routes

---

## External services (live after deploy)

These URLs are intentional third-party links — no server config needed:

| Service | URL |
|---------|-----|
| Exam registration | `https://iameonline.com/login/index` |
| Previous questions | `https://iameonline.com/iset_previous` |
| Syllabus | `https://iameonline.com/syllabus` |
| WhatsApp contact | `https://api.whatsapp.com/send?phone=918086511165` |
| Google Maps (Kozhikode office) | Linked from footer |

All fonts are **self-hosted** via the build — no Adobe Typekit or external font CDN.

---

## Rebuilding after content changes

If the development team sends an updated source package:

```bash
npm install
npm run build
```

Then re-upload the new `out/` folder contents.

---

## Support contacts (site content)

- **Phone:** +91 8086 511 165
- **Email:** mail@iameonline.com

**Office addresses** (shown in footer):

- New Delhi: #1784 Kalan Mahal Dariya Ganj, New Delhi, 110002
- Kozhikode: 4th Floor, Markaz Complex, Jaffer Khan Colony Rd, Mavoor Rd, Opposite New Bus Stand, Arayidathupalam, Kozhikode, Kerala, 673004
- Mysore: #216/1, 2nd Stage, North Block Shanthi Nagar, Mysore, Karnataka
