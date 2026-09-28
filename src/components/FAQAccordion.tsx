import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/empresa";

export function FAQAccordion() {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {faqs.map((f, i) => {
        const open = abierto === i;
        return (
          <div key={f.pregunta}>
            <h3>
              <button
                type="button"
                onClick={() => setAbierto(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-forest transition-colors hover:bg-cream"
              >
                {f.pregunta}
                <ChevronDown
                  aria-hidden="true"
                  className={`size-5 shrink-0 text-leaf transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              hidden={!open}
              className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
            >
              {f.respuesta}
            </div>
          </div>
        );
      })}
    </div>
  );
}
