import { img } from "./image-pool";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  heroImage: string;
  cardImage: string;
  tourCount: number;
  startingPrice: number;
  overview: string;
  bestTimeToVisit: { period: string; note: string }[];
  weather: { season: string; months: string; tempRange: string; description: string }[];
  topAttractions: { name: string; image: string; description: string }[];
  thingsToDo: string[];
  gallery: string[];
  nearbyDestinations: { name: string; slug: string; distance: string }[];
  faqs: { question: string; answer: string }[];
  mapEmbed: { lat: number; lng: number };
};

export const destinations: Destination[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    region: "North India",
    tagline: "Paradise on Earth — houseboats, meadows and snow-capped valleys",
    heroImage: img("boatMountainLake", 2400),
    cardImage: img("boatMountainLake", 1200),
    tourCount: 24,
    startingPrice: 24999,
    overview:
      "Kashmir remains India's most enchanting Himalayan escape — a valley of mirror-still lakes, saffron fields, deodar forests and snow-dusted peaks. From gliding on a shikara across Dal Lake at sunrise to riding the gondola up Apharwat Peak in Gulmarg, every day in Kashmir is composed like a postcard. Zenith Voyages' Kashmir journeys are built around handpicked houseboats, heritage stays and private transfers, so you experience the valley the way it deserves to be seen — unhurried and immersive.",
    bestTimeToVisit: [
      { period: "March – May", note: "Spring bloom — tulip gardens, mild days, blossoming almond orchards" },
      { period: "June – August", note: "Summer — cool respite from the plains, ideal for Sonamarg and Pahalgam" },
      { period: "September – November", note: "Autumn — golden chinar leaves, crisp air, fewer crowds" },
      { period: "December – February", note: "Winter — snowfall in Gulmarg, skiing season, frozen Dal Lake edges" },
    ],
    weather: [
      { season: "Spring", months: "Mar – May", tempRange: "10°C – 23°C", description: "Pleasant days, cool evenings, occasional showers" },
      { season: "Summer", months: "Jun – Aug", tempRange: "15°C – 30°C", description: "Warm afternoons, cool nights, best for high meadows" },
      { season: "Autumn", months: "Sep – Nov", tempRange: "5°C – 20°C", description: "Crisp and dry, stunning foliage colours" },
      { season: "Winter", months: "Dec – Feb", tempRange: "-5°C – 8°C", description: "Heavy snowfall, ski season in Gulmarg" },
    ],
    topAttractions: [
      { name: "Dal Lake & Houseboats", image: img("boatMountainLake", 900), description: "Iconic shikara rides and floating gardens" },
      { name: "Gulmarg Gondola", image: img("skiersSnowMountains", 900), description: "Asia's highest cable car to Apharwat Peak" },
      { name: "Betaab Valley, Pahalgam", image: img("wideValleyPineSnow", 900), description: "Pine-lined valley made famous by Bollywood" },
      { name: "Sonamarg Glacier Trail", image: img("snowPeaksDramatic", 900), description: "Gateway to Thajiwas Glacier and Zoji La" },
      { name: "Mughal Gardens, Srinagar", image: img("mistyMeadowSunrise", 900), description: "Nishat and Shalimar Bagh terraced gardens" },
      { name: "Doodhpathri Meadows", image: img("greenValleyRoad", 900), description: "Offbeat 'valley of milk' meadow trails" },
    ],
    thingsToDo: [
      "Shikara ride & floating vegetable market at dawn",
      "Gondola ride to Apharwat Peak, Gulmarg",
      "Pony rides through Betaab & Aru Valley",
      "River rafting on the Lidder River",
      "Saffron farm & Pashmina workshop visit",
      "Sunset at Shankaracharya Hill viewpoint",
    ],
    gallery: [
      img("boatMountainLake", 1200),
      img("wideValleyPineSnow", 1200),
      img("snowPeaksDramatic", 1200),
      img("autumnRoad", 1200),
      img("sunlitAutumnForest", 1200),
      img("mistyMeadowSunrise", 1200),
    ],
    nearbyDestinations: [
      { name: "Ladakh", slug: "ladakh", distance: "434 km via Zoji La" },
    ],
    faqs: [
      { question: "How many days are ideal for a Kashmir trip?", answer: "6 to 8 days lets you comfortably cover Srinagar, Gulmarg, Pahalgam and Sonamarg without rushing." },
      { question: "Is Kashmir safe for tourists in 2026?", answer: "Yes. Tourist circuits (Srinagar, Gulmarg, Pahalgam, Sonamarg) see heavy footfall year-round and are well patrolled. Our tour managers coordinate local logistics throughout." },
      { question: "Do I need permits to visit Kashmir?", answer: "No special permits are required for Indian or foreign nationals for the standard Kashmir circuit." },
      { question: "What should I pack for Kashmir?", answer: "Layered woollens even in summer (evenings are cool), comfortable walking shoes, and heavy snow gear for a winter departure." },
    ],
    mapEmbed: { lat: 34.0837, lng: 74.7973 },
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    region: "North India",
    tagline: "The Land of High Passes — cobalt lakes and moonscape monasteries",
    heroImage: img("turquoiseLakeSunriseReflection", 2400),
    cardImage: img("turquoiseLakeCloudy", 1200),
    tourCount: 18,
    startingPrice: 32999,
    overview:
      "Ladakh is a high-altitude desert of stark, otherworldly beauty — turquoise lakes ringed by snow peaks, whitewashed monasteries clinging to cliffs, and roads that climb past 17,000 feet. It rewards those who go slow: acclimatise in Leh, then venture out to Nubra's sand dunes, Pangong's shifting blue and the ancient silence of Hemis and Thiksey monasteries. Zenith Voyages runs every Ladakh departure with certified high-altitude protocols, oxygen support on standby, and experienced mountain drivers.",
    bestTimeToVisit: [
      { period: "May – June", note: "Early season — clear skies, Khardung La opens, fewer crowds" },
      { period: "July – August", note: "Peak season — all passes open, Hemis Festival, warmest days" },
      { period: "September", note: "Best light and colours, thinning crowds, stable weather" },
      { period: "October – April", note: "Winter — Chadar trek season, most passes snowbound" },
    ],
    weather: [
      { season: "Early Summer", months: "May – Jun", tempRange: "4°C – 20°C", description: "Cold nights, sunny days, passes reopening" },
      { season: "Peak Summer", months: "Jul – Aug", tempRange: "10°C – 25°C", description: "Warmest window, all high passes accessible" },
      { season: "Autumn", months: "Sep – Oct", tempRange: "0°C – 15°C", description: "Crisp, golden poplar trees, ideal photography light" },
      { season: "Winter", months: "Nov – Apr", tempRange: "-20°C – 5°C", description: "Frozen rivers, Chadar trek, extreme cold" },
    ],
    topAttractions: [
      { name: "Pangong Tso", image: img("turquoiseLakeCloudy", 900), description: "134-km glacial lake that shifts colour through the day" },
      { name: "Nubra Valley & Diskit", image: img("desertCanyon", 900), description: "Sand dunes, double-humped camels, giant Buddha statue" },
      { name: "Khardung La", image: img("desertHighwayMountains", 900), description: "One of the world's highest motorable passes" },
      { name: "Thiksey Monastery", image: img("redDuskMountains", 900), description: "Tibetan-style monastery overlooking the Indus valley" },
      { name: "Magnetic Hill & Sangam", image: img("mountainSunsetSilhouette", 900), description: "Optical-illusion hill and Indus-Zanskar confluence" },
      { name: "Tso Moriri", image: img("turquoiseLakeSunriseReflection", 900), description: "Remote high-altitude lake in Changthang plateau" },
    ],
    thingsToDo: [
      "Camp overnight beside Pangong Tso",
      "Camel safari on Nubra's sand dunes",
      "Cross Khardung La & Chang La high passes",
      "Monastery trail: Thiksey, Hemis, Diskit",
      "River rafting on the Zanskar / Indus",
      "Stargazing at Hanle Dark Sky Reserve",
    ],
    gallery: [
      img("mountainSunriseClouds", 1200),
      img("turquoiseLakeCloudy", 1200),
      img("desertCanyon", 1200),
      img("desertHighwayMountains", 1200),
      img("turquoiseLakeSunriseReflection", 1200),
      img("starryMountains", 1200),
    ],
    nearbyDestinations: [
      { name: "Kashmir", slug: "kashmir", distance: "434 km via Zoji La" },
    ],
    faqs: [
      { question: "How do I avoid altitude sickness in Ladakh?", answer: "We build in a mandatory acclimatisation day in Leh (11,500 ft) before any onward travel, keep hydration high, and carry oxygen cylinders and a doctor-on-call network across all our Ladakh batches." },
      { question: "Do I need an Inner Line Permit?", answer: "Yes, for Nubra, Pangong, Tso Moriri and Khardung La. Our team arranges all permits digitally before your arrival — no paperwork on your part." },
      { question: "What is the best way to reach Ladakh?", answer: "Fly into Leh (Kushok Bakula Rimpochee Airport) for the fastest, most altitude-friendly arrival. Overland routes via Manali or Srinagar are seasonal and best for road-trip enthusiasts." },
      { question: "Is Ladakh suitable for a family with kids or elders?", answer: "With our slower-paced Ladakh Gentle itinerary and extra acclimatisation buffer, yes — though we recommend a medical check-up before booking for guests with heart or respiratory conditions." },
    ],
    mapEmbed: { lat: 34.1526, lng: 77.5771 },
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
