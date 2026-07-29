import type { Metadata } from "next";
import SectionHeader from "@/components/ui/section-header";
import PackageBuilder from "@/components/customize/package-builder";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Custom Package Builder",
  description: "Build your own Kashmir or Ladakh itinerary — pick your dates, budget, hotel category, activities and more. We'll send a tailored quote.",
  alternates: { canonical: `${siteConfig.url}/customize` },
};

export default function CustomizePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeader
        eyebrow="Tailored For You"
        title="Build your own package"
        description="Tell us your preferences below — our team will send a customised itinerary and quote within a few hours."
        align="center"
      />
      <div className="mt-10">
        <PackageBuilder />
      </div>
    </div>
  );
}
