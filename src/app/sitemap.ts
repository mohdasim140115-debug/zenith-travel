import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { activities } from "@/data/activities";
import { blogPosts } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/destinations",
    "/packages",
    "/flights",
    "/activities",
    "/blog",
    "/about",
    "/contact",
    "/customize",
    "/faqs",
    "/cancellation-policy",
    "/terms",
    "/privacy",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${siteConfig.url}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${siteConfig.url}/packages/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const activityRoutes = activities.map((a) => ({
    url: `${siteConfig.url}/activities/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${siteConfig.url}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...destinationRoutes, ...packageRoutes, ...activityRoutes, ...blogRoutes];
}
