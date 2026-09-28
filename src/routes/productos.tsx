import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { PageHeader, MayoristasCTA } from "@/components/sections";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/cards";
import { productos } from "@/data/productos";
import { atributosCalidad } from "@/data/empresa";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos | Aguaymanto fresco y presentaciones comerciales" },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto peruano: aguaymanto fresco seleccionado, presentaciones para distribución y opciones especiales según el requerimiento del cliente.",
      },
      { property: "og:title", content: "Nuestros productos | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Aguaymanto fresco, presentaciones para distribución y opciones especiales.",
      },
      { property: "og:url", content: "/productos" },
    ],
    links: [{ rel: "canonical", href: "/productos" }],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestros productos"
        title="Aguaymanto peruano en la presentación que necesitas"
        description="Selección cuidadosa, empaque adecuado y atención directa para cada tipo de pedido."
      />

      <section id="catalogo" className="container-page py-20 lg:py-24">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productos.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 100}>
              <ProductCard producto={p} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Ficha técnica comparativa de nuestros productos
              </caption>
              <thead className="bg-cream text-forest">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Producto</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Presentación</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Peso</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Disponibilidad</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Precio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {productos.map((p) => (
                  <tr key={p.slug}>
                    <th scope="row" className="px-5 py-4 text-left font-semibold text-forest">
                      {p.nombre}
                    </th>
                    <td className="px-5 py-4 text-muted-foreground">{p.presentacion}</td>
                    <td className="px-5 py-4 text-muted-foreground">{p.peso}</td>
                    <td className="px-5 py-4 text-muted-foreground">{p.disponibilidad}</td>
                    <td className="px-5 py-4 text-muted-foreground">{p.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Los datos entre corchetes son marcadores pendientes de completar con la información
            oficial de la empresa.
          </p>
        </Reveal>
      </section>

      <section id="calidad" className="surface-cream py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Calidad que se nota"
              title="Atributos que cuidamos en cada entrega"
            />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {atributosCalidad.map((a, i) => (
              <Reveal as="li" key={a.titulo} delay={i * 70}>
                <article className="card-soft h-full p-6">
                  <BadgeCheck className="size-6 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 text-lg">{a.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
                </article>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link to="/contacto" className="btn-base btn-gold">
              Consultar productos
            </Link>
          </div>
        </div>
      </section>

      <div id="mayoristas">
        <MayoristasCTA />
      </div>
    </>
  );
}
