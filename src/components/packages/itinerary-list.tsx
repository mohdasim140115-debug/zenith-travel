"use client";

import { useState } from "react";
import { BedDouble, ChevronDown, UtensilsCrossed } from "lucide-react";
import { ItineraryDay } from "@/data/packages";
import { cn } from "@/lib/utils";

export default function ItineraryList({ days }: { days: ItineraryDay[] }) {
  const [openDay, setOpenDay] = useState(1);

  return (
    <div className="space-y-3">
      {days.map((day) => {
        const isOpen = openDay === day.day;
        return (
          <div key={day.day} className="overflow-hidden rounded-2xl border border-mist-200 bg-white">
            <button
              onClick={() => setOpenDay(isOpen ? -1 : day.day)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-950 text-xs font-semibold text-gold-400">
                D{day.day}
              </span>
              <span className="flex-1 font-medium text-navy-950">{day.title}</span>
              <ChevronDown size={18} className={cn("shrink-0 text-navy-700/50 transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen && (
              <div className="border-t border-mist-100 px-5 py-4 animate-fade-up">
                <p className="text-sm leading-relaxed text-navy-800">{day.description}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-navy-700/70">
                  <span className="flex items-center gap-1.5">
                    <UtensilsCrossed size={13} /> {day.meals.join(", ") || "No meals included"}
                  </span>
                  {day.stay && (
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={13} /> {day.stay}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
