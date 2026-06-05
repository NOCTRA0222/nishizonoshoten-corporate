import type { WorkEntry } from "@/lib/site";
import { CategoryTag } from "@/components/CategoryTag";

type WorksCardProps = WorkEntry;

export function WorksTeaser({ title, category, description }: WorkEntry) {
  return (
    <li className="py-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-sm font-semibold leading-snug text-charcoal">
          {title}
        </h3>
        <CategoryTag category={category} size="sm" />
      </div>
      <p className="mt-1 line-clamp-1 text-sm leading-relaxed text-charcoal/70">
        {description}
      </p>
    </li>
  );
}

export function WorksCard({
  title,
  category,
  status,
  description,
}: WorksCardProps) {
  return (
    <article className="structured-card flex h-full flex-col">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-base font-semibold leading-snug text-charcoal">
          {title}
        </h3>
        <CategoryTag category={category} size="sm" />
      </div>
      <p className="mt-2 text-xs font-medium text-slate-blue">{status}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">
        {description}
      </p>
    </article>
  );
}
