/**
 * Lightweight sitewide cinematic backdrop:
 *  - timeline-inspired vertical/horizontal rules
 *  - soft moving light leaks
 *  - subtle vignette
 * All CSS, no images, no video. ~0 perf impact.
 */
export function CinematicBG() {
  return (
    <div className="cinematic-bg" aria-hidden>
      <div className="cb-timeline" />
      <div className="cb-leak cb-leak-a" />
      <div className="cb-leak cb-leak-b" />
      <div className="cb-vignette" />
      <div className="cb-scan" />
    </div>
  );
}
