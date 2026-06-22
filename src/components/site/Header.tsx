import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { scrollToSection } from "@/lib/scrollToSection";

const NAV = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "case-studies", label: "Case Studies" },
  { id: "contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => { setOpen(false); scrollToSection(id); };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className={`flex items-center justify-between rounded-full transition-all duration-500 ${scrolled ? "glass px-4 py-2" : "glass/0 px-2 py-2"}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} className="flex items-center gap-2">
            <Logo className="h-7 md:h-8 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => { e.preventDefault(); go(n.id); }}
                className={`relative px-4 py-2 text-sm transition-colors ${active === n.id ? "text-foreground" : "text-foreground/65 hover:text-foreground"}`}
              >
                {n.label}
                <span className={`pointer-events-none absolute inset-x-4 -bottom-0.5 h-px bg-[var(--accent)] origin-left transition-transform duration-500 ${active === n.id ? "scale-x-100" : "scale-x-0"}`} />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); go("contact"); }}
              className="hidden sm:inline-flex btn-primary text-sm"
            >
              Book A Call
            </a>
            <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 rounded-full border border-white/10" aria-label="Menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-4 flex flex-col">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); go(n.id); }} className="px-3 py-3 text-base text-foreground/80 hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={(e) => { e.preventDefault(); go("contact"); }} className="btn-primary mt-2 justify-center">
              Book A Call
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
