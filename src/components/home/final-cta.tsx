import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { whatsappLink } from "@/lib/utils";
import FadeIn from "@/components/motion/fade-in";

export default function FinalCta() {
  return (
    <section className="px-6 py-10">
      <FadeIn className="mx-auto max-w-[1320px]">
        <div className="card-premium relative overflow-hidden rounded-card bg-gradient-to-br from-navy-950 to-navy-800 px-8 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />

          <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Still Deciding?
          </p>
          <h2 className="relative font-display text-3xl font-semibold text-white sm:text-4xl">
            Need help planning? Talk to a travel expert.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-sm text-mist-100/80 sm:text-base">
            No bots, no scripts — just our team, ready to help you build the right Kashmir or Ladakh itinerary.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 rounded-card border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <Phone size={16} /> Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hi! I'd like help planning a Kashmir/Ladakh trip.", siteConfig.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-card bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03]"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
