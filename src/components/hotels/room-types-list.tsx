"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronDown, Maximize, Users } from "lucide-react";
import { getRoomTypes } from "@/data/room-types";
import { formatINR } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function RoomTypesList({ basePrice, images }: { basePrice: number; images: string[] }) {
  const roomTypes = getRoomTypes(basePrice);
  const [expanded, setExpanded] = useState<string | null>(roomTypes[0]?.key ?? null);

  return (
    <div className="space-y-4">
      {roomTypes.map((room, i) => {
        const isOpen = expanded === room.key;
        const image = images[i % images.length];
        const discount = room.originalPrice ? Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100) : null;

        return (
          <div key={room.key} className="card-premium overflow-hidden rounded-2xl border border-mist-200 bg-white">
            <button
              onClick={() => setExpanded(isOpen ? null : room.key)}
              className="flex w-full items-stretch gap-4 p-3 text-left sm:p-4"
            >
              <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-36">
                <Image src={image} alt={room.name} fill sizes="150px" className="object-cover" />
                {room.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-bold text-navy-950">
                    {room.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-center">
                <p className="font-display text-base font-semibold text-navy-950 sm:text-lg">{room.name}</p>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-navy-700/60">
                  <span className="flex items-center gap-1"><Maximize size={12} /> {room.size}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> Sleeps {room.sleeps}</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-lg font-semibold text-navy-950 sm:text-xl">{formatINR(room.price)}</span>
                  {room.originalPrice && (
                    <span className="text-xs text-navy-700/40 line-through">{formatINR(room.originalPrice)}</span>
                  )}
                  {discount && discount > 0 && (
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-semibold text-green-700">{discount}% off</span>
                  )}
                  <span className="text-xs text-navy-700/50">/ night</span>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-end justify-center gap-2">
                <ChevronDown size={18} className={cn("text-navy-700/50 transition-transform", isOpen && "rotate-180")} />
              </div>
            </button>

            {isOpen && (
              <div className="animate-fade-up border-t border-mist-100 px-4 pb-4 pt-4 sm:px-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-700">What's included</p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {room.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-navy-800">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-gold-600" /> {inc}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 py-3 text-sm font-semibold text-navy-950 shadow-card transition-transform hover:scale-[1.02] sm:w-auto sm:px-8">
                  Select This Room
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
