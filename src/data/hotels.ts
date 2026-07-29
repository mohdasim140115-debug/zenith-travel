import { img } from "./image-pool";

export type Hotel = {
  slug: string;
  name: string;
  destinationSlug: "kashmir" | "ladakh";
  location: string;
  image: string;
  category: string;
  starRating: number;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
};

export const hotels: Hotel[] = [
  {
    slug: "deluxe-houseboat-dal-lake",
    name: "Zenith Selection Deluxe Houseboat",
    destinationSlug: "kashmir",
    location: "Dal Lake, Srinagar",
    image: img("boatMountainLake", 900),
    category: "Houseboat",
    starRating: 4,
    pricePerNight: 4500,
    rating: 4.7,
    reviewCount: 512,
    amenities: ["Lake-facing rooms", "Hot water", "Home-cooked meals", "Shikara pickup"],
  },
  {
    slug: "highlands-park-gulmarg",
    name: "Hotel Highlands Park",
    destinationSlug: "kashmir",
    location: "Gulmarg",
    image: img("skiersSnowMountains", 900),
    category: "Hotel",
    starRating: 4,
    pricePerNight: 6200,
    rating: 4.6,
    reviewCount: 348,
    amenities: ["Mountain view", "In-house heating", "Multi-cuisine restaurant", "Bonfire deck"],
  },
  {
    slug: "ladakh-heights-leh",
    name: "Hotel Ladakh Heights",
    destinationSlug: "ladakh",
    location: "Leh",
    image: img("mountainSunriseClouds", 900),
    category: "Hotel",
    starRating: 3,
    pricePerNight: 3800,
    rating: 4.5,
    reviewCount: 276,
    amenities: ["Oxygen concentrator on call", "Rooftop views", "Central heating", "Free Wi-Fi"],
  },
  {
    slug: "pangong-lakeside-camp",
    name: "Zenith Signature Lakeside Camp",
    destinationSlug: "ladakh",
    location: "Pangong Tso",
    image: img("turquoiseLakeCloudy", 900),
    category: "Luxury Camp",
    starRating: 5,
    pricePerNight: 9500,
    rating: 4.9,
    reviewCount: 164,
    amenities: ["Heated tents", "Lake-view deck", "Full-board meals", "Bonfire & stargazing"],
  },
];
