export const site = {
  name: "西園商店",
  seoTitle: "西園商店｜福岡のEC運営・業務改善・自動化支援",
  tagline: "小さな事業が回り続けるための仕組みをつくる",
  lead: "福岡を拠点に、EC運営、業務改善、自動化、AI活用を組み合わせ、現場で続けやすい形を整えています。",
  intro: "現場の業務改善と仕組み化を専門としています",
  headerTagline: "EC運営・業務改善・自動化・AI活用",
  location: "福岡県福岡市",
  representative: "眞次 康代",
  description:
    "西園商店は福岡を拠点に、EC運営、商品企画、業務改善、自動化、AI活用を通じて、小さな事業が継続しやすい仕組みづくりを行う個人事業です。",
} as const;

export const clarityChips = [
  "EC運営",
  "業務改善",
  "自動化",
  "AI活用",
] as const;

export const navItems = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "事業内容" },
  { href: "/practice", label: "実践内容" },
  { href: "/projects", label: "プロジェクト" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/about", label: "会社概要" },
] as const;

export const workCategories = {
  automation: { label: "業務自動化", marker: "⚙" },
  ec: { label: "EC運営", marker: "◻" },
  ai: { label: "AI活用", marker: "◇" },
  content: { label: "コンテンツ", marker: "▤" },
} as const;

export type WorkCategory = keyof typeof workCategories;

export type WorkEntry = {
  title: string;
  category: WorkCategory;
  status: string;
  description: string;
  featured?: boolean;
};

export const works: WorkEntry[] = [
  {
    title: "EC発送フロー整理",
    category: "automation",
    status: "自社内で運用",
    description:
      "受注から発送までの確認作業をスプレッドシートで整理し、転記や確認漏れを減らす流れを整えています。",
    featured: true,
  },
  {
    title: "不良品報告・管理システム",
    category: "automation",
    status: "自社内で運用",
    description:
      "不良品の報告から記録・集計までをフォームとスプレッドシートで一元管理し、対応のばらつきを減らす形にしています。",
    featured: true,
  },
  {
    title: "SNS 投稿管理・運用基盤",
    category: "ec",
    status: "自社内で運用",
    description:
      "投稿スケジュール、文案、進行状況をスプレッドシートで管理し、発信作業を続けやすい形に整理しています。",
    featured: true,
  },
  {
    title: "Dropbox フォルダ整理・命名規則",
    category: "automation",
    status: "整理中",
    description:
      "事業ごとのフォルダ構成とファイル命名ルールを整理し、素材や書類の置き場所を迷いにくくしています。",
    featured: true,
  },
  {
    title: "GAS スプレッドシート業務自動化",
    category: "automation",
    status: "自社内で検証",
    description:
      "Google Apps Script を使い、シート作成や書式設定などの手作業を減らす方法を自社内で検証しています。",
  },
  // {
  //   title: "SNS 向け画像リサイズ自動化",
  //   category: "content",
  //   status: "自社内で運用",
  //   description:
  //     "媒体別サイズへの変換など、投稿素材の準備を効率化するための取り組みです。",
  // },
  // {
  //   title: "画像現像・書き出しフロー整理",
  //   category: "content",
  //   status: "整理中",
  //   description:
  //     "撮影データの現像、書き出し、素材管理を続けやすくするための取り組みです。",
  // },
  // {
  //   title: "自社EC向けSNS運用スプレッドシート整備",
  //   category: "ec",
  //   status: "整理中",
  //   description:
  //     "投稿テーマやスケジュールなどを整理し、判断材料をまとめるための取り組みです。",
  // },
  // {
  //   title: "AI支援コンテンツ制作フロー",
  //   category: "ai",
  //   status: "検証中",
  //   description:
  //     "文案や企画の下書きをAIで補助し、人の確認を残しながら制作を進めるための取り組みです。",
  // },
];

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishizonoshoten.com";
}

export function getGformUrl(): string {
  return (
    process.env.NEXT_PUBLIC_GFORM_URL ??
    "https://docs.google.com/forms/d/e/1FAIpQLScMCpOSyknbmsjR26PeKknkLasz8m8FASa6YFPuCgYWSbyRwQ/viewform?usp=publish-editor"
  );
}

export function getSelfEcUrl(): string {
  return process.env.NEXT_PUBLIC_NOCTRA_URL ?? "https://www.noctra.online";
}

export function getGaId(): string | undefined {
  return process.env.NEXT_PUBLIC_GA_ID;
}

export function isSelfEcEnabled(): boolean {
  return process.env.NEXT_PUBLIC_NOCTRA_ENABLED === "true";
}

