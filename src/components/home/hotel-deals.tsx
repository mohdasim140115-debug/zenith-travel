import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";
import { hotels } from "@/data/hotels";
import { siteConfig } from "@/data/site-config";
import { formatINR, whatsappLink } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";
import FadeIn from "@/components/motion/fade-in";
import ScrollRail from "@/components/ui/scroll-rail";

export default function HotelDeals() {
  return (
    <section id="hotel-deals" className="mx-auto max-w-[1320px] scroll-mt-24 px-6 py-10">
      <FadeIn>
        <SectionHeader
          eyebrow="Handpicked Stays"
          title="Hotels & houseboats"
          description="Every stay is personally inspected — no surprises on arrival."
        />
      </FadeIn>

      <div className="mt-10">
        <ScrollRail>
          {hotels.map((h) => (
            <div
              key={h.slug}
              className="card-premium relative flex h-96 w-full shrink-0 snap-start flex-col justify-center overflow-hidden rounded-card"
            >
              <Image src={h.image} alt={h.name} fill sizes="1280px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-transparent" />

              <div className="relative max-w-xl px-8 sm:px-12">
                <Link href={`/hotels/${h.slug}`} className="group block">
                  <p className="mb-2 border-l-2 border-gold-500 pl-3 text-sm text-mist-100/85">{h.location.split(",").pop()?.trim()}</p>
                  <h3 className="font-display text-3xl font-semibold text-gold-400 transition-colors group-hover:text-gold-300 sm:text-4xl">
                    {h.name}
                  </h3>

                  <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mist-100/85">
                    {h.amenities.slice(0, 4).map((a, i) => (
                      <span key={a} className="flex items-center gap-2">
                        {i > 0 && <span className="text-mist-100/40">·</span>}
                        {a}
                      </span>
                    ))}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-mist-100/85">
                    <Star size={14} className="fill-gold-500 text-gold-500" />
                    {h.starRating}-star {h.category} · {h.rating}★ ({h.reviewCount} reviews)
                  </div>

                  <p className="mt-1 text-base font-semibold text-white">
                    Per night from <span className="text-gold-400">{formatINR(h.pricePerNight)}</span>
                  </p>

                  <p className="mt-4 flex items-start gap-2 text-sm text-mist-100/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-400" />
                    Personally inspected by our team — book with confidence, no surprises on arrival.
                  </p>
                </Link>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappLink(`Hi! I'd like to know more about "${h.name}" in ${h.location}.`, siteConfig.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-card bg-gradient-to-r from-gold-500 to-gold-600 px-7 py-3 text-sm font-semibold text-navy-950 shadow-card transition-transform hover:scale-[1.03]"
                  >
                    Book Now
                  </a>
                  <Link
                    href={`/hotels/${h.slug}`}
                    className="glass inline-flex items-center rounded-card px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 text-[10px] font-bold text-gold-400">24×7</span>
                <p className="text-xs font-semibold leading-tight text-navy-950">
                  Book Online<br /><span className="font-normal text-navy-700/60">Anytime, from anywhere</span>
                </p>
              </div>
            </div>
          ))}
        </ScrollRail>
      </div>
    </section>
  );
}
