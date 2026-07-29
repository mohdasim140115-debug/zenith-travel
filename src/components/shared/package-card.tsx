"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Heart, MapPin } from "lucide-react";
import { TourPackage } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { cn, formatINR, whatsappLink } from "@/lib/utils";
import Rating from "@/components/ui/rating";

export default function PackageCard({ pkg }: { pkg: TourPackage }) {
  const [wishlisted, setWishlisted] = useState(false);
  const discount = pkg.originalPrice
    ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
    : null;
  const detailHref = `/packages/${pkg.slug}`;
  const bookNowLink = whatsappLink(`Hi! I'd like to book "${pkg.title}" (${pkg.duration}). Please share availability.`, siteConfig.whatsapp);

  return (
    <div className="card-premium group flex h-full w-full flex-col overflow-hidden rounded-card border border-mist-200 bg-white">
      <div className="relative h-52 w-full overflow-hidden">
        <Link href={detailHref} className="absolute inset-0">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            sizes="(max-width: 640px) 300px, 340px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-navy-950/0" />
        </Link>

        {(pkg.categories.includes("best-selling") || discount) && (
          <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-950">
            {discount ? `${discount}% OFF` : "Bestseller"}
          </span>
        )}

        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.preventDefault();
            setWishlisted((w) => !w);
          }}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-900 backdrop-blur transition-colors hover:bg-white"
        >
          <Heart size={15} className={cn(wishlisted && "fill-red-500 text-red-500")} />
        </button>

        <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-navy-900 backdrop-blur">
          <Clock size={12} /> {pkg.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gold-700">
          <MapPin size={12} /> {pkg.cities.join(" · ")}
        </div>
        <Link href={detailHref}>
          <h3 className="font-display text-lg font-semibold leading-snug text-navy-950 line-clamp-2 hover:text-gold-700 transition-colors">
            {pkg.title}
          </h3>
        </Link>
        <div className="mt-2">
          <Rating value={pkg.rating} reviewCount={pkg.reviewCount} />
        </div>
        <p className="mt-1.5 text-xs text-navy-700/60">{pkg.guestsTravelled} guests travelled</p>

        <div className="mt-3">
          <p className="text-xs text-navy-700/60">Starting from</p>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold text-navy-950">{formatINR(pkg.price)}</span>
            {pkg.originalPrice && (
              <span className="text-xs text-navy-700/40 line-through">{formatINR(pkg.originalPrice)}</span>
            )}
          </div>
          <p className="text-[11px] text-navy-700/50">per person</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href={bookNowLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 py-2.5 text-xs font-semibold text-navy-950 transition-transform hover:scale-[1.02]"
          >
            Book Now
          </a>
          <Link
            href={detailHref}
            className="flex items-center justify-center rounded-xl bg-navy-950 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
