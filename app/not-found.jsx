import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-warm pt-[60px] lg:pt-[92px]">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <div className="font-serif text-7xl font-bold text-gold">404</div>
        <h1 className="mt-4 font-serif text-3xl font-bold text-navy">
          Page Not Found
        </h1>
        <p className="mt-3 text-navy/70">
          The page you're looking for doesn't exist or has moved. Let's get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
        <div className="mt-6 text-sm text-navy/60">
          <Link href="/practice-areas" className="text-gold-dark hover:underline">
            Practice Areas
          </Link>
          {" · "}
          <Link href="/locations" className="text-gold-dark hover:underline">
            Service Areas
          </Link>
          {" · "}
          <Link href="/blog" className="text-gold-dark hover:underline">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
