import { SPRINT_TIME_ZONE, sprintConfig, sprintPhases } from "../content/sprint.js";

// Calendar ordinals avoid elapsed-hour arithmetic across daylight-saving changes.
function ordinal(date) { return Date.parse(`${date}T00:00:00Z`) / 86400000; }
export function getSprintState(now, timeZone = SPRINT_TIME_ZONE) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const value = type => parts.find(part => part.type === type).value;
  const today = `${value("year")}-${value("month")}-${value("day")}`;
  const offset = ordinal(today) - ordinal(sprintConfig.startDate);
  if (offset < 0) return { status: "pre", daysUntilLaunch: -offset, phase: null };
  if (ordinal(today) > ordinal(sprintConfig.endDate)) return { status: "complete", day: 100, daysRemaining: 0, phase: null };
  const day = Math.max(1, Math.min(sprintConfig.totalDays, offset + 1));
  return { status: "active", day, daysRemaining: sprintConfig.totalDays - day, phase: sprintPhases.find(phase => day >= phase.startDay && day <= phase.endDay).id };
}
export function hasEvidence(url) { return typeof url === "string" && /^(https?:\/\/|\/(?!\/))[^\r\n]+$/i.test(url.trim()); }
export function isMilestoneVerified(milestone) {
  return Boolean(milestone.evidenceReference?.trim() && milestone.reviewedBy?.trim() && milestone.reviewedAt && Number.isFinite(Date.parse(milestone.reviewedAt)));
}
export function getMilestoneProgress(milestones) {
  const complete = milestones.filter(isMilestoneVerified).length;
  return { complete, total: milestones.length, percent: milestones.length ? Math.round(complete / milestones.length * 100) : null };
}
export function getNextMilestone(milestones, projects) {
  const next = milestones.filter(item => !isMilestoneVerified(item)).sort((a, b) => a.targetDate.localeCompare(b.targetDate))[0];
  if (next) return { title: next.title, targetDate: next.targetDate };
  const project = projects.filter(item => item.status !== "Complete" && item.status !== "Paused").sort((a, b) => a.targetDate.localeCompare(b.targetDate))[0];
  return project ? { title: project.currentMilestone, targetDate: project.targetDate } : null;
}
export function formatSprintDate(date) {
  return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", month: "long", day: "numeric", year: "numeric" }).format(new Date(`${date}T00:00:00Z`));
}
