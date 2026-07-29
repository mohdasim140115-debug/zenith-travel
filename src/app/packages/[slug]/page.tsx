import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, MapPin, XCircle } from "lucide-react";
import { packages, getPackageBySlug } from "@/data/packages";
import { getDestinationBySlug } from "@/data/destinations";
import { siteConfig } from "@/data/site-config";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";
import Rating from "@/components/ui/rating";
import BookingSidebar from "@/components/packages/booking-sidebar";
import ItineraryList from "@/components/packages/itinerary-list";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  const title = `${pkg.title} — ${pkg.duration} | ${formatINR(pkg.price)}`;
  return {
    title,
    description: pkg.summary,
    alternates: { canonical: `${siteConfig.url}/packages/${pkg.slug}` },
    openGraph: {
      title,
      description: pkg.summary,
      url: `${siteConfig.url}/packages/${pkg.slug}`,
      images: [{ url: pkg.heroImage }],
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const destination = getDestinationBySlug(pkg.destinationSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.summary,
    touristType: pkg.categories,
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/packages/${pkg.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: pkg.rating,
      reviewCount: pkg.reviewCount,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Gallery hero */}
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-navy-700/60">
          <Link href="/">Home</Link> <span>/</span> <Link href="/packages">Packages</Link> <span>/</span>
          <span className="text-navy-950">{pkg.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-3 sm:h-105 sm:grid-cols-4 sm:grid-rows-2">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 sm:h-full">
            <Image src={pkg.heroImage} alt={pkg.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" priority />
          </div>
          {pkg.gallery.slice(0, 4).map((src, i) => (
            <div key={i} className="relative hidden h-full overflow-hidden rounded-2xl sm:block">
              <Image src={src} alt={`${pkg.title} photo ${i + 1}`} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.7fr_1fr]">
          {/* Main content */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-gold-700">
              <MapPin size={13} /> {pkg.cities.join(" · ")}
            </div>
            <h1 className="mt-2 font-display text-3xl font-semibold text-navy-950 sm:text-4xl text-balance">{pkg.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <Rating value={pkg.rating} reviewCount={pkg.reviewCount} />
              <span className="flex items-center gap-1.5 text-sm text-navy-700/70"><Clock size={14} /> {pkg.duration}</span>
              <span className="text-sm text-navy-700/70">{pkg.guestsTravelled} guests travelled</span>
            </div>
            <p className="mt-5 text-base leading-relaxed text-navy-800">{pkg.summary}</p>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-700">Trip Highlights</p>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-navy-800">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-600" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="mt-12">
              <SectionHeader eyebrow="Day by Day" title="Detailed itinerary" />
              <div className="mt-6">
                <ItineraryList days={pkg.itinerary} />
              </div>
            </div>

            {/* Hotels */}
            <div className="mt-12">
              <SectionHeader eyebrow="Where You'll Stay" title="Hotels & houseboats" />
              <div className="mt-6 overflow-hidden rounded-2xl border border-mist-200">
                <table className="w-full text-sm">
                  <thead className="bg-mist-50 text-left text-xs font-semibold uppercase tracking-wide text-navy-700/70">
                    <tr>
                      <th className="px-5 py-3">City</th>
                      <th className="px-5 py-3">Stay</th>
                      <th className="px-5 py-3">Category</th>
                      <th className="px-5 py-3">Nights</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mist-100">
                    {pkg.hotels.map((h) => (
                      <tr key={h.city}>
                        <td className="px-5 py-3 font-medium text-navy-950">{h.city}</td>
                        <td className="px-5 py-3 text-navy-800">{h.name}</td>
                        <td className="px-5 py-3 text-navy-700/70">{h.category}</td>
                        <td className="px-5 py-3 text-navy-700/70">{h.nights}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">Inclusions</p>
                <ul className="space-y-2.5">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-800">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-700">Exclusions</p>
                <ul className="space-y-2.5">
                  {pkg.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-800">
                      <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="mt-12">
              <SectionHeader eyebrow="Fine Print" title="Cancellation policy" />
              <ul className="mt-5 space-y-2 rounded-2xl border border-mist-200 bg-mist-50 p-5">
                {pkg.cancellationPolicy.map((rule) => (
                  <li key={rule} className="text-sm text-navy-800">• {rule}</li>
                ))}
              </ul>
            </div>

            {/* Map */}
            {destination && (
              <div className="mt-12">
                <SectionHeader eyebrow="Location" title="Tour map" />
                <div className="mt-5 overflow-hidden rounded-2xl border border-mist-200">
                  <iframe
                    title={`Map of ${destination.name}`}
                    className="h-80 w-full"
                    loading="lazy"
                    src={`https://www.google.com/maps?q=${destination.mapEmbed.lat},${destination.mapEmbed.lng}&z=9&output=embed`}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sticky booking sidebar */}
          <BookingSidebar pkg={pkg} />
        </div>
      </section>
    </>
  );
}
