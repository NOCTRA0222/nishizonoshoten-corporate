import Link from "next/link";
import { getNoctraUrl, isNoctraEnabled, noctraProject } from "@/lib/site";

export function NoctraProjectCard() {
  const enabled = isNoctraEnabled();
  const href = getNoctraUrl();

  return (
    <article className="structured-card">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-charcoal">
          {noctraProject.name}
        </h3>
        <span className="rounded-full bg-slate-blue/10 px-3 py-1 text-xs font-medium text-slate-blue">
          {enabled ? "公開中" : "自社実践"}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-blue">{noctraProject.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
        {noctraProject.description}
      </p>
      {enabled ? (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-slate-blue hover:underline"
        >
          サイトを見る →
        </Link>
      ) : (
        <p className="mt-4 text-sm text-charcoal/50">
          ブランドサイトは準備が整い次第、公開情報を整理して掲載します。
        </p>
      )}
    </article>
  );
}
