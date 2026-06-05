import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { NoctraProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { SystemFlow } from "@/components/SystemFlow";
import { WorksTeaser } from "@/components/WorksCard";
import { clarityChips, services, site, works } from "@/lib/site";

const featuredWorks = works.filter((w) => w.featured);

export default function HomePage() {
  return (
    <>
      <section className="bg-charcoal text-off-white">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-24">
          <p className="text-sm font-medium tracking-wide text-off-white/70">
            個人事業 — デザイン制作会社ではありません
          </p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight text-off-white sm:text-4xl">
            {site.tagline}
          </h1>
          <p className="mt-2 text-sm font-medium text-off-white/60 sm:text-base">
            {site.name}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-off-white/85 sm:mt-6 sm:text-lg">
            {site.lead}
          </p>
          <ul
            className="mt-8 flex flex-wrap gap-2"
            aria-label="ご依頼いただける領域"
          >
            {clarityChips.map((chip) => (
              <li key={chip}>
                <span className="inline-block rounded-full border border-off-white/25 bg-off-white/10 px-3 py-1 text-sm font-medium text-off-white">
                  {chip}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">お問い合わせ</ButtonLink>
            <ButtonLink href="/services" variant="light">
              事業内容を見る
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <Section
          title="仕組みの流れ"
          subtitle="現場の手順に合わせて、整理から運用定着まで一貫して設計します。"
        >
          <SystemFlow />
        </Section>

        <Section
          title="事業内容"
          subtitle="EC・自動化・AI・仕組み化を中心に、事業が回る環境づくりをお手伝いします。"
          divided
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} teaser />
            ))}
          </div>
          <p className="mt-6">
            <Link
              href="/services"
              className="text-sm font-medium text-slate-blue hover:underline"
            >
              事業内容の詳細 →
            </Link>
          </p>
        </Section>

        <Section
          title="実績"
          subtitle="自社事業の運用のなかで構築・運用している仕組みの一部です。"
          divided
        >
          <ul className="divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-white px-4">
            {featuredWorks.map((work) => (
              <WorksTeaser key={work.title} {...work} />
            ))}
          </ul>
          <p className="mt-6">
            <Link
              href="/projects#works"
              className="text-sm font-medium text-slate-blue hover:underline"
            >
              実績一覧 →
            </Link>
          </p>
        </Section>

        <Section
          title="プロジェクト"
          subtitle="自社で EC 運営と自動化を実践しているブランド・事業です。"
          divided
        >
          <div className="max-w-xl">
            <NoctraProjectCard />
          </div>
          <p className="mt-6">
            <Link
              href="/projects"
              className="text-sm font-medium text-slate-blue hover:underline"
            >
              プロジェクト・実績一覧 →
            </Link>
          </p>
        </Section>

        <Section
          title="お問い合わせ"
          subtitle="EC 運営の改善、業務自動化、AI 活用など、ご相談・お仕事のご依頼をお受けしています。"
          className="pb-16"
          divided
        >
          <div className="max-w-xl">
            <ButtonLink href="/contact">お問い合わせフォームへ</ButtonLink>
          </div>
        </Section>
      </div>
    </>
  );
}
