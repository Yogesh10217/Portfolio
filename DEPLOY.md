# GitHub Pages Deployment Guide

This portfolio is configured for static export with Next.js and GitHub Pages.

## 1. Install dependencies

```bash
npm install
```

## 2. Build the site

```bash
npm run build
```

This generates a static export in the `out` directory.

## 3. Deploy to GitHub Pages

```bash
npm run deploy
```

The `deploy` script uses `gh-pages` to publish the contents of `out/` to the `gh-pages` branch.

## 4. GitHub repository setup

1. Create a GitHub repository if needed.
2. In the repository settings, enable GitHub Pages.
3. Choose the `gh-pages` branch as the source.
4. Your site will be available at:

```text
https://<yogesh10217>.github.io/Portfolio/
```

## Notes

- The app uses a GitHub Pages base path for the resume PDF and other deploy-time asset paths.
- The build output is static and compatible with GitHub Pages.
