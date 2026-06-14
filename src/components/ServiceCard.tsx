type ServiceCardProps = {
  title: string;
  description: string;
  body?: string;
  bullets?: readonly string[];
  secondary?: boolean;
  teaser?: boolean;
};

export function ServiceCard({
  title,
  description,
  body,
  bullets,
  secondary,
  teaser = false,
}: ServiceCardProps) {
  return (
    <article
      className={`structured-card ${
        secondary ? "border-dashed" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
        {secondary ? (
          <span className="rounded-full bg-charcoal/5 px-2.5 py-1 text-xs font-medium text-charcoal/60">
            支援領域
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
        {description}
      </p>
      {!teaser && body ? (
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
          {body}
        </p>
      ) : null}
      {!teaser && bullets && bullets.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {bullets.map((item) => (
            <li key={item}>
              <span className="inline-block rounded bg-slate-blue/10 px-2 py-0.5 text-xs text-slate-blue">
                {item}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
