# 佛光山三寶寺 · Fo Guang Shan Three Treasures Temple

Website redesign (first version) for the Three Treasures Temple in San Francisco.

## Run locally

Requires [Node.js](https://nodejs.org/) (v18+).

```bash
npm install      # one time — installs the dev server
npm run dev      # starts a local server and opens the site in your browser
```

This serves the site at **http://localhost:8731/** with live-reload — save a file and
the browser refreshes automatically. Press `Ctrl+C` to stop.

> The page is served **as-is** (no bundling). The HTML uses `{{ … }}` placeholders that
> are resolved in the browser by `support.js`, so it must be served verbatim — a static
> dev server is used instead of a transforming bundler like Vite.

## Project structure

| Path | What it is |
| --- | --- |
| `index.html` | The whole site — markup, inline styles, copy (中文 + EN), and the component logic in the trailing `<script type="text/x-dc">`. |
| `support.js` | The "DC" runtime that interprets the `{{ … }}` templating, `sc-for` loops, `<helmet>`, and event handlers. Do not edit by hand. |
| `assets/` | Images (temple facade, Buddha, calligraphy mask, logo). |

## Editing notes

- **Text / translations** live in the `TEXT` getter near the bottom of `index.html`
  (`zh` and `en` blocks).
- **Nav dropdowns** are the `sub_*` arrays in `TEXT`, rendered by the `.nav-item` /
  `.nav-card` markup in the `<nav>`. Dropdown styling is the `.nav-drop` CSS in `<helmet>`.
- **Hero calligraphy** turns gold on hover (`zenHover` state) and tints with scroll.
