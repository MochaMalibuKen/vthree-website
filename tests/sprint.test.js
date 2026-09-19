import test from "node:test";
import assert from "node:assert/strict";
import { getSprintState, getMilestoneProgress, getNextMilestone, hasEvidence } from "../src/utils/sprint.js";
import { sprintProjects, sprintMilestones, sprintUpdates } from "../src/content/sprint.js";

for (const [date, status, day, phase] of [
  ["2026-09-22", "pre", undefined, null],
  ["2026-09-23", "active", 1, 1],
  ["2026-10-22", "active", 30, 1],
  ["2026-10-23", "active", 31, 2],
  ["2026-11-21", "active", 60, 2],
  ["2026-11-22", "active", 61, 3],
  ["2026-12-31", "active", 100, 3],
  ["2027-01-01", "complete", 100, null],
]) test(`${date}: ${status}, day ${day}, phase ${phase}`, () => {
  const state = getSprintState(new Date(`${date}T18:00:00Z`));
  assert.equal(state.status, status); assert.equal(state.day, day); assert.equal(state.phase, phase);
  if (status === "active") assert.equal(state.daysRemaining, 100 - day);
});
test("Chicago midnight and timezone override", () => {
  assert.equal(getSprintState(new Date("2026-09-23T04:59:59Z")).daysUntilLaunch, 1);
  assert.equal(getSprintState(new Date("2026-09-23T05:00:00Z")).day, 1);
  assert.equal(getSprintState(new Date("2027-01-01T05:59:59Z")).day, 100);
  assert.equal(getSprintState(new Date("2027-01-01T06:00:00Z")).status, "complete");
  assert.equal(getSprintState(new Date("2026-09-23T00:00:00Z"), "UTC").day, 1);
});
test("DST fallback remains a single calendar day", () => {
  assert.equal(getSprintState(new Date("2026-11-01T06:30:00Z")).day, 40);
  assert.equal(getSprintState(new Date("2026-11-01T07:30:00Z")).day, 40);
  assert.equal(getSprintState(new Date("2026-11-02T06:00:00Z")).day, 41);
});
test("only reviewed artifacts count, independent of project statuses", () => {
  const reviewed = { evidenceReference: "review-record", reviewedBy: "Reviewer", reviewedAt: "2026-10-01" };
  assert.deepEqual(getMilestoneProgress([]), { complete: 0, total: 0, percent: null });
  assert.deepEqual(getMilestoneProgress([reviewed, { evidenceReference: "artifact" }, { reviewedBy: "Reviewer", reviewedAt: "2026-10-01" }]), { complete: 1, total: 3, percent: 33 });
  assert.equal(getMilestoneProgress([{ ...reviewed, reviewedAt: "invalid" }]).complete, 0);
});
test("empty or unsafe evidence URLs do not qualify for links", () => {
  for (const url of [undefined, "", "  ", "#", "javascript:alert(1)", "//example.com"]) assert.equal(hasEvidence(url), false);
  assert.equal(hasEvidence("/assets/certificate.pdf"), true);
  assert.equal(hasEvidence("/assets/Grant Seeking Essentials Certificate.pdf"), true);
  assert.equal(hasEvidence("https://example.com/evidence"), true);
});
test("initial register and next target are honest", () => {
  assert.equal(sprintProjects.length, 12);
  assert.equal(sprintMilestones.length, 0); assert.equal(sprintUpdates.length, 0);
  assert.equal(getNextMilestone([], sprintProjects).targetDate, "2026-09-29");
  for (const project of sprintProjects) {
    assert.equal(project.outcomeType, "Target");
    assert.ok(["Queued", "Active", "Validating", "Complete", "Paused"].includes(project.status));
    assert.equal(project.title, project.publicTitle);
  }
});

test("visual countdown targets Chicago launch and exclusive sprint end", async () => {
  const { getSprintCountdown } = await import("../src/utils/sprint.js");
  assert.deepEqual(getSprintCountdown(new Date("2026-09-22T04:00:00Z")), { days: 1, hours: 1, minutes: 0, seconds: 0 });
  assert.deepEqual(getSprintCountdown(new Date("2026-09-23T04:59:59Z")), { days: 0, hours: 0, minutes: 0, seconds: 1 });
  // The active sprint includes the extra hour from Chicago's fall DST change.
  assert.deepEqual(getSprintCountdown(new Date("2026-09-23T05:00:00Z")), { days: 100, hours: 1, minutes: 0, seconds: 0 });
  assert.deepEqual(getSprintCountdown(new Date("2027-01-01T05:59:59Z")), { days: 0, hours: 0, minutes: 0, seconds: 1 });
  assert.equal(getSprintCountdown(new Date("2027-01-01T06:00:00Z")), null);
  assert.deepEqual(getSprintCountdown(new Date("2026-09-22T23:59:59Z"), "UTC"), { days: 0, hours: 0, minutes: 0, seconds: 1 });
});
