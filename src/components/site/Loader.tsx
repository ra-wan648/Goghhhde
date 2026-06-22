import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setPct(100);
        setTimeout(() => setDone(true), 450);
      } else {
        setPct(Math.floor(p));
      }
    }, 120);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      aria-hidden={done}
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "auto", transition: "opacity 700ms ease" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="aurora" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <Logo className="h-16 md:h-24 w-auto drop-shadow-[0_0_40px_rgba(83,255,47,0.35)]" />
        <div className="h-px w-64 bg-white/10 overflow-hidden">
          <div
            style={{
              width: `${pct}%`,
              transition: "width 200ms ease",
              background: "linear-gradient(90deg, var(--accent), var(--glow))",
              boxShadow: "0 0 16px var(--accent)",
            }}
            className="h-full"
          />
        </div>
        <div className="font-mono text-xs text-muted-foreground tabular-nums">
          {String(pct).padStart(3, "0")}%
        </div>
      </div>
    </div>
  );
}
