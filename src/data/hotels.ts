import { img } from "./image-pool";

export type Hotel = {
  slug: string;
  name: string;
  destinationSlug: "kashmir" | "ladakh";
  location: string;
  image: string;
  gallery: string[];
  category: string;
  starRating: number;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  description: string;
  includes: string[];
};

export const hotels: Hotel[] = [
  {
    slug: "deluxe-houseboat-dal-lake",
    name: "Zenith Selection Deluxe Houseboat",
    destinationSlug: "kashmir",
    location: "Dal Lake, Srinagar",
    image: img("boatMountainLake", 900),
    gallery: [
      img("boatMountainLake", 1200),
      img("mistyMeadowSunrise", 1200),
      img("sunlitAutumnForest", 1200),
      img("wideValleyPineSnow", 1200),
    ],
    category: "Houseboat",
    starRating: 4,
    pricePerNight: 4500,
    rating: 4.7,
    reviewCount: 512,
    amenities: ["Lake-facing rooms", "Hot water", "Home-cooked meals", "Shikara pickup", "Free Wi-Fi", "Room service"],
    description:
      "Wake up to the still waters of Dal Lake from a hand-carved houseboat cabin, complete with a private sit-out deck. Every stay includes a sunrise shikara pickup, home-cooked Kashmiri meals, and warm hospitality from a family that has run this houseboat for three generations.",
    includes: ["Stay", "All Meals", "Shikara Pickup", "Wi-Fi", "Local Host"],
  },
  {
    slug: "highlands-park-gulmarg",
    name: "Hotel Highlands Park",
    destinationSlug: "kashmir",
    location: "Gulmarg",
    image: img("skiersSnowMountains", 900),
    gallery: [
      img("skiersSnowMountains", 1200),
      img("snowPeaksDramatic", 1200),
      img("wideValleyPineSnow", 1200),
      img("mountainSunsetSilhouette", 1200),
    ],
    category: "Hotel",
    starRating: 4,
    pricePerNight: 6200,
    rating: 4.6,
    reviewCount: 348,
    amenities: ["Mountain view", "In-house heating", "Multi-cuisine restaurant", "Bonfire deck", "Free Wi-Fi", "Ski storage"],
    description:
      "Set a five-minute walk from the Gulmarg Gondola base station, this hotel pairs uninterrupted views of the Pir Panjal range with reliably warm rooms — a genuine comfort during Gulmarg's snow season. The in-house restaurant serves both Kashmiri and continental fare after a long day on the slopes.",
    includes: ["Stay", "Breakfast", "Heating", "Wi-Fi", "Restaurant"],
  },
  {
    slug: "ladakh-heights-leh",
    name: "Hotel Ladakh Heights",
    destinationSlug: "ladakh",
    location: "Leh",
    image: img("mountainSunriseClouds", 900),
    gallery: [
      img("mountainSunriseClouds", 1200),
      img("starryMountains", 1200),
      img("desertHighwayMountains", 1200),
      img("redDuskMountains", 1200),
    ],
    category: "Hotel",
    starRating: 3,
    pricePerNight: 3800,
    rating: 4.5,
    reviewCount: 276,
    amenities: ["Oxygen concentrator on call", "Rooftop views", "Central heating", "Free Wi-Fi", "Airport pickup", "24-hour front desk"],
    description:
      "A dependable base for acclimatising in Leh, with a rooftop that looks straight out over the Indus valley. Rooms are centrally heated against the high-altitude chill, and an oxygen concentrator is kept on call for guests who need it during their first day or two in town.",
    includes: ["Stay", "Breakfast", "Oxygen Support", "Wi-Fi", "Airport Pickup"],
  },
  {
    slug: "pangong-lakeside-camp",
    name: "Zenith Signature Lakeside Camp",
    destinationSlug: "ladakh",
    location: "Pangong Tso",
    image: img("turquoiseLakeCloudy", 900),
    gallery: [
      img("turquoiseLakeCloudy", 1200),
      img("turquoiseLakeSunriseReflection", 1200),
      img("tentForestView", 1200),
      img("starryMountains", 1200),
    ],
    category: "Luxury Camp",
    starRating: 5,
    pricePerNight: 9500,
    rating: 4.9,
    reviewCount: 164,
    amenities: ["Heated tents", "Lake-view deck", "Full-board meals", "Bonfire & stargazing", "Attached washrooms", "Power backup"],
    description:
      "Sleep steps from the shore of Pangong Tso in a heated luxury tent, with a private deck framing the lake's shifting blues. Full-board meals, an evening bonfire, and some of the clearest night skies in India make this the standout stay on any Ladakh itinerary.",
    includes: ["Stay", "All Meals", "Bonfire", "Lake View", "Heated Tent"],
  },
];

export function getHotelBySlug(slug: string) {
  return hotels.find((h) => h.slug === slug);
}
