import type { LucideIcon } from "lucide-react";
import { Heart, Home, Mountain, Sparkles, Sun, Tent, Users } from "lucide-react";
import { img } from "./image-pool";
import type { PackageCategory } from "./packages";

export type CategoryTile = {
  category: PackageCategory;
  label: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export const packageCategoryTiles: CategoryTile[] = [
  { category: "trending", label: "Trending Packages", description: "What most travellers are booking right now", image: img("mountainSunriseClouds", 500), icon: Sparkles },
  { category: "best-selling", label: "Best-Selling Tours", description: "Guest favourites, tried and loved", image: img("boatMountainLake", 500), icon: Sun },
  { category: "luxury", label: "Luxury Holidays", description: "Elevated stays and unhurried itineraries", image: img("turquoiseLakeSunriseReflection", 500), icon: Home },
  { category: "honeymoon", label: "Honeymoon Packages", description: "Romantic escapes, crafted for two", image: img("mistyMeadowSunrise", 500), icon: Heart },
  { category: "family", label: "Family Tours", description: "Easy-paced trips for every generation", image: img("wideValleyPineSnow", 500), icon: Users },
  { category: "group", label: "Group Tours", description: "Better value and more fun, together", image: img("greenValleyRoad", 500), icon: Users },
  { category: "adventure", label: "Adventure Tours", description: "High passes, rafting, and open trails", image: img("desertHighwayMountains", 500), icon: Mountain },
  { category: "weekend", label: "Weekend Getaways", description: "Short breaks that still feel like a trip", image: img("autumnRoad", 500), icon: Tent },
];

