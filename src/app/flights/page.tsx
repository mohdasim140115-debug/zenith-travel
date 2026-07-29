import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, CalendarClock, Layers, MapPinned, Plane, ShieldCheck, Tags, Users } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { flightRoutes } from "@/data/flight-routes";
import SectionHeader from "@/components/ui/section-header";
import FaqAccordion from "@/components/shared/faq-accordion";
import FlightSearchForm from "@/components/flights/flight-search-form";

export const metadata: Metadata = {
  title: "Flight Booking — Domestic & International",
  description: "Book domestic and international flights to Kashmir and Ladakh with Zenith Voyages — compare fares, choose your departure city, and bundle flights with your holiday package.",
  alternates: { canonical: `${siteConfig.url}/flights` },
};

const whyBookPoints = [
  {
    icon: BadgeCheck,
    title: "All-inclusive convenience",
    description: "Most Zenith Voyages group tours already include flights, booked and reconciled by our own team, so you never chase separate confirmations.",
  },
  {
    icon: ShieldCheck,
    title: "Support after your booking",
    description: "Reschedules, cancellations, or last-minute changes — your tour manager handles the airline directly on your behalf.",
  },
  {
    icon: Tags,
    title: "Compare flight prices",
    description: "We check fares across the day's departures to Srinagar and Leh, and flag the better-value option before you pay.",
  },
  {
    icon: Layers,
    title: "One platform for flights and holidays",
    description: "Book your flight and your Kashmir or Ladakh package together and keep every date, transfer and voucher in one place.",
  },
];

const howItWorks = [
  {
    icon: Plane,
    title: "Group tours with flights included",
    description: "Most of our fixed departures already bundle return airfare from major metro cities into the package price.",
  },
  {
    icon: MapPinned,
    title: "Choose your departure city",
    description: "Flying out of Delhi, Mumbai, Bengaluru or Chennai? Tell us your city and we'll quote the nearest convenient routing.",
  },
  {
    icon: CalendarClock,
    title: "Customised holidays with your flights",
    description: "Building a custom itinerary? We'll slot flights around your dates so transfers and check-ins never feel rushed.",
  },
  {
    icon: Users,
    title: "More than flight bookings",
    description: "Airport pickup, houseboat or hotel check-in, and your first day's sightseeing are coordinated around your landing time.",
  },
];

const flightFaqs = [
  {
    question: "How can I find the cheapest flight tickets to Kashmir or Ladakh?",
    answer: "Book 3–4 weeks ahead where possible, and let us compare fares across the day's departures — we'll flag the better-value option before you pay.",
  },
  {
    question: "What documents are required for a flight booking?",
    answer: "A valid government photo ID (Aadhaar, passport, or driving licence) for domestic travel. International routes require a valid passport and any applicable visa.",
  },
  {
    question: "Are any flight booking offers available?",
    answer: "Group departures often include discounted bundled airfare. Ask your tour manager about current fares when you enquire.",
  },
  {
    question: "Does Zenith Voyages offer domestic and international flight booking?",
    answer: "Yes — we book both. Domestic routes into Srinagar and Leh are our specialty, and we can also arrange onward international connections on request.",
  },
  {
    question: "Can I book just a flight without a holiday package?",
    answer: "Yes, standalone flight bookings are available. WhatsApp us your travel dates and we'll send a fare quote directly.",
  },
];

export default function FlightsPage() {
  return (
    <div>
      <div className="bg-mist-50 px-6 py-9">
        <div className="container-xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-navy-700/60">
            <Link href="/">Home</Link> <span>/</span> <span className="text-navy-950">Flight Booking</span>
          </nav>
          <h1 className="mb-5 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
            Book Domestic &amp; International Flights
          </h1>
          <FlightSearchForm />
        </div>
      </div>

      <div className="container-xl px-6 py-9">
        <div className="rounded-card border border-mist-200 bg-white p-6">
          <h2 className="font-display text-xl font-semibold text-navy-950">Book Flight Tickets Online with {siteConfig.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
            Most flights to Kashmir and Ladakh route through Srinagar (SXR) and Leh (IXL) airports, connecting from Delhi, Mumbai, Bengaluru and Chennai. Whether you're joining one of our group departures or building a custom itinerary, our team books flights alongside your holiday — so airport transfers, hotel check-ins and permits are all coordinated around your landing time.
          </p>
        </div>
      </div>

      <div className="container-xl px-6 py-9">
        <SectionHeader eyebrow="Popular Routes" title="Discover the Most Popular Flight Routes" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flightRoutes.map((route) => (
            <Link
              key={`${route.fromCode}-${route.toCode}`}
              href={`/flights/results?from=${encodeURIComponent(`${route.from} (${route.fromCode})`)}&to=${encodeURIComponent(`${route.to} (${route.toCode})`)}`}
              className="card-premium group overflow-hidden rounded-card border border-mist-200 bg-white"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image src={route.image} alt={`${route.from} to ${route.to}`} fill sizes="360px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="font-display text-sm font-semibold text-navy-950">{route.from} to {route.to}</p>
                <p className="mt-1 text-xs text-navy-700/60">{route.fromCode} — {route.toCode}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-mist-50 px-6 py-9">
        <div className="container-xl">
          <SectionHeader eyebrow="Why Us" title={`Why book your flights with ${siteConfig.name}?`} />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyBookPoints.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 rounded-card border border-mist-200 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-950">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-700/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-xl px-6 py-9">
        <SectionHeader eyebrow="How It Works" title={`How flights work with ${siteConfig.name} group tours`} />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-card border border-mist-200 bg-white p-5">
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700">
                <Icon size={20} />
              </span>
              <h3 className="font-display text-sm font-semibold text-navy-950">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-navy-700/70">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-xl px-6 py-9">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FaqAccordion items={flightFaqs} />
        </div>
      </div>
    </div>
  );
}
