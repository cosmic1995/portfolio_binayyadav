# Binay Yadav — UX Designer Portfolio

Personal portfolio website for **Binay Yadav**, Senior UX Designer. Fully static HTML/CSS/JS site — no build tools, no frameworks, no dependencies to install.

**Live URL:** https://binayyadav.netlify.app  
**Repository:** `git@github.com:cosmic1995/portfolio_binayyadav.git`  
**Contact:** vjbinay@gmail.com  
**LinkedIn:** https://linkedin.com/in/binayyadav-art

---

## Project Structure

```
portfolio_binayyadav/
├── site/                          ← Serve this folder as the web root
│   ├── index.html                 ← Homepage
│   ├── about-me.html              ← About page
│   ├── workfolio.html             ← Work / projects overview
│   ├── contact.html               ← Contact page
│   ├── case-study-design-automation.html
│   ├── case-study-backyard-design-system.html
│   ├── case-study-shop-by-job.html
│   ├── case-study-guardians-shields.html
│   ├── case-study-pro-central.html
│   ├── case-study-consumer-brand.html
│   ├── css/
│   │   ├── main.css               ← Primary stylesheet — edit this for visual changes
│   │   ├── plugins.css            ← Bundled third-party plugin CSS (do not edit)
│   │   └── loaders/loader.css     ← Page loader animation styles
│   ├── js/
│   │   ├── app.js                 ← All custom JS (animations, nav, dark mode, form validation)
│   │   └── libs.min.js            ← Bundled & minified libraries: GSAP, Lenis, SplitType (do not edit)
│   ├── fonts/
│   │   └── Phosphor/              ← Self-hosted Phosphor icon font (Bold, Duotone, Fill, Regular)
│   ├── img/
│   │   ├── logo/
│   │   │   ├── binay_logo_black.png   ← Logo shown in light mode
│   │   │   └── binay_logo_white.png   ← Logo shown in dark mode
│   │   ├── hero/
│   │   │   ├── binay_yadav_hero_image.png
│   │   │   └── binay-hero.JPG
│   │   ├── icons/                 ← 3D/decorative icons used across pages
│   │   ├── tech/                  ← Tool icons: Figma, Photoshop, After Effects, HTML
│   │   ├── favicon/
│   │   │   └── manifest.webmanifest
│   │   └── works/
│   │       └── preview/           ← Case study & project thumbnail images
│   └── source-files/
│       └── resume/
│           └── Binay_Yadav_resume_Senior_UX_Designer_2026.pdf
├── docs/
│   ├── Site_Full_Content_Binay_Yadav.md   ← Canonical content source (source of truth for all page copy)
│   └── Binay_Yadav_resume_Senior UX Designer_2026.pdf
├── .gitignore
└── README.md
```

---

## Tech Stack

| Layer | Detail |
|---|---|
| Markup | HTML5 — fully static, no templating engine |
| Styles | CSS3 — custom properties (variables), no preprocessor |
| Scripts | Vanilla JS (`app.js`) + bundled libraries (`libs.min.js`) |
| Animations | GSAP, Lenis (smooth scroll), SplitType — bundled in `libs.min.js` |
| Icons | Phosphor Icons — self-hosted font in `site/fonts/Phosphor/` |
| Fonts | Google Fonts — Funnel Display, loaded via `<link>` in each HTML `<head>` |
| Theme | JS-driven dark/light mode — sets `color-scheme` attribute on `:root` |

> **Base template:** Rayo HTML Template v1.0.0 by mix_design (Themeforest) — heavily customised for Binay's portfolio content and branding.

---

## Dark / Light Mode

The theme toggle button (`#color-switcher`) in the header is handled by `app.js`. It reads/writes a `template.theme` key in `localStorage` and sets `color-scheme="light"` or `color-scheme="dark"` directly on `:root`.

CSS variables in `main.css` respond to both `@media (prefers-color-scheme)` (OS default) and `:root[color-scheme]` (JS override — takes precedence).

### Logo switching

Two `<img>` tags are placed in every page header. CSS shows/hides the correct one:

```html
<img class="mxd-logo__img-light" src="img/logo/binay_logo_black.png" alt="Binay Yadav">
<img class="mxd-logo__img-dark"  src="img/logo/binay_logo_white.png" alt="Binay Yadav">
```

The relevant CSS rules in `main.css` (around the `.mxd-logo__img-light / dark` selectors) handle both OS preference and the JS `[color-scheme]` attribute so the logo always matches the active theme instantly when the toggle is clicked.

---

## Running Locally

No build step required. Serve the `site/` folder with any static server:

```bash
# Option 1 — Python (built-in, zero install)
cd site
python3 -m http.server 8080
# Open: http://localhost:8080

# Option 2 — Node npx
cd site
npx serve .

# Option 3 — VS Code
# Install the "Live Server" extension → right-click index.html → Open with Live Server

# Option 4 — Windsurf / Cursor / other IDEs
# Most modern IDEs have a built-in preview server. Point it at the site/ directory.
```

> **Important:** Always serve from the `site/` directory, not the repo root. All asset paths (`img/`, `css/`, `js/`) are relative to `site/`.

---

## Making Content Changes

### Single source of truth

All page copy is documented in:

```
docs/Site_Full_Content_Binay_Yadav.md
```

Always update this file alongside any HTML changes so the two stay in sync.

### Editing existing page copy

1. Open the relevant `.html` file in `site/`
2. Edit the text content inside the appropriate section
3. Test locally
4. Update `docs/Site_Full_Content_Binay_Yadav.md` to match
5. Commit and push

### Adding a new case study

