import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "EC運営、業務改善、自動化、必要に応じたAI活用。西園商店の提供領域をご紹介します。",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <PageHeader
        title="事業内容"
        description="EC運営、業務改善、自動化を中心に、必要に応じてAI活用やコンテンツ制作も組み合わせながら、現場で続けやすい仕組みを整えます。"
      />
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-charcoal/70">
        {site.name}では、まず運営と業務の整理から入り、必要に応じて自動化、AI活用、コンテンツ制作を組み合わせます。現場で続けやすい形を重視します。
      </p>

      <div className="grid gap-6">
        {services.map((service) => (
          <article key={service.title} className="structured-card">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-charcoal">
                {service.title}
              </h2>
              {"secondary" in service && service.secondary ? (
                <span className="rounded-full bg-charcoal/5 px-2 py-0.5 text-xs text-charcoal/60">
                  支援領域
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
              {service.description}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-charcoal">
                  どんな課題に対応するか
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {service.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-charcoal">
                  具体的に行うこと
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {service.approach}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-charcoal">
                  注意点
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {service.note}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-charcoal/60 leading-relaxed">
        ご相談内容に応じて、上記を組み合わせた支援も可能です。現在の状況に合わせてお問い合わせください。
      </p>
    </div>
  );
}
