# TODO

## SEO And Performance

- Keep public marketing pages static where possible with Next.js SSG.
- Use SSR only for pages that need request-time personalization.
- Add per-page metadata for services, projects, and project detail pages.
- Add Open Graph and Twitter Card images for every important landing page.
- Use `next/image` for all raster images and keep lazy loading enabled for non-critical media.
- Generate dynamic `sitemap.xml` from published portfolio projects.
- Keep `robots.txt` production-safe and block private admin/API surfaces from indexing.
- Add real favicon set.
- Run Lighthouse checks before deployment.

## Mobile-First UI

- Keep layouts mobile-first and progressively enhance for tablet/desktop.
- Reduce heavy background animation on low-power and `prefers-reduced-motion` devices.
- Use panels with rounded top corners across content sections.
- Add smooth text-outline hover interactions for navigation and buttons.
- Replace default focus rings with accessible branded `focus-visible` states.
- Add touch/swipe support for project carousels.
- Test hero, forms, and project galleries on narrow mobile widths.

## Data And Admin

- Create protected admin UI under `/admin`.
- Add login screen with HttpOnly Secure session cookie.
- Add portfolio CRUD: create, edit, publish, archive, delete.
- Add gallery management with image ordering and alt text.
- Add audit trail for content changes.
- Add server-side validation and authorization guards for all admin endpoints.
- Add database seed with initial admin user and demo projects.

## Security

- Add CSRF token endpoint and enforce CSRF on mutating requests.
- Add brute-force protection for auth endpoints.
- Hash passwords with Argon2 before enabling admin login.
- Add structured request logging with sensitive data redaction.
- Add security headers at reverse proxy level.
