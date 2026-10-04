# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Requirements

Dependencies needed to work on this project from a new PC:

- **Node.js** `>= 20.0` (tested with v20.20.0)
- **npm** `>= 10` (ships with Node.js; the project uses `package-lock.json`)
- **Git** with access to the repository `git@github.com:that2/idi-docs.git`
- **SSH key** added to the GitHub account with write access to `that2/idi-docs` (required for `deploy`)
- **Browser** (Chrome, Firefox or Edge) to preview the site locally

Runtime dependencies (installed automatically from `package.json`):

| Package | Version |
|---|---|
| `@docusaurus/core` | 3.10.1 |
| `@docusaurus/faster` | 3.10.1 |
| `@docusaurus/preset-classic` | 3.10.1 |
| `@mdx-js/react` | ^3.0.0 |
| `clsx` | ^2.0.0 |
| `prism-react-renderer` | ^2.3.0 |
| `react` | ^19.0.0 |
| `react-dom` | ^19.0.0 |

Dev dependencies: `@docusaurus/module-type-aliases` 3.10.1, `@docusaurus/types` 3.10.1.

Optional, only for the PDF export scripts (`export-pdf.mjs`, `export-pdf-custom.mjs`), which are not yet part of `package.json`:

- `pdf-lib`
- `puppeteer`
- `qrcode`

## Installation

Clone the repository and install the locked dependencies:

```bash
git clone git@github.com:that2/idi-docs.git
cd idi-docs
npm ci
```

## Local Development

```bash
npm start
```

This command starts a local development server (default: `http://localhost:3000`). Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. To preview the production build locally:

```bash
npm run serve
```

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch. The live site is https://that2.github.io/idi-docs/.
