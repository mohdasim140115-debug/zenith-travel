import { BadgeCheck, HeartHandshake, MapPinned, ShieldCheck, Wallet, Watch } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

const points = [
  {
    icon: MapPinned,
    title: "Hyper-local expertise",
    description: "We only run Kashmir & Ladakh — depth over breadth means our route knowledge is unmatched.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted safety on every high-altitude route",
    description: "Certified drivers, oxygen support, and doctor-on-call for all Ladakh departures.",
  },
  {
    icon: Wallet,
    title: "Transparent, all-in pricing",
    description: "The price you see includes stays, transfers and taxes — no last-minute add-ons.",
  },
  {
    icon: HeartHandshake,
    title: "A tour manager, not a call centre",
    description: "One dedicated WhatsApp contact from booking to the day you land back home.",
  },
  {
    icon: BadgeCheck,
    title: "Handpicked stays, always",
    description: "Every houseboat, hotel and camp is personally inspected by our team before listing.",
  },
  {
    icon: Watch,
    title: "Fast, flexible booking",
    description: "Reserve online in minutes, or customise everything with our package builder.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-mist-50 py-10">
      <div className="mx-auto max-w-[1320px] px-6">
        <SectionHeader
          eyebrow="Why Zenith Voyages"
          title="Built for travellers who want it done right"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-mist-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
