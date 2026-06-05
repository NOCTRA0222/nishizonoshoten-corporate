import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHeader } from "@/components/PageHeader";
import { getGformUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "EC運営改善・業務自動化・AI活用など、西園商店へのお問い合わせは Google フォームよりお受けしています。",
};

export default function ContactPage() {
  const gformUrl = getGformUrl();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <PageHeader
        title="お問い合わせ"
        description="EC 運営の改善、業務の自動化、AI の活用など、ご相談・お仕事のご依頼・協業のご提案をお受けしています。"
      />
      <div className="max-w-xl space-y-6">
        <p className="text-charcoal/75 leading-relaxed">
          お問い合わせは Google フォームにて受け付けています。フォーム内の項目にご記入のうえ、送信してください。
        </p>
        <ButtonLink href={gformUrl} target="_blank" rel="noopener noreferrer">
          お問い合わせフォームを開く
        </ButtonLink>
      </div>
    </div>
  );
}
