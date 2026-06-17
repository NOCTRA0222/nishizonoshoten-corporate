import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SelfEcProjectCard } from "@/components/ProjectCard";
import { WorksCard } from "@/components/WorksCard";
import { site, works } from "@/lib/site";

export const metadata: Metadata = {
  title: "プロジェクト",
  description:
    "西園商店が取り組む、自社ペットアパレルブランド NOCTRA のEC運営に加え、業務自動化・SNS運用など、自社内で整えている仕組みを掲載します。",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <PageHeader
        title="プロジェクト"
        description={`${site.lead} 自社内での EC 運営と、日々の業務を支える自動化・整理の仕組みを掲載しています。`}
      />

      <section id="projects" className="scroll-mt-8">
        <h2 className="mb-2 text-lg font-semibold text-charcoal">プロジェクト</h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-charcoal/65">
          西園商店の屋号のもとで進めている、自社内の取り組みです。
        </p>
        <div className="grid max-w-xl gap-6">
          <SelfEcProjectCard />
        </div>
      </section>

      <section
        id="works"
        className="section-divider mt-14 scroll-mt-8 pt-14"
      >
        <h2 className="mb-2 text-lg font-semibold text-charcoal">
          自社で整えている仕組み
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-charcoal/65">
          自社内で試しながら整えている業務改善・自動化の取り組みです。公開できる範囲で、整理内容を記載しています。
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