export const services = [
  {
    title: "EC運営・商品企画",
    description:
      "商品登録や在庫管理など、運営負荷の高い業務を整理し、回しやすい運用体制を整えます。",
    body: "楽天・BASE・Amazon などの運用課題を確認し、商品情報、在庫、受注、販促フローを見直します。商品企画や運営準備も含め、日々の確認や更新が滞りにくい形を整えます。",
    bullets: ["楽天市場", "BASE", "Amazon", "商品企画"],
    challenge:
      "商品登録、在庫管理、受注対応、販促準備など、日々の運営業務が属人化している状態。",
    approach:
      "業務の流れを整理し、運用しやすい台帳や手順を整えます。商品企画や販売準備も、現場で確認しやすい形にまとめます。",
    note:
      "大規模なECコンサルティングや広告運用代行を前提としたサービスではありません。",
  },
  {
    title: "業務改善",
    description:
      "作業手順や使っているツールを見直し、属人化や確認漏れが起きにくい形に整理します。",
    body: "まずは業務フロー、台帳、ルール、担当範囲を確認します。いきなりツールを増やすのではなく、どこで迷い、どこで手戻りが起きているかを整理します。",
    bullets: ["業務フロー整理", "台帳整理", "運用ルール"],
    challenge:
      "作業手順が人ごとに違う、確認場所が分散している、担当者しか分からない作業が増えている状態。",
    approach:
      "業務フロー、台帳、ルール、担当範囲を確認し、迷いや手戻りが起きにくい形に整えます。",
    note:
      "大掛かりな制度変更や組織改革ではなく、小さな現場で続けやすい整理を前提にしています。",
  },
  {
    title: "自動化",
    description:
      "毎日の転記作業や確認作業を減らし、ミスや属人化が起きにくい仕組みを整えます。",
    body: "スプレッドシート連携、通知、データ集計など、日々の業務フローを Google Apps Script・Make 等で自動化します。現場の手順に合わせて設計し、あとから更新しやすい形で導入します。",
    bullets: ["GAS（Google Apps Script）", "Make / 連携設計", "スプレッドシート業務"],
    challenge:
      "同じ内容を何度も転記している、確認や通知が手作業になっている、入力ミスや漏れが起きやすい状態。",
    approach:
      "スプレッドシート、GAS、通知、データ集計などを組み合わせ、日々の作業を少しずつ減らす仕組みを整えます。",
    note:
      "複雑な独自システム開発ではなく、既存ツールを活かした運用しやすい自動化を中心に扱います。",
  },
  {
    title: "AI活用",
    description:
      "文章整理や画像・データ整理など、日々の運用を補助する使い方を検討します。",
    body: "文章・画像・データ整理など、実務に合う使い方を選定し、プロンプトやワークフローとして定着させます。AIそのものを主役にするのではなく、必要な場面で使える手段として整えます。",
    bullets: ["文案整理", "画像・データ整理", "プロンプト・手順の標準化"],
    challenge:
      "文章作成、情報整理、画像やデータの確認に時間がかかり、日々の運用に余裕がなくなっている状態。",
    approach:
      "AIありきではなく、文章整理、画像・データ整理、下書き作成など、実務に合う使い方を選びます。",
    note:
      "AI導入そのものを目的にせず、人の確認や判断が残る形で扱います。",
  },
  {
    title: "コンテンツ制作",
    description:
      "販売や発信に必要な画像・SNS・バナー等の制作支援も、必要に応じて対応します。",
    body: "商品撮影、バナー、SNS 用素材など、EC 運営や販促に必要なコンテンツを補助的に制作します。単体の制作受託ではなく、運営や仕組みづくりに必要な範囲での支援を想定しています。",
    bullets: ["商品撮影", "バナー・販促物", "SNS 用コンテンツ"],
    challenge:
      "販売や発信に必要な素材づくりが後回しになり、更新や販促の流れが止まりやすい状態。",
    approach:
      "商品撮影、バナー、SNS用素材など、EC運営や販促に必要な範囲で制作を支援します。",
    note:
      "コンテンツ制作単体を主軸にした制作会社としての受託ではなく、運営や仕組みづくりに必要な範囲で対応します。",
    secondary: true,
  },
] as const;

export const businessLines = [
  "EC運営改善（楽天 / BASE / Amazon）",
  "商品企画",
  "業務改善・業務フロー整理",
  "GAS等による自動化",
  "AI活用フロー構築",
  "コンテンツ制作（必要に応じた画像・バナー・SNS 等の支援）",
] as const;

export const selfEcProject = {
  name: "自社ECプロジェクト",
  tagline: "EC運営と業務整理の自社実践",
  description:
    "西園商店では、自社のEC運営を通じて、商品企画、業務整理、自動化、AI活用の流れを少しずつ整えています。公開できる範囲で、そこで得た実践知を業務改善や仕組み化にも活かしていきます。",
} as const;

