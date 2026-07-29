import type { Metadata } from "next";
import SectionHeader from "@/components/ui/section-header";
import FaqAccordion from "@/components/shared/faq-accordion";
import { homeFaqs } from "@/data/faqs";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about booking, cancellations, payments, and travelling to Kashmir and Ladakh.",
  alternates: { canonical: `${siteConfig.url}/faqs` },
};

export default function FaqsPage() {
  const allFaqs = [...homeFaqs, ...destinations.flatMap((d) => d.faqs)];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeader eyebrow="Support" title="Frequently asked questions" align="center" />
      <div className="mt-10">
        <FaqAccordion items={allFaqs} />
      </div>
    </div>
  );
}
