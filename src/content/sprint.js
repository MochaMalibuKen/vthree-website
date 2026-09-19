/**
 * Public-safe sprint register. Never add private names, notes, prompts or client data:
 * every value in this module can be downloaded by visitors, even if not rendered.
 * lastUpdated records the register entry update, not completion of project work.
 * @typedef {"Queued"|"Active"|"Validating"|"Complete"|"Paused"} SprintProjectStatus
 * @typedef {"Public"|"Public Summary"|"Anonymized"|"Permission Required"} SprintProjectVisibility
 * @typedef {Object} SprintProject
 * @property {string} id
 * @property {string} title
 * @property {string} publicTitle
 * @property {1|2|3} phase
 * @property {string} dayRange
 * @property {string} targetDate
 * @property {SprintProjectStatus} status
 * @property {string} summary
 * @property {string} beneficiary
 * @property {string} currentMilestone
 * @property {string} [evidenceLabel]
 * @property {string} [evidenceUrl]
 * @property {string} [outcome]
 * @property {"Target"|"Verified"} [outcomeType]
 * @property {SprintProjectVisibility} visibility
 * @property {string} lastUpdated
 */
export const SPRINT_TIME_ZONE = "America/Chicago";
export const sprintConfig = { startDate: "2026-09-23", endDate: "2026-12-31", totalDays: 100, reportUrl: "" };

export const sprintPhases = [
  { id: 1, startDay: 1, endDay: 30, startDate: "2026-09-23", endDate: "2026-10-22", title: "Build the foundation", focus: ["Website proof system", "Meta grant preparation", "BidPrime AI implementation", "Impact-reporting foundation"] },
  { id: 2, startDay: 31, endDay: 60, startDate: "2026-10-23", endDate: "2026-11-21", title: "Connect delivery", focus: ["Personal CRM", "Executive assistant AI", "Video and avatar workflow", "Security-readiness baseline"] },
  { id: 3, startDay: 61, endDay: 100, startDate: "2026-11-22", endDate: "2026-12-31", title: "Validate and report", focus: ["Supervised AI agent team", "Small-business accelerator prototype", "Case studies", "Year-end impact report", "2027 roadmap"] },
];

