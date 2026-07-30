"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Hotel } from "@/data/hotels";
import { cn } from "@/lib/utils";
import RoomTypesList from "@/components/hotels/room-types-list";

type Tab = "rooms" | "amenities" | "cancellation" | "location";

const cancellationRows = [
  { window: "7+ days before check-in", note: "Full refund" },
  { window: "3 – 7 days before check-in", note: "50% refund" },
  { window: "Less than 3 days before check-in", note: "Non-refundable" },
];

export default function HotelDetailTabs({ hotel }: { hotel: Hotel }) {
  const [tab, setTab] = useState<Tab>("rooms");

  const tabs: { key: Tab; label: string }[] = [
    { key: "rooms", label: "Room Details" },
    { key: "amenities", label: "Amenities" },
    { key: "cancellation", label: "Cancellation Policy" },
    { key: "location", label: "Location" },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-mist-200 pb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors",
              tab === t.key ? "border-navy-950 bg-navy-950 text-white" : "border-mist-200 text-navy-800 hover:bg-mist-50"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "rooms" && <RoomTypesList basePrice={hotel.pricePerNight} images={[hotel.image, ...hotel.gallery]} />}

        {tab === "amenities" && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {hotel.amenities.map((a) => (
              <div key={a} className="flex items-center gap-3 rounded-2xl border border-mist-200 bg-white p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700">
                  <CheckCircle2 size={17} />
                </span>
                <span className="text-sm font-medium text-navy-900">{a}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "cancellation" && (
          <div className="overflow-hidden rounded-2xl border border-mist-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-950 text-left text-white">
                  <th className="px-5 py-3 font-medium">Time frame (from check-in)</th>
                  <th className="px-5 py-3 font-medium">Refund</th>
                </tr>
              </thead>
              <tbody>
                {cancellationRows.map((row, i) => (
                  <tr key={row.window} className={i % 2 === 0 ? "bg-mist-50" : "bg-white"}>
                    <td className="px-5 py-3.5 font-medium text-navy-950">{row.window}</td>
                    <td className="px-5 py-3.5 text-navy-800">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "location" && (
          <div className="overflow-hidden rounded-2xl border border-mist-200">
            <iframe
              title={`Map of ${hotel.location}`}
              className="h-80 w-full"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.location)}&output=embed`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
