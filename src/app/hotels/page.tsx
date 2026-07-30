import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { hotels } from "@/data/hotels";
import { formatINR } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import SectionHeader from "@/components/ui/section-header";
import Rating from "@/components/ui/rating";

export const metadata: Metadata = {
  title: "Hotels & Houseboats in Kashmir & Ladakh",
  description: "Browse handpicked hotels, houseboats and luxury camps across Kashmir and Ladakh — every stay personally inspected by our team before listing.",
  alternates: { canonical: `${siteConfig.url}/hotels` },
};

export default function HotelsPage() {
  return (
    <div className="container-xl px-6 py-10">
      <SectionHeader
        eyebrow="Handpicked Stays"
        title="Hotels & houseboats"
        description="Every stay below is personally inspected by our team — no surprises on arrival."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((h) => (
          <Link
            key={h.slug}
            href={`/hotels/${h.slug}`}
            className="card-premium group flex h-full flex-col overflow-hidden rounded-card border border-mist-200 bg-white"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={h.image}
                alt={h.name}
                fill
                sizes="(max-width: 640px) 100vw, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-navy-900 backdrop-blur">
                <Star size={12} className="fill-gold-500 text-gold-500" /> {h.starRating}-star {h.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-semibold leading-snug text-navy-950">{h.name}</h3>
              <p className="mt-1 text-sm text-navy-700/60">{h.location}</p>
              <div className="mt-2"><Rating value={h.rating} reviewCount={h.reviewCount} /></div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {h.amenities.slice(0, 3).map((a) => (
                  <span key={a} className="rounded-full bg-mist-100 px-2.5 py-1 text-[11px] text-navy-700/70">{a}</span>
                ))}
              </div>
              <div className="mt-auto flex items-end justify-between pt-4">
                <div>
                  <p className="text-[11px] text-navy-700/60">Per night</p>
                  <p className="font-display text-xl font-semibold text-navy-950">{formatINR(h.pricePerNight)}</p>
                </div>
                <span className="rounded-xl bg-navy-950 px-4 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-gold-600 group-hover:text-navy-950">
                  View Property
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
