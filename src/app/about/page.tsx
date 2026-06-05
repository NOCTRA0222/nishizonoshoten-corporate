import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { businessLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "西園商店の屋号・事業内容についてご案内します。EC運営改善・業務自動化・AI活用を中心とした個人事業です。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <PageHeader
        title="会社概要"
        description="西園商店は個人事業の屋号です。同名の他社とは別の事業体として運営しています。"
      />
      <dl className="divide-y divide-charcoal/10 rounded-lg border border-charcoal/10 bg-white">
        <div className="grid gap-2 px-6 py-5 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm font-semibold text-charcoal">屋号</dt>
          <dd className="text-sm text-charcoal/80">{site.name}（個人事業）</dd>
        </div>
        <div className="grid gap-2 px-6 py-5 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm font-semibold text-charcoal">ミッション</dt>
          <dd className="text-sm leading-relaxed text-charcoal/80">
            {site.lead}
          </dd>
        </div>
        <div className="grid gap-2 px-6 py-5 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm font-semibold text-charcoal">事業内容</dt>
          <dd className="text-sm text-charcoal/80">
            <p>{site.tagline}</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-charcoal/75">
              {businessLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="grid gap-2 px-6 py-5 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm font-semibold text-charcoal">系譜</dt>
          <dd className="text-sm leading-relaxed text-charcoal/80">
            「西園商店」は、祖母が営んでいた商店の名前を受け継いだ屋号です。地域に根ざした商店の精神を、現代の事業づくりへつなげています。
          </dd>
        </div>
        <div className="grid gap-2 px-6 py-5 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm font-semibold text-charcoal">代表者</dt>
          <dd className="text-sm text-charcoal/50">準備中（後日掲載）</dd>
        </div>
        <div className="grid gap-2 px-6 py-5 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm font-semibold text-charcoal">連絡先</dt>
          <dd className="text-sm text-charcoal/50">
            お問い合わせは
            <a href="/contact" className="mx-1 text-slate-blue hover:underline">
              お問い合わせページ
            </a>
            よりご連絡ください。
          </dd>
        </div>
      </dl>
    </div>
  );
}
