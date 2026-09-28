import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { FAQAccordion } from "./FAQAccordion";
import { ValueCard } from "./cards";
import { razones } from "@/data/empresa";

export function MayoristasCTA() {
  const puntos = [
    "Pedidos por volumen",
    "Atención personalizada",
    "Presentaciones comerciales",
    "Coordinación de entregas",
    "Cotizaciones",
  ];

  return (
    <section className="bg-forest py-20 text-cream lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionTitle
            light
            eyebrow="Clientes mayoristas"
            title="¿Buscas un proveedor de aguaymanto?"
            description="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
          />
          <Link to="/contacto" className="btn-base btn-gold mt-8">
            Solicitar cotización
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:mt-0">
            {puntos.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-xl border border-cream/15 bg-cream/5 px-5 py-4 text-sm font-medium"
              >
                <Check className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function PorQueElegirnos() {
  return (
    <section className="container-page py-20 lg:py-24">
      <Reveal>
        <SectionTitle
          align="center"
          eyebrow="¿Por qué elegirnos?"
          title="Razones para trabajar con nosotros"
        />
      </Reveal>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {razones.map((r, i) => (
          <Reveal as="li" key={r.titulo} delay={i * 80}>
            <ValueCard numero={`0${i + 1}`} titulo={r.titulo} texto={r.texto} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="surface-cream py-20 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas antes de comprar"
            description="Si no encuentras lo que buscas, escríbenos por WhatsApp o desde el formulario de contacto."
          />
        </Reveal>
        <Reveal delay={120}>
          <FAQAccordion />
        </Reveal>
      </div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-forest py-16 lg:py-20">
      <div className="container-page">
        <SectionTitle as="h1" light eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
