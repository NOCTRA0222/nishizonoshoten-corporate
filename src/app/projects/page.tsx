import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { NoctraProjectCard } from "@/components/ProjectCard";
import { WorksCard } from "@/components/WorksCard";
import { site, works } from "@/lib/site";

export const metadata: Metadata = {
  title: "プロジェクト・実績",
  description:
    "西園商店のプロジェクトと実績。NOCTRA の EC 運営に加え、業務自動化・SNS 運用・画像加工など自社で構築した仕組みを掲載します。",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <PageHeader
        title="プロジェクト・実績"
        description={`${site.lead} 自社事業での EC 運営（プロジェクト）と、日々の業務を支える自動化・整理の仕組み（実績）を掲載しています。`}
      />

      <section id="projects" className="scroll-mt-8">
        <h2 className="mb-2 text-lg font-semibold text-charcoal">プロジェクト</h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-charcoal/65">
          西園商店の屋号のもとで育てている事業・ブランドです。
        </p>
        <div className="grid max-w-xl gap-6">
          <NoctraProjectCard />
        </div>
      </section>

      <section
        id="works"
        className="section-divider mt-14 scroll-mt-8 pt-14"
      >
        <h2 className="mb-2 text-lg font-semibold text-charcoal">実績</h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-charcoal/65">
          自社・運用中の業務改善・自動化の事例です。クライアント名の代わりに、構築内容と得られた効果を記載しています。
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {works.map((work) => (
            <WorksCard key={work.title} {...work} />
          ))}
        </div>
      </section>
    </div>
  );
}
