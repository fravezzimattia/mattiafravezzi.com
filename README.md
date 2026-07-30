# mattiafravezzi.com

Personal site of [Mattia Fravezzi](https://mattiafravezzi.com) — co-founder & CTO of [MountainMaps](https://mountainmaps.app), based in Trento, Italy.

A single-page static site, hand-built with plain HTML, CSS and a few lines of vanilla JavaScript. No frameworks, no build step, no trackers — the whole thing weighs under 100 KB.

## Stack

- **HTML** — one page, semantic markup ([index.html](index.html))
- **CSS** — a single stylesheet, dark "night & dawn" theme ([css/site.css](css/site.css))
- **JS** — scroll reveal and dynamic year, as progressive enhancement ([js/site.js](js/site.js))
- **Hosting** — plain Apache shared hosting; [.htaccess](.htaccess) handles blocked paths and branded error pages (`400/403/404/500.shtml`)

## Develop locally

No tooling needed:

```sh
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy

Upload to the web root of the hosting:

```
index.html  css/  js/  images/
favicon.ico  robots.txt  .htaccess
400.shtml  403.shtml  404.shtml  500.shtml
.well-known/
```

Mind the dotfiles (`.htaccess`, `.well-known/`) — most FTP clients hide them by default.

## License

Code is free to reuse. Content, copy and images © Mattia Fravezzi.
