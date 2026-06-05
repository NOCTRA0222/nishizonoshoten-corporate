import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  divided?: boolean;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  divided = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 ${divided ? "section-divider" : ""} ${className}`.trim()}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-charcoal">{title}</h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/65">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
