import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Eye, Leaf, Target, Users } from "lucide-react";
import { PageHeader } from "@/components/sections";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { ValueCard } from "@/components/cards";
import { Gallery } from "@/components/Gallery";
import { compromiso, historia, mision, valores, vision } from "@/data/empresa";
import heroCampo from "@/assets/hero-campo.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Empresa peruana de aguaymanto" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa, historia, misión, visión, valores y compromiso en la producción y comercialización de aguaymanto peruano.",
      },
      { property: "og:title", content: "Quiénes somos | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Una empresa con raíces en el campo peruano dedicada al aguaymanto de calidad.",
      },
      { property: "og:url", content: "/quienes-somos" },
    ],
    links: [{ rel: "canonical", href: "/quienes-somos" }],
  }),
  component: QuienesSomos,
});

const iconosCompromiso = [Leaf, Users, Compass];

function QuienesSomos() {
  return (
    <>
      <PageHeader
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        description="Producción, selección y comercialización de aguaymanto con un enfoque cercano y profesional."
      />

      {/* Nuestra empresa */}
      <section id="nuestra-empresa" className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle eyebrow="Nuestra empresa" title="Aguaymanto peruano, trabajado con criterio" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa dedicada a la producción, comercialización y venta de aguaymanto.
                Nuestro trabajo abarca desde el campo hasta la entrega del producto al cliente.
              </p>
              <p>
                Comercializamos aguaymanto fresco seleccionado, presentaciones orientadas a la
                distribución comercial y opciones especiales según el requerimiento de cada cliente.
              </p>
              <p>
                Atendemos a clientes particulares y también a restaurantes, hoteles, tiendas,
                distribuidores y compradores mayoristas que buscan un proveedor confiable.
              </p>
              <p>
                Nos diferencia la atención directa, el cuidado en la selección del fruto y el
                compromiso con lo que acordamos con cada cliente.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <img
              src={heroCampo}
              alt="Plantación de aguaymanto en el campo peruano con montañas al fondo"
              width={1920}
              height={1088}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* Historia */}
      <section id="nuestra-historia" className="surface-cream py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="Nuestra historia"
              title="El recorrido de nuestra empresa"
              description="Contenido inicial editable. Será reemplazado por la historia real de la empresa."
            />
          </Reveal>
          <ol className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute top-5 right-0 left-0 hidden h-px bg-border lg:block"
            />
            {historia.map((h, i) => (
              <Reveal as="li" key={h.numero} delay={i * 110} className="relative">
                <span
                  aria-hidden="true"
                  className="mb-6 hidden size-3 rounded-full bg-gold ring-4 ring-cream lg:block"
                />
                <p className="font-display text-3xl font-semibold text-gold">{h.numero}</p>
                <h3 className="mt-2 text-lg">{h.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article id="mision" className="h-full rounded-2xl bg-forest p-9 text-cream">
              <span className="grid size-12 place-items-center rounded-xl bg-cream/10" aria-hidden="true">
                <Target className="size-6 text-gold" />
              </span>
              <h2 className="mt-6 text-2xl text-cream">Nuestra Misión</h2>
              <p className="mt-4 leading-relaxed text-cream/80">{mision}</p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article id="vision" className="h-full rounded-2xl border border-border bg-cream p-9">
              <span className="grid size-12 place-items-center rounded-xl bg-gold/20" aria-hidden="true">
                <Eye className="size-6 text-leaf" />
              </span>
              <h2 className="mt-6 text-2xl">Nuestra Visión</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="surface-cream py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionTitle align="center" eyebrow="Nuestros valores" title="Lo que guía nuestro trabajo" />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <Reveal as="li" key={v.titulo} delay={i * 70}>
                <ValueCard titulo={v.titulo} texto={v.texto} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="container-page py-20 lg:py-24">
        <Reveal>
          <SectionTitle align="center" eyebrow="Nuestro compromiso" title="Tres pilares de nuestro trabajo" />
        </Reveal>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {compromiso.map((c, i) => {
            const Icon = iconosCompromiso[i];
            return (
              <Reveal as="li" key={c.titulo} delay={i * 100}>
                <article className="card-soft h-full p-8">
                  <span className="grid size-12 place-items-center rounded-xl bg-cream" aria-hidden="true">
                    <Icon className="size-6 text-leaf" />
                  </span>
                  <h3 className="mt-5 text-lg">{c.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* Galería */}
      <section className="surface-cream py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" />
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
          <div className="mt-12 text-center">
            <Link to="/contacto" className="btn-base btn-gold">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
