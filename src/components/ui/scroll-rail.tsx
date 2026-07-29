"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollRail({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={ref} className="scroll-rail flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
        {children}
      </div>
      <button
        aria-label="Scroll left"
        onClick={() => scroll(-1)}
        className="absolute -left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mist-200 bg-white text-navy-900 shadow-lg lg:flex hover:bg-mist-100 transition-colors"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        aria-label="Scroll right"
        onClick={() => scroll(1)}
        className="absolute -right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mist-200 bg-white text-navy-900 shadow-lg lg:flex hover:bg-mist-100 transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
