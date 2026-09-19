import { formatSprintDate, hasEvidence } from "../../utils/sprint.js";

export default function SprintProjectCard({ project }) {
  return <article className="sprint-project" aria-labelledby={`project-${project.id}`}>
    <div className="sprint-card-top"><span>{project.id} · Phase {project.phase}</span><span className={`sprint-status sprint-status-${project.status.toLowerCase()}`}>{project.status}</span></div>
    <h3 id={`project-${project.id}`}>{project.publicTitle}</h3>
    <p>{project.summary}</p>
    <dl>
      <div><dt>Beneficiary</dt><dd>{project.beneficiary}</dd></div>
      <div><dt>Current milestone</dt><dd>{project.currentMilestone}</dd></div>
      <div><dt>Delivery window</dt><dd>{project.dayRange} · Target <time dateTime={project.targetDate}>{formatSprintDate(project.targetDate)}</time></dd></div>
      <div><dt>Outcome · {project.outcomeType || "Target"}</dt><dd>{project.outcome || "Outcome pending definition."}</dd></div>
    </dl>
    {hasEvidence(project.evidenceUrl) && <a className="text-link" href={project.evidenceUrl}>{project.evidenceLabel || "View evidence"}</a>}
    <div className="sprint-card-footer"><span>{project.visibility === "Permission Required" ? "Public summary · publication requires approval" : project.visibility}</span><span>Last updated <time dateTime={project.lastUpdated}>{formatSprintDate(project.lastUpdated)}</time></span></div>
  </article>;
}
