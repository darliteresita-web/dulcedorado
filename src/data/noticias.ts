import heroCampo from "@/assets/hero-campo.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";
import productoEmpaque from "@/assets/producto-empaque.jpg";

export type Noticia = {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string;
  fechaISO: string;
  autor: string;
  imagen: string;
  alt: string;
  contenido: string[];
};

/** CONTENIDO DE EJEMPLO — editable o eliminable. */
export const noticias: Noticia[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    titulo: "El aguaymanto peruano y su presencia en nuevos mercados",
    resumen:
      "Una mirada al interés creciente por el aguaymanto y a las oportunidades comerciales que abre para los productores del país.",
    categoria: "Mercado",
    fecha: "Contenido de ejemplo",
    fechaISO: "2026-01-15",
    autor: "[AUTOR]",
    imagen: heroCampo,
    alt: "Plantación de aguaymanto en ladera andina peruana al amanecer",
    contenido: [
      "Este artículo es contenido de demostración y puede editarse o eliminarse desde el archivo de noticias del proyecto.",
      "El aguaymanto es un fruto originario de los Andes que ha despertado interés en distintos mercados por su sabor característico y su versatilidad en la gastronomía.",
      "Para una empresa productora y comercializadora, atender ese interés implica cuidar la selección del fruto, su presentación y la coordinación con cada cliente.",
    ],
  },
  {
    slug: "cultivo-del-aguaymanto",
    titulo: "Conoce más sobre el cultivo del aguaymanto",
    resumen:
      "Cómo se desarrolla el cultivo, qué condiciones favorecen al fruto y por qué el campo peruano es un entorno adecuado.",
    categoria: "Agricultura",
    fecha: "Contenido de ejemplo",
    fechaISO: "2026-01-08",
    autor: "[AUTOR]",
    imagen: heroCosecha,
    alt: "Manos de agricultora peruana cosechando aguaymanto maduro",
    contenido: [
      "Este artículo es contenido de demostración y puede editarse o eliminarse desde el archivo de noticias del proyecto.",
      "El aguaymanto crece envuelto en un cáliz que protege el fruto hasta el momento de la cosecha, lo que ayuda a conservar su presentación.",
      "El trabajo en campo, la cosecha oportuna y el manejo posterior son etapas determinantes en la calidad final del producto.",
    ],
  },
  {
    slug: "calidad-y-produccion-responsable",
    titulo: "Nuestra apuesta por la calidad y la producción responsable",
    resumen:
      "Los criterios con los que trabajamos la selección, el empaque y la atención comercial de nuestro aguaymanto.",
    categoria: "Noticias de la empresa",
    fecha: "Contenido de ejemplo",
    fechaISO: "2026-01-02",
    autor: "[AUTOR]",
    imagen: productoEmpaque,
    alt: "Aguaymanto empacado en presentación comercial lista para distribución",
    contenido: [
      "Este artículo es contenido de demostración y puede editarse o eliminarse desde el archivo de noticias del proyecto.",
      "La calidad es un trabajo continuo: empieza en el campo y termina en la conversación con cada cliente sobre lo que necesita.",
      "Nuestro compromiso es mantener una presentación consistente y una atención cercana en cada pedido.",
    ],
  },
];

export const categorias = [
  "Noticias de la empresa",
  "Agricultura",
  "Aguaymanto",
  "Mercado",
  "Eventos",
  "Innovación",
  "Producción",
];
