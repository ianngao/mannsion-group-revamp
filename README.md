# Mannsion Group – Website Revamp

A welcoming, modern one-page site for Mannsion Group with a **gold and white** color palette. The site explains how Mannsion Group connects investors with private investment opportunities in high-growth, pre-IPO companies.

## What’s included

- **Hero** – Clear value proposition and primary CTAs
- **What We Do** – Three pillars: Source opportunities, Connect investors, Structure investments (with imagery)
- **Why It Matters** – Benefits and access for qualified investors
- **How It Works** – Simple 3-step flow (company ↔ Mannsion Group ↔ investors)
- **Who We Serve** – Family offices, UHNW, institutions, wealth managers
- **Team** – Leadership and full team (existing bios preserved)
- **Contact** – Form plus email, location, LinkedIn

## Design

- **Colors:** Gold (`#b8860b`), white, cream (`#fdfbf7`), warm grays, charcoal text
- **Fonts:** Cormorant Garamond (headings), Outfit (body) via Google Fonts
- **Imagery:** Unsplash photos for business, meetings, growth, and partnerships (replace with your own as needed)

## How to run locally

```bash
cd mannsion-group-revamp
python3 -m http.server 8765
```

Then open **http://localhost:8765** in your browser.

## Customization

1. **Logo** – Replace the text logo in `.logo` with an `<img>` pointing to your logo (gold/white asset).
2. **Images** – Swap Unsplash URLs in `index.html` for your own photos (team, office, events).
3. **Contact form** – Point the form `action` to your backend or form service (e.g. Formspree, Netlify Forms).
4. **Disclaimer** – Add a real Disclaimer page and link it from the header and footer.

## Files

- `index.html` – Structure and content
- `styles.css` – Layout and gold/white theme
- `script.js` – Mobile menu and form handling

No build step required; use as static HTML or drop into any host (Netlify, Vercel, S3, etc.).
