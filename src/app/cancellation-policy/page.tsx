import type { Metadata } from "next";
import SectionHeader from "@/components/ui/section-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Cancellation and refund policy for Zenith Voyages Kashmir and Ladakh holiday packages.",
  alternates: { canonical: `${siteConfig.url}/cancellation-policy` },
};

const generalRules = [
  "Cancellation requests must be sent in writing via email or WhatsApp to your assigned tour manager.",
  "Refund percentages are calculated on the total package cost, excluding non-refundable third-party charges (permits, gondola tickets, flight tickets booked on your behalf).",
  "Refunds are processed within 7–10 business days to the original payment method.",
  "No refund is applicable for no-shows or early departures once the tour has commenced.",
  "Date changes (as opposed to cancellations) are permitted free of charge up to 20 days before departure, subject to availability.",
];

export default function CancellationPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader eyebrow="Fine Print" title="Cancellation & refund policy" />
      <div className="mt-8 space-y-3">
        {generalRules.map((rule) => (
          <p key={rule} className="text-sm leading-relaxed text-navy-800">• {rule}</p>
        ))}
      </div>
      <p className="mt-8 text-sm text-navy-700/70">
        Exact refund slabs vary slightly by package and are always listed on the individual package page before you book.
      </p>
    </div>
  );
}
