export type Servicio = {
  slug: string;
  titulo: string;
  descripcion: string;
  icono: "bag" | "boxes" | "chef" | "store" | "settings" | "chat";
};

export const servicios: Servicio[] = [
  {
    slug: "venta",
    titulo: "Venta de aguaymanto",
    descripcion: "Venta de producto para clientes particulares y comerciales.",
    icono: "bag",
  },
  {
    slug: "venta-mayorista",
    titulo: "Venta al por mayor",
    descripcion: "Atención de pedidos de mayor volumen.",
    icono: "boxes",
  },
  {
    slug: "restaurantes",
    titulo: "Atención a restaurantes",
    descripcion:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
    icono: "chef",
  },
  {
    slug: "tiendas-distribuidores",
    titulo: "Atención a tiendas y distribuidores",
    descripcion:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
    icono: "store",
  },
  {
    slug: "pedidos-personalizados",
    titulo: "Pedidos personalizados",
    descripcion:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
    icono: "settings",
  },
  {
    slug: "asesoria",
    titulo: "Asesoría comercial",
    descripcion: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
    icono: "chat",
  },
];
