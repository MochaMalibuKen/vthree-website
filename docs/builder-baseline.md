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
