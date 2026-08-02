import type { LucideIcon } from "lucide-react";
import { Building2, Landmark, Palmtree, Ship, Sparkles, Sun, Trees, Waves } from "lucide-react";

export type InternationalDestination = {
  name: string;
  icon: LucideIcon;
};

export const internationalDestinations: InternationalDestination[] = [
  { name: "Europe", icon: Landmark },
  { name: "South East Asia", icon: Trees },
  { name: "Dubai", icon: Building2 },
  { name: "Thailand", icon: Sun },
  { name: "Bali", icon: Palmtree },
  { name: "Singapore", icon: Building2 },
  { name: "Maldives", icon: Waves },
  { name: "America", icon: Ship },
  { name: "Australia & NZ", icon: Sparkles },
];
