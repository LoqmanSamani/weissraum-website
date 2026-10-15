# Website – weissraum-gebaeudeservice.de

Static site: plain HTML/CSS/JS, no build step. Fonts and images are self-hosted (no
Google Fonts, no cookies, no tracking).

Preview locally: `python3 -m http.server 8765 --bind 127.0.0.1` in this folder → http://127.0.0.1:8765

| File               | Content                                                        |
|--------------------|----------------------------------------------------------------|
| `index.html`       | one-page homepage                                              |
| `impressum.html`   | Impressum (§ 5 DDG)                                            |
| `datenschutz.html` | privacy policy (written for GitHub Pages hosting + Google Workspace mail) |
| `404.html`         | not-found page                                                 |
| `assets/`          | CSS, JS (contact form → prepared email), fonts, images         |
| `CNAME`            | custom domain for GitHub Pages                                 |

The contact form does not send anything itself: it opens the visitor's email program with
a prepared message to info@weissraum-gebaeudeservice.de.

## To update later

- [ ] "Unser Standard": show the hidden cards (Handwerkskammer, Betriebshaftpflicht, BG BAU)
      in `index.html` once they exist (search for `TODO einblenden`).
- [ ] Replace the Unsplash photos with own photos of real jobs (keep credits in footer + Impressum if not).
- [ ] Customer quotes once there are clients.
- [ ] Datenschutz: update section 3 if the hosting changes.
- [ ] Impressum: check the USt-IdNr line (or replace with the Kleinunternehmer wording).
