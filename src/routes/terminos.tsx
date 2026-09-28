import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections";
import { site } from "@/config/site";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Términos y condiciones de uso del sitio web y de las consultas comerciales realizadas a través de él.",
      },
      { property: "og:title", content: "Términos y condiciones" },
      { property: "og:description", content: "Condiciones de uso del sitio y de las consultas." },
      { property: "og:url", content: "/terminos" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terminos" }],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Términos y condiciones" />
      <section className="container-page py-16 lg:py-20">
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p className="text-sm font-semibold text-ink">
            Texto inicial editable. Debe revisarse y completarse con la información legal oficial de{" "}
            {site.nombre}.
          </p>
          <h2 className="text-xl">Uso del sitio</h2>
          <p>
            La información publicada tiene carácter informativo y comercial. Las presentaciones,
            disponibilidad y precios se confirman en cada cotización.
          </p>
          <h2 className="text-xl">Consultas y pedidos</h2>
          <p>
            El envío de una consulta no constituye un pedido en firme. Cada operación se confirma de
            forma directa con nuestro equipo comercial.
          </p>
          <h2 className="text-xl">Contacto</h2>
          <p>Para consultas sobre estos términos escríbenos a {site.contacto.correo}.</p>
        </div>
      </section>
    </>
  );
}
