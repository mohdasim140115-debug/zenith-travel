"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeftRight, ChevronDown, Clock, Plane, SlidersHorizontal } from "lucide-react";
import { flightResults } from "@/data/flight-results";
import { siteConfig } from "@/data/site-config";
import { formatINR } from "@/lib/utils";
import { cn } from "@/lib/utils";
import FlightDetailsPanel from "@/components/flights/flight-details-panel";
import FareClassModal from "@/components/flights/fare-class-modal";
import { FlightResult } from "@/data/flight-results";

const airlineNames = Array.from(new Set(flightResults.map((f) => f.airline)));

export default function FlightResultsClient() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") ?? "Delhi (DEL)";
  const to = searchParams.get("to") ?? "Srinagar (SXR)";
  const date = searchParams.get("date") ?? "";

  const [stopsFilter, setStopsFilter] = useState<Set<number>>(new Set());
  const [airlineFilter, setAirlineFilter] = useState<Set<string>>(new Set());
  const [maxPrice, setMaxPrice] = useState(8500);
  const [sortBy, setSortBy] = useState<"cheapest" | "fastest">("cheapest");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [bookingFlight, setBookingFlight] = useState<FlightResult | null>(null);

  const toggleSet = <T,>(set: Set<T>, value: T, setter: (s: Set<T>) => void) => {
    const next = new Set(set);
    next.has(value) ? next.delete(value) : next.add(value);
    setter(next);
  };

  const filtered = useMemo(() => {
    let results = flightResults.filter((f) => {
      if (stopsFilter.size > 0 && !stopsFilter.has(f.stops)) return false;
      if (airlineFilter.size > 0 && !airlineFilter.has(f.airline)) return false;
      if (f.price > maxPrice) return false;
      return true;
    });
    results = [...results].sort((a, b) =>
      sortBy === "cheapest" ? a.price - b.price : parseInt(a.duration) - parseInt(b.duration)
    );
    return results;
  }, [stopsFilter, airlineFilter, maxPrice, sortBy]);

  return (
    <div className="container-xl px-6 py-8">
      {/* Route summary bar */}
      <div className="card-premium mb-6 flex flex-wrap items-center justify-between gap-4 rounded-card bg-navy-950 px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          <Plane size={18} className="text-gold-400" />
          <span className="font-display text-lg font-semibold">{from}</span>
          <ArrowLeftRight size={14} className="text-mist-100/50" />
          <span className="font-display text-lg font-semibold">{to}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-mist-100/80">
          {date && <span>{new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>}
          <Link href="/flights" className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold hover:bg-white/20 transition-colors">
            Modify Search
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        {/* Filters sidebar */}
        <aside className="h-fit rounded-card border border-mist-200 bg-white p-5">
          <p className="mb-4 flex items-center gap-1.5 text-sm font-semibold text-navy-950">
            <SlidersHorizontal size={15} /> Filter Your Flight
          </p>

          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-700/60">Stops</p>
            <div className="space-y-1.5">
              {[{ label: "Nonstop", value: 0 }, { label: "1 Stop", value: 1 }].map((s) => (
                <label key={s.value} className="flex items-center gap-2 text-sm text-navy-800">
                  <input
                    type="checkbox"
                    checked={stopsFilter.has(s.value)}
                    onChange={() => toggleSet(stopsFilter, s.value, setStopsFilter)}
                    className="h-4 w-4 accent-gold-600"
                  />
                  {s.label}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-700/60">Price Range</p>
            <input
              type="range"
              min={5000}
              max={8500}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-gold-600"
            />
            <p className="mt-1 text-xs text-navy-700/60">Up to {formatINR(maxPrice)}</p>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-700/60">Airlines</p>
            <div className="space-y-1.5">
              {airlineNames.map((name) => (
                <label key={name} className="flex items-center gap-2 text-sm text-navy-800">
                  <input
                    type="checkbox"
                    checked={airlineFilter.has(name)}
                    onChange={() => toggleSet(airlineFilter, name, setAirlineFilter)}
                    className="h-4 w-4 accent-gold-600"
                  />
                  {name}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Results list */}
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-navy-700/70">Showing {filtered.length} of {flightResults.length} flights</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-navy-700/60">Sort:</span>
              <button
                onClick={() => setSortBy("cheapest")}
                className={cn("rounded-full px-3 py-1.5 font-medium transition-colors", sortBy === "cheapest" ? "bg-navy-950 text-white" : "bg-mist-100 text-navy-700")}
              >
                Cheapest
              </button>
              <button
                onClick={() => setSortBy("fastest")}
                className={cn("rounded-full px-3 py-1.5 font-medium transition-colors", sortBy === "fastest" ? "bg-navy-950 text-white" : "bg-mist-100 text-navy-700")}
              >
                Fastest
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filtered.map((flight) => {
              return (
                <div key={flight.id} className="card-premium rounded-card border border-mist-200 bg-white p-4 sm:p-5">
                  <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[auto_1fr_auto_auto]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950 text-xs font-bold text-gold-400">
                        {flight.code}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-navy-950">{flight.airline}</p>
                        <p className="text-xs text-navy-700/50">{flight.code} · Economy</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-display text-lg font-semibold text-navy-950">{flight.departTime}</p>
                        <p className="text-xs text-navy-700/60">{from.split(" (")[0]}</p>
                      </div>
                      <div className="flex flex-1 flex-col items-center px-2">
                        <p className="flex items-center gap-1 text-xs text-navy-700/50">
                          <Clock size={11} /> {flight.duration}
                        </p>
                        <div className="my-1 h-px w-16 bg-mist-200" />
                        <p className="text-[11px] text-navy-700/50">{flight.stops === 0 ? "Nonstop" : `1 Stop · ${flight.stopCity}`}</p>
                      </div>
                      <div>
                        <p className="font-display text-lg font-semibold text-navy-950">{flight.arriveTime}</p>
                        <p className="text-xs text-navy-700/60">{to.split(" (")[0]}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-display text-xl font-semibold text-navy-950">{formatINR(flight.price)}</p>
                      <p className="text-[11px] text-navy-700/50">{flight.refundable ? "Refundable" : "Non-refundable"}</p>
                    </div>

                    <div className="flex gap-2 sm:flex-col">
                      <button
                        type="button"
                        onClick={() => setBookingFlight(flight)}
                        className="flex-1 whitespace-nowrap rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-2 text-center text-xs font-semibold text-navy-950 transition-transform hover:scale-[1.02]"
                      >
                        Book Now
                      </button>
                      <button
                        type="button"
                        onClick={() => setExpandedId(expandedId === flight.id ? null : flight.id)}
                        className="flex flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-xl border border-mist-200 px-4 py-2 text-center text-xs font-semibold text-navy-800 transition-colors hover:bg-mist-50"
                      >
                        View Flight Details
                        <ChevronDown size={13} className={cn("transition-transform", expandedId === flight.id && "rotate-180")} />
                      </button>
                    </div>
                  </div>

                  {expandedId === flight.id && (
                    <FlightDetailsPanel flight={flight} from={from} to={to} />
                  )}
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-card border border-dashed border-mist-200 p-10 text-center text-sm text-navy-700/60">
              No flights match these filters — try widening your price range or airline selection.
            </div>
          )}
        </div>
      </div>

      {bookingFlight && (
        <FareClassModal flight={bookingFlight} from={from} to={to} onClose={() => setBookingFlight(null)} />
      )}
    </div>
  );
}
