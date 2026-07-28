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
| `/services` | Five-capability Services production model | Routed |
| `/method` | Existing Philosophy, comparison, and Method | Routed |
| `/work` | Controlled public-case registry and intentional empty state | No-index while zero cases are published and permissioned |
| `/work/:slug` | Permission-filtered public case lookup | Unpublished routes return a generic no-index unavailable state |
| `/intelligence` | Existing Insights and Labs structures | Routed; no articles published |
| `/intelligence/:slug` | Empty controlled content model | Returns controlled 404 until approval |
| `/about` | Existing About and Founder content | Routed |
| `/pricing` | Existing Founder-approved pricing content | Routed |
| `/contact`, `/assessment` | Existing Formspree assessment form | No-index until privacy approval |
| `/privacy` | Visible dependency placeholder | No-index; launch blocker |
| `*` | Controlled not-found page | No-index |

## Decisions that prevent rework

- Existing customer-facing copy was reused; no case evidence or Intelligence articles were invented.
- Public case data has one permission-aware content source for index and detail routes; unapproved case narratives are not delivered in the browser bundle.
- Case architecture is ready, but claims, outcomes, permissions, and publication remain dependent on Founder and Delivery approval. Unpublished detail routes return a generic unavailable state and remain excluded from the public sitemap.
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

## C-03B homepage production implementation

- Replaced the eight-zone scaffold with the approved customer-problem-first sequence: Hero, Problem Recognition, Stakes, VThree Method, Capabilities, Proof, Audience Fit, Pricing Guidance, Intelligence, Founder Authority, and Final Assessment CTA.
- Revised `HeroSection`, `ProblemSection`, `MethodSection`, `ServicesSection`, `ProofSection`, `FounderSection`, and `AssessmentCTASection`; added `StakesSection`, `AudienceFitSection`, `PricingGuidanceSection`, and `IntelligenceSection`; retired the C-03A-only `TrustSection`.
- Added the approved English homepage narrative under the `homepage` localization namespace. Spanish homepage copy remains an approval dependency and intentionally falls back to English through the existing i18next configuration rather than using an autonomous translation.
- Added homepage-scoped responsive styles using the existing design tokens and CSS architecture. The production sequence uses a text-first, code-native system diagram and restrained ruby, cyan, emerald, and amber signals without adding a dependency or external media.
- Removed the old homepage explainer-video composition from the homepage sequence. The revised homepage contains no fixed-width video placeholder, and the 768-pixel layout is covered by the homepage grid breakpoints to prevent the previously identified overflow condition.
- Preserved semantic section headings, ordered method stages, list semantics, keyboard-visible links and controls, reduced-motion behavior, and descriptive labels for controlled visual placeholders. Decorative system graphics remain hidden from assistive technology because the same meaning is present in the page copy.
- Preserved CTA routing to `/contact`, `/method`, `/services`, `/work`, `/pricing`, `/intelligence`, and `/about`, along with the existing homepage assessment analytics events.
- Kept proof publication controlled: homepage proof cards provide slots for project name, context, problem, key decision, implementation, evidence, image, and CTA status, but display explicit approval placeholders instead of active case links or unapproved claims. Unpublished Intelligence categories remain hidden behind a controlled empty state, and no client, metric, pricing, response-time, privacy, or outcome claim was introduced.
- Added no raster assets. The founder area uses a controlled portrait placeholder; an approved founder portrait remains a production dependency.
- Existing publication controls remain unchanged: all case-detail pages and `/contact` and `/assessment` remain `noindex, nofollow`; case-detail URLs remain excluded from `public/sitemap.xml`.
- Remaining dependencies are approved Spanish homepage copy, approved case evidence and permissions, approved Intelligence articles, final founder portrait and identity review, approved privacy language, assessment routing and response commitments, and Microsoft Bookings configuration.

## C-04B assessment conversion path

- Established `/contact` as the canonical Sprint 001 assessment route and converted `/assessment` into a replace-navigation alias to `/contact`.
- Replaced the active React Formspree form with a controlled assessment-status gate. The page collects and transmits no personal information while privacy language, consent language, Formspree ownership and destination routing, submission handling, response expectations, and final success and error messages remain unapproved.
- Added the Founder-approved assessment expectations: submission will not guarantee project acceptance, an immediate proposal, immediate scheduling, a response within an unapproved timeframe, or a paid engagement.
- Removed the legacy Spanish contact namespace so the controlled English assessment status falls back intact rather than displaying the superseded “Strategic Review” terminology before an approved Spanish assessment translation exists.
- Converted legacy `/intake.html` and `/thanks.html` into no-index redirects to `/contact`, removed their obsolete intake submission script, and eliminated the alternate public Formspree transmission path and unapproved 24-hour proposal promise.
- Updated pricing conversion links to route directly to `/contact` using “Start an Assessment” terminology. Microsoft Bookings remains visibly inactive and does not offer appointment selection.
- Added canonical `/contact` assessment CTAs to Services, Method, and About, and standardized assessment-entry analytics across navigation, homepage, pricing, and those routed pages as `assessment_start` with a source value.
- Reserved `assessment_submit` and `assessment_success` for the approved form activation package; neither event fires while submissions are disabled.
- Preserved no-index controls for `/contact`, `/privacy`, and the redirected assessment path. No scheduling, external form connection, legal privacy language, success promise, response window, or paid-engagement implication was introduced.
- Remaining activation dependencies are approved privacy and consent language, confirmed Formspree account ownership and destination routing, assigned submission-handling responsibilities, approved response expectations, and approved success and error messages.

## C-08 Work and proof readiness

