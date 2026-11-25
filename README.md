# Routes From Chennai

An editorial travel website covering Chennai's Marina Beach, Madurai's Meenakshi Amman Temple and
Thanjavur's Brihadeeswarar Temple, alongside a world destinations directory organised by region.
Built for CS2205 Web Programming 1 (University of the People).

## Stack

Plain HTML5, CSS3 and vanilla JavaScript. No build step, no framework, no dependencies.

## Local development

No build tooling is required. Serve the folder with any static file server, for example:

```
python -m http.server 8099
```

Then open `http://localhost:8099/index.html`.

## Project structure

```
index.html              Homepage
travel-stories.html     Travel Stories page
css/tokens.css          Shared design tokens
css/homepage.css        Homepage styles
css/travel-stories.css  Travel Stories styles
js/main.js              Scroll-reveal + sticky header (vanilla JS, respects prefers-reduced-motion)
images/                 Local image assets
```

## A note on images

This repository currently ships three **SVG placeholder illustrations** for the three Indian
destinations, not photographs. The real photographs used during development have unresolved
photographer/source/licence information and are deliberately **not included here** — see the
development project's `output/Unresolved_Image_Assets_Report.md` for what was checked. Replace the
placeholders with photographs you have the rights to use (your own photography, or an openly
licensed source such as Unsplash, Pexels, or Wikimedia Commons — each states its licence on the
image page) before using this site publicly.

## Deployment (Cloudflare Pages)

See `Cloudflare_Deployment_Guide.md` for full instructions. Summary: connect this GitHub repository
to Cloudflare Pages, production branch `main`, framework preset "None", no build command, output
directory the repository root.
