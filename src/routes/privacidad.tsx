import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Política de privacidad sobre el tratamiento de los datos que nos compartes al enviar una consulta comercial.",
      },
      { property: "og:title", content: "Política de privacidad" },
      { property: "og:description", content: "Cómo tratamos los datos de nuestros clientes." },
      { property: "og:url", content: "/privacidad" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Política de privacidad" />
      <section className="container-page py-16 lg:py-20">
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p className="text-sm font-semibold text-ink">
            Texto inicial editable. Debe revisarse y completarse con la información legal oficial de
            {" "}
            {site.nombre}.
          </p>
          <h2 className="text-xl">Datos que recopilamos</h2>
          <p>
            Recopilamos únicamente los datos que nos proporcionas al completar el formulario de
            contacto o al escribirnos por WhatsApp, teléfono o correo electrónico.
          </p>
          <h2 className="text-xl">Uso de la información</h2>
          <p>
            Utilizamos estos datos para responder tu consulta, elaborar cotizaciones y mantener la
            comunicación comercial que solicites.
          </p>
          <h2 className="text-xl">Conservación y contacto</h2>
          <p>
            Puedes solicitar la actualización o eliminación de tus datos escribiéndonos a{" "}
            {site.contacto.correo}.
          </p>
        </div>
      </section>
    </>
  );
}
