import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { activities } from "@/data/activities";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/ui/section-header";
import ScrollRail from "@/components/ui/scroll-rail";
import FadeIn from "@/components/motion/fade-in";

export default function ActivitiesSection() {
  return (
    <section className="bg-navy-950 py-10">
      <div className="mx-auto max-w-[1320px] px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="On-Ground Experiences"
            title="Activities that make the trip unforgettable"
            description="Book stand-alone experiences or bundle them into your itinerary — every operator is safety-vetted by our local team."
            className="[&_h2]:text-white [&_h2]:sm:whitespace-nowrap [&_p]:text-mist-100/70"
            maxWidthClassName="max-w-2xl sm:max-w-none"
          />
        </FadeIn>

        <div className="mt-10">
          <ScrollRail>
            {activities.map((a) => (
              <Link
                key={a.slug}
                href={`/activities/${a.slug}`}
                className="card-premium group flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-card bg-navy-900"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    sizes="260px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-gold-400">{a.location}</p>
                  <h3 className="mt-1 font-display text-base font-semibold text-white leading-snug">{a.name}</h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-mist-100/60">
                    <Clock size={12} /> {a.duration}
                  </p>
                  <p className="mt-auto pt-4 text-sm font-semibold text-gold-400">
                    {formatINR(a.price)} <span className="text-xs font-normal text-mist-100/50">{a.priceUnit}</span>
                  </p>
                  <span className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-gold-500 py-2 text-xs font-semibold text-navy-950 transition-colors group-hover:bg-gold-400">
                    Book Activity <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </ScrollRail>
        </div>
      </div>
    </section>
  );
}
