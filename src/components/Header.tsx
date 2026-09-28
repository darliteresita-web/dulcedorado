import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 py-2 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-background/70 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink/75 transition-colors hover:bg-cream hover:text-forest"
              activeProps={{ className: "bg-cream text-forest" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contacto" className="btn-base btn-gold hidden sm:inline-flex">
            Solicitar cotización
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-border text-forest lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="container-page lg:hidden"
      >
        <nav aria-label="Navegación móvil" className="mt-3 grid gap-1 rounded-2xl border border-border bg-card p-3 shadow-soft">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-xl px-4 py-3 text-base font-semibold text-ink/80 transition-colors hover:bg-cream hover:text-forest"
              activeProps={{ className: "bg-cream text-forest" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn-base btn-gold mt-2 w-full">
            Solicitar cotización
          </Link>
        </nav>
      </div>
    </header>
  );
}
