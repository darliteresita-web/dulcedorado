import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader, FAQSection } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappUrl } from "@/config/site";

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>) => ({
    producto: typeof search.producto === "string" ? search.producto : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        name: "description",
        content:
          "Contáctanos por WhatsApp, teléfono, correo o formulario para cotizar aguaymanto fresco, pedidos al por mayor y presentaciones comerciales.",
      },
      { property: "og:title", content: "Contacto | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Solicita una cotización de aguaymanto peruano. Atendemos consultas comerciales.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  const { producto } = Route.useSearch();

  const datos = [
    {
      icono: MessageCircle,
      label: "WhatsApp",
      valor: site.contacto.whatsapp,
      href: whatsappUrl(),
      externo: true,
    },
    {
      icono: Phone,
      label: "Teléfono",
      valor: site.contacto.telefono,
      href: `tel:${site.contacto.telefonoLink}`,
    },
    {
      icono: Mail,
      label: "Correo electrónico",
      valor: site.contacto.correo,
      href: `mailto:${site.contacto.correo}`,
    },
    { icono: MapPin, label: "Dirección", valor: `${site.contacto.direccion}, ${site.contacto.ciudad}` },
    { icono: Clock, label: "Horario de atención", valor: site.contacto.horario },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        description="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <ul className="space-y-4">
              {datos.map((d) => {
                const Icon = d.icono;
                const contenido = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream" aria-hidden="true">
                      <Icon className="size-5 text-leaf" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold tracking-[0.14em] text-leaf uppercase">
                        {d.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink">{d.valor}</span>
                    </span>
                  </>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.externo ? "_blank" : undefined}
                        rel={d.externo ? "noopener noreferrer" : undefined}
                        className="card-soft flex items-center gap-4 p-5"
                      >
                        {contenido}
                      </a>
                    ) : (
                      <div className="card-soft flex items-center gap-4 p-5">{contenido}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-forest mt-6 w-full"
            >
              Consultar por WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm productoInicial={producto} />
          </Reveal>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
