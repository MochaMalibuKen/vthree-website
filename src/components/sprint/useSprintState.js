import { useEffect, useState } from "react";
import { getSprintState } from "../../utils/sprint.js";

export default function useSprintState() {
  // A stable first render also permits future SSR without hydration differences.
  const [state, setState] = useState(null);
  useEffect(() => {
    const refresh = () => setState(getSprintState(new Date()));
    refresh();
    const timer = window.setInterval(refresh, 30000);
    window.addEventListener("focus", refresh);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", refresh); };
  }, []);
  return state;
}
