import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { site, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "EC運営改善・業務自動化・AI活用・コンテンツ制作支援。西園商店の提供領域をご紹介します。",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <PageHeader
        title="事業内容"
        description={`${site.lead} EC・自動化・AI・仕組み化を中心に、事業が回る環境づくりを一貫して行います。`}
      />
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-charcoal/70">
        デザイン制作会社ではありません。まずは運営と業務の整理・自動化から入り、必要に応じてコンテンツ制作を支援します。
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <p className="mt-10 text-sm text-charcoal/60 leading-relaxed">
        ご相談内容に応じて、上記を組み合わせた支援も可能です。お気軽にお問い合わせください。
      </p>
    </div>
  );
}
