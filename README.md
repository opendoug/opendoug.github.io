# waltersworks.com

Source for the WaltersWorks marketing site, published via GitHub Pages.

## Stack

Plain HTML and CSS. No JavaScript, no framework, no build step, no npm install.

- `index.html`, `execworks.html`, `dataworks.html`, `webworks.html`, `triage.html`, `404.html` — each is a complete, self-contained page. Header and footer are duplicated into every file on purpose, not templated.
- `css/style.css` — the whole design system, one stylesheet, styled by semantic class per component (`.hero`, `.card`, `.callout`, ...) rather than utility classes.

## Local preview

Any static file server works, e.g.:

```sh
python -m http.server 4173
```

No JavaScript means the pages also work fine opened directly via `file://`.

## Deploy

Pushing to `master` triggers `.github/workflows/workflow.yaml`, which publishes the repo root straight to GitHub Pages. No build artifacts to worry about.
