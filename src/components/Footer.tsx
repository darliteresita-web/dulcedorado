import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-forest text-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="[&_a]:!text-cream">
            <Logo light />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75">
            {site.nombre} — {site.tagline}
          </p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-bold tracking-[0.18em] text-gold-soft uppercase">Enlaces</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 transition-colors hover:text-gold-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-[0.18em] text-gold-soft uppercase">
            Información
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            <li className="flex gap-3">
              <MessageCircle className="size-4 shrink-0 text-gold-soft" aria-hidden="true" />
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                WhatsApp {site.contacto.whatsapp}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-gold-soft" aria-hidden="true" />
              <a href={`tel:${site.contacto.telefonoLink}`} className="hover:text-gold-soft">
                {site.contacto.telefono}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-gold-soft" aria-hidden="true" />
              <span>{site.contacto.correo}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 text-gold-soft" aria-hidden="true" />
              <span>
                {site.contacto.direccion}, {site.contacto.ciudad}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.18em] text-gold-soft uppercase">
            Redes sociales
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {site.redes.map((r) => (
              <li key={r.nombre}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 transition-colors hover:text-gold-soft"
                >
                  {r.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/65 sm:flex-row">
          <p>© 2026 {site.nombre}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
