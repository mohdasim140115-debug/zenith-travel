import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { packages } from "@/data/packages";
import { formatINR } from "@/lib/utils";
import { img } from "@/data/image-pool";
import FadeIn from "@/components/motion/fade-in";

export default function DestinationPromoBanner() {
  const picks = packages.slice(0, 5);

  return (
    <section className="px-6 py-9">
      <FadeIn className="container-xl">
        <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-gold-400/15 via-mist-50 to-white">
          <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8 lg:p-10">
            <div>
              <h2 className="font-display text-2xl font-semibold leading-tight text-navy-950 sm:text-3xl">
                <span className="text-gold-700">12 Years</span> Trusted.{" "}
                <span className="text-gold-700">48,000+</span> Delighted.
              </h2>
              <p className="mt-2 text-sm text-navy-700/70 sm:text-base">
                Visit all-inclusive <span className="font-semibold text-navy-950 underline decoration-gold-500 decoration-2 underline-offset-2">KASHMIR &amp; LADAKH</span> tours with {" "}
                <span className="font-semibold text-navy-950">Zenith Voyages</span>
              </p>

              <div className="mt-6 flex gap-3 overflow-x-auto scroll-rail pb-1">
                {picks.map((pkg, i) => (
                  <Link
                    key={pkg.slug}
                    href={`/packages/${pkg.slug}`}
                    className={
                      i === 0
                        ? "card-premium flex w-44 shrink-0 flex-col rounded-2xl bg-gold-400/20 p-4"
                        : "flex w-40 shrink-0 flex-col rounded-2xl border border-mist-200 bg-white p-4 transition-shadow hover:shadow-md"
                    }
                  >
                    <p className="text-xs text-navy-700/60">{pkg.duration.split(" / ")[0]}</p>
                    <p className="mt-1 font-display text-sm font-semibold leading-snug text-navy-950">{pkg.title.split(" — ")[0]}</p>
                    <p className="mt-3 text-[11px] text-navy-700/60">Starting from</p>
                    <p className="font-display text-base font-semibold text-navy-950">{formatINR(pkg.price)}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative hidden h-64 overflow-hidden rounded-2xl shadow-card lg:block">
              <Image
                src={img("mountainSunriseClouds", 1200)}
                alt="Kashmir and Ladakh landscapes"
                fill
                sizes="480px"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-lg">
                <CheckCircle2 size={16} className="text-gold-600" />
                <div>
                  <p className="text-xs font-semibold leading-none text-navy-950">Book Online</p>
                  <p className="text-[11px] text-navy-700/60">Anytime, from anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
