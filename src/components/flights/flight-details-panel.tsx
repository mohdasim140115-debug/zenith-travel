"use client";

import { useState } from "react";
import { Briefcase, ShoppingBag } from "lucide-react";
import { FlightResult } from "@/data/flight-results";
import { airportInfo, getAirportCode, getCityName } from "@/data/airport-info";
import { formatINR } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Tab = "details" | "fare" | "cancellation";

const cancellationRows = [
  { window: "3 hrs – 1 day", note: "before departure", fee: 4999 },
  { window: "1 day – 3 days", note: "before departure", fee: 4999 },
  { window: "More than 3 days", note: "before departure", fee: 3999 },
];

export default function FlightDetailsPanel({
  flight,
  from,
  to,
}: {
  flight: FlightResult;
  from: string;
  to: string;
}) {
  const [tab, setTab] = useState<Tab>("details");

  const fromCode = getAirportCode(from) || "DEL";
  const toCode = getAirportCode(to) || "SXR";
  const fromAirport = airportInfo[fromCode];
  const toAirport = airportInfo[toCode];

  const fees = Math.round(flight.price * 0.26);
  const baseFare = flight.price - fees;

  const tabs: { key: Tab; label: string }[] = [
    { key: "details", label: "Flight Details" },
    { key: "fare", label: "Fare Summary" },
    { key: "cancellation", label: "Cancellation" },
  ];

  return (
    <div className="mt-3 rounded-2xl border border-navy-600/20 bg-navy-950/[0.03] p-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "rounded-xl border px-4 py-2 text-xs font-semibold transition-colors",
              tab === t.key ? "border-navy-950 bg-navy-950 text-white" : "border-navy-950/30 text-navy-950 hover:bg-white"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "details" && (
        <div className="mt-4 grid grid-cols-1 gap-4 rounded-xl border border-mist-200 bg-white p-4 lg:grid-cols-[1fr_auto_1fr_auto]">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-950 text-[10px] font-bold text-gold-400">
              {flight.code}
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-950">{flight.airline}</p>
              <p className="text-xs text-navy-700/50">{flight.code} - {flight.id.replace("f", "5")} · <span className="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-medium text-green-700">Economy</span></p>
            </div>
          </div>

          <div>
            <p className="font-display text-xl font-semibold text-navy-950">{flight.departTime}</p>
            <p className="text-sm font-medium text-navy-800">{fromCode} - {getCityName(from)}</p>
            <p className="text-xs text-navy-700/60">{fromAirport?.terminal}</p>
            <p className="text-xs text-navy-700/60">{fromAirport?.name}</p>
          </div>

          <div className="flex flex-col items-center justify-center px-4">
            <p className="text-xs text-navy-700/50">{flight.duration}</p>
            <div className="my-1 h-px w-20 bg-mist-200" />
            <p className="text-[11px] text-navy-700/50">{flight.stops === 0 ? "Nonstop" : "1 Stop"}</p>
          </div>

          <div>
            <p className="font-display text-xl font-semibold text-navy-950">{flight.arriveTime}</p>
            <p className="text-sm font-medium text-navy-800">{toCode} - {getCityName(to)}</p>
            <p className="text-xs text-navy-700/60">{toAirport?.terminal}</p>
            <p className="text-xs text-navy-700/60">{toAirport?.name}</p>
          </div>

          <div className="rounded-xl border border-mist-200 bg-mist-50 p-3 lg:col-span-4">
            <p className="mb-2 text-xs font-semibold text-navy-950">Baggage Information</p>
            <div className="flex flex-wrap gap-4 text-xs text-navy-700/70">
              <span className="flex items-center gap-1.5"><ShoppingBag size={13} /> Cabin baggage: 7 KG / Adult</span>
              <span className="flex items-center gap-1.5"><Briefcase size={13} /> Check-in baggage: 15 KG / Adult</span>
            </div>
          </div>
        </div>
      )}

      {tab === "fare" && (
        <div className="mt-4 rounded-xl border border-mist-200 bg-white p-4">
          <p className="mb-3 text-sm font-semibold text-navy-950">Fare Break-up</p>
          <div className="max-w-sm space-y-2 text-sm">
            <div className="flex justify-between text-navy-700/80">
              <span>Base Fare</span> <span>{formatINR(baseFare)}</span>
            </div>
            <div className="flex justify-between text-navy-700/80">
              <span>Fees and Surcharges</span> <span>{formatINR(fees)}</span>
            </div>
            <div className="flex justify-between border-t border-mist-200 pt-2 font-semibold text-navy-950">
              <span>Total Fare</span> <span>{formatINR(flight.price)}</span>
            </div>
          </div>
        </div>
      )}

      {tab === "cancellation" && (
        <div className="mt-4 overflow-hidden rounded-xl border border-mist-200 bg-white">
          <p className="p-4 pb-0 text-sm text-navy-800">
            Cancellation Policy for <span className="font-semibold">{fromCode} - {toCode}</span>
          </p>
          <table className="mt-3 w-full text-sm">
            <thead>
              <tr className="bg-navy-950 text-left text-white">
                <th className="px-4 py-2.5 font-medium">Time frame (from scheduled flight departure)</th>
                <th className="px-4 py-2.5 font-medium">Airline fee (per passenger)</th>
              </tr>
            </thead>
            <tbody>
              {cancellationRows.map((row, i) => (
                <tr key={row.window} className={i % 2 === 0 ? "bg-mist-50" : "bg-white"}>
                  <td className="px-4 py-3">
                    <span className="font-medium text-navy-950">{row.window}</span>
                    <span className="block text-[11px] uppercase text-navy-700/50">{row.note}</span>
                  </td>
                  <td className="px-4 py-3 text-navy-800">Adult: <span className="font-semibold">{formatINR(row.fee)}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
