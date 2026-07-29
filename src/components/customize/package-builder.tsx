"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { destinations } from "@/data/destinations";
import { activities } from "@/data/activities";
import { whatsappLink } from "@/lib/utils";

const hotelCategories = ["3-star", "4-star", "5-star / Luxury"];
const mealPreferences = ["Vegetarian", "Non-Vegetarian", "Jain", "No preference"];
const transportPreferences = ["Sedan", "SUV", "Tempo Traveller", "Luxury Vehicle"];

export default function PackageBuilder() {
  const [form, setForm] = useState({
    destination: destinations[0].slug,
    travelDate: "",
    budget: "",
    hotelCategory: hotelCategories[1],
    adults: 2,
    children: 0,
    meal: mealPreferences[0],
    transport: transportPreferences[1],
    notes: "",
  });
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const toggleActivity = (slug: string) => {
    setSelectedActivities((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };

  const destinationName = destinations.find((d) => d.slug === form.destination)?.name ?? form.destination;
  const activityNames = activities.filter((a) => selectedActivities.includes(a.slug)).map((a) => a.name);

  const message = [
    `Hi! I'd like a custom package quote for ${destinationName}.`,
    form.travelDate && `Travel date: ${form.travelDate}`,
    form.budget && `Budget: ₹${form.budget} per person`,
    `Hotel category: ${form.hotelCategory}`,
    `Travellers: ${form.adults} adults, ${form.children} children`,
    activityNames.length > 0 && `Activities: ${activityNames.join(", ")}`,
    `Meal preference: ${form.meal}`,
    `Transport preference: ${form.transport}`,
    form.notes && `Special requirements: ${form.notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-mist-200 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Destination</span>
          <select
            value={form.destination}
            onChange={(e) => setForm((f) => ({ ...f, destination: e.target.value }))}
            className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
          >
            {destinations.map((d) => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Travel date</span>
          <input
            type="date"
            value={form.travelDate}
            onChange={(e) => setForm((f) => ({ ...f, travelDate: e.target.value }))}
            className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Budget per person (₹)</span>
          <input
            type="number"
            min={0}
            placeholder="e.g. 40000"
            value={form.budget}
            onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
            className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Hotel category</span>
          <select
            value={form.hotelCategory}
            onChange={(e) => setForm((f) => ({ ...f, hotelCategory: e.target.value }))}
            className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
          >
            {hotelCategories.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Number of adults</span>
          <input
            type="number"
            min={1}
            value={form.adults}
            onChange={(e) => setForm((f) => ({ ...f, adults: Number(e.target.value) }))}
            className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Number of children</span>
          <input
            type="number"
            min={0}
            value={form.children}
            onChange={(e) => setForm((f) => ({ ...f, children: Number(e.target.value) }))}
            className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Meal preference</span>
          <select
            value={form.meal}
            onChange={(e) => setForm((f) => ({ ...f, meal: e.target.value }))}
            className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
          >
            {mealPreferences.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Transport preference</span>
          <select
            value={form.transport}
            onChange={(e) => setForm((f) => ({ ...f, transport: e.target.value }))}
            className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
          >
            {transportPreferences.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5">
        <span className="mb-2 block text-xs font-medium text-navy-700/70">Activities of interest</span>
        <div className="flex flex-wrap gap-2">
          {activities.map((a) => (
            <button
              type="button"
              key={a.slug}
              onClick={() => toggleActivity(a.slug)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                selectedActivities.includes(a.slug)
                  ? "border-navy-950 bg-navy-950 text-white"
                  : "border-mist-200 text-navy-800 hover:bg-mist-50"
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-xs font-medium text-navy-700/70">Special requirements</span>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
          placeholder="Anniversary surprise, elderly-friendly pace, dietary needs, etc."
          className="w-full rounded-xl border border-mist-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gold-500"
        />
      </label>

      <a
        href={whatsappLink(message, siteConfig.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] sm:w-auto sm:px-8"
      >
        <MessageCircle size={17} /> Send enquiry on WhatsApp
      </a>
    </form>
  );
}
