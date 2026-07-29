import { homeFaqs } from "@/data/faqs";
import SectionHeader from "@/components/ui/section-header";
import FaqAccordion from "@/components/shared/faq-accordion";

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <SectionHeader eyebrow="FAQ" title="Frequently asked questions" align="center" />
      <div className="mt-10">
        <FaqAccordion items={homeFaqs} />
      </div>
    </section>
  );
}
