/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 * Edita aquí los datos de la empresa: todo el sitio se actualiza solo.
 * Los valores entre [CORCHETES] son marcadores pendientes de reemplazar.
 */

export const site = {
  nombre: "[NOMBRE DE LA EMPRESA]",
  marca: "AGUAYMANTO PERÚ",
  tagline: "Calidad y compromiso desde el campo peruano.",
  /** ID del video de YouTube del botón "Ver video" (video de ejemplo, reemplazar por el oficial). */
  videoYoutubeId: "aG-EexHoO10",
  descripcion:
    "Producción, comercialización y venta de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y mayoristas.",

  contacto: {
    whatsapp: "[WHATSAPP]",
    // Solo dígitos, con código de país. Ej: 51999888777
    whatsappNumero: "51999999999",
    whatsappMensaje:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
    telefono: "[TELÉFONO]",
    telefonoLink: "+51999999999",
    correo: "[CORREO]",
    direccion: "[DIRECCIÓN]",
    ciudad: "[CIUDAD]",
    horario: "[HORARIO DE ATENCIÓN]",
  },

  redes: [
    { nombre: "Facebook", url: "#" },
    { nombre: "Instagram", url: "#" },
    { nombre: "TikTok", url: "#" },
    { nombre: "LinkedIn", url: "#" },
  ],
} as const;

export const whatsappUrl = (mensaje: string = site.contacto.whatsappMensaje) =>
  `https://wa.me/${site.contacto.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;

export const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
