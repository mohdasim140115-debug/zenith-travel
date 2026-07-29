import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import SectionHeader from "@/components/ui/section-header";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Zenith Voyages for Kashmir & Ladakh trip enquiries, custom itineraries, and support.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Get in Touch" title="Let's plan your trip" description="Fill the form or reach us directly — our team replies within a few hours." />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 rounded-2xl border border-mist-200 bg-white p-5 hover:shadow-lg transition-shadow">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-gold-400"><Phone size={18} /></span>
            <div>
              <p className="text-xs text-navy-700/60">Call us</p>
              <p className="font-semibold text-navy-950">{siteConfig.phoneDisplay}</p>
            </div>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 rounded-2xl border border-mist-200 bg-white p-5 hover:shadow-lg transition-shadow">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-gold-400"><Mail size={18} /></span>
            <div>
              <p className="text-xs text-navy-700/60">Email us</p>
              <p className="font-semibold text-navy-950">{siteConfig.email}</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-mist-200 bg-white p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-gold-400"><MapPin size={18} /></span>
            <div>
              <p className="text-xs text-navy-700/60">Head office</p>
              <p className="font-semibold text-navy-950">{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
