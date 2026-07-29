"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftRight, Calendar, MapPin, Search, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type TripType = "one-way" | "round-trip";

export default function FlightSearchForm() {
  const router = useRouter();
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [from, setFrom] = useState("Delhi (DEL)");
  const [to, setTo] = useState("Srinagar (SXR)");
  const [depart, setDepart] = useState("");
  const [ret, setRet] = useState("");
  const [travellers, setTravellers] = useState("1 Adult, Economy");

  const onSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ from, to, tripType, travellers });
    if (depart) params.set("date", depart);
    if (tripType === "round-trip" && ret) params.set("returnDate", ret);
    router.push(`/flights/results?${params.toString()}`);
  };

  return (
    <form onSubmit={onSearch} className="card-premium rounded-card bg-white p-5 sm:p-6">
      <div className="mb-4 flex gap-5">
        {(["one-way", "round-trip"] as TripType[]).map((type) => (
          <label key={type} className="flex cursor-pointer items-center gap-2 text-sm font-medium text-navy-900">
            <input
              type="radio"
              name="tripType"
              checked={tripType === type}
              onChange={() => setTripType(type)}
              className="h-4 w-4 accent-gold-600"
            />
            {type === "one-way" ? "One Way" : "Round Trip"}
          </label>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr_1fr_1fr_auto] sm:items-end">
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-navy-700/70">
            <MapPin size={12} /> From
          </span>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="h-11 w-full rounded-xl border border-mist-200 bg-mist-50 px-3 text-sm font-medium text-navy-950 outline-none focus:ring-2 focus:ring-gold-500"
          />
        </label>

        <button
          type="button"
          onClick={onSwap}
          aria-label="Swap from and to"
          className="hidden h-11 w-11 items-center justify-center rounded-xl border border-mist-200 bg-mist-50 text-navy-700 transition-colors hover:bg-mist-100 sm:flex"
        >
          <ArrowLeftRight size={16} />
        </button>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-navy-700/70">
            <MapPin size={12} /> To
          </span>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="h-11 w-full rounded-xl border border-mist-200 bg-mist-50 px-3 text-sm font-medium text-navy-950 outline-none focus:ring-2 focus:ring-gold-500"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-navy-700/70">
            <Calendar size={12} /> Depart
          </span>
          <input
            type="date"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            className="h-11 w-full rounded-xl border border-mist-200 bg-mist-50 px-3 text-sm font-medium text-navy-950 outline-none focus:ring-2 focus:ring-gold-500"
          />
        </label>

        <label className={cn("block", tripType === "one-way" && "opacity-40")}>
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-navy-700/70">
            <Calendar size={12} /> Return
          </span>
          <input
            type="date"
            value={ret}
            onChange={(e) => setRet(e.target.value)}
            disabled={tripType === "one-way"}
            className="h-11 w-full rounded-xl border border-mist-200 bg-mist-50 px-3 text-sm font-medium text-navy-950 outline-none focus:ring-2 focus:ring-gold-500 disabled:cursor-not-allowed"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-navy-700/70">
            <Users size={12} /> Travellers &amp; Class
          </span>
          <select
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
            className="h-11 w-full rounded-xl border border-mist-200 bg-mist-50 px-3 text-sm font-medium text-navy-950 outline-none focus:ring-2 focus:ring-gold-500"
          >
            <option>1 Adult, Economy</option>
            <option>2 Adults, Economy</option>
            <option>2 Adults, 1 Child, Economy</option>
            <option>4 Adults, Economy</option>
            <option>2 Adults, Business</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-sm font-semibold text-navy-950 shadow-card transition-transform hover:scale-[1.02] sm:w-auto sm:px-10"
      >
        <Search size={16} /> Search Flights
      </button>
    </form>
  );
}
