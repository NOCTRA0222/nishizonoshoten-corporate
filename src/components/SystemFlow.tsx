const steps = [
  {
    label: "現状整理",
    detail: "業務フローと課題を可視化",
  },
  {
    label: "仕組み設計",
    detail: "ルール・台帳・役割を定義",
  },
  {
    label: "自動化・AI",
    detail: "GAS・スクリプト・AIで実装",
  },
  {
    label: "運用定着",
    detail: "更新しやすい形で回す",
  },
] as const;

export function SystemFlow() {
  return (
    <div className="system-flow" aria-label="仕組みづくりの流れ">
      <ol className="flex flex-col gap-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex flex-col sm:block">
            <div className="flow-step h-full">
              <span className="flow-step-num" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-semibold text-charcoal">
                {step.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-charcoal/65">
                {step.detail}
              </p>
            </div>
            {index < steps.length - 1 ? (
              <>
                <span className="flow-arrow-down py-2 sm:hidden" aria-hidden>
                  ↓
                </span>
                <span className="flow-arrow hidden lg:block" aria-hidden>
                  →
                </span>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
