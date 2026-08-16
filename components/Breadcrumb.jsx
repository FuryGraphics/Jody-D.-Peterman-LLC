import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/seo";

/**
 * Breadcrumb trail shown directly under the header on every inner page.
 * `items` = [{ name, href }] including Home first and current page last.
 */
export default function Breadcrumb({ items }) {
  return (
    <div className="border-b border-black/5 bg-warm pt-[60px] lg:pt-[92px]">
      <JsonLd data={breadcrumbSchema(items)} />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-container px-4 py-3 md:px-6"
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-navy/60">
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={it.href} className="flex items-center gap-2">
                {last ? (
                  <span className="font-semibold text-navy" aria-current="page">
                    {it.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={it.href}
                      className="transition-colors hover:text-gold-dark"
                    >
                      {it.name}
                    </Link>
                    <span className="text-gold">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
