import { firm } from "@/lib/site";
import { Icon } from "./Icons";

// Floating "Call Now" button, mobile only. Chat is handled by the
// LeadConnector widget loaded in app/layout.jsx, which anchors bottom-right —
// this sits bottom-left so the two don't overlap.
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 left-4 z-[60] md:hidden">
      <a
        href={firm.phoneHref}
        className="flex h-14 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-navy shadow-card transition-transform hover:scale-105"
        aria-label="Call now"
      >
        <Icon name="phone" size={22} />
        Call Now
      </a>
    </div>
  );
}
