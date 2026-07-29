import { img } from "./image-pool";

export type Circuit = {
  slug: string;
  name: string;
  destinationSlug: "kashmir" | "ladakh";
  description: string;
  image: string;
  startingPrice: number;
  duration: string;
  tourCount: number;
};

export const circuits: Circuit[] = [
  {
    slug: "srinagar",
    name: "Srinagar",
    destinationSlug: "kashmir",
    description: "Houseboats, Dal Lake and the Mughal gardens",
    image: img("boatMountainLake", 900),
    startingPrice: 17999,
    duration: "3D / 2N",
    tourCount: 18,
  },
  {
    slug: "gulmarg",
    name: "Gulmarg",
    destinationSlug: "kashmir",
    description: "Asia's highest gondola and snow-clad meadows",
    image: img("skiersSnowMountains", 900),
    startingPrice: 19999,
    duration: "2D / 1N",
    tourCount: 14,
  },
  {
    slug: "pahalgam",
    name: "Pahalgam",
    destinationSlug: "kashmir",
    description: "Pine valleys, riverside camps and Betaab Valley",
    image: img("wideValleyPineSnow", 900),
    startingPrice: 18999,
    duration: "2D / 1N",
    tourCount: 15,
  },
  {
    slug: "sonamarg",
    name: "Sonamarg",
    destinationSlug: "kashmir",
    description: "Glacier trails on the road to Ladakh",
    image: img("snowPeaksDramatic", 900),
    startingPrice: 16999,
    duration: "1D Trip",
    tourCount: 9,
  },
  {
    slug: "doodhpathri",
    name: "Doodhpathri",
    destinationSlug: "kashmir",
    description: "Offbeat meadows away from the usual circuit",
    image: img("greenValleyRoad", 900),
    startingPrice: 15999,
    duration: "1D Trip",
    tourCount: 6,
  },
  {
    slug: "yusmarg",
    name: "Yusmarg",
    destinationSlug: "kashmir",
    description: "Pine-fringed meadow beside the Doodh Ganga",
    image: img("mistyMeadowSunrise", 900),
    startingPrice: 15499,
    duration: "1D Trip",
    tourCount: 5,
  },
  {
    slug: "gurez",
    name: "Gurez Valley",
    destinationSlug: "kashmir",
    description: "Remote valley by the Kishanganga, rarely visited",
    image: img("mistyMeadowSunrise", 900),
    startingPrice: 22999,
    duration: "3D / 2N",
    tourCount: 4,
  },
  {
    slug: "leh",
    name: "Leh, Ladakh",
    destinationSlug: "ladakh",
    description: "Monasteries, Pangong Tso and high mountain passes",
    image: img("mountainSunriseClouds", 900),
    startingPrice: 32999,
    duration: "8D / 7N",
    tourCount: 18,
  },
];
