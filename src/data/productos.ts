import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import productoEmpaque from "@/assets/producto-empaque.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";

export type Producto = {
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
  cta: string;
  presentacion: string;
  peso: string;
  disponibilidad: string;
  precio: string;
  caracteristicas: string[];
};

/** Catálogo editable. Agrega nuevos productos copiando un bloque. */
export const productos: Producto[] = [
  {
    slug: "aguaymanto-fresco",
    nombre: "Aguaymanto fresco",
    descripcion:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    imagen: heroAguaymanto,
    alt: "Aguaymanto fresco con cáliz dorado en cajón de madera frente a campos andinos",
    cta: "Solicitar información",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Selección manual", "Producto de origen peruano", "Manejo cuidadoso del fruto"],
  },
  {
    slug: "aguaymanto-distribucion",
    nombre: "Aguaymanto para distribución",
    descripcion: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    imagen: productoEmpaque,
    alt: "Aguaymanto empacado en presentación comercial y caja de cartón para distribución",
    cta: "Consultar",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Volúmenes comerciales", "Empaque adecuado al transporte", "Coordinación de entregas"],
  },
  {
    slug: "presentaciones-especiales",
    nombre: "Presentaciones especiales",
    descripcion: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    imagen: heroCosecha,
    alt: "Cosecha manual de aguaymanto peruano recogido en canasta de fibra natural",
    cta: "Consultar presentación",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Requerimientos a medida", "Evaluación por volumen", "Asesoría comercial"],
  },
];
