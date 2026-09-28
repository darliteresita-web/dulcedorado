import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  ChefHat,
  MessageSquareText,
  Settings2,
  ShoppingBag,
  Store,
} from "lucide-react";
import type { Producto } from "@/data/productos";
import type { Servicio } from "@/data/servicios";
import type { Noticia } from "@/data/noticias";

export function ProductCard({ producto }: { producto: Producto }) {
  return (
    <article className="card-soft group flex h-full flex-col overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.alt}
          width={1200}
          height={900}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl">{producto.nombre}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {producto.descripcion}
        </p>
        <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground">
          {producto.caracteristicas.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
              {c}
            </li>
          ))}
        </ul>
        <Link
          to="/contacto"
          search={{ producto: producto.nombre }}
          className="btn-base btn-outline-forest mt-6 self-start"
        >
          {producto.cta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

const iconos = {
  bag: ShoppingBag,
  boxes: Boxes,
  chef: ChefHat,
  store: Store,
  settings: Settings2,
  chat: MessageSquareText,
};

export function ServiceCard({ servicio }: { servicio: Servicio }) {
  const Icon = iconos[servicio.icono];
  return (
    <article className="card-soft flex h-full flex-col p-7">
      <span className="grid size-12 place-items-center rounded-xl bg-cream" aria-hidden="true">
        <Icon className="size-6 text-leaf" />
      </span>
      <h3 className="mt-5 text-lg">{servicio.titulo}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {servicio.descripcion}
      </p>
      <Link
        to="/contacto"
        search={{ producto: servicio.titulo }}
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-forest transition-colors hover:text-leaf"
      >
        Consultar
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function ValueCard({
  numero,
  titulo,
  texto,
}: {
  numero?: string;
  titulo: string;
  texto: string;
}) {
  return (
    <article className="card-soft h-full p-6">
      {numero ? (
        <span className="font-display text-2xl font-semibold text-gold">{numero}</span>
      ) : null}
      <h3 className="mt-2 text-lg">{titulo}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{texto}</p>
    </article>
  );
}

export function NewsCard({ noticia }: { noticia: Noticia }) {
  return (
    <article className="card-soft group flex h-full flex-col overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={noticia.imagen}
          alt={noticia.alt}
          width={1200}
          height={750}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-cream px-3 py-1 font-semibold text-leaf">
            {noticia.categoria}
          </span>
          <time dateTime={noticia.fechaISO} className="text-muted-foreground">
            {noticia.fecha}
          </time>
        </div>
        <h3 className="mt-4 text-lg leading-snug text-balance">{noticia.titulo}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {noticia.resumen}
        </p>
        <Link
          to="/noticias/$slug"
          params={{ slug: noticia.slug }}
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-forest transition-colors hover:text-leaf"
        >
          Leer más
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
