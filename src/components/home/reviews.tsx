import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Rating from "@/components/ui/rating";
import ScrollRail from "@/components/ui/scroll-rail";
import { GoogleIcon } from "@/components/ui/social-icons";
import FadeIn from "@/components/motion/fade-in";

export default function Reviews() {
  return (
    <section className="px-6 py-9">
      <div className="container-xl">
        <FadeIn>
          <h2 className="text-center font-display text-xl font-semibold text-navy-950 sm:text-2xl">
            Trusted by Zenith Voyages guests across Kashmir &amp; Ladakh
          </h2>
        </FadeIn>

        <div className="mt-8">
          <ScrollRail>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-premium flex min-h-[420px] w-96 shrink-0 snap-start flex-col rounded-2xl border border-mist-200 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-full bg-gold-500/15 px-3 py-1.5 text-xs font-semibold text-gold-700">
                    {t.category}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-mist-100 px-2.5 py-1.5 text-[11px] font-medium text-navy-700/70">
                    <GoogleIcon size={13} /> Google
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  {t.image && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                      <Image src={t.image} alt={t.tour} fill sizes="64px" className="object-cover" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <Rating value={t.rating} />
                    <h3 className="mt-1 font-display text-base font-semibold leading-snug text-navy-950">{t.tour}</h3>
                  </div>
                </div>

                <Quote size={26} className="mt-5 text-gold-500/30" />
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-800 line-clamp-5">
                  {t.review}
                </p>

                <div className="mt-5 flex items-end justify-between border-t border-mist-100 pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-950">{t.name}</p>
                      <p className="text-xs text-navy-700/60">{t.location} · {t.date}</p>
                    </div>
                  </div>
                  <p className="text-right text-xs text-navy-700/60">
                    Tour Manager<br /><span className="font-semibold text-navy-950">{t.tourManager}</span>
                  </p>
                </div>
              </div>
            ))}
          </ScrollRail>
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/faqs"
            className="rounded-card bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-2.5 text-sm font-semibold text-navy-950 shadow-card transition-transform hover:scale-[1.03]"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
