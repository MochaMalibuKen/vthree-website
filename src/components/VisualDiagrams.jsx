const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export function MethodIcon({ type }) {
  const drawings = {
    1: <><circle cx="30" cy="28" r="11" /><path d="m38 36 9 9" /><path d="M25 28h10M30 23v10" opacity=".45" /></>,
    2: <><path d="M17 43V20h30v23" /><path d="M22 27h18M22 33h13M22 39h9" /><circle cx="44" cy="19" r="5" /></>,
    3: <><path d="m15 39 17-22 17 22" /><path d="M20 39h24M25 32h14M30 25h4" /><circle cx="32" cy="43" r="3" /></>,
    4: <><rect x="15" y="17" width="15" height="15" rx="3" /><rect x="34" y="17" width="15" height="15" rx="3" /><rect x="24" y="36" width="16" height="12" rx="3" /><path d="M30 25h4M22 32v5m20-5v5" /></>,
    5: <><path d="M15 43V19M15 43h34" /><path d="m20 37 8-9 7 5 11-13" /><path d="m41 20h5v5" /><circle cx="28" cy="28" r="2" /></>,
    6: <><path d="M45 29a14 14 0 1 1-5-10" /><path d="M40 14v9h9" /><path d="m25 31 5 5 10-12" /></>
  };
  return <svg viewBox="0 0 64 64" aria-hidden="true" {...common}>{drawings[type]}</svg>;
}

export function CapabilityBlueprint() {
  return <svg className="capability-blueprint" viewBox="0 0 900 430" preserveAspectRatio="none" aria-hidden="true">
    <defs><radialGradient id="coreGlow"><stop stopColor="#ff496d" stopOpacity=".16" /><stop offset="1" stopColor="#ff496d" stopOpacity="0" /></radialGradient></defs>
    <circle cx="450" cy="215" r="132" fill="url(#coreGlow)" />
    <g fill="none" stroke="#52d8e7" strokeOpacity=".28" strokeWidth="1.5">
      <path d="M450 215C360 110 265 86 150 64" /><path d="M450 215C540 110 635 86 750 64" />
      <path d="M450 215C330 215 235 215 110 215" /><path d="M450 215C570 215 665 215 790 215" />
      <path d="M450 215C360 320 295 350 200 370" /><path d="M450 215C540 320 605 350 700 370" />
    </g>
    <g fill="#0d1722" stroke="#52d8e7" strokeWidth="1.5">
      <circle cx="150" cy="64" r="5" /><circle cx="750" cy="64" r="5" /><circle cx="110" cy="215" r="5" />
      <circle cx="790" cy="215" r="5" /><circle cx="200" cy="370" r="5" /><circle cx="700" cy="370" r="5" />
    </g>
    <g fill="none" stroke="#ff496d" strokeOpacity=".35"><circle cx="450" cy="215" r="92" /><circle cx="450" cy="215" r="112" strokeDasharray="3 9" /></g>
    <path className="blueprint-signal" d="M150 64C360 86 360 150 450 215S600 340 700 370" fill="none" stroke="#52d8e7" strokeWidth="2" strokeDasharray="7 12" />
  </svg>;
}

