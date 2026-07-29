import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { destinations } from "@/data/destinations";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/social-icons";

const footerColumns = [
  {
    heading: "Destinations",
    links: destinations.map((d) => ({ label: d.name, href: `/destinations/${d.slug}` })),
  },
  {
    heading: "Packages",
    links: [
      { label: "Trending Packages", href: "/packages?category=trending" },
      { label: "Honeymoon Packages", href: "/packages?category=honeymoon" },
      { label: "Family Tours", href: "/packages?category=family" },
      { label: "Luxury Holidays", href: "/packages?category=luxury" },
      { label: "Adventure Tours", href: "/packages?category=adventure" },
      { label: "Weekend Getaways", href: "/packages?category=weekend" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Custom Package Builder", href: "/customize" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-mist-100">
      <div className="mx-auto max-w-[1320px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-display text-lg font-semibold text-navy-950">
                ZV
              </span>
              <span className="font-display text-xl font-semibold text-white">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-200/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-3 text-sm text-mist-200/80">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Phone size={16} /> {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Mail size={16} /> {siteConfig.email}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0" /> {siteConfig.address}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-mist-100 hover:bg-gold-500 hover:text-navy-950 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-mist-200/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-mist-200/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved. | Recognised member: IATO · TAAI · IATA</p>
          <p>Beware of fraudulent calls/websites impersonating {siteConfig.name}. We never ask for full card details over the phone.</p>
        </div>
      </div>
    </footer>
  );
}
