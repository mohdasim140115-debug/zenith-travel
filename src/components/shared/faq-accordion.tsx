"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-mist-200 rounded-2xl border border-mist-200 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-navy-950">{item.question}</span>
              <ChevronDown size={18} className={cn("shrink-0 text-navy-700/60 transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-navy-700/80 animate-fade-up">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
