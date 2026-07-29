import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { activities } from "@/data/activities";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";
import Rating from "@/components/ui/rating";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Activities & Experiences in Kashmir & Ladakh",
  description: "Book stand-alone experiences — Gulmarg Gondola, Dal Lake shikara rides, Pangong camping, Nubra camel safari, river rafting, ATV rides and more.",
  alternates: { canonical: `${siteConfig.url}/activities` },
};

export default function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        eyebrow="Experiences"
        title="Activities in Kashmir & Ladakh"
        description="Book these as stand-alone experiences, or bundle them into any package during checkout."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((a) => (
          <Link key={a.slug} href={`/activities/${a.slug}`} className="group overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
            <div className="relative h-48 w-full overflow-hidden">
              <Image src={a.image} alt={a.name} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-navy-900 backdrop-blur">
                <Clock size={12} /> {a.duration}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gold-700">{a.location}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-navy-950">{a.name}</h3>
              <div className="mt-2"><Rating value={a.rating} reviewCount={a.reviewCount} /></div>
              <p className="mt-3 text-sm text-navy-700/70 line-clamp-2">{a.description}</p>
              <p className="mt-4 font-display text-lg font-semibold text-navy-950">
                {formatINR(a.price)} <span className="text-xs font-normal text-navy-700/50">{a.priceUnit}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
