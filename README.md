# Luxe Dentistry — website

Static site for **Luxe Dentistry by Dr. Jose Manuel Jimenez**, Los Algodones, Baja California, Mexico.
Built to the ProfResults local-SEO on-page spec (long titles, H1 = category + city, NAP + map, 30+ interlinked pages, schema).

## Structure
- `*.html` — the generated pages (open the site by serving this folder, see below)
- `assets/css/styles.css` — all styles
- `assets/js/main.js` — mobile menu + small helpers
- `assets/img/` — logo, clinic photos, real patient before/after (`ba-*.webp`), credential certificates (`cred-*.jpg`)
- `sitemap.xml`, `robots.txt`
- `data.js` — all site content + business NAP (edit here)
- `build.js` — the generator

## Rebuild after editing content
Requires Node.js. From this folder:
```
node build.js
```
This regenerates every `.html` file, the sitemap and robots.

## Preview locally (must be served, not opened as a file)
```
python -m http.server 8000
```
then open http://localhost:8000

## Deploy
Upload the whole folder to any static host (Netlify, Cloudflare Pages, Vercel, etc.). No build step is required to deploy — the `.html` files are ready.

## Before launch — confirm these
1. **NAP**: currently Alamo Street, corner with C Street, Los Algodones, B.C. 21970 · +1 (928) 304-7799 · dentistryluxe@gmail.com. Confirm exactly matches the Google Business Profile (edit the `business` block in `data.js`).
2. **Booking form email**: posts to `https://formsubmit.co/dentistryluxe@gmail.com`. On the FIRST submission FormSubmit emails a one-time activation link the clinic must click. Update `_next` in `build.js` (bookingForm) to the final domain.
3. **Domain**: set `business.domain` in `data.js` (used in canonicals, sitemap and the form redirect).
4. **Video reviews**: patient names are placeholders ("Verified Patient"); add real names + more reel URLs in `data.js` (`videoReviews`).
