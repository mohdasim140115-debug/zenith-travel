import type { Metadata } from "next";
import SectionHeader from "@/components/ui/section-header";
import Stats from "@/components/home/stats";
import WhyChooseUs from "@/components/home/why-choose-us";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: "Zenith Voyages is a premium travel company specialising exclusively in Kashmir and Ladakh holidays since 2014.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeader eyebrow="Our Story" title={`Why ${siteConfig.name} exists`} align="center" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-800">
          <p>
            {siteConfig.name} was founded in 2014 on a simple premise: most travel companies try to cover every
            destination on earth, and end up knowing none of them deeply. We chose the opposite path — go narrow,
            go deep, and become the most knowledgeable operator for exactly two regions: Kashmir and Ladakh.
          </p>
          <p>
            Every houseboat, hotel, camp and driver in our network has been personally vetted by someone on our
            team — not sourced from a third-party inventory system. When you book with us, a dedicated tour
            manager stays on WhatsApp with you from the day you enquire to the day you land back home.
          </p>
          <p>
            Twelve years and 48,000+ guests later, that focus is still the whole strategy. As we grow into new
            regions, the same principle will apply: depth before breadth, every time.
          </p>
        </div>
      </div>
      <Stats />
      <WhyChooseUs />
    </div>
  );
}
