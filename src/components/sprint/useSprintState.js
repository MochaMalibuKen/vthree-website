import { useEffect, useState } from "react";
import { getSprintState, getSprintCountdown } from "../../utils/sprint.js";

export default function useSprintState() {
  // A stable first render also permits future SSR without hydration differences.
  const [state, setState] = useState(null);
  useEffect(() => {
    const refresh = () => {
      const now = new Date();
      setState({ ...getSprintState(now), countdown: getSprintCountdown(now) });
    };
    refresh();
    const timer = window.setInterval(refresh, 1000);
    window.addEventListener("focus", refresh);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", refresh); };
  }, []);
  return state;
}
