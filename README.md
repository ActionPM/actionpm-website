# ActionPM website

Two public pages, served as plain HTML with shared CSS and optional JavaScript:

- `/` — platform story and introduction to consulting (`index.html`).
- `/consulting/` — Ben Scott’s services, experience and engagement options (`consulting/index.html`).

## Local preview

From this checkout, run `python3 -m http.server 8765 --bind 127.0.0.1` and open
`http://127.0.0.1:8765/` or `http://127.0.0.1:8765/consulting/`. Choose another
available port if needed. Stop your server with Ctrl+C. There is no build step,
package installation or production dependency. Use a server so root-relative
links work; opening the HTML through `file://` is not supported.

## Editing

Edit copy directly in the two HTML files. Keep their header/footer navigation,
email destinations and brand markup consistent. Shared typography, colours and
responsive layouts are in `assets/styles.css`. The small `assets/site.js` adds a
reading-progress line and changes the decorative tree readout as the example
steps enter view. All text, example answers and navigation exist in HTML and
work without JavaScript. Reduced motion disables these enhancements.

The Bizerlin wordmark font and Latin IBM Plex Sans/Mono fonts are extracted
unchanged from the previous homepage bundle. Leaf illustrations preserve its
maple-leaf shapes and tree metaphor; they are local SVG assets, not stock images.
The tree’s numbers are illustrative answers, not measured platform results.
No approved Ben Scott headshot was supplied; the biography intentionally uses
a complete text layout.

Keep page titles, descriptions, canonical URLs, social metadata, JSON-LD and
`sitemap.xml` consistent when editing. Experience figures on the consulting page
refer to Ben’s previous roles. The platform remains described as in development.
Contact links open an email client; there is no form or simulated submission.

## Verification and hosting

Before proposing changes, check both routes directly and after refresh, follow
navigation and section links, and inspect the email destinations. Check desktop
and mobile widths, keyboard focus, JavaScript disabled and reduced motion. Check
for missing assets, console errors and horizontal overflow. Parse JSON-LD and
confirm one H1 and the correct canonical URL per page. Final review captures are
linked below; they are review assets, not public pages.

| Page | Desktop (1440 px) | Mobile (390 px) |
| --- | --- | --- |
| Platform | [Screenshot](.github/screenshots/home-desktop.png) | [Screenshot](.github/screenshots/home-mobile.png) |
| Consulting | [Screenshot](.github/screenshots/consulting-desktop.png) | [Screenshot](.github/screenshots/consulting-mobile.png) |

GitHub Pages currently publishes the root of `main` through its existing Pages
build. `CNAME` remains `actionpm.ca`; `robots.txt` retains crawler access. This
refresh does not change hosting or deployment settings. A feature branch and
draft PR do not publish the refresh; release requires separate review and merge.
