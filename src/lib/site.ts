export const site = {
  name: "西園商店",
  tagline: "自動化・EC運営・AI活用で、事業の「仕組み」をつくる",
  lead: "仕組みを作り、人が本来やるべき仕事に集中できる環境をつくります。",
  headerTagline: "自動化・EC運営・AI活用・仕組み化",
  description:
    "西園商店は、EC運営改善・業務自動化・AI活用・仕組み化を通じて、事業が回る環境づくりを行う個人事業の屋号です。",
} as const;

export const clarityChips = [
  "EC運営改善",
  "業務自動化",
  "AI活用",
  "仕組み化",
] as const;

export const navItems = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "事業内容" },
  { href: "/projects", label: "プロジェクト・実績" },
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
    title: "TikTok Shop 発送フロー自動化",
    category: "automation",
    status: "自社・運用中",
    description:
      "受注から発送までの作業をスプレッドシートと GAS でつなぎ、転記と確認の手間を削減。発送漏れを防ぎ、日次の出荷作業を仕組み化しています。",
    featured: true,
  },
  {
    title: "不良品報告・管理システム",
    category: "automation",
    status: "構築・運用",
    description:
      "不良品の報告から記録・集計までをフォームとスプレッドシートで一元管理。報告漏れと対応のばらつきを減らし、品質管理を可視化します。",
    featured: true,
  },
  {
    title: "SNS 投稿管理・運用基盤",
    category: "ec",
    status: "自社・運用中",
    description:
      "投稿スケジュール・文案・状態をスプレッドシートで管理。X / Threads など媒体別の進捗を一画面で把握し、属人化した投稿運用を整理します。",
    featured: true,
  },
  {
    title: "Dropbox フォルダ整理・命名規則",
    category: "automation",
    status: "構築・運用",
    description:
      "事業ごとのフォルダ構成とファイル命名ルールを定義し、素材・書類・エクスポートデータの置き場所を統一。探す時間と重複保存を削減します。",
    featured: true,
  },
  {
    title: "GAS スプレッドシート業務自動化",
    category: "automation",
    status: "構築・運用",
    description:
      "Google Apps Script でシート作成・書式設定・データ検証を自動化。手作業での表組みや入力ミスを減らし、更新しやすい運用台帳を構築します。",
  },
  {
    title: "SNS 向け画像リサイズ自動化",
    category: "content",
    status: "自社・運用中",
    description:
      "書き出しフォルダを監視し、TikTok・Instagram・X など媒体別サイズへ一括変換。手作業のトリミングと書き出しを省き、投稿素材の準備時間を短縮します。",
  },
  {
    title: "Lightroom 現像 → 書き出しパイプライン",
    category: "content",
    status: "構築・運用",
    description:
      "RAW 取り込みから現像プリセット・書き出し設定までを標準化。撮影データを SNS 加工ラインへスムーズに流し、品質とスピードを両立します。",
  },
  {
    title: "NOCTRA SNS 運用スプレッドシート整備",
    category: "ec",
    status: "構築・運用",
    description:
      "年間イベントカレンダー・ブランドコピーガイド・投稿ネタバンクを GAS で自動生成。ブランドトーンのばらつきを抑え、企画から投稿までの判断材料を整理します。",
  },
  {
    title: "AI 支援コンテンツ制作フロー",
    category: "ai",
    status: "自社・運用中",
    description:
      "ブランド憲法と投稿マスターをプロンプト化し、文案・企画の下書きを AI で支援。人の判断を残しつつ、制作と更新のスピードを上げます。",
  },
];

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishizonoshoten.com";
}

export function getGformUrl(): string {
  return (
    process.env.NEXT_PUBLIC_GFORM_URL ??
    "https://docs.google.com/forms/d/e/PLACEHOLDER/viewform"
  );
}

export function getNoctraUrl(): string {
  return process.env.NEXT_PUBLIC_NOCTRA_URL ?? "https://noctra.online";
}

export function isNoctraEnabled(): boolean {
  return process.env.NEXT_PUBLIC_NOCTRA_ENABLED === "true";
}

export const services = [
  {
    title: "EC運営改善",
    description:
      "楽天・BASE・Amazon などの EC 運営を整理し、売れる仕組みへ改善します。",
    body: "モール・自社 EC の運用課題を洗い出し、商品登録・在庫・受注・販促フローを見直します。属人化した作業を減らし、継続して回る運営体制をつくります。",
    bullets: ["楽天市場", "BASE", "Amazon"],
  },
  {
    title: "業務自動化",
    description:
      "繰り返し作業をツール化し、手作業と転記の負担を減らします。",
    body: "スプレッドシート連携、通知、データ集計など、日々の業務フローを Google Apps Script・Make 等で自動化します。現場の手順に合わせて設計し、運用しやすい形で導入します。",
    bullets: ["GAS（Google Apps Script）", "Make / 連携設計", "スプレッドシート業務"],
  },
  {
    title: "AI活用",
    description:
      "AI を業務に組み込み、判断と制作のスピードを上げます。",
    body: "文章・画像・データ整理など、実務に効く使い方を選定し、プロンプトやワークフローとして定着させます。導入だけで終わらせず、チームや一人事業でも続けられる運用ルールまで整えます。",
    bullets: ["業務フローへの組み込み", "プロンプト・手順の標準化", "Cursor 等の開発支援"],
  },
  {
    title: "コンテンツ制作",
    description:
      "販売・発信を支える撮影・バナー・SNS などの制作支援です（主軸は仕組みづくり）。",
    body: "商品撮影、バナー、SNS 用素材など、EC 運営や販促に必要なコンテンツを制作します。単体のデザイン受託ではなく、運営・自動化とセットで効く形でのご支援を想定しています。",
    bullets: ["商品撮影", "バナー・販促物", "SNS 用コンテンツ"],
    secondary: true,
  },
] as const;

export const businessLines = [
  "EC運営改善（楽天 / BASE / Amazon）",
  "業務自動化",
  "AI活用",
  "コンテンツ制作（商品撮影・バナー・SNS 等の支援）",
] as const;

export const noctraProject = {
  name: "NOCTRA",
  tagline: "ペット向けアパレル EC — 運営と自動化の実践",
  description:
    "西園商店のプロジェクトの一つ。EC 運営・業務整理・自動化を自社事業で実践している事例です。ブランドサイトは noctra.online で展開します。",
} as const;
