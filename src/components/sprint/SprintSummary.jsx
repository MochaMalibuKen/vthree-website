import { Link } from "react-router-dom";
import { sprintConfig, sprintMilestones, sprintProjects } from "../../content/sprint.js";
import { formatSprintDate, getMilestoneProgress, getNextMilestone, hasEvidence } from "../../utils/sprint.js";
import useSprintState from "./useSprintState.js";
import "./sprint.css";

export default function SprintSummary({ compact = false }) {
  const state = useSprintState();
  const progress = getMilestoneProgress(sprintMilestones);
  const next = getNextMilestone(sprintMilestones, sprintProjects);
  const label = !state ? "Sprint schedule" : state.status === "pre" ? "Pre Sprint" : state.status === "complete" ? "Sprint Complete" : `Day ${state.day} of 100`;
  return <section className={`sprint-summary ${compact ? "section sprint-home" : ""}`} aria-label="100 Day Implementation Sprint" lang="en">
    <div className={compact ? "container" : undefined}>
      {compact && <><p className="eyebrow">Applied implementation</p><h2>100 Day Implementation Sprint</h2></>}
      {state?.status !== "complete" && <div className="sprint-clock">
        <div className="sprint-clock-heading"><p className="sprint-label">{state?.status === "active" ? "Time left in the sprint" : "Countdown to launch"}</p><span>September 23–December 31, 2026</span></div>
        <div className="sprint-clock-digits" role="timer" aria-live="off" aria-label={state?.status === "active" ? "Time remaining until the sprint closes" : "Time remaining until the sprint begins"}>
          {["days", "hours", "minutes", "seconds"].map(unit => <div className="sprint-clock-unit" key={unit}><strong>{state?.countdown ? String(state.countdown[unit]).padStart(2, "0") : "—"}</strong><span>{unit}</span></div>)}
        </div>
        <p className="sprint-clock-note">{state?.status === "active" ? "Time remaining in the scheduled sprint. Verified delivery is tracked below." : "The countdown to 100 days of applied implementation."}</p>
      </div>}
      <div className="sprint-metrics">
        <div><p className="sprint-label">Sprint status</p><strong className="sprint-count">{label}</strong>
          {state?.status === "pre" && <p>The 100 Day Sprint begins September 23, 2026<br />{state.daysUntilLaunch} days until launch</p>}
          {state?.status === "active" && <p>{state.daysRemaining} days remaining<br />Ends <time dateTime={sprintConfig.endDate}>{formatSprintDate(sprintConfig.endDate)}</time></p>}
          {state?.status === "complete" && <p>100 Day Implementation Sprint completed December 31, 2026</p>}
          {!state && <p>September 23–December 31, 2026</p>}
        </div>
        <div><p className="sprint-label">Current phase</p><strong>{state?.phase ? `Phase ${state.phase}` : state?.status === "complete" ? "Sprint window closed" : "Preparation"}</strong><p>{state?.phase === 1 ? "Build the foundation" : state?.phase === 2 ? "Connect delivery" : state?.phase === 3 ? "Validate and report" : "Evidence determines delivery progress."}</p></div>
        <div><p className="sprint-label">Verified milestone progress</p>{progress.total ? <><strong>{progress.complete} of {progress.total} verified · {progress.percent}%</strong><progress value={progress.complete} max={progress.total} aria-label="Verified milestones" /></> : <p>Verified milestone tracking begins September 23.</p>}</div>
      </div>
      {state?.status === "complete" ? <div className="sprint-next">{hasEvidence(sprintConfig.reportUrl) ? <a className="text-link" href={sprintConfig.reportUrl}>Read the verified year-end report</a> : <p>Verified year-end report: awaiting publication.</p>}</div> : next && <div className="sprint-next"><p className="sprint-label">Next milestone · Target <time dateTime={next.targetDate}>{formatSprintDate(next.targetDate)}</time></p><p>{next.title}</p><small>Pending completion and evidence review.</small></div>}
      {compact && <Link className="text-link" to="/100-day-sprint">Explore the full sprint <span aria-hidden="true"> →</span></Link>}
    </div>
  </section>;
}
