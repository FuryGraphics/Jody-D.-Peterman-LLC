import Link from "next/link";
import { Icon } from "./Icons";

// Consistent gold CTA button used across every page.
export function Button({
  href,
  children,
  variant = "gold",
  className = "",
  ...rest
}) {
  const styles = {
    gold: "bg-gold text-navy hover:bg-gold-light shadow-soft",
    outline:
      "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
    outlineLight:
      "bg-transparent text-white border-2 border-white/70 hover:bg-white hover:text-navy",
    navy: "bg-navy text-white hover:bg-navy-light",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function Stars({ count = 5, className = "" }) {
  return (
    <div className={`flex text-gold ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" size={18} />
      ))}
    </div>
  );
}

// Small pill label ("eyebrow") above section headings.
export function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-gold-light" : "text-gold-dark"
      }`}
    >
      <span className="h-px w-6 bg-gold" />
      {children}
    </span>
  );
}

// Section heading with gold underline accent.
export function Heading({ children, dark = false, center = false, as = "h2" }) {
  const Tag = as;
  return (
    <Tag
      className={`font-serif text-3xl md:text-4xl font-bold leading-tight ${
        dark ? "text-white" : "text-navy"
      } ${center ? "text-center" : ""}`}
    >
      {children}
    </Tag>
  );
}

export function GoldRule({ center = false }) {
  return (
    <span
      className={`block h-1 w-16 rounded-full bg-gold mt-4 mb-6 ${
        center ? "mx-auto" : ""
      }`}
    />
  );
}