/** @type {SprintProject[]} */
export const sprintProjects = [
  {
    "id": "P01",
    "title": "Website Countdown and Proof System",
    "publicTitle": "Website Countdown and Proof System",
    "phase": 1,
    "dayRange": "Days 1\u20137",
    "targetDate": "2026-09-29",
    "status": "Active",
    "summary": "A public system for showing verified credentials, implementation milestones, project evidence, and measurable progress.",
    "beneficiary": "Prospective clients, partners, and funders",
    "currentMilestone": "Launch the countdown, credential display, phase timeline, and project registry.",
    "outcome": "Launch the countdown, credential display, phase timeline, and project registry.",
    "outcomeType": "Target",
    "visibility": "Public",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P02",
    "title": "Funding Readiness and Community Innovation Strategy",
    "publicTitle": "Funding Readiness and Community Innovation Strategy",
    "phase": 1,
    "dayRange": "Days 1\u201327",
    "targetDate": "2026-10-19",
    "status": "Active",
    "summary": "A funding-readiness initiative designed around documented community need, measurable outcomes, responsible implementation, and transparent reporting.",
    "beneficiary": "Aiken County residents, rural entrepreneurs, small businesses, creators, and community organizations",
    "currentMilestone": "Complete the community-needs evidence, implementation plan, budget, outcome measures, and application package.",
    "outcome": "Complete the community-needs evidence, implementation plan, budget, outcome measures, and application package.",
    "outcomeType": "Target",
    "visibility": "Public Summary",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P03",
    "title": "Bid Intelligence Assistant",
    "publicTitle": "Bid Intelligence Assistant",
    "phase": 1,
    "dayRange": "Days 1\u201321",
    "targetDate": "2026-10-13",
    "status": "Active",
    "summary": "A supervised qualification workflow for reviewing opportunities, supporting go or no-go decisions, and preparing proposal-ready information.",
    "beneficiary": "Small suppliers pursuing relevant government opportunities",
    "currentMilestone": "Validate the qualification prompt, opportunity filters, review sequence, and output structure.",
    "outcome": "Validate the qualification prompt, opportunity filters, review sequence, and output structure.",
    "outcomeType": "Target",
    "visibility": "Anonymized",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P04",
    "title": "Impact Measurement and Reporting System",
    "publicTitle": "Impact Measurement and Reporting System",
    "phase": 1,
    "dayRange": "Days 10\u201335",
    "targetDate": "2026-10-27",
    "status": "Queued",
    "summary": "A reusable reporting structure connecting beneficiaries, activities, outputs, outcomes, evidence, budgets, issues, and corrective actions.",
    "beneficiary": "Clients, partners, funders, and program participants",
    "currentMilestone": "Define the shared measurement fields and reporting workflow.",
    "outcome": "Define the shared measurement fields and reporting workflow.",
    "outcomeType": "Target",
    "visibility": "Public",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P05",
    "title": "Client and Relationship Management System",
    "publicTitle": "Client and Relationship Management System",
    "phase": 2,
    "dayRange": "Days 22\u201345",
    "targetDate": "2026-11-06",
    "status": "Queued",
    "summary": "A controlled relationship-management system for contacts, organizations, opportunities, follow-ups, and communication history.",
    "beneficiary": "VThree clients, prospects, partners, and collaborators",
    "currentMilestone": "Implement the core contact, opportunity, relationship-stage, and next-action views.",
    "outcome": "Implement the core contact, opportunity, relationship-stage, and next-action views.",
    "outcomeType": "Target",
    "visibility": "Public Summary",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P06",
    "title": "AI Executive Assistant",
    "publicTitle": "AI Executive Assistant",
    "phase": 2,
    "dayRange": "Days 35\u201355",
    "targetDate": "2026-11-16",
    "status": "Queued",
    "summary": "A supervised assistant for daily priorities, follow-up preparation, project-status retrieval, and controlled drafting.",
    "beneficiary": "VThree leadership and delivery operations",
    "currentMilestone": "Validate one daily planning and follow-up workflow with human approval.",
    "outcome": "Validate one daily planning and follow-up workflow with human approval.",
    "outcomeType": "Target",
    "visibility": "Public Summary",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P07",
    "title": "Video Animation and Avatar Production Workflow",
    "publicTitle": "Video Animation and Avatar Production Workflow",
    "phase": 2,
    "dayRange": "Days 45\u201365",
    "targetDate": "2026-11-26",
    "status": "Queued",
    "summary": "A repeatable process for turning approved scripts into animated or avatar-led video content with documented quality controls.",
    "beneficiary": "Clients, community programs, and digital audiences",
    "currentMilestone": "Complete one repeatable production workflow and two portfolio-ready samples.",
    "outcome": "Complete one repeatable production workflow and two portfolio-ready samples.",
    "outcomeType": "Target",
    "visibility": "Public",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P08",
    "title": "Security Readiness Program",
    "publicTitle": "Security Readiness Program",
    "phase": 2,
    "dayRange": "Days 30\u201360",
    "targetDate": "2026-11-21",
    "status": "Queued",
    "summary": "A foundational security-readiness program covering data inventory, access, risks, vendors, incidents, and independent testing requirements.",
    "beneficiary": "Clients, partners, and project stakeholders",
    "currentMilestone": "Complete the asset inventory, access review, risk register, and contractor requirements.",
    "outcome": "Complete the asset inventory, access review, risk register, and contractor requirements.",
    "outcomeType": "Target",
    "visibility": "Public Summary",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P09",
    "title": "Supervised AI Agent Team Pilot",
    "publicTitle": "Supervised AI Agent Team Pilot",
    "phase": 3,
    "dayRange": "Days 50\u201375",
    "targetDate": "2026-12-06",
    "status": "Queued",
    "summary": "A supervised multi-agent workflow with defined roles, approval gates, activity records, and failure handling.",
    "beneficiary": "VThree clients and delivery teams",
    "currentMilestone": "Validate one research-to-deliverable workflow under human supervision.",
    "outcome": "Validate one research-to-deliverable workflow under human supervision.",
    "outcomeType": "Target",
    "visibility": "Public Summary",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P10",
    "title": "Small Business Accelerator Prototype",
    "publicTitle": "Small Business Accelerator Prototype",
    "phase": 3,
    "dayRange": "Days 61\u201390",
    "targetDate": "2026-12-21",
    "status": "Queued",
    "summary": "A structured prototype connecting intake, diagnostics, learning paths, milestones, resources, and outcome reporting.",
    "beneficiary": "Small-business owners and aspiring entrepreneurs",
    "currentMilestone": "Build a demonstrable participant journey and reporting prototype.",
    "outcome": "Build a demonstrable participant journey and reporting prototype.",
    "outcomeType": "Target",
    "visibility": "Permission Required",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P11",
    "title": "Case Study and Evidence System",
    "publicTitle": "Case Study and Evidence System",
    "phase": 3,
    "dayRange": "Days 60\u201390",
    "targetDate": "2026-12-21",
    "status": "Queued",
    "summary": "A reusable structure for documenting the need, implementation, outputs, outcomes, lessons, and evidence behind completed work.",
    "beneficiary": "Prospective clients, partners, and funders",
    "currentMilestone": "Complete the template and prepare three examples for client approval.",
    "outcome": "Complete the template and prepare three examples for client approval.",
    "outcomeType": "Target",
    "visibility": "Permission Required",
    "lastUpdated": "2026-09-19"
  },
  {
    "id": "P12",
    "title": "Year End Impact Report and 2027 Roadmap",
    "publicTitle": "Year End Impact Report and 2027 Roadmap",
    "phase": 3,
    "dayRange": "Days 91\u2013100",
    "targetDate": "2026-12-31",
    "status": "Queued",
    "summary": "A verified account of completed milestones, measured results, lessons, unfinished work, and prioritized next steps.",
    "beneficiary": "Clients, partners, funders, and the public",
    "currentMilestone": "Establish the report structure and evidence requirements.",
    "outcome": "Establish the report structure and evidence requirements.",
    "outcomeType": "Target",
    "visibility": "Public",
    "lastUpdated": "2026-09-19"
  }
];

/**
 * Add milestones only when their review requirements are defined.
 * An evidence reference may be an internal review ID; only evidenceUrl is public.
 * @type {Array<{id:string, projectId:string, title:string, targetDate:string, evidenceReference?:string, evidenceUrl?:string, reviewedAt?:string, reviewedBy?:string}>}
 */
export const sprintMilestones = [];

/** @type {Array<{date:string, projectId:string, milestoneCompleted:string, evidenceUrl?:string, result:string, nextMilestone:string}>} */
export const sprintUpdates = [];

export const sprintCredentials = [
  { id: "grant-seeking", title: "Grant Seeking Essentials Certificate Program", status: "Earned", evidenceType: "Certificate and badge", image: new URL("../assets/images/proof system/Grant_Seeking_essentials.png", import.meta.url).href, evidenceUrl: new URL("../assets/images/proof system/Grant Seeking Essentials Certificate.pdf", import.meta.url).href, evidenceLabel: "View completion certificate (PDF)" },
  { id: "predictive-project-management", title: "Fundamentals of Predictive Project Management", issuer: "Project Management Institute", status: "Earned", evidenceType: "Badge", image: new URL("../assets/images/proof system/Kickoff-Badge (1).png", import.meta.url).href },
];
