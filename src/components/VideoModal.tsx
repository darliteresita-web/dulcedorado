import { useEffect } from "react";
import { X } from "lucide-react";

export function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video sobre el aguaymanto"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        autoFocus
        aria-label="Cerrar video"
        className="absolute top-4 right-4 z-10 grid size-12 place-items-center rounded-full bg-cream/10 text-cream transition hover:bg-gold hover:text-forest"
      >
        <X className="size-6" />
      </button>
      <iframe
        className="size-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title="Video sobre el aguaymanto"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
