import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Bed, MapPin, ShieldCheck, Sparkles, Star, UtensilsCrossed, Wifi } from "lucide-react";
import { hotels, getHotelBySlug } from "@/data/hotels";
import { siteConfig } from "@/data/site-config";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";
import Rating from "@/components/ui/rating";
import HotelGallery from "@/components/hotels/hotel-gallery";
import HotelBookingPanel from "@/components/hotels/hotel-booking-panel";
import HotelDetailTabs from "@/components/hotels/hotel-detail-tabs";

const includeIcons: Record<string, typeof Bed> = {
  Stay: Bed,
  "All Meals": UtensilsCrossed,
  Breakfast: UtensilsCrossed,
  "Wi-Fi": Wifi,
  "Shikara Pickup": Sparkles,
  "Airport Pickup": Sparkles,
  Heating: ShieldCheck,
  "Oxygen Support": ShieldCheck,
  Restaurant: UtensilsCrossed,
  Bonfire: Sparkles,
  "Lake View": Sparkles,
  "Heated Tent": Bed,
  "Local Host": Sparkles,
};

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) return {};

  return {
    title: `${hotel.name} — ${hotel.location}`,
    description: hotel.description,
    alternates: { canonical: `${siteConfig.url}/hotels/${hotel.slug}` },
    openGraph: { images: [{ url: hotel.image }] },
  };
}

export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) notFound();

  const related = hotels.filter((h) => h.slug !== hotel.slug && h.destinationSlug === hotel.destinationSlug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description: hotel.description,
    starRating: { "@type": "Rating", ratingValue: hotel.starRating },
    address: hotel.location,
    aggregateRating: { "@type": "AggregateRating", ratingValue: hotel.rating, reviewCount: hotel.reviewCount },
    priceRange: formatINR(hotel.pricePerNight),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container-xl px-6 py-6">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-navy-700/60">
          <Link href="/">Home</Link> <span>/</span> <Link href="/hotels">Hotels</Link> <span>/</span>
          <span className="text-navy-950">{hotel.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <HotelGallery images={[hotel.image, ...hotel.gallery]} name={hotel.name} />

            <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-gold-700">
                  <Star size={12} className="fill-gold-500 text-gold-500" /> {hotel.starRating}-star {hotel.category}
                </span>
                <h1 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">{hotel.name}</h1>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-navy-700/70"><MapPin size={14} /> {hotel.location}</p>
              </div>
              <Rating value={hotel.rating} reviewCount={hotel.reviewCount} />
            </div>

            {/* Includes icon row */}
            <div className="mt-5 flex flex-wrap gap-3 border-y border-mist-200 py-4">
              {hotel.includes.map((label) => {
                const Icon = includeIcons[label] ?? Sparkles;
                return (
                  <span key={label} className="flex items-center gap-2 rounded-full bg-mist-100 px-3.5 py-2 text-xs font-medium text-navy-800">
                    <Icon size={14} className="text-gold-700" /> {label}
                  </span>
                );
              })}
            </div>

            <p className="mt-5 text-base leading-relaxed text-navy-800">{hotel.description}</p>

            <div className="mt-10">
              <HotelDetailTabs hotel={hotel} />
            </div>

            {related.length > 0 && (
              <div className="mt-12 border-t border-mist-200 pt-10">
                <SectionHeader eyebrow="Nearby" title="Other stays in the region" />
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/hotels/${r.slug}`} className="group overflow-hidden rounded-2xl border border-mist-200 bg-white transition-shadow hover:shadow-lg">
                      <div className="relative h-32 w-full overflow-hidden">
                        <Image src={r.image} alt={r.name} fill sizes="240px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-3">
                        <p className="truncate text-sm font-semibold text-navy-950">{r.name}</p>
                        <p className="text-xs text-navy-700/60">{formatINR(r.pricePerNight)} / night</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <HotelBookingPanel hotel={hotel} />
        </div>
      </div>
    </>
  );
}
