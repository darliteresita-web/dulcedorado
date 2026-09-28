import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCampo from "@/assets/hero-campo.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";

type Slide = {
  imagen: string;
  alt: string;
  titulo: string;
  texto?: string;
  acciones: { label: string; to: string; variant: "gold" | "outline" }[];
};

const slides: Slide[] = [
  {
    imagen: heroAguaymanto,
    alt: "Aguaymanto peruano fresco en cajón de madera con los Andes de fondo",
    titulo: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    texto:
      "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    acciones: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "gold" },
      { label: "Solicitar cotización", to: "/contacto", variant: "outline" },
    ],
  },
  {
    imagen: heroCampo,
    alt: "Plantación de aguaymanto en terrazas andinas del Perú al amanecer",
    titulo: "Del campo peruano a nuevos mercados",
    texto:
      "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    acciones: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "gold" }],
  },
  {
    imagen: heroCosecha,
    alt: "Cosecha manual de aguaymanto maduro en una canasta de fibra natural",
    titulo: "Natural, versátil y de excelente calidad",
    acciones: [{ label: "Ver productos", to: "/productos", variant: "gold" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  const go = useCallback((i: number) => setIndex(((i % slides.length) + slides.length) % slides.length), []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Presentación de la empresa"
      aria-roledescription="carrusel"
      className="relative h-[86svh] min-h-[520px] w-full overflow-hidden bg-forest"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.titulo}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={s.imagen}
            alt={s.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className="size-full object-cover"
            style={{
              transform: i === index ? "scale(1.06)" : "scale(1)",
              transition: "transform 7000ms ease-out",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, oklch(0.25 0.05 154 / 0.88) 0%, oklch(0.25 0.05 154 / 0.62) 42%, oklch(0.25 0.05 154 / 0.18) 100%)",
            }}
          />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container-page">
          <div key={index} className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700">
            <p className="eyebrow text-gold-soft">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-gold-soft" />
              Producción y comercialización
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-balance text-cream sm:text-5xl lg:text-6xl">
              {slides[index]!.titulo}
            </h1>
            {slides[index]!.texto ? (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
                {slides[index]!.texto}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              {slides[index]!.acciones.map((a) => (
                <Link
                  key={a.label}
                  to={a.to}
                  className={`btn-base ${a.variant === "gold" ? "btn-gold" : "btn-outline-light"}`}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.titulo}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-current={i === index}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === index ? "2.75rem" : "1rem",
              backgroundColor: i === index ? "var(--color-gold)" : "oklch(1 0 0 / 0.45)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
