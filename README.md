# TMRx follow-up questionnaire prototype

A frontend foundation using Vite, vanilla JavaScript (ES modules), and Tailwind CSS v4.
The landing page is a neutral development placeholder. The Figma design and questionnaire
flow are intentionally deferred. There is no backend, database, or data persistence.

## Windows setup

1. Install Node.js 24 LTS (includes npm) and Git for Windows.
2. Open PowerShell or Windows Terminal and run:

```powershell
git clone https://github.com/jcnystealth/TMRx-followup-questionnaire-flow.git
cd TMRx-followup-questionnaire-flow
npm ci
npm run dev
```

Open the local URL printed by Vite. Press `Ctrl+C` to stop the server. No environment
variables or external services are required. Node.js 22.12 or newer is supported;
Node.js 24 is recommended and was used for validation.

If a restricted environment cannot write to npm's default cache, use
`npm ci --cache .npm-cache` and add that local cache directory to your local Git
excludes. Ordinary Windows installations should not need this override.

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install exact dependencies from the committed lockfile |
| `npm run dev` | Start Vite with hot reload |
| `npm run build` | Build production assets into `dist/` |
| `npm run preview` | Serve the production build locally after building |

For cloud development, use `npm run dev -- --host 0.0.0.0` when needed by your
platform. `preview` is a local verification server, not a production deployment server.

## Structure

```text
index.html                 HTML entry point
vite.config.js             Vite and Tailwind integration
src/
  main.js                  Application composition and stylesheet import
  components/              Reusable DOM presentation components
  pages/                   Page composition and rendering
  logic/                   Framework-independent application rules and data
  services/                Future API clients and integration guidance
  styles/                  Tailwind import and shared styles
public/
  assets/                  Static files served without filename hashing
```

Components receive data and render DOM; pages compose components. Keep business rules
in `logic/` and future network adapters in `services/`. Dynamic text uses `textContent`;
only fixed markup belongs in `innerHTML`. Never place credentials in client code or
`VITE_` variables, which are visible in browser bundles.

Tailwind is compiled through its Vite plugin; no CDN or separate CSS build is needed.
The layout uses a single column on mobile and three columns from the medium breakpoint,
with responsive spacing, semantic landmarks, visible focus styles, and a skip link.
Static assets go in `public/assets/`; imported assets can live in `src/assets/` when needed.

## Validation

Run `npm run build`, then `npm run preview`. Check that the landing page renders,
that mobile has no horizontal overflow, and that keyboard navigation reaches the
skip link and main content. There is no automated application test suite yet;
add behavior tests when the questionnaire logic is implemented.

Commit the lockfile with dependency changes. Keep generated `dist/`, `node_modules/`,
and local environment files out of Git.
