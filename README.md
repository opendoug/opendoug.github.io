# WaltersWorks

Marketing site for **WaltersWorks** — strategic leadership and technology enablement for modern businesses.

**Services:** ExecWorks (fractional C-Suite leadership) • DataWorks (data engineering & analytics) • WebWorks (web development)

## Stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies to install. Hosted on GitHub Pages.

- [css/style.css](css/style.css) — design system centered on brand blue `#1489cd` (`hsl(202 82% 44%)`) with complementary orange, teal, and gold accents
- [js/main.js](js/main.js) — shared nav/footer templates (injected into `<ww-nav>`/`<ww-footer>` placeholders), mobile menu, smooth scrolling, active-link highlighting
- [assets/](assets/) — logos and comic-style hero art
- Icons via [Lucide](https://lucide.dev/) (CDN), font via Google Fonts (Outfit)

## Pages

| Page | Purpose |
|---|---|
| [index.html](index.html) | Home — services overview, showcase, contact |
| [execworks.html](execworks.html) | ExecWorks — fractional C-Suite leadership |
| [dataworks.html](dataworks.html) | DataWorks — data engineering & analytics |
| [webworks.html](webworks.html) | WebWorks — web development |
| [triage.html](triage.html) | Triage — automation case study / showcase |
| [404.html](404.html) | Not-found page |

## Local development

No build step — open any page directly in a browser, or serve the folder with a static server:

```sh
# any static server works, e.g.
python -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000.