1. Copy the closest existing case study HTML as a starting point (e.g. `case-study-pro-central.html`)
2. Rename it (e.g. `case-study-new-project.html`)
3. Update all content sections: Overview, Problem, Research, Solution, Result, Reflection, Tools & Methods
4. Add a preview thumbnail to `site/img/works/preview/` (PNG, aim for under 500 KB — compress at [squoosh.app](https://squoosh.app))
5. Link the new page from `workfolio.html`
6. Add the case study entry to `docs/Site_Full_Content_Binay_Yadav.md`

### Updating the logo

Replace both files, keeping the same filenames:
- `site/img/logo/binay_logo_black.png` — used in light mode
- `site/img/logo/binay_logo_white.png` — used in dark mode

### Updating the resume

Replace both copies (keep same filenames):
- `site/source-files/resume/Binay_Yadav_resume_Senior_UX_Designer_2026.pdf`
- `docs/Binay_Yadav_resume_Senior UX Designer_2026.pdf`

---

## Git Workflow

```bash
# Clone the repo on a new machine
git clone git@github.com:cosmic1995/portfolio_binayyadav.git
cd portfolio_binayyadav

# Make changes, then commit and push
git add -A
git commit -m "brief description of what changed"
git push origin master

# Pull latest (when working across multiple machines)
git pull origin master
```

**Branch strategy:**
- `master` is the production branch — Netlify deploys from it automatically on every push
- For larger changes, use a feature branch to avoid breaking the live site:

```bash
git checkout -b feature/my-update
# make and test your changes...
git add -A
git commit -m "my update"
git push origin feature/my-update

# Merge back to master when ready
git checkout master
git merge feature/my-update
git push origin master

# Clean up
git branch -d feature/my-update
git push origin --delete feature/my-update
```

---

## Deployment — Netlify

The site deploys automatically from the `master` branch. Every `git push origin master` triggers a redeploy — no manual action needed after initial setup.

### Initial Setup (one-time)

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** → **Deploy with GitHub**
2. Authorise GitHub and select `cosmic1995/portfolio_binayyadav`
3. Set build settings:

   | Setting | Value |
   |---|---|
   | Base directory | `site` |
   | Build command | *(leave blank)* |
   | Publish directory | `site` |

4. Click **Deploy site** — Netlify will publish the site and give you a `*.netlify.app` URL
5. Update the **Live URL** at the top of this README

### Custom Domain

Netlify dashboard → **Site configuration → Domain management → Add custom domain** → follow the DNS instructions provided.

### Environment Variables (if needed later)

Netlify dashboard → **Site configuration → Environment variables** → Add variable. Never hardcode secrets in the codebase.

---

## Database — Neon (PostgreSQL)

The portfolio is currently fully static — no database needed. Neon is set up as the database for when dynamic features are added (e.g. storing contact form submissions, a blog, analytics).

### Setting Up Neon

1. Create a project at [neon.tech](https://neon.tech)
2. Copy the **connection string** from the Neon dashboard (format: `postgresql://user:password@host/dbname?sslmode=require`)
3. In Netlify: **Site configuration → Environment variables** → add:
   ```
   DATABASE_URL = postgresql://user:password@host/dbname?sslmode=require
   ```
4. Never commit this value to git — it lives only in Netlify's env var settings

### Adding Dynamic Features (Netlify Functions)

Netlify Functions are serverless Node.js functions that run alongside the static site. To add one:

1. Create directory `netlify/functions/` in the repo root
2. Create a function file, e.g. `netlify/functions/contact.js`:

```js
const { neon } = require('@neondatabase/serverless');

exports.handler = async (event) => {
  const sql = neon(process.env.DATABASE_URL);
  const { name, email, message } = JSON.parse(event.body);
  await sql`INSERT INTO submissions (name, email, message) VALUES (${name}, ${email}, ${message})`;
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
```

3. In `site/contact.html`, POST form data to `/.netlify/functions/contact`
4. In Netlify build settings, set **Functions directory** to `netlify/functions`
5. Add `DATABASE_URL` to Netlify environment variables (see above)

---

## Key Files Reference

| File | What to edit / why |
|---|---|
| `site/css/main.css` | All visual styles — colours, spacing, typography, layout |
| `site/js/app.js` | All custom behaviour — animations, nav, dark mode toggle, form validation |
| `site/js/libs.min.js` | **Do not edit** — third-party libraries (GSAP, Lenis, SplitType) |
| `site/css/plugins.css` | **Do not edit** — third-party plugin CSS |
| `docs/Site_Full_Content_Binay_Yadav.md` | Canonical copy — keep in sync with HTML at all times |

---

## Maintenance Notes

- **No build step** — edit HTML/CSS/JS files directly. No `npm install` or compilation needed.
- **All paths are relative** — if you move or rename files, update the corresponding `src` / `href` attributes in the HTML.
- **Google Fonts** — Funnel Display loads from Google CDN. If the site needs to work fully offline, download the font files and self-host them in `site/fonts/`.
- **Favicon** — only `manifest.webmanifest` is currently in `site/img/favicon/`. To add a full favicon set, place `favicon.ico`, `apple-touch-icon.png`, and other sizes there, then reference them in each HTML `<head>`.
- **Image optimisation** — all work preview thumbnails are PNG. Keep new images under 500 KB. Use [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com) before adding new images to the repo.
- **Adding pages** — copy the closest existing HTML page, keep the `<head>`, nav, header, and footer structure intact, and update only the content sections. The nav links in every page's slide-out menu all need to be updated manually if you add/remove pages.
- **IDE recommendations** — VS Code or Windsurf work well. Install the **Live Server** extension for instant preview on save. Prettier with the HTML formatter is useful for keeping markup clean.
