import Link from "next/link";
import { getSelfEcUrl, isSelfEcEnabled, selfEcProject } from "@/lib/site";

export function SelfEcProjectCard() {
  const enabled = isSelfEcEnabled();
  const href = getSelfEcUrl();

  return (
    <article className="structured-card">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-charcoal">
          {selfEcProject.name}
        </h3>
        <span className="rounded-full bg-slate-blue/10 px-3 py-1 text-xs font-medium text-slate-blue">
          {enabled ? "公開中" : "自社内で実践"}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-blue">{selfEcProject.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
        {selfEcProject.description}
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
          公開情報は、準備が整い次第、必要な範囲で整理して掲載します。
        </p>
      )}
    </article>
  );
}
