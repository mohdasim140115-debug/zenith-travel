import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import SectionHeader from "@/components/ui/section-header";
import FadeIn from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-reveal";

export default function BlogSection() {
  return (
    <section className="bg-mist-50 py-10">
      <div className="mx-auto max-w-[1320px] px-6">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Travel Journal"
              title="Plan smarter with our guides"
              description="Practical, no-fluff advice from a team that runs these trips year-round — travel guides, things to do, best time to visit, and packing tips."
            />
            <Link href="/blog" className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-navy-900 hover:text-gold-700 transition-colors">
              All articles <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="card-premium group flex h-full flex-col overflow-hidden rounded-card bg-white">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">{post.category} · {post.readTime}</p>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug text-navy-950 line-clamp-2">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/70 line-clamp-3">{post.excerpt}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                    Read more <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
