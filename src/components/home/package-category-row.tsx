import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { packageCategoryTiles } from "@/data/package-categories";
import SectionHeader from "@/components/ui/section-header";
import ScrollRail from "@/components/ui/scroll-rail";
import FadeIn from "@/components/motion/fade-in";

export default function PackageCategoryRow() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1320px] px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="Explore By Style"
            title="Find your kind of trip"
            description="Every style below opens to its own filtered list of Kashmir & Ladakh packages."
          />
        </FadeIn>

        <div className="mt-10">
          <ScrollRail>
            {packageCategoryTiles.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <FadeIn key={tile.category} delay={Math.min(i * 0.06, 0.3)} className="w-56 shrink-0 snap-start">
                  <Link
                    href={`/packages?category=${tile.category}`}
                    className="card-premium group flex h-full flex-col overflow-hidden rounded-card border border-mist-200 bg-white"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={tile.image}
                        alt={tile.label}
                        fill
                        sizes="220px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-950 backdrop-blur">
                        <Icon size={16} />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-display text-base font-semibold leading-snug text-navy-950">{tile.label}</h3>
                      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-navy-700/70">{tile.description}</p>
                      <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-gold-700 transition-transform group-hover:translate-x-1">
                        View packages <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </ScrollRail>
        </div>
      </div>
    </section>
  );
}
