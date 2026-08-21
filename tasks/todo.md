# Iron Pot Plumbing Homepage Demo

## Plan

- [x] 1. Initialize the local Next.js site with the approved static-first stack.
  - Verify: the App Router starter installs successfully and the local route compiles.
- [x] 2. Add the confirmed business data and selected real company assets.
  - Verify: phone, email, Snug location, Huonville region, all six services, review themes, and image references exist in one config/data source.
- [x] 3. Build the first meaningful preview: transparent header, branded hero, real on-site photo, and click-to-call CTA.
  - Verify: the homepage is recognisably Iron Pot Plumbing, the local route returns successfully, and no forbidden claims or rating badges appear in the hero.
- [x] 4. Complete the responsive homepage sections: Services, Why Us, Recent Work, Service Area, Contact CTA, and Footer.
  - Verify: content matches the full instruction, the six services are exact, real imagery is used selectively, and reviews are integrated without a duplicate reputation section.
- [x] 5. Validate the finished demo.
  - Verify: production build and lint/relevant checks pass; CTA links, metadata, accessibility baseline, image loading, and mobile overflow safeguards are checked.

## Implementation notes

- Use `082101-07.jpg` as the primary human/work image; use `03`, `04`, and `06` as the real-work gallery.
- Use the original logo unchanged. Exclude `082101-08.jpg` because it is visibly AI-generated and watermarked; exclude `082101-02.jpg` as unrelated. Use `082101-05.jpg` only as supporting imagery for confirmed hot-water-system work if it strengthens the layout.
- Keep direct customer quotations out unless an exact public source can be verified. The confirmed review themes are sufficient for the integrated Why Us section.
- Deployment was later explicitly requested; use the direct GitHub-to-Cloudflare Workers Builds workflow rather than any built-in site-hosting workflow.

## Review

- Completed the full branded homepage and kept all business copy in `app/business-data.ts`.
- Used the original lighthouse logo, the real on-site photograph for the hero, and three real project photographs in the work section. Excluded the watermarked AI kangaroo and unrelated maintenance-tip image.
- Integrated the confirmed review themes and two short verified customer quotations into one Why Us trust section.
- Added responsive desktop/mobile navigation, a persistent mobile click-to-call bar, direct phone/email links, basic metadata, a branded social-preview image, focus states, semantic headings, and reduced-motion support.
- Validation passed: production build, lint with zero warnings, two rendered-HTML tests, HTTP 200 local response, browser console free of errors, desktop visual check at 1440 px, and mobile visual/overflow/navigation checks at 390 px.
- Replaced the framework image proxy with direct responsive image loading after a vinext development-runtime import failure; the repaired page was rebuilt and rechecked with no runtime overlay or browser errors.
- Local preview: `http://localhost:3000/`.
- GitHub repository: `https://github.com/codyliu881-blip/iron-pot-plumbing-homepage-demo`.
- Cloudflare Workers Builds is connected to `main`; the production URL is `https://iron-pot-plumbing-homepage-demo.codyliu881.workers.dev`.
