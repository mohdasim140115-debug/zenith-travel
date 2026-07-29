import type { Metadata } from "next";
import SectionHeader from "@/components/ui/section-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${siteConfig.name} and booking Kashmir/Ladakh holiday packages.`,
  alternates: { canonical: `${siteConfig.url}/terms` },
};

const sections = [
  { heading: "Bookings & Payments", body: "A booking is confirmed only after receipt of the applicable advance payment. Full payment is due as specified on your package/invoice, typically no later than 20 days before departure." },
  { heading: "Itinerary Changes", body: "Itineraries may be modified due to weather, road conditions, government restrictions, or safety concerns. We will always offer the closest reasonable alternative at no extra cost where possible." },
  { heading: "Traveller Responsibilities", body: "Guests are responsible for carrying valid ID, required permits, and any prescribed medication. Please disclose pre-existing medical conditions before booking a high-altitude Ladakh itinerary." },
  { heading: "Liability", body: `${siteConfig.name} acts as an agent coordinating third-party hotels, transport and activity providers, and is not liable for delays or losses caused by circumstances beyond our reasonable control (force majeure).` },
  { heading: "Governing Law", body: "These terms are governed by the laws of India, with courts in Bengaluru, Karnataka having exclusive jurisdiction." },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader eyebrow="Legal" title="Terms & conditions" />
      <div className="mt-8 space-y-8">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-display text-lg font-semibold text-navy-950">{s.heading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-800">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
