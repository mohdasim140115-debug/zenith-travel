import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";

export default function FeaturedDestinations() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 py-10">
      <SectionHeader
        eyebrow="Featured Destinations"
        title="Two regions. Endless ways to experience them."
        description="We go deep rather than wide — every itinerary, hotel and guide across Kashmir and Ladakh is personally vetted by our team."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {destinations.map((d) => (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="group relative h-[420px] overflow-hidden rounded-3xl"
          >
            <Image
              src={d.heroImage}
              alt={d.name}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {d.tourCount} curated tours
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-navy-950 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <h3 className="font-display text-3xl font-semibold text-white">{d.name}</h3>
              <p className="mt-2 max-w-sm text-sm text-mist-100/80">{d.tagline}</p>
              <p className="mt-3 text-sm font-medium text-gold-400">
                Packages from {formatINR(d.startingPrice)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
