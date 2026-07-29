import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Info, MapPin, XCircle } from "lucide-react";
import { activities, getActivityBySlug } from "@/data/activities";
import { siteConfig } from "@/data/site-config";
import Rating from "@/components/ui/rating";
import SectionHeader from "@/components/ui/section-header";
import FaqAccordion from "@/components/shared/faq-accordion";
import ActivityBookingForm from "@/components/activities/activity-booking-form";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) return {};

  return {
    title: `${activity.name} — ${activity.location}`,
    description: activity.description,
    alternates: { canonical: `${siteConfig.url}/activities/${activity.slug}` },
    openGraph: { images: [{ url: activity.image }] },
  };
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  const related = activities.filter((a) => a.slug !== activity.slug && a.destinationSlug === activity.destinationSlug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: activity.name,
    description: activity.description,
    offers: { "@type": "Offer", price: activity.price, priceCurrency: "INR" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: activity.rating, reviewCount: activity.reviewCount },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative flex h-[56vh] min-h-96 items-end overflow-hidden bg-navy-950">
        <Image src={activity.image} alt={activity.name} fill priority sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-10">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-mist-100/70">
            <Link href="/">Home</Link> <span>/</span> <Link href="/activities">Activities</Link> <span>/</span>
            <span className="text-white">{activity.name}</span>
          </nav>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            <MapPin size={13} /> {activity.location}
          </p>
          <h1 className="max-w-2xl font-display text-3xl font-semibold text-white sm:text-5xl text-balance">{activity.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Rating value={activity.rating} reviewCount={activity.reviewCount} />
            <span className="flex items-center gap-1.5 text-sm text-mist-100/85"><Clock size={14} /> {activity.duration}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.7fr_1fr]">
          {/* Main content */}
          <div>
            <p className="text-base leading-relaxed text-navy-800">{activity.description}</p>

            <div className="mt-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-700">Highlights</p>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {activity.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-navy-800">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-600" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <SectionHeader eyebrow="What to Expect" title="How it unfolds" />
              <ol className="mt-5 space-y-3">
                {activity.itinerary.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-navy-800">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[11px] font-semibold text-gold-400">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">Inclusions</p>
                <ul className="space-y-2.5">
                  {activity.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-800">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-700">Exclusions</p>
                <ul className="space-y-2.5">
                  {activity.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-800">
                      <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-3 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-gold-700">
                <Info size={14} /> Good to Know
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {activity.goodToKnow.map((g) => (
                  <div key={g.label} className="rounded-2xl border border-mist-200 bg-mist-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-700/60">{g.label}</p>
                    <p className="mt-1 text-sm text-navy-900">{g.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {activity.gallery.length > 0 && (
              <div className="mt-10">
                <SectionHeader eyebrow="Gallery" title="A closer look" />
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {activity.gallery.map((src, i) => (
                    <div key={i} className="relative aspect-4/3 overflow-hidden rounded-2xl">
                      <Image src={src} alt={`${activity.name} ${i + 1}`} fill sizes="300px" className="object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12">
              <SectionHeader eyebrow="FAQ" title={`${activity.name} — frequently asked questions`} />
              <div className="mt-6">
                <FaqAccordion items={activity.faqs} />
              </div>
            </div>
          </div>

          {/* Sticky booking sidebar */}
          <ActivityBookingForm activity={activity} />
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-mist-200 pt-12">
            <SectionHeader eyebrow="Pair It With" title="Other experiences nearby" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/activities/${r.slug}`} className="group overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image src={r.image} alt={r.name} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gold-700">{r.location}</p>
                    <h3 className="mt-1 font-display text-base font-semibold text-navy-950">{r.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
