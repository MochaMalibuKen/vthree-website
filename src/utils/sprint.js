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

// Resolve a configured calendar midnight to an instant, including its DST offset.
function zonedMidnight(date, timeZone) {
  const target = Date.parse(`${date}T00:00:00Z`);
  const formatter = new Intl.DateTimeFormat("en-US", { timeZone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23" });
  let instant = target;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const parts = formatter.formatToParts(new Date(instant));
    const value = type => Number(parts.find(part => part.type === type).value);
    const local = Date.UTC(value("year"), value("month") - 1, value("day"), value("hour"), value("minute"), value("second"));
    const correction = target - local;
    instant += correction;
    if (!correction) break;
  }
  return instant;
}
export function getSprintCountdown(now, timeZone = SPRINT_TIME_ZONE) {
  const state = getSprintState(now, timeZone);
  if (state.status === "complete") return null;
  const endExclusive = new Date(Date.parse(`${sprintConfig.endDate}T00:00:00Z`) + 86400000).toISOString().slice(0, 10);
  const target = zonedMidnight(state.status === "pre" ? sprintConfig.startDate : endExclusive, timeZone);
  const seconds = Math.max(0, Math.ceil((target - now.getTime()) / 1000));
  return { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60 };
}
