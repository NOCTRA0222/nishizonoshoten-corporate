import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { currentPractices } from "@/lib/site";

export const metadata: Metadata = {
  title: "実践内容",
  description:
    "西園商店では、日々のEC運営や自社プロジェクトを通じて、業務改善・自動化・AI活用の実践を続けています。",
};

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <PageHeader
        title="実践内容"
        description="西園商店では、日々のEC運営や自社プロジェクトを通じて、業務改善・自動化・AI活用の実践を続けています。現在、公開できる内容から順次整理しています。"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {currentPractices.map((practice) => (
          <article key={practice.title} className="structured-card">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-charcoal">
                {practice.title}
              </h2>
              <span className="rounded-full bg-slate-blue/10 px-3 py-1 text-xs font-medium text-slate-blue">
                {practice.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
              {practice.description}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-charcoal/60">
        各取り組みの詳細は、公開できる内容から順次掲載していきます。
        完成された事例集ではなく、日々の実践を少しずつ整理していくページです。
      </p>
    </div>
  );
}