- Replaced the browser-delivered legacy case narratives with an empty public registry because no existing case contains documented publication approval and client permission.
- Added explicit `draft`, `internal-review`, `approved`, `published`, and `archived` statuses. A record becomes publicly eligible only when its status is `published` and `permissionToPublish` is `true`; `approved` alone is not public.
- Added field-level controls for client names, logos, images, narrative content, outcomes, metrics, testimonials and attribution, completion dates, and external links. Public components consume only the permission-filtered projection.
- Established a source-level rule that draft narratives and private evidence must remain outside the client-delivered registry. This prevents unpublished metadata from being discoverable in the compiled page source.
- Removed the unused alternate project collection and its directly addressable public portfolio images; the legacy `Projects` component now delegates to the controlled Work renderer.
- Replaced `/work` case cards and links with an intentional proof-standard empty state and one `Start an Assessment` CTA to `/contact`. The navigation and approved homepage proof placeholder continue to link to this complete controlled experience.
- Changed all unpublished case-detail requests to a generic unavailable state with `noindex, nofollow` metadata and a canonical URL of `/work`; no hidden title, client, claim, outcome, or external URL is rendered.
- Removed `/work` from `public/sitemap.xml` for the zero-public-case condition. Case-detail URLs remain excluded.
- Standardized public Work analytics as `work_view`, `work_case_open`, `work_external_link`, and `assessment_start`; suppressed case-open and external-link events cannot fire while the public registry is empty.
- Spanish Work copy remains an approval dependency and intentionally falls back to the controlled English content.
- The previously visible selected technical-project claim on `/services` is superseded by C-05 suppression requirements.

## C-05 Services page production

- Replaced the legacy six-group Services model with the five approved capability groups in order: Strategy & Intelligence, Brand & Experience, Websites & Digital Platforms, Content & Campaigns, and Systems & Automation.
- Reworked `/services` around the approved intelligence-led digital growth partner positioning: what VTHREE helps organizations accomplish, how the five capabilities work together, the five capability groups, how engagements are shaped, and one final `Start an Assessment` CTA to `/contact`.
- Removed the Services-page rendering of the Industries and Technical Projects sections so `/services` no longer publishes the unapproved selected technical-project proof claim or a disconnected catalogue outside the approved C-05 model.
- Converted the dormant technical-project translation record into a controlled proof-status placeholder so the old selected technical-project claim, project title, implied client context, and workflow outcome language are not retained in the public content source.
- Preserved the canonical Services route as indexable and kept `/services` in `public/sitemap.xml`; no service-detail routes were created or added to the sitemap.
- Updated Services metadata and public Services analytics to use `services_view`, `service_capability_engage`, and `assessment_start` with Services-specific source values.
- Removed the Spanish Services capability namespace so `/services` falls back to the approved English Services content until a final Spanish Services translation is approved. Spanish Services translation remains a dependency.
- Homepage capability labels were aligned to the five approved capability groups without redesigning the homepage.
- Deferred pricing package-to-service mapping, standalone service-detail routes, future Bookings integration, proposal automation, detailed scope boundaries, and final service-specific SEO strategy to later governance decisions.

## C-10 Intelligence Publication Readiness

- Expanded the Intelligence content model with a documented publication schema supporting slug, title, summary, category, author, publishedDate, updatedDate, readingTime, status, featured, seoTitle, seoDescription, sections, and sources.
- Established six publication states: `draft`, `internal-review`, `executive-review`, `approved`, `published`, and `archived`.
- Created public selectors that expose ONLY published articles:
  - `getPublishedIntelligenceArticles()` — returns published articles in reverse chronological order
  - `getFeaturedIntelligenceArticles(limit)` — returns featured published articles
  - `findPublishedIntelligenceArticle(slug)` — returns a published article or undefined
  - `findIntelligenceArticleBySlug(slug)` — internal only; finds articles regardless of status
- Ensured `intelligenceArticles = []` remains empty at baseline; no demonstration, placeholder, or fake articles were added.
- Updated `IntelligencePage` to be a complete production page with:
  - Intelligence hero with purpose statement
  - Research domains section (via reused Insights component)
  - Publications section showing published articles or controlled empty state
  - Editorial standards section documenting publication requirements
  - Research areas section (via reused Labs component)
  - Assessment CTA routing to `/contact`
- Updated `IntelligenceArticlePage` to support future published articles:
  - Article header with category, title, summary, author, publication date, update date, reading time
  - Structured article sections (title + body)
  - Sources list with optional external links
  - Return to Intelligence link
  - Assessment CTA
  - Publication-state guards: only renders if `status === 'published'`; unknown or unpublished slugs return controlled 404
- Added English translations under `intelligence` namespace for all page content, empty state, editorial standards, and article labels.
- Added responsive CSS for Intelligence page sections, article list, article preview cards, metadata display, article body, sources, and responsive breakpoints.
- Preserved sitemap controls: `/intelligence` remains in `public/sitemap.xml`; article URLs remain excluded to prevent exposure of unpublished content.
- Preserved semantic headings, accessibility labels, reduced-motion support, and keyboard-visible controls.

### Publication protections

- `findIntelligenceArticle(slug)` filters to published articles only; unpublished, approved-but-unpublished, and archived articles return undefined
- IntelligenceArticlePage renders only when the public selector finds a published article; all other cases return a generic not-found page with `noindex, nofollow`
- The public registry `intelligenceArticles` is the single source of truth; editorial drafts and review-state content must remain outside the published collection
- Spanish Intelligence copy remains an approval dependency and intentionally falls back to English through i18next configuration

### Remaining approval dependencies

- Approved Intelligence articles (first publication)
- Approved article sources and citations
- Final approved portrait and founder-authority confirmation
- Confirmed Spanish Intelligence copy (if different from English fallback)
- Assessment routing confirmation for Intelligence page CTAs
