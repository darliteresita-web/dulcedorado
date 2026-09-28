import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";

/** Logotipo provisional [LOGO]. Reemplazar por el logo definitivo de la empresa. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label={`${site.marca} — ir al inicio`}
    >
      <span
        className="grid size-10 shrink-0 place-items-center rounded-full"
        style={{ background: "var(--color-gold)" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            d="M12 3c2.4 1.6 4.2 1.9 6.6 1.3-.3 2.6.3 4.2 2 6-2.3.9-3.4 2.1-4.3 4.4-2-1.3-3.6-1.4-5.6-.6-.5-2.4-1.6-3.8-3.7-5C8.9 7.6 10.2 6 12 3Z"
            fill="var(--color-forest)"
            opacity="0.25"
          />
          <circle cx="11.5" cy="13" r="5" fill="var(--color-forest)" />
          <path
            d="M11.5 8c1.9-2.1 3.7-3 6.5-3-.6 3-2.6 4.8-5.5 5.4"
            stroke="var(--color-forest)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[0.95rem] font-semibold tracking-[0.14em] ${
            light ? "text-cream" : "text-forest"
          }`}
        >
          AGUAYMANTO
        </span>
        <span
          className={`block text-[0.62rem] font-bold tracking-[0.42em] ${
            light ? "text-gold-soft" : "text-leaf"
          }`}
        >
          PERÚ
        </span>
      </span>
    </Link>
  );
}
