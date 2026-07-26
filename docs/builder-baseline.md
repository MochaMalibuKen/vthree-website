# Builder Baseline — C-00 and C-01

## Safety baseline

- Implementation branch: `builder/c00-c01-application-shell`
- Rollback commit: `09928ec`
- Framework preserved: React 19, Vite 7, React Router, i18next
- Baseline verification: `npm run lint` and `npm run build` pass
- Domain behavior preserved through `public/CNAME`
- GitHub Pages fallback preserved by copying `dist/index.html` to `dist/404.html`

## Route baseline

| Route | Current source | Publication posture |
| --- | --- | --- |
| `/` | Existing homepage composition | Preserved pending C-03 |
| `/services` | Existing Services, Industries, and Technical Projects | Routed |
| `/method` | Existing Philosophy, comparison, and Method | Routed |
| `/work` | Existing approved public case material | Routed |
| `/work/:slug` | Structured case data extracted from existing public copy | Routed |
| `/intelligence` | Existing Insights and Labs structures | Routed; no articles published |
| `/intelligence/:slug` | Empty controlled content model | Returns controlled 404 until approval |
| `/about` | Existing About and Founder content | Routed |
| `/pricing` | Existing Founder-approved pricing content | Routed |
| `/contact`, `/assessment` | Existing Formspree assessment form | No-index until privacy approval |
| `/privacy` | Visible dependency placeholder | No-index; launch blocker |
| `*` | Controlled not-found page | No-index |

## Decisions that prevent rework

- Existing customer-facing copy was reused; no case evidence or Intelligence articles were invented.
- Case data now has stable slugs and one content source for index and detail routes.
- Case architecture and all six detail routes are ready, but case claims, outcomes, permissions, and publication remain dependent on Founder and Delivery approval; detail pages are no-index and excluded from the public sitemap until approved.
- Intelligence content has an intentionally empty data model until approved articles exist.
- Privacy and assessment routes remain no-index until approved disclosure and routing decisions are supplied.
- BrowserRouter is retained because the existing GitHub Pages `404.html` fallback preserves direct-route handling on the custom domain.
- Components remain in their current folder during C-01; deeper folder moves are deferred until active page work justifies them.

## Known dependencies

- Approved privacy disclosure
- Assessment routing and response commitment
- Approved Intelligence articles
- Confirmed case permissions and evidence
- Final founder biography and portrait
- Approved social links and preview assets
- Scheduling rules and Microsoft Bookings configuration

These dependencies must not be resolved through implementation assumptions.

## C-02 shared component refinement

- Refined the existing navigation, footer, page hero, routed-page heading levels, contact form, case links, shared controls, and responsive CSS without adding a component library or changing the route architecture.
- Added a localized skip link, clearer focus and disabled states, larger touch targets, an Escape-close mobile menu, semantic language controls, contextual external-link names, and improved form-status announcements.
- Constrained the responsive menu to the available viewport, normalized shared control sizing and spacing, improved narrow-screen CTA behavior, and preserved reduced-motion preferences.
- Kept existing components and CSS architecture in place; no speculative layout framework or dependency was added.
- Preserved all no-index and sitemap publication controls. Case approval, privacy language, Intelligence publication, Bookings configuration, and page-specific production work remain dependencies.
- Deferred routed-page copy and page-specific layout changes to their authorized production packages so C-02 does not rewrite content or perform C-03 homepage work.

## C-03A homepage production scaffold

- Decomposed the homepage orchestration into eight production zones under `src/components/homepage/`: `HeroSection`, `TrustSection`, `ProblemSection`, `MethodSection`, `ServicesSection`, `ProofSection`, `FounderSection`, and `AssessmentCTASection`.
- Kept the existing section components as the markup owners because they are also reused by routed pages. The homepage production-zone components compose those proven sections without adding wrapper DOM, routing, business logic, props, hooks, or speculative abstractions.
- Reduced `HomePage.jsx` to metadata plus a readable production-zone sequence while preserving the exact section order, content, imagery, translations, links, anchors, analytics, semantics, and behavior.
- Created the eight homepage scaffold files and modified only `HomePage.jsx` and this baseline document. No CSS adjustment or dependency was required.
- Intentionally preserved the visible output. C-03B remains responsible for any authorized narrative, asset, visual, SEO, analytics, performance, or conversion production work.
- Existing dependencies remain approved production content and assets, case and Intelligence publication approval, privacy language, assessment routing, and Microsoft Bookings configuration.
