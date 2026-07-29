import type { Metadata } from "next";
import SectionHeader from "@/components/ui/section-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy explaining how ${siteConfig.name} collects, uses and protects your data.`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

const sections = [
  { heading: "Information We Collect", body: "Name, contact details, travel preferences, and payment references you provide when making an enquiry or booking." },
  { heading: "How We Use It", body: "To process bookings, communicate trip details, send relevant offers (only if you've opted in), and improve our services." },
  { heading: "Data Sharing", body: "We share only the minimum necessary details with hotels, transport and activity partners to fulfil your booking. We never sell your data." },
  { heading: "Data Security", body: "Payments are processed via PCI-DSS compliant gateways (Razorpay/Stripe/PayPal). We never store full card numbers on our servers." },
  { heading: "Your Rights", body: `You may request access to, correction of, or deletion of your personal data at any time by contacting ${siteConfig.email}.` },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader eyebrow="Legal" title="Privacy policy" />
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