export const operatorProfile = {
  title: "福岡県を拠点に、個人事業「西園商店」として活動しています。",
  paragraphs: [
    "EC運営、商品企画、業務改善、自動化、AI活用を軸に、小さな事業が継続しやすい仕組みづくりを行っています。",
    "日々の現場業務で得た知見をもとに、無理なく続けられる業務フローや運用体制の整備を大切にしています。",
  ],
  story:
    "2014年からECに関わる業務に携わり、商品登録、在庫確認、受注対応、SNS運用など、日々の細かな作業に向き合ってきました。一つひとつは小さな作業でも、積み重なると大きな負担になります。手作業や属人化が増えることで、本来考えるべき商品やお客様への対応に時間を使いにくくなる場面も少なくありません。西園商店では、そうした現場の実感をもとに、業務フローの整理や自動化、AI活用を組み合わせながら、無理なく続けられる仕組みづくりに取り組んでいます。",
} as const;

export const tradeNameThought = [
  "西園商店という名前は、祖母が営んでいた小さな商店の名前から受け継ぎました。",
  "その名前には、必要以上に事業を大きく見せるよりも、自分の手が届く範囲で、一つひとつの仕事に責任を持って向き合いたいという思いを込めています。",
  "現在の西園商店では、EC運営、商品企画、業務改善、自動化などに取り組んでいます。",
  "これらは流行りのITツールを売るためではなく、私自身が現場で理解し、考え、実際に手を動かしながら、無理なく続けられる仕組みをつくるための領域です。",
  "小さな事業だからこそ、日々の業務の流れを整え、続けられる形にしていく。",
  "そんな小さな商店として、自分の手が届く範囲を大切にしながら、一つひとつの仕事に責任を持って向き合っていきます。",
] as const;

export const currentPractices = [
  {
    title: "EC運営",
    description:
      "商品登録、在庫確認、受注対応など、日々の運営業務を整理しています。",
    status: "実践中・整理中",
  },
  {
    title: "商品企画",
    description:
      "自社プロジェクトの商品づくりを通じて、企画から販売準備までの流れを整えています。",
    status: "実践中・順次掲載",
  },
  {
    title: "SNS運用",
    description:
      "投稿テーマ、スケジュール、素材管理など、続けやすい発信の形を整理しています。",
    status: "実践中・整理中",
  },
  {
    title: "業務フロー整理",
    description:
      "日々の作業手順や確認場所を見直し、属人化しにくい運用の形を整えています。",
    status: "実践中・整理中",
  },
  {
    title: "GASによる自動化",
    description:
      "スプレッドシートや日々の転記作業を中心に、手作業を減らす仕組みを試しています。",
    status: "順次掲載予定",
  },
  {
    title: "AI活用フロー構築",
    description:
      "文章整理や確認作業の補助など、日々の運用に合うAI活用の流れを整えています。",
    status: "実践中・順次掲載",
  },
  {
    title: "コンテンツ運用",
    description:
      "商品画像、SNS素材、バナーなど、販売や発信に必要な素材管理を整えています。",
    status: "実践中・整理中",
  },
] as const;

export const requestFlow = [
  {
    title: "ご相談",
    description: "現在の課題や状況を確認します。",
  },
  {
    title: "現状整理",
    description: "業務フロー、使用ツール、困っている作業を整理します。",
  },
  {
    title: "改善案の設計",
    description:
      "手作業を減らす方法や、運用しやすい仕組みを検討します。",
  },
  {
    title: "実装・整備",
    description:
      "スプレッドシート、GAS、AI活用、運用ルールなどを必要に応じて整えます。",
  },
  {
    title: "運用定着",
    description: "更新しやすく、続けやすい形で回せるようにします。",
  },
] as const;

export const faqs = [
  {
    question: "小規模事業でも相談できますか？",
    answer:
      "はい。小さな事業や少人数の現場で回しやすい仕組みづくりを重視しています。",
  },
  {
    question: "どのような業種が対象ですか？",
    answer:
      "EC運営を中心としていますが、小規模事業者の業務改善や仕組み化のご相談にも対応しています。",
  },
  {
    question: "AI導入が前提ですか？",
    answer:
      "いいえ。AIありきではなく、業務整理や手作業の削減など、現場に合う方法を検討します。",
  },
  {
    question: "スポットでの相談は可能ですか？",
    answer:
      "内容により対応可能です。まずは現在の状況をお聞きした上で判断します。",
  },
  {
    question: "福岡以外からも相談できますか？",
    answer:
      "オンラインでのやり取りが可能な内容であれば対応できます。",
  },
  {
    question: "秘密情報の取り扱いはどうなりますか？",
    answer:
      "業務上知り得た情報は外部に公開しません。必要に応じて秘密保持に関する取り決めにも対応します。",
  },
] as const;
