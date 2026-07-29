import { img } from "./image-pool";

export type PackageCategory =
  | "trending"
  | "best-selling"
  | "luxury"
  | "honeymoon"
  | "family"
  | "group"
  | "adventure"
  | "weekend";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  meals: string[];
  stay?: string;
};

export type TourPackage = {
  slug: string;
  title: string;
  destinationSlug: "kashmir" | "ladakh";
  categories: PackageCategory[];
  duration: string;
  nights: number;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  guestsTravelled: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  hotels: { city: string; name: string; category: string; nights: number }[];
  inclusions: string[];
  exclusions: string[];
  cancellationPolicy: string[];
  availableDates: { date: string; seatsLeft: number; status: "available" | "filling-fast" | "sold-out" }[];
  cities: string[];
  tourType: "Domestic";
};

export const packages: TourPackage[] = [
  {
    slug: "kashmir-classic-6-days",
    title: "Kashmir Classic — Srinagar, Gulmarg & Pahalgam",
    destinationSlug: "kashmir",
    categories: ["trending", "best-selling", "family"],
    duration: "6 Days / 5 Nights",
    nights: 5,
    price: 24999,
    originalPrice: 28999,
    rating: 4.8,
    reviewCount: 612,
    guestsTravelled: "14.6k",
    heroImage: img("boatMountainLake", 1600),
    gallery: [
      img("boatMountainLake", 1200),
      img("wideValleyPineSnow", 1200),
      img("snowPeaksDramatic", 1200),
      img("mistyMeadowSunrise", 1200),
    ],
    summary:
      "Our most-loved Kashmir itinerary — a houseboat night on Dal Lake, the Gulmarg gondola, and the pine valleys of Pahalgam, all on comfortable private transfers.",
    highlights: [
      "1 night aboard a deluxe houseboat on Dal Lake",
      "Gondola Phase 1 ride in Gulmarg included",
      "Full-day Pahalgam sightseeing with Betaab Valley",
      "Private cab throughout — no shared transfers",
      "4-star houseboat & hotel stays",
    ],
    itinerary: [
      { day: 1, title: "Arrive Srinagar — Shikara Ride", description: "Airport pickup, transfer to houseboat, evening shikara ride on Dal Lake.", meals: ["Dinner"], stay: "Deluxe Houseboat, Dal Lake" },
      { day: 2, title: "Srinagar Local Sightseeing", description: "Mughal Gardens (Nishat, Shalimar), Shankaracharya Hill, local market visit.", meals: ["Breakfast", "Dinner"], stay: "Deluxe Houseboat, Dal Lake" },
      { day: 3, title: "Srinagar to Gulmarg", description: "Drive to Gulmarg, Gondola Phase 1 ride to Kongdoori, evening at leisure.", meals: ["Breakfast", "Dinner"], stay: "4-star Hotel, Gulmarg" },
      { day: 4, title: "Gulmarg to Pahalgam", description: "Scenic drive to Pahalgam via saffron fields, check-in and riverside evening.", meals: ["Breakfast", "Dinner"], stay: "4-star Hotel, Pahalgam" },
      { day: 5, title: "Pahalgam Valley Exploration", description: "Betaab Valley & Aru Valley by local pony/jeep (optional, at own cost), leisure evening.", meals: ["Breakfast", "Dinner"], stay: "4-star Hotel, Pahalgam" },
      { day: 6, title: "Pahalgam to Srinagar — Departure", description: "Drive back to Srinagar, transfer to airport for onward journey.", meals: ["Breakfast"] },
    ],
    hotels: [
      { city: "Srinagar (Houseboat)", name: "Zenith Selection Deluxe Houseboat", category: "4-star equivalent", nights: 2 },
      { city: "Gulmarg", name: "Hotel Highlands Park or similar", category: "4-star", nights: 1 },
      { city: "Pahalgam", name: "Hotel Pahalgam Woods or similar", category: "4-star", nights: 2 },
    ],
    inclusions: [
      "5 nights accommodation (1 houseboat + 4 hotel)",
      "Daily breakfast and dinner",
      "Private AC vehicle for all transfers & sightseeing",
      "Gondola Phase 1 ticket in Gulmarg",
      "All applicable hotel taxes",
      "Dedicated tour manager on WhatsApp",
    ],
    exclusions: [
      "Airfare / train fare to Srinagar",
      "Gondola Phase 2, pony rides, sledging (payable directly)",
      "Lunch and personal expenses",
      "Anything not mentioned under inclusions",
      "GST as applicable",
    ],
    cancellationPolicy: [
      "45+ days before departure: 90% refund",
      "30–44 days before departure: 60% refund",
      "15–29 days before departure: 25% refund",
      "Less than 15 days: non-refundable",
    ],
    availableDates: [
      { date: "12 Aug 2026", seatsLeft: 6, status: "filling-fast" },
      { date: "26 Aug 2026", seatsLeft: 12, status: "available" },
      { date: "09 Sep 2026", seatsLeft: 14, status: "available" },
      { date: "23 Sep 2026", seatsLeft: 0, status: "sold-out" },
    ],
    cities: ["Srinagar", "Gulmarg", "Pahalgam"],
    tourType: "Domestic",
  },
  {
    slug: "kashmir-honeymoon-bliss-5-days",
    title: "Kashmir Honeymoon Bliss",
    destinationSlug: "kashmir",
    categories: ["honeymoon", "trending"],
    duration: "5 Days / 4 Nights",
    nights: 4,
    price: 34999,
    originalPrice: 39999,
    rating: 4.9,
    reviewCount: 388,
    guestsTravelled: "6.2k",
    heroImage: img("mistyMeadowSunrise", 1600),
    gallery: [
      img("mistyMeadowSunrise", 1200),
      img("boatMountainLake", 1200),
      img("autumnRoad", 1200),
    ],
    summary:
      "A candlelit houseboat dinner, private shikara ride at sunset, and couple-only stays — designed for newlyweds who want the valley's romance without the crowds.",
    highlights: [
      "Private candlelight dinner on the houseboat",
      "Sunset shikara ride with photographer (optional add-on)",
      "Romantic room décor on arrival",
      "Couple-friendly boutique stays",
      "Flexible, unhurried pace",
    ],
    itinerary: [
      { day: 1, title: "Arrive Srinagar — Romantic Welcome", description: "Airport pickup, houseboat check-in with floral room décor, sunset shikara ride.", meals: ["Dinner"], stay: "Premium Houseboat, Dal Lake" },
      { day: 2, title: "Srinagar Gardens & Local Charm", description: "Mughal Gardens, old city walk, candlelight dinner on the houseboat deck.", meals: ["Breakfast", "Dinner"], stay: "Premium Houseboat, Dal Lake" },
      { day: 3, title: "Gulmarg Day Trip", description: "Gondola ride, snow point/meadow walk depending on season, return to Srinagar.", meals: ["Breakfast", "Dinner"], stay: "Boutique Hotel, Srinagar" },
      { day: 4, title: "Pahalgam Excursion", description: "Full day at Betaab Valley and Lidder riverside, couple photography session.", meals: ["Breakfast", "Dinner"], stay: "Boutique Hotel, Srinagar" },
      { day: 5, title: "Departure", description: "Leisurely morning, transfer to airport.", meals: ["Breakfast"] },
    ],
    hotels: [
      { city: "Srinagar (Houseboat)", name: "Zenith Selection Premium Houseboat", category: "Boutique 4-star", nights: 2 },
      { city: "Srinagar", name: "Boutique Heritage Hotel", category: "4-star", nights: 2 },
    ],
    inclusions: [
      "4 nights accommodation (2 houseboat + 2 boutique hotel)",
      "Daily breakfast and dinner incl. one candlelight dinner",
      "Private AC vehicle throughout",
      "Sunset shikara ride",
      "Room décor on arrival night",
      "Dedicated tour manager on WhatsApp",
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Gondola Phase 2 and other optional activities",
      "Lunch and personal expenses",
      "Professional photography add-on (available on request)",
      "GST as applicable",
    ],
    cancellationPolicy: [
      "45+ days before departure: 90% refund",
      "30–44 days before departure: 60% refund",
      "15–29 days before departure: 25% refund",
      "Less than 15 days: non-refundable",
    ],
    availableDates: [
      { date: "05 Sep 2026", seatsLeft: 4, status: "filling-fast" },
      { date: "19 Sep 2026", seatsLeft: 8, status: "available" },
      { date: "03 Oct 2026", seatsLeft: 10, status: "available" },
    ],
    cities: ["Srinagar", "Gulmarg", "Pahalgam"],
    tourType: "Domestic",
  },
  {
    slug: "ladakh-explorer-8-days",
    title: "Ladakh Explorer — Leh, Nubra & Pangong",
    destinationSlug: "ladakh",
    categories: ["adventure", "trending", "best-selling"],
    duration: "8 Days / 7 Nights",
    nights: 7,
    price: 32999,
    originalPrice: 37999,
    rating: 4.9,
    reviewCount: 745,
    guestsTravelled: "11.3k",
    heroImage: img("mountainSunriseClouds", 1600),
    gallery: [
      img("mountainSunriseClouds", 1200),
      img("turquoiseLakeCloudy", 1200),
      img("desertCanyon", 1200),
      img("desertHighwayMountains", 1200),
    ],
    summary:
      "The complete Ladakh circuit with proper acclimatisation built in — Leh monasteries, Khardung La, Nubra's dunes, and an overnight camp on Pangong Tso.",
    highlights: [
      "Mandatory acclimatisation day in Leh",
      "Overnight camping at Pangong Tso",
      "Nubra Valley camel safari at Hunder dunes",
      "Crossing Khardung La & Chang La",
      "Oxygen support & doctor-on-call throughout",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh — Acclimatisation", description: "Airport pickup, complete rest day at hotel, light evening walk in Leh market.", meals: ["Dinner"], stay: "Hotel, Leh" },
      { day: 2, title: "Leh Local Sightseeing", description: "Shanti Stupa, Leh Palace, Hall of Fame — low-exertion sightseeing to continue acclimatising.", meals: ["Breakfast", "Dinner"], stay: "Hotel, Leh" },
      { day: 3, title: "Leh to Nubra via Khardung La", description: "Cross Khardung La, descend into Nubra Valley, evening at Hunder dunes.", meals: ["Breakfast", "Dinner"], stay: "Camp, Nubra Valley" },
      { day: 4, title: "Nubra Valley Exploration", description: "Diskit Monastery & giant Buddha statue, camel safari on double-humped camels.", meals: ["Breakfast", "Dinner"], stay: "Camp, Nubra Valley" },
      { day: 5, title: "Nubra to Pangong Tso", description: "Drive via Shyok route to Pangong Tso, evening by the lake, stargazing.", meals: ["Breakfast", "Dinner"], stay: "Lakeside Camp, Pangong" },
      { day: 6, title: "Pangong to Leh via Chang La", description: "Sunrise at Pangong, return to Leh crossing Chang La pass.", meals: ["Breakfast", "Dinner"], stay: "Hotel, Leh" },
      { day: 7, title: "Monastery Trail & Sangam", description: "Thiksey, Hemis monasteries, Magnetic Hill and Sangam confluence point.", meals: ["Breakfast", "Dinner"], stay: "Hotel, Leh" },
      { day: 8, title: "Departure from Leh", description: "Transfer to Leh airport for onward flight.", meals: ["Breakfast"] },
    ],
    hotels: [
      { city: "Leh", name: "Hotel Ladakh Heights or similar", category: "3-star deluxe", nights: 4 },
      { city: "Nubra Valley", name: "Zenith Selection Luxury Camp", category: "Deluxe camp", nights: 2 },
      { city: "Pangong Tso", name: "Zenith Selection Lakeside Camp", category: "Deluxe camp", nights: 1 },
    ],
    inclusions: [
      "7 nights accommodation (hotel + deluxe camps)",
      "Daily breakfast and dinner",
      "Private SUV (Innova/Xylo) throughout",
      "All Inner Line Permits",
      "Oxygen cylinder & first-aid kit in vehicle",
      "Dedicated tour manager on WhatsApp",
    ],
    exclusions: [
      "Airfare to/from Leh",
      "Camel safari charges at Nubra (payable locally)",
      "Lunch and personal expenses",
      "Travel insurance (strongly recommended, can be arranged)",
      "GST as applicable",
    ],
    cancellationPolicy: [
      "45+ days before departure: 85% refund",
      "30–44 days before departure: 50% refund",
      "15–29 days before departure: 20% refund",
      "Less than 15 days: non-refundable",
    ],
    availableDates: [
      { date: "18 Aug 2026", seatsLeft: 3, status: "filling-fast" },
      { date: "01 Sep 2026", seatsLeft: 9, status: "available" },
      { date: "15 Sep 2026", seatsLeft: 11, status: "available" },
    ],
    cities: ["Leh", "Nubra Valley", "Pangong Tso"],
    tourType: "Domestic",
  },
  {
    slug: "ladakh-luxury-escape-6-days",
    title: "Ladakh Luxury Escape",
    destinationSlug: "ladakh",
    categories: ["luxury", "weekend"],
    duration: "6 Days / 5 Nights",
    nights: 5,
    price: 68999,
    rating: 4.9,
    reviewCount: 154,
    guestsTravelled: "2.1k",
    heroImage: img("turquoiseLakeSunriseReflection", 1600),
    gallery: [
      img("turquoiseLakeSunriseReflection", 1200),
      img("mountainSunriseClouds", 1200),
      img("turquoiseLakeCloudy", 1200),
    ],
    summary:
      "A slower, five-star take on Ladakh — luxury glamps overlooking Pangong, private guided monastery visits, and a helicopter-view detour over the Khardung range (seasonal).",
    highlights: [
      "5-star glamping at Pangong Tso",
      "Private English-speaking heritage guide",
      "Champagne breakfast with lake views",
      "Small-batch departure — max 6 rooms",
      "Priority acclimatisation suite in Leh",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh — Luxury Acclimatisation", description: "Private transfer, check-in to premium suite, in-room wellness session.", meals: ["Dinner"], stay: "Luxury Suite, Leh" },
      { day: 2, title: "Leh Heritage Trail", description: "Private guided visit to Leh Palace and Namgyal Tsemo, artisan market curated walk.", meals: ["Breakfast", "Dinner"], stay: "Luxury Suite, Leh" },
      { day: 3, title: "Leh to Pangong via Chang La", description: "Scenic drive with photo stops, check-in to luxury lakeside glamp.", meals: ["Breakfast", "Dinner"], stay: "Luxury Glamp, Pangong" },
      { day: 4, title: "Pangong Leisure Day", description: "Champagne breakfast lakeside, optional kayaking, sunset photography.", meals: ["Breakfast", "Dinner"], stay: "Luxury Glamp, Pangong" },
      { day: 5, title: "Return to Leh — Monastery Visits", description: "Private visits to Thiksey and Hemis monasteries en route back to Leh.", meals: ["Breakfast", "Dinner"], stay: "Luxury Suite, Leh" },
      { day: 6, title: "Departure", description: "Relaxed morning, private transfer to Leh airport.", meals: ["Breakfast"] },
    ],
    hotels: [
      { city: "Leh", name: "The Zenith Grand Ladakh", category: "5-star", nights: 3 },
      { city: "Pangong Tso", name: "Zenith Signature Luxury Glamp", category: "5-star glamp", nights: 2 },
    ],
    inclusions: [
      "5 nights luxury accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Private premium SUV with English-speaking driver-guide",
      "All Inner Line Permits & entry fees",
      "24/7 concierge & on-call physician",
    ],
    exclusions: [
      "Airfare to/from Leh",
      "Alcoholic beverages beyond welcome drink",
      "Spa & wellness treatments (available on request)",
      "GST as applicable",
    ],
    cancellationPolicy: [
      "60+ days before departure: 90% refund",
      "30–59 days before departure: 50% refund",
      "Less than 30 days: non-refundable",
    ],
    availableDates: [
      { date: "22 Aug 2026", seatsLeft: 2, status: "filling-fast" },
      { date: "12 Sep 2026", seatsLeft: 4, status: "available" },
    ],
    cities: ["Leh", "Pangong Tso"],
    tourType: "Domestic",
  },
  {
    slug: "kashmir-family-fiesta-7-days",
    title: "Kashmir Family Fiesta",
    destinationSlug: "kashmir",
    categories: ["family", "group"],
    duration: "7 Days / 6 Nights",
    nights: 6,
    price: 27999,
    rating: 4.7,
    reviewCount: 289,
    guestsTravelled: "8.4k",
    heroImage: img("wideValleyPineSnow", 1600),
    gallery: [
      img("wideValleyPineSnow", 1200),
      img("greenValleyRoad", 1200),
      img("boatMountainLake", 1200),
    ],
    summary:
      "A relaxed, kid-friendly circuit covering Srinagar, Gulmarg, Pahalgam and Sonamarg with family rooms, flexible meal timing, and a dedicated family tour manager.",
    highlights: [
      "Covers all 4 key regions incl. Sonamarg",
      "Family-friendly interconnecting rooms",
      "Kid-friendly pony & pond activities",
      "Flexible daily pace for elders and children",
      "Group discounts for 6+ travellers",
    ],
    itinerary: [
      { day: 1, title: "Arrive Srinagar", description: "Airport pickup, houseboat check-in, evening shikara ride.", meals: ["Dinner"], stay: "Houseboat, Dal Lake" },
      { day: 2, title: "Srinagar Sightseeing", description: "Mughal Gardens, local market, family photo stops.", meals: ["Breakfast", "Dinner"], stay: "Houseboat, Dal Lake" },
      { day: 3, title: "Srinagar to Sonamarg", description: "Day trip to Sonamarg, Thajiwas Glacier viewpoint (pony ride optional), return to Srinagar.", meals: ["Breakfast", "Dinner"], stay: "Hotel, Srinagar" },
      { day: 4, title: "Srinagar to Gulmarg", description: "Drive to Gulmarg, gondola ride, evening at leisure.", meals: ["Breakfast", "Dinner"], stay: "Hotel, Gulmarg" },
      { day: 5, title: "Gulmarg to Pahalgam", description: "Scenic drive to Pahalgam via saffron fields.", meals: ["Breakfast", "Dinner"], stay: "Hotel, Pahalgam" },
      { day: 6, title: "Pahalgam Valley Day", description: "Betaab Valley visit, riverside family time.", meals: ["Breakfast", "Dinner"], stay: "Hotel, Pahalgam" },
      { day: 7, title: "Departure", description: "Drive back to Srinagar for flight departure.", meals: ["Breakfast"] },
    ],
    hotels: [
      { city: "Srinagar (Houseboat)", name: "Zenith Selection Family Houseboat", category: "4-star equivalent", nights: 2 },
      { city: "Srinagar", name: "City Hotel", category: "4-star", nights: 1 },
      { city: "Gulmarg", name: "Hotel Highlands Park or similar", category: "4-star", nights: 1 },
      { city: "Pahalgam", name: "Hotel Pahalgam Woods or similar", category: "4-star", nights: 2 },
    ],
    inclusions: [
      "6 nights accommodation with family rooms",
      "Daily breakfast and dinner",
      "Private tempo traveller / AC vehicle",
      "Gondola Phase 1 ticket",
      "Dedicated family tour manager",
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Pony rides, sledging, and optional activities",
      "Lunch and personal expenses",
      "GST as applicable",
    ],
    cancellationPolicy: [
      "45+ days before departure: 90% refund",
      "30–44 days before departure: 60% refund",
      "15–29 days before departure: 25% refund",
      "Less than 15 days: non-refundable",
    ],
    availableDates: [
      { date: "10 Oct 2026", seatsLeft: 16, status: "available" },
      { date: "24 Oct 2026", seatsLeft: 18, status: "available" },
    ],
    cities: ["Srinagar", "Sonamarg", "Gulmarg", "Pahalgam"],
    tourType: "Domestic",
  },
  {
    slug: "srinagar-weekend-getaway-4-days",
    title: "Srinagar Weekend Getaway",
    destinationSlug: "kashmir",
    categories: ["weekend", "honeymoon"],
    duration: "4 Days / 3 Nights",
    nights: 3,
    price: 17999,
    rating: 4.6,
    reviewCount: 201,
    guestsTravelled: "5.9k",
    heroImage: img("boatMountainLake", 1600),
    gallery: [
      img("boatMountainLake", 1200),
      img("mistyMeadowSunrise", 1200),
    ],
    summary:
      "A quick, high-impact escape for a long weekend — houseboat stay, Dal Lake, and a day trip to Gulmarg, perfect for a short break from work.",
    highlights: [
      "Fits a standard 4-day weekend leave",
      "Houseboat + city hotel combo",
      "Gulmarg day trip with gondola ride",
      "Compact, no-rush itinerary",
    ],
    itinerary: [
      { day: 1, title: "Arrive Srinagar", description: "Airport pickup, houseboat check-in, evening shikara ride.", meals: ["Dinner"], stay: "Houseboat, Dal Lake" },
      { day: 2, title: "Gulmarg Day Trip", description: "Drive to Gulmarg, gondola ride, return to Srinagar by evening.", meals: ["Breakfast", "Dinner"], stay: "Houseboat, Dal Lake" },
      { day: 3, title: "Srinagar City Tour", description: "Mughal Gardens, old city, local handicraft market.", meals: ["Breakfast", "Dinner"], stay: "Hotel, Srinagar" },
      { day: 4, title: "Departure", description: "Transfer to airport.", meals: ["Breakfast"] },
    ],
    hotels: [
      { city: "Srinagar (Houseboat)", name: "Zenith Selection Deluxe Houseboat", category: "4-star equivalent", nights: 2 },
      { city: "Srinagar", name: "City Hotel", category: "3-star deluxe", nights: 1 },
    ],
    inclusions: [
      "3 nights accommodation",
      "Daily breakfast and dinner",
      "Private AC vehicle for all transfers",
      "Gondola Phase 1 ticket",
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Lunch and personal expenses",
      "GST as applicable",
    ],
    cancellationPolicy: [
      "30+ days before departure: 85% refund",
      "15–29 days before departure: 50% refund",
      "Less than 15 days: non-refundable",
    ],
    availableDates: [
      { date: "15 Aug 2026", seatsLeft: 5, status: "filling-fast" },
      { date: "29 Aug 2026", seatsLeft: 10, status: "available" },
    ],
    cities: ["Srinagar", "Gulmarg"],
    tourType: "Domestic",
  },
];

export function getPackageBySlug(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function getPackagesByCategory(category: PackageCategory) {
  return packages.filter((p) => p.categories.includes(category));
}

export function getPackagesByDestination(destinationSlug: string) {
  return packages.filter((p) => p.destinationSlug === destinationSlug);
}
