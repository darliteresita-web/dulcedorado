import { X } from "lucide-react";
import { useEffect, useState } from "react";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCampo from "@/assets/hero-campo.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";
import productoEmpaque from "@/assets/producto-empaque.jpg";

const fotos = [
  { src: heroCampo, alt: "Campos y plantaciones de aguaymanto en los Andes peruanos", span: "lg:col-span-2 lg:row-span-2" },
  { src: heroAguaymanto, alt: "Aguaymanto fresco seleccionado en cajón de madera", span: "" },
  { src: heroCosecha, alt: "Cosecha y selección manual del aguaymanto", span: "" },
  { src: productoEmpaque, alt: "Producto empacado listo para distribución", span: "lg:col-span-2" },
];

export function Gallery() {
  const [activa, setActiva] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiva(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <ul className="grid auto-rows-[190px] grid-cols-2 gap-4 lg:grid-cols-4">
        {fotos.map((f, i) => (
          <li key={f.alt} className={f.span}>
            <button
              type="button"
              onClick={() => setActiva(i)}
              className="group size-full overflow-hidden rounded-xl"
              aria-label={`Ampliar imagen: ${f.alt}`}
            >
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {activa !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={fotos[activa].alt}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-4 animate-in fade-in duration-200"
          onClick={() => setActiva(null)}
        >
          <button
            type="button"
            onClick={() => setActiva(null)}
            aria-label="Cerrar imagen"
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <X className="size-5" />
          </button>
          <img
            src={fotos[activa].src}
            alt={fotos[activa].alt}
            className="max-h-[85vh] w-auto rounded-xl object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
