import type { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/data/site-config";
import FlightResultsClient from "@/components/flights/flight-results-client";

export const metadata: Metadata = {
  title: "Flight Search Results",
  description: "Compare flight fares and timings to Kashmir and Ladakh, and book directly on WhatsApp.",
  alternates: { canonical: `${siteConfig.url}/flights/results` },
};

export default function FlightResultsPage() {
  return (
    <Suspense fallback={null}>
      <FlightResultsClient />
    </Suspense>
  );
}
