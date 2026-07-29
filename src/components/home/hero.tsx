"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Headset, Heart, Mountain, Snowflake, Star, Users } from "lucide-react";
import { img } from "@/data/image-pool";

const destinationList = [
  { icon: Mountain, name: "Kashmir", count: "120 Packages", description: "Houseboats, meadows & gardens", href: "/destinations/kashmir" },
  { icon: Snowflake, name: "Ladakh", count: "85 Packages", description: "High passes & monasteries", href: "/destinations/ladakh" },
  { icon: Heart, name: "Honeymoon", count: "40 Packages", description: "Romantic escapes for two", href: "/packages?category=honeymoon" },
  { icon: Users, name: "Family", count: "65 Packages", description: "Easy-paced multi-gen trips", href: "/packages?category=family" },
];

const stats = [
  { icon: Users, value: "12,000+", label: "Happy Travelers" },
  { icon: Star, value: "4.9★", label: "Google Rating" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Headset, value: "24×7", label: "Travel Support" },
];

export default function Hero() {
  return (
    <section className="relative h-140 w-full overflow-hidden bg-navy-950">
      <Image
        src={img("turquoiseLakeSunriseReflection", 2400)}
        alt="Sunrise over Pangong Tso, Ladakh"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/40" />

      <div className="container-xl relative flex h-full flex-col px-6 pb-24 pt-10">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-4 inline-flex items-center rounded-full bg-gold-500/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-navy-950">
              Kashmir &amp; Ladakh Specialists
            </span>
            <h1 className="max-w-[650px] text-[34px] font-extrabold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
              Explore Kashmir &amp; Ladakh Beyond Expectations
            </h1>
            <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-white/80">
              Luxury stays, private cabs, curated itineraries, crafted by local experts.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Packages <ArrowRight size={16} />
              </Link>
              <Link
                href="/customize"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-1"
              >
                Customize Trip
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel hidden rounded-[28px] p-6 lg:block"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-white/70">Popular Destinations</p>
            <div className="space-y-1">
              {destinationList.map(({ icon: Icon, name, count, description, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="group flex items-center gap-3 rounded-2xl px-2 py-3 transition-colors duration-200 hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-gold-400">
                    <Icon size={19} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center justify-between text-sm font-bold text-white">
                      {name} <span className="text-xs font-semibold text-gold-400">{count}</span>
                    </p>
                    <p className="truncate text-xs font-medium text-white/60">{description}</p>
                  </div>
                  <ArrowRight size={15} className="shrink-0 text-white/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gold-400" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating statistics */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-8 z-10 px-6"
      >
        <div className="container-xl grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3.5 shadow-xl backdrop-blur-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-950/5 text-gold-600">
                <Icon size={17} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-lg font-extrabold leading-none text-navy-950">{value}</p>
                <p className="truncate text-[11px] font-semibold text-navy-600">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
