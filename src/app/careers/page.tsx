import type { Metadata } from "next";
import { Mail } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${siteConfig.name} — open roles in travel operations, sales, and tour management for Kashmir & Ladakh.`,
  alternates: { canonical: `${siteConfig.url}/careers` },
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <SectionHeader eyebrow="Join Us" title="Build the future of Himalayan travel" align="center" />
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-800">
        We&apos;re a small, focused team growing across tour operations, guest experience, and sales. If you love
        Kashmir and Ladakh as much as we do, we&apos;d love to hear from you — even if there&apos;s no open role
        listed right now.
      </p>
      <a
        href={`mailto:${siteConfig.email}?subject=Career%20Enquiry`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
      >
        <Mail size={16} /> Write to us
      </a>
    </div>
  );
}
