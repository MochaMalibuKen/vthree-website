import PageMeta from "../components/PageMeta.jsx";
import SprintSummary from "../components/sprint/SprintSummary.jsx";
import SprintProjectCard from "../components/sprint/SprintProjectCard.jsx";
import useSprintState from "../components/sprint/useSprintState.js";
import { sprintCredentials, sprintPhases, sprintProjects, sprintUpdates } from "../content/sprint.js";
import { formatSprintDate, hasEvidence } from "../utils/sprint.js";

export default function SprintPage() {
  const state = useSprintState();
  return <main className="sprint-page" lang="en">
    <PageMeta title="100 Day Sprint | VThree" description="Follow VThree’s September 23–December 31, 2026 implementation sprint: earned credentials, project milestones, reviewed evidence, and measurable delivery." path="/100-day-sprint" />
    <header className="section sprint-intro"><div className="container">
      <p className="eyebrow">VThree / September 23–December 31, 2026</p>
      <h1>100 Days of Applied Implementation</h1>
      <p className="sprint-lead">From September 23 through December 31, 2026, VThree is turning strategy into working systems, documented evidence, and measurable delivery. This sprint combines funding readiness, artificial intelligence implementation, relationship management, reporting, security, media production, and small-business support.</p>
      <p className="muted">Progress is based on completed and verified milestones—not time elapsed or subjective estimates.</p>
      <SprintSummary />
    </div></header>
    <section className="section" aria-labelledby="sprint-phases"><div className="container">
      <p className="eyebrow">The implementation sequence</p><h2 id="sprint-phases">Three phases. One evidence trail.</h2>
      <ol className="sprint-phases">{sprintPhases.map(phase => <li key={phase.id} aria-current={state?.phase === phase.id ? "step" : undefined}>
        <p className="sprint-label">Phase {phase.id}{state?.phase === phase.id ? " · Current phase" : ""}</p><h3>{phase.title}</h3><p>Days {phase.startDay}–{phase.endDay}<br /><time dateTime={phase.startDate}>{formatSprintDate(phase.startDate)}</time>–<time dateTime={phase.endDate}>{formatSprintDate(phase.endDate)}</time></p><ul>{phase.focus.map(item => <li key={item}>{item}</li>)}</ul>
      </li>)}</ol>
    </div></section>
    <section className="section" aria-labelledby="sprint-credentials"><div className="container">
      <p className="eyebrow">Qualifications in practice</p><h2 id="sprint-credentials">Earned credentials</h2>
      <div className="sprint-credentials">{sprintCredentials.map(credential => <article className="sprint-credential" key={credential.id}>
        {credential.image && <div className="sprint-badge"><img src={credential.image} alt={`${credential.title} badge`} width="160" height="160" loading="lazy" /></div>}
        <div><span className="sprint-status sprint-status-complete">{credential.status}</span><h3>{credential.title}</h3>{credential.issuer && <p>{credential.issuer}</p>}<p className="muted">Evidence: {credential.evidenceType}</p>{hasEvidence(credential.evidenceUrl) && <a className="text-link" href={credential.evidenceUrl}>{credential.evidenceLabel}</a>}</div>
      </article>)}</div>
    </div></section>
    <section className="section" aria-labelledby="sprint-register"><div className="container">
      <p className="eyebrow">Work in public, with care</p><h2 id="sprint-register">Implementation register</h2><p className="section-intro muted">Twelve planned projects, with public-safe summaries. Targets describe intended delivery; verified outcomes require reviewed evidence. The small-business accelerator is a VThree prototype.</p>
      <div className="sprint-projects">{sprintProjects.map(project => <SprintProjectCard key={project.id} project={project} />)}</div>
    </div></section>
    <section className="section" aria-labelledby="sprint-updates"><div className="container">
      <p className="eyebrow">The delivery record</p><h2 id="sprint-updates">Weekly updates</h2>
      {sprintUpdates.length ? <ol className="sprint-updates">{sprintUpdates.map((update, index) => <li key={`${update.date}-${index}`}><time dateTime={update.date}>{formatSprintDate(update.date)}</time><h3>{sprintProjects.find(project => project.id === update.projectId)?.publicTitle || "Sprint update"}</h3><p>Milestone completed: {update.milestoneCompleted}</p><p>{update.result}</p>{hasEvidence(update.evidenceUrl) && <a className="text-link" href={update.evidenceUrl}>View evidence</a>}<p>Next milestone: {update.nextMilestone}</p></li>)}</ol> : <p className="sprint-empty">No updates published yet. The launch update will be added after the implementation is live, followed by weekly evidence and next steps.</p>}
    </div></section>
  </main>;
}
