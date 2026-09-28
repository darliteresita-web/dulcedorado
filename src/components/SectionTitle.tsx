import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`eyebrow ${light ? "text-gold-soft" : ""}`}>
          <span
            aria-hidden="true"
            className={`h-px w-8 ${light ? "bg-gold-soft" : "bg-gold"} inline-block`}
          />
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={`mt-4 text-3xl leading-tight text-balance sm:text-4xl lg:text-[2.6rem] ${
          light ? "text-cream" : ""
        }`}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-cream/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
