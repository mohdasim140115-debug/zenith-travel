import type { Metadata } from "next";
import { Suspense } from "react";
import { packages, PackageCategory } from "@/data/packages";
import PackageCard from "@/components/shared/package-card";
import PackageFilters from "@/components/packages/package-filters";
import SectionHeader from "@/components/ui/section-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Kashmir & Ladakh Tour Packages",
  description: "Browse all Kashmir and Ladakh holiday packages — trending, best-selling, luxury, honeymoon, family, group, adventure and weekend getaways. Transparent pricing, instant enquiry.",
  alternates: { canonical: `${siteConfig.url}/packages` },
};

export default async function PackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ destination?: string; category?: string; budget?: string; q?: string }>;
}) {
  const { destination, category, budget, q } = await searchParams;

  let filtered = packages;
  if (destination) filtered = filtered.filter((p) => p.destinationSlug === destination);
  if (category) filtered = filtered.filter((p) => p.categories.includes(category as PackageCategory));
  if (budget) {
    const [min, max] = budget.split("-").map(Number);
    filtered = filtered.filter((p) => p.price >= min && p.price <= max);
  }
  if (q) {
    const needle = q.trim().toLowerCase();
    filtered = filtered.filter((p) =>
      [p.title, p.summary, p.destinationSlug, ...p.cities].join(" ").toLowerCase().includes(needle)
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        eyebrow="All Packages"
        title="Kashmir & Ladakh holiday packages"
        description={
          q
            ? `Showing results for "${q}"`
            : "Every itinerary below includes stays, private transfers, and a dedicated tour manager. Filter to find your fit."
        }
      />

      <div className="mt-8">
        <Suspense fallback={null}>
          <PackageFilters />
        </Suspense>
      </div>

      <p className="mt-6 text-sm text-navy-700/60">{filtered.length} package{filtered.length !== 1 ? "s" : ""} found</p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-2xl border border-dashed border-mist-200 p-12 text-center">
          <p className="text-navy-800">No packages match these filters yet.</p>
          <p className="mt-2 text-sm text-navy-700/60">Try widening your budget or destination, or WhatsApp us — we customise packages on request.</p>
        </div>
      )}
    </div>
  );
}
