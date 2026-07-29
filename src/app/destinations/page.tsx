import type { Metadata } from "next";
import FeaturedDestinations from "@/components/home/featured-destinations";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Destinations — Kashmir & Ladakh",
  description: "Explore our curated destinations: Kashmir and Ladakh. Discover attractions, best time to visit, weather, and handpicked holiday packages.",
  alternates: { canonical: `${siteConfig.url}/destinations` },
};

export default function DestinationsPage() {
  return (
    <div className="pt-8">
      <FeaturedDestinations />
    </div>
  );
}
