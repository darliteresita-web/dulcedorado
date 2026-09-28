import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, MayoristasCTA, PorQueElegirnos, FAQSection } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/cards";
import { servicios } from "@/data/servicios";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Venta mayorista de aguaymanto y atención a empresas" },
      {
        name: "description",
        content:
          "Venta de aguaymanto al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Nuestros servicios | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Servicios comerciales alrededor del aguaymanto: mayoreo, gastronomía, distribución y pedidos a medida.",
      },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestros servicios"
        title="Soluciones comerciales alrededor del aguaymanto"
        description="Atendemos desde compras particulares hasta el abastecimiento continuo de negocios."
      />

      <section className="container-page py-20 lg:py-24">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 80} className="scroll-mt-28">
              <div id={s.slug}>
                <ServiceCard servicio={s} />
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <MayoristasCTA />
      <PorQueElegirnos />
      <FAQSection />
    </>
  );
}
