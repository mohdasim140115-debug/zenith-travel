"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { destinations } from "@/data/destinations";

const categoryOptions = [
  { value: "", label: "All Styles" },
  { value: "trending", label: "Trending" },
  { value: "best-selling", label: "Best Selling" },
  { value: "luxury", label: "Luxury" },
  { value: "honeymoon", label: "Honeymoon" },
  { value: "family", label: "Family" },
  { value: "group", label: "Group" },
  { value: "adventure", label: "Adventure" },
  { value: "weekend", label: "Weekend Getaway" },
];

const budgetOptions = [
  { value: "", label: "Any Budget" },
  { value: "0-25000", label: "Under ₹25,000" },
  { value: "25000-40000", label: "₹25,000 – ₹40,000" },
  { value: "40000-999999", label: "₹40,000+" },
];

export default function PackageFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const update = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-mist-200 bg-white p-4">
      <span className="flex items-center gap-1.5 text-sm font-semibold text-navy-900">
        <SlidersHorizontal size={15} /> Filter:
      </span>
      <select
        defaultValue={searchParams.get("destination") ?? ""}
        onChange={(e) => update("destination", e.target.value)}
        className="rounded-full border border-mist-200 bg-mist-50 px-3.5 py-2 text-sm font-medium text-navy-900 outline-none focus:ring-2 focus:ring-gold-500"
      >
        <option value="">All Destinations</option>
        {destinations.map((d) => (
          <option key={d.slug} value={d.slug}>{d.name}</option>
        ))}
      </select>

      <select
        defaultValue={searchParams.get("category") ?? ""}
        onChange={(e) => update("category", e.target.value)}
        className="rounded-full border border-mist-200 bg-mist-50 px-3.5 py-2 text-sm font-medium text-navy-900 outline-none focus:ring-2 focus:ring-gold-500"
      >
        {categoryOptions.map((c) => (
          <option key={c.value} value={c.value}>{c.label}</option>
        ))}
      </select>

      <select
        defaultValue={searchParams.get("budget") ?? ""}
        onChange={(e) => update("budget", e.target.value)}
        className="rounded-full border border-mist-200 bg-mist-50 px-3.5 py-2 text-sm font-medium text-navy-900 outline-none focus:ring-2 focus:ring-gold-500"
      >
        {budgetOptions.map((b) => (
          <option key={b.value} value={b.value}>{b.label}</option>
        ))}
      </select>
    </div>
  );
}
