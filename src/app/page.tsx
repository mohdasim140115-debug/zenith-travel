import Hero from "@/components/home/hero";
import DestinationPromoBanner from "@/components/home/destination-promo-banner";
import PackageCategoryRow from "@/components/home/package-category-row";
import PopularDestinations from "@/components/home/popular-destinations";
import WhyChooseUs from "@/components/home/why-choose-us";
import HotelDeals from "@/components/home/hotel-deals";
import ActivitiesSection from "@/components/home/activities-section";
import Reviews from "@/components/home/reviews";
import FaqSection from "@/components/home/faq-section";
import BlogSection from "@/components/home/blog-section";
import FinalCta from "@/components/home/final-cta";
import { siteConfig } from "@/data/site-config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
    },
    sameAs: Object.values(siteConfig.social),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "3521",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <DestinationPromoBanner />
      <PackageCategoryRow />
      <PopularDestinations />
      <WhyChooseUs />
      <HotelDeals />
      <ActivitiesSection />
      <Reviews />
      <FaqSection />
      <BlogSection />
      <FinalCta />
    </>
  );
}
