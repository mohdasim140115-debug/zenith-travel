import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";
import SectionHeader from "@/components/ui/section-header";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Travel Blog — Kashmir & Ladakh Guides",
  description: "Practical travel guides for Kashmir and Ladakh: best time to visit, altitude sickness tips, packing lists, and trip-planning advice.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        eyebrow="Travel Journal"
        title="Guides & stories from the field"
        description="Written by our own tour managers and guides — no filler, just what you need to plan well."
      />

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
            <div className="relative h-48 w-full overflow-hidden">
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">{post.category} · {post.readTime}</p>
              <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-950">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/70">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 border-t border-mist-100 pt-4">
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image src={post.authorAvatar} alt={post.author} fill sizes="32px" className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-medium text-navy-950">{post.author}</p>
                  <p className="text-[11px] text-navy-700/50">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
