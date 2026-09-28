import { site, whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp a ${site.marca}`}
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pr-5 pl-3 shadow-lift transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <span className="grid size-8 place-items-center rounded-full bg-white/25" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="size-5 fill-white">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.46 3.44 1.32 4.94L2 22l5.3-1.38a9.87 9.87 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm5.8 14.06c-.25.69-1.45 1.32-2 1.36-.51.05-1.16.07-1.87-.12-.43-.13-.98-.31-1.69-.62-2.98-1.29-4.92-4.29-5.07-4.49-.15-.2-1.21-1.61-1.21-3.07 0-1.46.76-2.18 1.04-2.48.27-.3.6-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.84 2.06.91 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.64-.08.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.12.07.72-.18 1.4Z" />
        </svg>
      </span>
      <span className="text-sm font-semibold text-white">¿Necesitas información?</span>
    </a>
  );
}
