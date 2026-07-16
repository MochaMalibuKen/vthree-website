import { useTranslation } from "react-i18next";
import { StoryboardGraphic } from "./VisualDiagrams.jsx";

const scenes = ["signal", "friction", "system", "movement", "evolve"];

export default function ExplainerVideo() {
  const { t } = useTranslation();
  return (
    <section className="section explainer-section" aria-labelledby="explainer-title">
      <div className="container">
        <div className="explainer-heading">
          <div><p className="eyebrow">{t("explainer.eyebrow", { defaultValue: "Original production in development" })}</p><h2 id="explainer-title">{t("explainer.title", { defaultValue: "What Is Digital Architecture?" })}</h2></div>
          <span className="runtime">45–60 SEC</span>
        </div>
        <div className="video-placeholder" aria-label={t("explainer.placeholder", { defaultValue: "Future original VTHREE explainer video" })}>
          <div className="video-grid" aria-hidden="true" /><div className="play-mark" aria-hidden="true"><span /></div>
          <div className="video-caption"><strong>VTHREE ORIGINAL</strong><span>{t("explainer.noStock", { defaultValue: "Illustrated in-house. No stock footage." })}</span></div>
        </div>
        <div className="storyboard" aria-label={t("explainer.storyboardLabel", { defaultValue: "Explainer video storyboard" })}>
          {scenes.map((scene, index) => <article key={scene}><span>0{index + 1}</span><div className={`scene-frame scene-${index + 1}`}><StoryboardGraphic scene={scene} /></div><h3>{t(`explainer.scenes.${scene}.title`)}</h3><p>{t(`explainer.scenes.${scene}.desc`)}</p></article>)}
        </div>
        <details className="production-notes"><summary>{t("explainer.notesTitle", { defaultValue: "View narration and production notes" })}</summary><div><section><h3>{t("explainer.narrationTitle", { defaultValue: "Suggested narration" })}</h3><p>{t("explainer.narration")}</p></section><section><h3>{t("explainer.animationTitle", { defaultValue: "Illustration & animation notes" })}</h3><p>{t("explainer.animation")}</p></section></div></details>
      </div>
    </section>
  );
}
