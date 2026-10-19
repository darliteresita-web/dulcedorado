import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { NewsCard, ProductCard, ServiceCard } from "@/components/cards";
import { FAQSection, MayoristasCTA, PorQueElegirnos } from "@/components/sections";
import { productos } from "@/data/productos";
import { servicios } from "@/data/servicios";
import { noticias } from "@/data/noticias";
import heroCosecha from "@/assets/hero-cosecha.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú | Venta y producción de aguaymanto peruano - Limatambo" },
      {
        name: "description",
        content:
          "Producimos y comercializamos aguaymanto peruano seleccionado. Venta al por mayor y atención a restaurantes, tiendas y distribuidores. Solicita tu cotización.",
      },
      { property: "og:title", content: "Aguaymanto Perú | Venta y producción de aguaymanto" },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco de origen peruano para clientes particulares, empresas y compradores mayoristas.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Sobre la impresa */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="sobre la empresa"
              title="Comprometidos con la calidad del aguaymanto limatambeño"
              description="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <Link to="/quienes-somos" className="btn-base btn-outline-forest mt-8">
              Conoce quiénes somos
            </Link>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <img
                src={heroCosecha}
                alt="Agricultora peruana cosechando aguaymanto maduro en el campo"
                width={1920}
                height={1088}
                loading="lazy"
                className="aspect-[5/4] w-full rounded-2xl object-cover shadow-lift"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gold px-7 py-5 shadow-lift sm:block">
                <p className="font-display text-2xl font-semibold text-forest">100%</p>
                <p className="text-xs font-semibold tracking-wide text-forest/80 uppercase">
                  Origen peruano
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Productos */}
      <section className="surface-cream py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle
                eyebrow="Nuestros productos"
                title="Aguaymanto seleccionado para cada tipo de cliente"
              />
              <Link to="/productos" className="btn-base btn-outline-forest">
                Ver productos
              </Link>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 100}>
                <ProductCard producto={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Servicios */}
      <section className="container-page py-20 lg:py-24">
        <Reveal>
          <SectionTitle
            align="center"
            eyebrow="Nuestros servicios"
            title="Acompañamos a cada cliente en su compra"
            description="Desde una compra particular hasta el abastecimiento continuo de un negocio."
          />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.slice(0, 6).map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 80}>
              <ServiceCard servicio={s} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link to="/servicios" className="btn-base btn-outline-forest">
            Conocer nuestros servicios
          </Link>
        </div>
      </section>

      <MayoristasCTA />
      <PorQueElegirnos />

      {/* Galería */}
      <section className="surface-cream py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow="Galería"
              title="Del campo a la presentación final"
              description="Campos, plantaciones, cosecha, selección, empaque y producto terminado."
            />
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="container-page py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Noticias" title="Novedades y actualidad" />
            <Link to="/noticias" className="btn-base btn-outline-forest">
              Ver todas las noticias
            </Link>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((n, i) => (
            <Reveal as="li" key={n.slug} delay={i * 100}>
              <NewsCard noticia={n} />
            </Reveal>
          ))}
        </ul>
      </section>

      <FAQSection />

      <section className="container-page py-20 lg:py-24">
        <Reveal>
          <div className="rounded-3xl bg-forest px-8 py-14 text-center lg:px-16">
            <SectionTitle
              align="center"
              light
              eyebrow="Contacto"
              title="Conversemos sobre tu próximo pedido"
              description="Cuéntanos qué producto necesitas, en qué volumen y en qué ciudad. Te respondemos con una cotización."
            />
            <Link to="/contacto" className="btn-base btn-gold mt-8">
              Solicitar cotización
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
