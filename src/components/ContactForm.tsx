import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

const productosInteres = [
  "Aguaymanto fresco",
  "Aguaymanto para distribución",
  "Presentaciones especiales",
  "Aún no lo defino",
];

const campo =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-leaf focus:outline-none";
const etiqueta = "block text-sm font-semibold text-forest";

export function ContactForm({ productoInicial = "" }: { productoInicial?: string }) {
  const [enviado, setEnviado] = useState(false);
  const [errores, setErrores] = useState<Record<string, string>>({});

  // Punto de integración futuro: enviar estos datos a un servicio de email, CRM o backend.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nuevos: Record<string, string> = {};

    const nombre = String(data.get("nombre") ?? "").trim();
    const correo = String(data.get("correo") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    if (nombre.length < 3) nuevos["nombre"] = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo))
      nuevos["correo"] = "Ingresa un correo electrónico válido.";
    if (telefono.replace(/\D/g, "").length < 6)
      nuevos["telefono"] = "Ingresa un número de teléfono válido.";
    if (mensaje.length < 10) nuevos["mensaje"] = "Cuéntanos brevemente tu consulta (mín. 10 caracteres).";

    setErrores(nuevos);
    if (Object.keys(nuevos).length === 0) setEnviado(true);
  };

  if (enviado) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-leaf/30 bg-cream p-10 text-center"
      >
        <CheckCircle2 className="size-12 text-leaf" aria-hidden="true" />
        <h3 className="mt-5 text-xl">Consulta enviada</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <button type="button" onClick={() => setEnviado(false)} className="btn-base btn-outline-forest mt-7">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  const Error = ({ name }: { name: string }) =>
    errores[name] ? (
      <p id={`${name}-error`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
        {errores[name]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nombre" className={etiqueta}>
            Nombre completo *
          </label>
          <input
            id="nombre"
            name="nombre"
            className={campo}
            placeholder="Tu nombre y apellido"
            aria-invalid={!!errores["nombre"]}
            aria-describedby={errores["nombre"] ? "nombre-error" : undefined}
          />
          <Error name="nombre" />
        </div>

        <div>
          <label htmlFor="empresa" className={etiqueta}>
            Empresa
          </label>
          <input id="empresa" name="empresa" className={campo} placeholder="Nombre de tu empresa" />
        </div>

        <div>
          <label htmlFor="ciudad" className={etiqueta}>
            Ciudad
          </label>
          <input id="ciudad" name="ciudad" className={campo} placeholder="Ciudad de entrega" />
        </div>

        <div>
          <label htmlFor="correo" className={etiqueta}>
            Correo electrónico *
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            className={campo}
            placeholder="nombre@correo.com"
            aria-invalid={!!errores["correo"]}
            aria-describedby={errores["correo"] ? "correo-error" : undefined}
          />
          <Error name="correo" />
        </div>

        <div>
          <label htmlFor="telefono" className={etiqueta}>
            Teléfono *
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            className={campo}
            placeholder="+51 999 999 999"
            aria-invalid={!!errores["telefono"]}
            aria-describedby={errores["telefono"] ? "telefono-error" : undefined}
          />
          <Error name="telefono" />
        </div>

        <div>
          <label htmlFor="tipoCliente" className={etiqueta}>
            Tipo de cliente
          </label>
          <select id="tipoCliente" name="tipoCliente" className={campo} defaultValue="">
            <option value="">Selecciona una opción</option>
            {tiposCliente.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="producto" className={etiqueta}>
            Producto de interés
          </label>
          <select
            id="producto"
            name="producto"
            className={campo}
            defaultValue={productoInicial || ""}
          >
            <option value="">Selecciona una opción</option>
            {productoInicial && !productosInteres.includes(productoInicial) ? (
              <option>{productoInicial}</option>
            ) : null}
            {productosInteres.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cantidad" className={etiqueta}>
            Cantidad aproximada
          </label>
          <input id="cantidad" name="cantidad" className={campo} placeholder="Ej. 50 kg por semana" />
        </div>

        <div>
          <label htmlFor="asunto" className={etiqueta}>
            Asunto
          </label>
          <input id="asunto" name="asunto" className={campo} placeholder="Motivo de tu consulta" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className={etiqueta}>
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            className={campo}
            placeholder="Cuéntanos qué necesitas: producto, volumen, frecuencia y ciudad de entrega."
            aria-invalid={!!errores["mensaje"]}
            aria-describedby={errores["mensaje"] ? "mensaje-error" : undefined}
          />
          <Error name="mensaje" />
        </div>
      </div>

      <button type="submit" className="btn-base btn-gold mt-7 w-full sm:w-auto">
        Enviar consulta
      </button>
      <p className="mt-3 text-xs text-muted-foreground">* Campos obligatorios.</p>
    </form>
  );
}
