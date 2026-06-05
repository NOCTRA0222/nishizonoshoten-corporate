import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-slate-blue text-off-white hover:bg-slate-blue/90"
      : variant === "light"
        ? "border border-off-white/30 text-off-white hover:border-off-white hover:bg-off-white/10"
        : "border border-charcoal/20 text-charcoal hover:border-slate-blue hover:text-slate-blue";

  return <Link className={`${base} ${styles} ${className}`.trim()} {...props} />;
}
