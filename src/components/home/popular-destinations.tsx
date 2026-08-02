import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { circuits } from "@/data/circuits";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";
import FadeIn from "@/components/motion/fade-in";
import ScrollRail from "@/components/ui/scroll-rail";

export default function PopularDestinations() {
  return (
    <section className="bg-mist-50 py-10">
      <div className="mx-auto max-w-[1320px] px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="Popular Circuits"
            title="Places you'll actually want to linger in"
            description="From Srinagar's houseboats to Ladakh's high passes — each stop below is part of a larger, better-paced journey."
          />
        </FadeIn>

        <div className="mt-10">
          <ScrollRail>
            {circuits.map((c) => (
              <Link
                key={c.slug}
                href={`/destinations/${c.destinationSlug}#${c.slug}`}
                className="card-premium group relative flex h-72 w-[85vw] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[20px] sm:w-80 lg:w-96"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 320px, 384px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />
                <div className="relative p-6">
                  <span className="mb-2 flex w-fit items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                    <Clock size={11} /> {c.duration}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white">{c.name}</h3>
                  <p className="mt-1 text-sm text-mist-100/80">{c.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gold-400">From {formatINR(c.startingPrice)}</p>
                    <span className="flex items-center gap-1 text-xs font-semibold text-white transition-transform group-hover:translate-x-1">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </ScrollRail>
        </div>
      </div>
    </section>
  );
}
