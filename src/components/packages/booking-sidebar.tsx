"use client";

import { useState } from "react";
import { CalendarCheck, Download, MessageCircle, ShieldCheck } from "lucide-react";
import { TourPackage } from "@/data/packages";
import { siteConfig } from "@/data/site-config";
import { cn, formatINR, whatsappLink } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  available: "bg-green-50 text-green-700 border-green-200",
  "filling-fast": "bg-amber-50 text-amber-700 border-amber-200",
  "sold-out": "bg-mist-100 text-navy-700/50 border-mist-200",
};

export default function BookingSidebar({ pkg }: { pkg: TourPackage }) {
  const [selectedDate, setSelectedDate] = useState(
    pkg.availableDates.find((d) => d.status !== "sold-out")?.date ?? pkg.availableDates[0]?.date
  );

  const enquiryMessage = `Hi! I'm interested in "${pkg.title}" (${pkg.duration}) — departure ${selectedDate}. Please share availability and next steps.`;

  return (
    <aside className="sticky top-28 h-fit rounded-3xl border border-mist-200 bg-white p-6 shadow-lg shadow-navy-950/5">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xs text-navy-700/60">Starting from</p>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-semibold text-navy-950">{formatINR(pkg.price)}</span>
            {pkg.originalPrice && <span className="text-sm text-navy-700/40 line-through">{formatINR(pkg.originalPrice)}</span>}
          </div>
          <p className="text-xs text-navy-700/50">per person, twin sharing</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-navy-900">
          <CalendarCheck size={15} /> Choose a departure date
        </p>
        <div className="space-y-2">
          {pkg.availableDates.map((d) => (
            <button
              key={d.date}
              disabled={d.status === "sold-out"}
              onClick={() => setSelectedDate(d.date)}
              className={cn(
                "flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-colors disabled:cursor-not-allowed",
                selectedDate === d.date ? "border-navy-950 bg-navy-950 text-white" : "border-mist-200 hover:bg-mist-50"
              )}
            >
              <span className="font-medium">{d.date}</span>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
                  selectedDate === d.date ? "border-white/30 bg-white/10 text-white" : statusStyles[d.status]
                )}
              >
                {d.status === "sold-out" ? "Sold Out" : d.status === "filling-fast" ? `${d.seatsLeft} left` : `${d.seatsLeft} seats`}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <a
          href={whatsappLink(enquiryMessage, siteConfig.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <MessageCircle size={17} /> Enquire on WhatsApp
        </a>
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 py-3.5 text-sm font-semibold text-navy-950 shadow-md shadow-gold-600/25 transition-transform hover:scale-[1.02]">
          Book Now
        </button>
        <button
          onClick={() => window.print()}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-mist-200 py-3.5 text-sm font-semibold text-navy-900 hover:bg-mist-50 transition-colors"
        >
          <Download size={16} /> Download PDF Itinerary
        </button>
      </div>

      <p className="mt-5 flex items-center gap-2 text-xs text-navy-700/60">
        <ShieldCheck size={14} className="text-gold-600" /> Secure booking · Pay 20% to confirm
      </p>
    </aside>
  );
}
