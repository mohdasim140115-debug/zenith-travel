import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2, MapPin, Sun } from "lucide-react";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { getPackagesByDestination } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";
import PackageCard from "@/components/shared/package-card";
import ScrollRail from "@/components/ui/scroll-rail";
import FaqAccordion from "@/components/shared/faq-accordion";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};

  const title = `${destination.name} Tour Packages — ${destination.tagline}`;
  const description = `Plan your ${destination.name} trip: best time to visit, top attractions, handpicked packages from ${formatINR(destination.startingPrice)}, weather, and travel guide.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/destinations/${destination.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/destinations/${destination.slug}`,
      images: [{ url: destination.heroImage }],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const pkgs = getPackagesByDestination(destination.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.overview,
    url: `${siteConfig.url}/destinations/${destination.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Destinations", item: `${siteConfig.url}/destinations` },
      { "@type": "ListItem", position: 3, name: destination.name, item: `${siteConfig.url}/destinations/${destination.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="relative flex h-[70vh] min-h-[480px] items-end overflow-hidden bg-navy-950">
        <Image src={destination.heroImage} alt={destination.name} fill priority sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-mist-100/70">
            <Link href="/">Home</Link> <span>/</span> <Link href="/destinations/kashmir">Destinations</Link> <span>/</span>
            <span className="text-white">{destination.name}</span>
          </nav>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            <MapPin size={13} /> {destination.region}
          </p>
          <h1 className="font-display text-4xl font-semibold text-white sm:text-6xl">{destination.name}</h1>
          <p className="mt-3 max-w-xl text-mist-100/85">{destination.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">{destination.tourCount} curated tours</span>
            <span className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-950">From {formatINR(destination.startingPrice)}</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeader eyebrow="Overview" title={`Why visit ${destination.name}`} />
            <p className="mt-5 text-base leading-relaxed text-navy-800">{destination.overview}</p>

            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-700">Things to Do</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {destination.thingsToDo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-800">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best time to visit card */}
          <aside className="h-fit rounded-2xl border border-mist-200 bg-mist-50 p-6">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold-700">
              <CalendarDays size={16} /> Best Time to Visit
            </p>
            <ul className="space-y-4">
              {destination.bestTimeToVisit.map((b) => (
                <li key={b.period}>
                  <p className="text-sm font-semibold text-navy-950">{b.period}</p>
                  <p className="text-xs text-navy-700/70">{b.note}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Weather */}
      <section className="bg-mist-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Weather" title="Weather through the year" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destination.weather.map((w) => (
              <div key={w.season} className="rounded-2xl border border-mist-200 bg-white p-5">
                <p className="flex items-center gap-2 font-display text-lg font-semibold text-navy-950">
                  <Sun size={16} className="text-gold-500" /> {w.season}
                </p>
                <p className="mt-1 text-xs text-navy-700/60">{w.months}</p>
                <p className="mt-3 text-xl font-semibold text-navy-950">{w.tempRange}</p>
                <p className="mt-2 text-sm text-navy-700/70">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader eyebrow="Must See" title="Top attractions" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destination.topAttractions.map((a) => (
            <div key={a.name} className="overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm">
              <div className="relative h-44 w-full">
                <Image src={a.image} alt={a.name} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-semibold text-navy-950">{a.name}</h3>
                <p className="mt-1 text-sm text-navy-700/70">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      {pkgs.length > 0 && (
        <section className="bg-mist-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeader eyebrow="Book Your Trip" title={`${destination.name} tour packages`} />
              <Link href={`/packages?destination=${destination.slug}`} className="text-sm font-semibold text-navy-900 hover:text-gold-700">
                View all {pkgs.length} packages
              </Link>
            </div>
            <div className="mt-8">
              <ScrollRail>
                {pkgs.map((pkg) => (
                  <div key={pkg.slug} className="w-75 shrink-0 snap-start">
                    <PackageCard pkg={pkg} />
                  </div>
                ))}
              </ScrollRail>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader eyebrow="Gallery" title={`${destination.name} in pictures`} />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {destination.gallery.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={src} alt={`${destination.name} gallery ${i + 1}`} fill sizes="(max-width: 640px) 50vw, 300px" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* Nearby */}
      {destination.nearbyDestinations.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <SectionHeader eyebrow="Combine Your Trip" title="Nearby destinations" />
          <div className="mt-6 flex flex-wrap gap-4">
            {destination.nearbyDestinations.map((n) => (
              <Link key={n.slug} href={`/destinations/${n.slug}`} className="flex items-center gap-3 rounded-2xl border border-mist-200 bg-white px-5 py-4 shadow-sm hover:shadow-lg transition-shadow">
                <MapPin size={18} className="text-gold-600" />
                <div>
                  <p className="font-semibold text-navy-950">{n.name}</p>
                  <p className="text-xs text-navy-700/60">{n.distance}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <SectionHeader eyebrow="FAQ" title={`${destination.name} travel FAQs`} align="center" />
        <div className="mt-8">
          <FaqAccordion items={destination.faqs} />
        </div>
      </section>
    </>
  );
}
