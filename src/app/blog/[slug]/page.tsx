import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";
import { siteConfig } from "@/data/site-config";

export function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((b) => b.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-navy-700/60">
          <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span>
          <span className="text-navy-950 line-clamp-1">{post.title}</span>
        </nav>

        <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">{post.category} · {post.readTime}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-navy-950 sm:text-4xl text-balance">{post.title}</h1>

        <div className="mt-5 flex items-center gap-3 border-b border-mist-200 pb-6">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={post.authorAvatar} alt={post.author} fill sizes="40px" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium text-navy-950">{post.author}</p>
            <p className="text-xs text-navy-700/50">
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image src={post.image} alt={post.title} fill sizes="768px" className="object-cover" priority />
        </div>

        <div className="prose prose-navy mt-8 max-w-none space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-navy-800">{para}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-mist-100 px-3 py-1 text-xs font-medium text-navy-700">#{tag}</span>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-mist-200 pt-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-gold-700">Related articles</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
                  <div className="relative h-32 w-full overflow-hidden rounded-xl">
                    <Image src={r.image} alt={r.title} fill sizes="240px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="mt-2 text-sm font-medium leading-snug text-navy-950 line-clamp-2">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
