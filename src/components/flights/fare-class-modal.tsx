"use client";

import { CheckCircle2, Luggage, X } from "lucide-react";
import { FlightResult } from "@/data/flight-results";
import { getFareClasses } from "@/data/fare-classes";
import { siteConfig } from "@/data/site-config";
import { formatINR, whatsappLink } from "@/lib/utils";

export default function FareClassModal({
  flight,
  from,
  to,
  onClose,
}: {
  flight: FlightResult;
  from: string;
  to: string;
  onClose: () => void;
}) {
  const fareClasses = getFareClasses(flight.price);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-navy-950/60 p-0 sm:items-center sm:p-6">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-t-card bg-white p-5 shadow-card sm:rounded-card sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-navy-950">Choose Your Fare</p>
            <p className="text-xs text-navy-700/60">
              {flight.airline} {flight.code} · {from.split(" (")[0]} → {to.split(" (")[0]} · {flight.departTime} – {flight.arriveTime}
            </p>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-mist-100 text-navy-800 hover:bg-mist-200"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {fareClasses.map((fare) => {
            const message = [
              `Hi! I'd like to book this flight:`,
              `${flight.airline} ${flight.code} — ${from} to ${to}`,
              `Depart ${flight.departTime}, Arrive ${flight.arriveTime}`,
              `Fare type: ${fare.name}`,
              `Price: ${formatINR(fare.price)} for 1 pax`,
            ].join("\n");

            return (
              <div key={fare.key} className="flex flex-col rounded-card border border-mist-200 p-4">
                <p className="font-display text-base font-semibold text-navy-950">{fare.name}</p>
                <p className="mt-1 text-xl font-semibold text-navy-950">
                  {formatINR(fare.price)} <span className="text-xs font-normal text-navy-700/60">for 1 pax</span>
                </p>

                <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy-700/60">
                  <Luggage size={13} /> Baggage
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-navy-800">
                  <li className="flex items-start gap-1.5"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-600" /> {fare.cabinBaggage}</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-600" /> {fare.checkInBaggage}</li>
                </ul>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy-700/60">Flexibility</p>
                <ul className="mt-2 space-y-1.5 text-sm text-navy-800">
                  {fare.cancellationFees.map((c) => (
                    <li key={c.window} className="flex items-start gap-1.5">
                      <span className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full bg-gold-500/70" />
                      {formatINR(c.fee)} Cancellation fee ({c.window})
                    </li>
                  ))}
                  {fare.dateChangeFees.map((d) => (
                    <li key={d.window} className="flex items-start gap-1.5">
                      <span className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full bg-gold-500/70" />
                      {d.fee === "free" ? "Free" : formatINR(d.fee)} Date Change fee ({d.window})
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy-700/60">Inclusions</p>
                <ul className="mt-2 space-y-1.5 text-sm text-navy-800">
                  <li className="flex items-start gap-1.5"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-600" /> {fare.meal}</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-600" /> {fare.seat}</li>
                </ul>

                <a
                  href={whatsappLink(message, siteConfig.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-sm font-semibold text-navy-950 transition-transform hover:scale-[1.02]"
                >
                  Book Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
