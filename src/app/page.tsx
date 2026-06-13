import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { NoctraProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { SystemFlow } from "@/components/SystemFlow";
import {
  clarityChips,
  currentPractices,
  faqs,
  operatorProfile,
  requestFlow,
  services,
  site,
  tradeNameThought,
} from "@/lib/site";

const primaryServices = services.filter(
  (service) => !("secondary" in service && service.secondary),
);
const secondaryServices = services.filter(
  (service) => "secondary" in service && service.secondary,
);

export default function HomePage() {
  return (
    <>
      <section className="bg-charcoal text-off-white">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-24">
          <p className="text-sm font-medium tracking-wide text-off-white/70">
            {site.intro}
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
          subtitle="EC運営、業務改善、自動化を中心に、必要に応じてAI活用も組み合わせます。"
          divided
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {primaryServices.map((service) => (
              <ServiceCard key={service.title} {...service} teaser />
            ))}
          </div>
          {secondaryServices.map((service) => (
            <div key={service.title} className="mt-6">
              <ServiceCard {...service} teaser />
            </div>
          ))}
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
          title="運営者について"
          subtitle="誰が、どのような姿勢で取り組んでいるのかを大切にしています。"
          divided
        >
          <div className="structured-card max-w-3xl">
            <p className="text-base font-semibold leading-relaxed text-charcoal">
              {operatorProfile.title}
            </p>
            <p className="mt-2 text-sm text-charcoal/60">
              代表者: {site.representative}
            </p>
            {operatorProfile.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-3 text-sm leading-relaxed text-charcoal/75"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-5 border-t border-charcoal/10 pt-5">
              <p className="text-sm leading-relaxed text-charcoal/75">
                {operatorProfile.story}
              </p>
            </div>
          </div>
        </Section>

        <Section
          title="屋号に込めた考え"
          subtitle="西園商店という名前で仕事をするうえで、大切にしている姿勢です。"
          divided
        >
          <div className="structured-card max-w-3xl">
            {tradeNameThought.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-3 first:mt-0 text-sm leading-relaxed text-charcoal/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section
          title="現在取り組んでいること"
          subtitle="大きく見せるのではなく、日々の業務や自社プロジェクトのなかで続けている実践内容です。"
          divided
        >
          <div className="structured-card max-w-3xl">
            <p className="text-sm leading-relaxed text-charcoal/75">
              西園商店では、日々の業務や自社プロジェクトを通じて、
              EC運営・業務改善・自動化の実践を続けています。
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {currentPractices.map((practice) => (
                <li
                  key={practice.title}
                  className="rounded border border-charcoal/10 bg-charcoal/[0.02] px-3 py-2 text-sm text-charcoal/75"
                >
                  {practice.title}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-charcoal/60">
              各取り組みの詳細は、現在整理中です。
              公開できる内容から順次掲載していきます。
            </p>
            <p className="mt-3">
              <Link
                href="/practice"
                className="text-sm font-medium text-slate-blue hover:underline"
              >
                実践内容を見る →
              </Link>
            </p>
          </div>
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
              プロジェクト一覧 →
            </Link>
          </p>
        </Section>

        <Section
          title="ご依頼の流れ"
          subtitle="お問い合わせ後は、状況を確認しながら無理のない進め方を一緒に整理します。"
          divided
        >
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {requestFlow.map((step, index) => (
              <li key={step.title} className="flow-step">
                <span className="flow-step-num" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-semibold text-charcoal">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-charcoal/65">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          title="よくある質問"
          subtitle="ご相談前に確認されることの多い内容をまとめています。"
          divided
        >
          <div className="divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-white px-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-4">
                <p className="text-sm font-semibold text-charcoal">
                  Q. {faq.question}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="お問い合わせ"
          subtitle="EC運営や業務改善、自動化など、現在の状況に合わせてご相談ください。"
          className="pb-16"
          divided
        >
          <div className="max-w-xl">
            <ButtonLink href="/contact">ご相談はこちら</ButtonLink>
          </div>
        </Section>
      </div>
    </>
  );
}
