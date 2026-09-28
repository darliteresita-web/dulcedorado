import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { NewsCard } from "@/components/cards";
import { noticias } from "@/data/noticias";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = noticias.find((n) => n.slug === params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Noticia no disponible" }, { name: "robots", content: "noindex" }],
      };
    }
    const n = loaderData.noticia;
    return {
      meta: [
        { title: `${n.titulo} | Aguaymanto Perú` },
        { name: "description", content: n.resumen },
        { property: "og:title", content: n.titulo },
        { property: "og:description", content: n.resumen },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/noticias/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/noticias/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: n.titulo,
            description: n.resumen,
            datePublished: n.fechaISO,
            articleSection: n.categoria,
          }),
        },
      ],
    };
  },
  notFoundComponent: NoticiaNoEncontrada,
  component: NoticiaDetalle,
});

function NoticiaNoEncontrada() {
  return (
    <section className="container-page py-28 text-center">
      <h1 className="text-3xl">Noticia no disponible</h1>
      <p className="mt-4 text-muted-foreground">
        Esta publicación no existe o fue retirada del sitio.
      </p>
      <Link to="/noticias" className="btn-base btn-outline-forest mt-8">
        Volver a noticias
      </Link>
    </section>
  );
}

function NoticiaDetalle() {
  const { noticia } = Route.useLoaderData();
  const relacionadas = noticias.filter((n) => n.slug !== noticia.slug).slice(0, 2);

  return (
    <>
      <article>
        <div className="relative h-[52svh] min-h-[340px] w-full overflow-hidden bg-forest">
          <img
            src={noticia.imagen}
            alt={noticia.alt}
            width={1920}
            height={1088}
            className="size-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, oklch(0.25 0.05 154 / 0.92) 8%, oklch(0.25 0.05 154 / 0.25) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-page pb-10">
              <div className="flex flex-wrap items-center gap-3 text-xs text-cream/85">
                <span className="rounded-full bg-gold px-3 py-1 font-semibold text-forest">
                  {noticia.categoria}
                </span>
                <time dateTime={noticia.fechaISO}>{noticia.fecha}</time>
                <span>Por {noticia.autor}</span>
              </div>
              <h1 className="mt-4 max-w-3xl text-3xl leading-tight text-balance text-cream sm:text-4xl lg:text-5xl">
                {noticia.titulo}
              </h1>
            </div>
          </div>
        </div>

        <div className="container-page py-16 lg:py-20">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-leaf"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver a noticias
          </Link>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg font-medium text-ink">{noticia.resumen}</p>
            {noticia.contenido.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl surface-cream p-8">
            <h2 className="text-xl">¿Te interesa nuestro aguaymanto?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Escríbenos y te enviamos información de productos y presentaciones.
            </p>
            <Link to="/contacto" className="btn-base btn-gold mt-6">
              Contactarnos
            </Link>
          </div>
        </div>
      </article>

      <section className="container-page pb-20">
        <h2 className="text-2xl">Noticias relacionadas</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {relacionadas.map((n, i) => (
            <Reveal as="li" key={n.slug} delay={i * 100}>
              <NewsCard noticia={n} />
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
