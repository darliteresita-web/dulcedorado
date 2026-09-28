import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { NewsCard } from "@/components/cards";
import { noticias } from "@/data/noticias";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Novedades de la empresa, información sobre el cultivo del aguaymanto, mercado y producción agrícola peruana.",
      },
      { property: "og:title", content: "Noticias y actualidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Publicaciones sobre nuestra empresa, el aguaymanto y la agricultura peruana.",
      },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: Noticias,
});

function Noticias() {
  const categoriasPresentes = ["Todas", ...new Set(noticias.map((n) => n.categoria))];
  const [filtro, setFiltro] = useState("Todas");
  const visibles = filtro === "Todas" ? noticias : noticias.filter((n) => n.categoria === filtro);

  return (
    <>
      <PageHeader
        eyebrow="Noticias"
        title="Noticias y actualidad"
        description="Publicaciones sobre nuestra empresa, el aguaymanto y la agricultura peruana."
      />

      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar noticias por categoría">
          {categoriasPresentes.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFiltro(c)}
              aria-pressed={filtro === c}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filtro === c
                  ? "border-forest bg-forest text-cream"
                  : "border-border text-ink/70 hover:border-leaf hover:text-forest"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibles.map((n, i) => (
            <Reveal as="li" key={n.slug} delay={i * 90}>
              <NewsCard noticia={n} />
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-xs text-muted-foreground">
          Las publicaciones mostradas son contenido de ejemplo y pueden editarse o eliminarse.
        </p>
      </section>
    </>
  );
}
