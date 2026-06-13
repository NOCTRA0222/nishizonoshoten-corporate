import type { Metadata } from "next";
import Link from "next/link";
import {
  clarityChips,
  currentPractices,
  operatorProfile,
  services,
  site,
  works,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "デザイン検討",
  robots: {
    index: false,
    follow: false,
  },
};

const featuredWorks = works.filter((work) => work.featured).slice(0, 3);
const primaryServices = services
  .filter((service) => !("secondary" in service && service.secondary))
  .slice(0, 4);

const principles = [
  "状況を整理してから進める",
  "現場で続けやすい形にする",
  "小さく試して改善する",
  "公開できる活動を記録に残す",
] as const;

export default function DesignLabPage() {
  return (
    <div className="bg-[#f6f5ef] text-[#26302f]">
      <header className="border-b border-[#d8ddd7] bg-[#fffdf8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#526e63]">
              LOCAL DESIGN LAB
            </p>
            <h1 className="mt-1 text-2xl font-semibold">西園商店HP デザイン比較</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64706d]">
              旧デザインはトップページに残したまま、ここで見た目だけ比較します。採用案が決まるまで本実装へ反映しません。
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex w-fit items-center justify-center rounded-md border border-[#526e63]/25 bg-white px-4 py-2 text-sm font-medium text-[#526e63] hover:border-[#526e63]"
          >
            旧デザインを見る
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm">
          {[
            ["#proposal-a", "A 実務ノート型"],
            ["#proposal-b", "B 活動記録型"],
            ["#proposal-c", "C 仕組み可視化型"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-[#d8ddd7] bg-white px-4 py-2 text-[#526e63] hover:border-[#526e63]"
            >
              {label}
            </a>
          ))}
        </nav>

        <section className="mb-10 rounded-lg border border-[#d8ddd7] bg-white p-5">
          <h2 className="text-lg font-semibold">比較の見方</h2>
          <div className="mt-4 grid gap-3 text-sm leading-relaxed text-[#64706d] md:grid-cols-3">
            <p>
              <strong className="text-[#26302f]">A:</strong>{" "}
              いまの控えめさを残しつつ、読みやすさと信頼感を上げる案。
            </p>
            <p>
              <strong className="text-[#26302f]">B:</strong>{" "}
              活動記録と人柄を前に出し、更新される安心感を強める案。
            </p>
            <p>
              <strong className="text-[#26302f]">C:</strong>{" "}
              業務改善・自動化の流れを見せ、何を頼めるかを分かりやすくする案。
            </p>
          </div>
        </section>

        <ProposalA />
        <ProposalB />
        <ProposalC />
      </main>
    </div>
  );
}

function ProposalFrame({
  id,
  label,
  title,
  note,
  children,
}: {
  id: string;
  label: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-6">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wide text-[#b67855]">
            {label}
          </p>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[#64706d]">{note}</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#cfd6cf] bg-white shadow-sm">
        {children}
      </div>
    </section>
  );
}

function ProposalA() {
  return (
    <ProposalFrame
      id="proposal-a"
      label="PROPOSAL A"
      title="実務ノート型"
      note="旧デザインの控えめさを残しながら、余白・罫線・カードの読みやすさを整える案。最も安全に本実装へ戻せます。"
    >
      <div className="bg-[#2d3436] px-6 py-16 text-[#fafafa] sm:px-12">
        <p className="text-sm font-medium text-[#fafafa]/70">{site.intro}</p>
        <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
          {site.tagline}
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#fafafa]/82">
          {site.lead}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {clarityChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-[1fr_0.82fr]">
        <div className="border-b border-[#e2e5df] p-8 md:border-b-0 md:border-r">
          <p className="text-xs font-semibold tracking-wide text-[#526e63]">
            ABOUT
          </p>
          <h4 className="mt-3 text-xl font-semibold">誰が、どのように取り組むか</h4>
          <p className="mt-3 text-sm leading-relaxed text-[#64706d]">
            {operatorProfile.paragraphs.join("")}
          </p>
        </div>
        <div className="p-8">
          <p className="text-xs font-semibold tracking-wide text-[#526e63]">
            CURRENT
          </p>
          <ul className="mt-4 grid gap-2">
            {currentPractices.slice(0, 5).map((practice) => (
              <li
                key={practice.title}
                className="rounded border border-[#d8ddd7] bg-[#fafafa] px-3 py-2 text-sm"
              >
                {practice.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ProposalFrame>
  );
}

function ProposalB() {
  return (
    <ProposalFrame
      id="proposal-b"
      label="PROPOSAL B"
      title="活動記録型"
      note="活動が続いている安心感を前に出す案。人柄や現在進行形の取り組みを伝えやすい一方、言葉選びは少し慎重に調整します。"
    >
      <div className="bg-[#fffdf8] p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <p className="text-sm font-semibold text-[#526e63]">
              西園商店 / 活動記録
            </p>
            <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              手の届く範囲に責任を持ち、
              <br className="hidden sm:block" />
              日々の実践を積み上げる。
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#64706d]">
              完成した成果だけでなく、試行錯誤、検証、学習、改善の過程も公開できる範囲で記録します。
            </p>
          </div>
          <div className="rounded-lg border border-[#d8ddd7] bg-white p-5">
            <p className="text-sm font-semibold text-[#26302f]">
              大切にしていること
            </p>
            <ul className="mt-4 space-y-3">
              {principles.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span className="font-semibold text-[#526e63]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {currentPractices.slice(0, 3).map((practice) => (
            <article
              key={practice.title}
              className="rounded-lg border border-[#d8ddd7] bg-white p-5"
            >
              <span className="rounded-full bg-[#eef4f6] px-3 py-1 text-xs font-semibold text-[#4f7286]">
                {practice.status}
              </span>
              <h4 className="mt-4 text-lg font-semibold">{practice.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#64706d]">
                {practice.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </ProposalFrame>
  );
}

function ProposalC() {
  return (
    <ProposalFrame
      id="proposal-c"
      label="PROPOSAL C"
      title="仕組み可視化型"
      note="業務改善や自動化を頼む人に、何をしてくれるかが伝わりやすい案。やや業務サイト寄りなので、硬くなりすぎない調整が必要です。"
    >
      <div className="bg-white p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-[#526e63]">
              EC運営・業務改善・自動化
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              ばらばらな作業を、
              <br className="hidden sm:block" />
              続けやすい流れに整える。
            </h3>
            <p className="mt-5 text-base leading-relaxed text-[#64706d]">
              作業手順、台帳、通知、AI活用を必要な範囲で組み合わせ、現場で回る仕組みにします。
            </p>
          </div>

          <div className="grid gap-3">
            {["現状整理", "仕組み設計", "自動化・AI", "運用定着"].map(
              (step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[3rem_1fr] items-center gap-4 rounded-lg border border-[#d8ddd7] bg-[#f7f7f3] p-4"
                >
                  <span className="font-mono text-sm font-semibold text-[#4f7286]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold">{step}</p>
                    <p className="mt-1 text-sm text-[#64706d]">
                      {[
                        "業務フローと課題を可視化",
                        "ルール・台帳・役割を定義",
                        "GAS・スクリプト・AIで実装",
                        "更新しやすい形で回す",
                      ][index]}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {primaryServices.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-[#d8ddd7] p-5"
            >
              <h4 className="font-semibold">{service.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#64706d]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-[#d8ddd7] bg-[#fffdf8] p-5">
          <p className="text-sm font-semibold text-[#26302f]">実践例</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {featuredWorks.map((work) => (
              <div key={work.title}>
                <p className="text-sm font-semibold">{work.title}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#64706d]">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProposalFrame>
  );
}
