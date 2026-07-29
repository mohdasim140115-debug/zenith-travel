"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Activity } from "@/data/activities";
import { siteConfig } from "@/data/site-config";
import { formatINR, whatsappLink } from "@/lib/utils";

export default function ActivityBookingForm({ activity }: { activity: Activity }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(2);

  const message = `Hi! I'd like to book "${activity.name}" in ${activity.location} for ${people} people on ${date || "a date to be decided"}. Name: ${name || "-"}.`;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="sticky top-28 h-fit space-y-4 rounded-3xl border border-mist-200 bg-white p-6 shadow-lg shadow-navy-950/5"
    >
      <div>
        <p className="text-xs text-navy-700/60">Price</p>
        <p className="font-display text-3xl font-semibold text-navy-950">{formatINR(activity.price)}</p>
        <p className="text-xs text-navy-700/50">{activity.priceUnit}</p>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Your name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Preferred date</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Number of people</span>
        <input
          type="number"
          min={1}
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
        />
      </label>

      <a
        href={whatsappLink(message, siteConfig.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        <MessageCircle size={17} /> Book via WhatsApp
      </a>
      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 py-3.5 text-sm font-semibold text-navy-950 shadow-md shadow-gold-600/25 transition-transform hover:scale-[1.02]">
        Book Now
      </button>
    </form>
  );
}
