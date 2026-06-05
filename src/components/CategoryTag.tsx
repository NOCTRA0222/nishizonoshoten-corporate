import type { WorkCategory } from "@/lib/site";
import { workCategories } from "@/lib/site";

type CategoryTagProps = {
  category: WorkCategory;
  size?: "sm" | "md";
};

export function CategoryTag({ category, size = "md" }: CategoryTagProps) {
  const { label, marker } = workCategories[category];
  const sizeClass =
    size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded border border-charcoal/10 bg-charcoal/[0.03] font-medium text-charcoal/75 ${sizeClass}`}
    >
      <span aria-hidden className="text-slate-blue">
        {marker}
      </span>
      {label}
    </span>
  );
}