export function ComparisonDiagram({ connected = false }) {
  if (!connected) return <svg viewBox="0 0 420 170" aria-hidden="true" className="comparison-diagram disconnected-diagram">
    <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M68 38 192 83M192 83l140-46M92 139l100-56M192 83l142 55" opacity=".25" strokeDasharray="5 8" /></g>
    <g fill="#111c28" stroke="currentColor" strokeWidth="1.5"><rect x="35" y="17" width="66" height="43" rx="10" /><circle cx="192" cy="83" r="28" /><rect x="300" y="15" width="68" height="45" rx="10" /><rect x="55" y="117" width="74" height="38" rx="10" /><rect x="298" y="116" width="72" height="40" rx="10" /></g>
    <g stroke="currentColor" opacity=".65"><path d="M52 33h31M52 42h21M174 83h36M318 32h31M73 134h38M316 134h36" /></g>
  </svg>;
  return <svg viewBox="0 0 420 170" aria-hidden="true" className="comparison-diagram connected-diagram">
    <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".48"><circle cx="210" cy="85" r="67" strokeDasharray="4 8" /><path d="M210 18v39M210 113v39M143 85h39M238 85h39M163 38l27 29M257 38l-27 29M163 132l27-29M257 132l-27-29" /></g>
    <g fill="#111c28" stroke="currentColor" strokeWidth="1.5"><circle cx="210" cy="85" r="30" /><circle cx="210" cy="18" r="9" /><circle cx="210" cy="152" r="9" /><circle cx="143" cy="85" r="9" /><circle cx="277" cy="85" r="9" /><circle cx="163" cy="38" r="9" /><circle cx="257" cy="38" r="9" /><circle cx="163" cy="132" r="9" /><circle cx="257" cy="132" r="9" /></g>
    <path d="m196 85 9 9 20-23" fill="none" stroke="#43d69c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

export function DecisionDiagram() {
  return <svg className="decision-diagram" viewBox="0 0 1000 260" aria-hidden="true">
    <defs><linearGradient id="decisionLine" x1="0" x2="1"><stop stopColor="#f3b95f" /><stop offset=".5" stopColor="#52d8e7" /><stop offset="1" stopColor="#43d69c" /></linearGradient></defs>
    <g fill="none" stroke="#f3b95f" strokeWidth="1.6">
      <rect x="35" y="37" width="76" height="56" rx="12" /><circle cx="88" cy="178" r="33" /><path d="M146 55h82v40h-82zM151 83l22-18 16 12 20-22" /><path d="M55 58h36M55 70h24" />
      <path d="M121 65C220 65 235 113 320 126M121 178C215 178 235 142 320 132M228 75C270 75 286 106 320 120" strokeOpacity=".55" />
    </g>
    <g transform="translate(320 40)"><path d="M0 22h225l-61 76v85l-49 24v-109z" fill="rgba(82,216,231,.06)" stroke="#52d8e7" strokeWidth="2" /><path d="M38 55h150M60 81h107M84 108h58" stroke="#52d8e7" strokeOpacity=".65" strokeWidth="2" /></g>
    <path d="M546 130h183" stroke="url(#decisionLine)" strokeWidth="3" /><path d="m718 121 14 9-14 9" fill="none" stroke="#43d69c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <g transform="translate(756 39)"><circle cx="92" cy="91" r="78" fill="rgba(67,214,156,.04)" stroke="#43d69c" strokeWidth="2" /><circle cx="92" cy="91" r="58" fill="none" stroke="#43d69c" strokeOpacity=".25" /><path d="m58 91 23 23 47-56" fill="none" stroke="#43d69c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><path d="M92 13V0M92 182v-13M14 91H0M184 91h-13" stroke="#43d69c" strokeOpacity=".45" /></g>
  </svg>;
}

export function StoryboardGraphic({ scene }) {
  const frames = {
    signal: <><circle cx="80" cy="48" r="20" /><path d="M22 25h25M14 48h30M25 72h25M110 23h28M115 73h33" strokeDasharray="4 5" /></>,
    friction: <><path d="M18 32h48v48H18zM94 20h48v48H94z" /><path d="m65 54 30-10M59 67l42-10" strokeDasharray="4 5" /><circle cx="80" cy="52" r="7" className="accent" /></>,
    system: <><circle cx="80" cy="52" r="22" /><circle cx="24" cy="24" r="8" /><circle cx="136" cy="24" r="8" /><circle cx="24" cy="80" r="8" /><circle cx="136" cy="80" r="8" /><path d="M31 28 60 43M129 28 100 43M31 76 60 61M129 76 100 61" /></>,
    movement: <><path d="M15 76c31 0 37-48 68-48s34 47 67 47" /><path d="m138 65 12 10-12 9" /><circle cx="25" cy="70" r="6" className="accent" /><circle cx="83" cy="28" r="6" /><circle cx="139" cy="69" r="6" /></>,
    evolve: <><path d="M129 50a49 49 0 1 1-18-38" /><path d="M111 8v23h23" /><path d="m53 51 18 18 37-43" className="success" /></>
  };
  return <svg viewBox="0 0 160 104" aria-hidden="true" {...common}>{frames[scene]}</svg>;
}
