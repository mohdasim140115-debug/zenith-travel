import { img } from "./image-pool";

export type Activity = {
  slug: string;
  name: string;
  destinationSlug: "kashmir" | "ladakh";
  location: string;
  image: string;
  gallery: string[];
  price: number;
  priceUnit: string;
  duration: string;
  description: string;
  highlights: string[];
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  goodToKnow: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  rating: number;
  reviewCount: number;
};

export const activities: Activity[] = [
  {
    slug: "gulmarg-gondola-ride",
    name: "Gulmarg Gondola Ride",
    destinationSlug: "kashmir",
    location: "Gulmarg",
    image: img("skiersSnowMountains", 900),
    gallery: [
      img("skiersSnowMountains", 1200),
      img("snowPeaksDramatic", 1200),
      img("wideValleyPineSnow", 1200),
      img("mountainSunsetSilhouette", 1200),
    ],
    price: 1800,
    priceUnit: "per person (Phase 1)",
    duration: "2 – 3 hours",
    description:
      "The Gulmarg Gondola is Asia's highest and longest cable car, lifting you from the meadow town of Gulmarg (8,700 ft) to Kongdoori Station and, on Phase 2, all the way to Apharwat Peak at over 13,000 ft. On a clear day you can see across to Nanga Parbat in the west — it's the single most photographed moment on almost every Kashmir itinerary, winter or summer.",
    highlights: [
      "Ride Asia's highest cable car system",
      "Panoramic views of the Pir Panjal range from Kongdoori",
      "Snow activities at Kongdoori year-round (seasonal at Apharwat)",
      "Short queue with our pre-booked ticket counter slot",
      "Great for all ages — no fitness requirement for Phase 1",
    ],
    itinerary: [
      "Arrive at the Gulmarg cable car base station and collect pre-booked tickets",
      "Board Phase 1 gondola — a 10-minute ride up to Kongdoori Station (10,500 ft)",
      "Free time at Kongdoori for photos, snow play, or a warm drink at the café",
      "Optional Phase 2 ride onward to Apharwat Peak (13,000 ft, subject to weather clearance)",
      "Descend back to the base station at your own pace",
    ],
    inclusions: ["Return cable car ticket (Phase 1)", "Assistance at boarding point", "Basic winter gear rental (optional add-on)"],
    exclusions: ["Phase 2 ticket (bookable on-site, subject to weather)", "Skiing/snowboarding equipment and lessons", "Food and beverages at Kongdoori"],
    goodToKnow: [
      { label: "Best time", value: "Dec – Mar for snow, Apr – Jun for meadows & clear skies" },
      { label: "Fitness level", value: "None required for Phase 1; light walking at the top" },
      { label: "What to wear", value: "Heavy woollens, gloves and waterproof shoes even in summer" },
      { label: "Weather note", value: "Phase 2 closes without notice in high wind or low visibility" },
    ],
    faqs: [
      { question: "Is the gondola safe?", answer: "Yes — it's operated by a French-engineered system with regular safety audits and is one of the most-used tourist infrastructures in India." },
      { question: "Can senior citizens and young children do this?", answer: "Yes, Phase 1 requires no physical exertion. Phase 2 involves some cold-weather exposure at altitude, so we recommend it only if everyone is comfortable with cold and mild altitude." },
      { question: "What if the gondola is closed for weather?", answer: "We'll adjust your itinerary on the day and, where possible, reschedule your ride within your Gulmarg stay at no extra cost." },
    ],
    rating: 4.8,
    reviewCount: 2140,
  },
  {
    slug: "dal-lake-shikara-ride",
    name: "Shikara Ride on Dal Lake",
    destinationSlug: "kashmir",
    location: "Srinagar",
    image: img("boatMountainLake", 900),
    gallery: [
      img("boatMountainLake", 1200),
      img("mistyMeadowSunrise", 1200),
      img("autumnRoad", 1200),
      img("sunlitAutumnForest", 1200),
    ],
    price: 600,
    priceUnit: "per boat (1 hour)",
    duration: "1 hour",
    description:
      "A shikara ride is the quintessential Kashmir experience — a flat, colourfully upholstered wooden boat, hand-paddled by a local boatman, gliding across Dal Lake's still waters. You'll pass floating vegetable gardens, the Mughal-era Char Chinar island, and rows of houseboats, with the Zabarwan hills reflected in the water at sunrise and sunset.",
    highlights: [
      "Glide past floating gardens and the Char Chinar island",
      "Best light at sunrise (dawn floating market) or sunset",
      "Traditional hand-paddled shikara with cushioned seating",
      "Option to add a stop at a local handicraft houseboat shop",
      "Safe for families, couples, and elders alike",
    ],
    itinerary: [
      "Board your shikara at the designated ghat near your houseboat or hotel",
      "Glide past floating gardens and local vendor boats selling flowers, saffron and snacks",
      "Stop at Char Chinar island for photos (seasonal water levels permitting)",
      "Pass by the houseboat row and old Mughal-era waterfront buildings",
      "Return to the ghat at a relaxed pace",
    ],
    inclusions: ["1-hour shikara ride", "Life jacket", "Local boatman guide"],
    exclusions: ["Purchases from floating vendors", "Photography services", "Houseboat shopping stop (available on request)"],
    goodToKnow: [
      { label: "Best time", value: "Sunrise (6–7 AM) for the floating market, or sunset for photography" },
      { label: "Fitness level", value: "None — fully seated experience" },
      { label: "What to bring", value: "A light jacket even in summer; mornings on the lake are cool" },
      { label: "Good for", value: "Couples, families, elders, and photography enthusiasts" },
    ],
    faqs: [
      { question: "Can we extend the ride beyond 1 hour?", answer: "Yes, additional time can be arranged directly with the boatman at a nominal per-hour rate, or pre-booked with us in advance." },
      { question: "Is it safe for young children?", answer: "Yes, life jackets are provided and boatmen are experienced with families. We recommend holding infants directly rather than using a jacket sized for them." },
      { question: "Can we combine this with the floating market?", answer: "Yes — book the 6 AM slot to catch Srinagar's daily floating vegetable market in action before it winds down by mid-morning." },
    ],
    rating: 4.9,
    reviewCount: 3320,
  },
  {
    slug: "pahalgam-river-rafting",
    name: "River Rafting on the Lidder",
    destinationSlug: "kashmir",
    location: "Pahalgam",
    image: img("wideValleyPineSnow", 900),
    gallery: [
      img("wideValleyPineSnow", 1200),
      img("greenValleyRoad", 1200),
      img("hikerTrailValley", 1200),
      img("sunlitAutumnForest", 1200),
    ],
    price: 1200,
    priceUnit: "per person",
    duration: "45 minutes",
    description:
      "The Lidder River cuts through Pahalgam's pine forests with a gentle grade I–II current — enough for a genuinely fun splash without requiring prior rafting experience. Certified guides run every raft, and the put-in and take-out points are both close to the main market, making this an easy half-day add-on to any Pahalgam stay.",
    highlights: [
      "Grade I–II rapids — beginner and family-friendly",
      "Scenic route through pine-forested riverbanks",
      "Certified safety guide in every raft",
      "Short enough to fit into a half-day Pahalgam itinerary",
      "Photo/video add-on available with river-side photographers",
    ],
    itinerary: [
      "Report to the rafting base camp near Pahalgam market",
      "Safety briefing and gear fitting (helmet, life jacket, paddle)",
      "45-minute rafting run down the marked Lidder stretch",
      "Exit at the designated take-out point and return gear",
      "Optional tea/snack break at riverside stalls",
    ],
    inclusions: ["Rafting gear & helmet", "Certified safety guide", "Transfer from base camp"],
    exclusions: ["Photography/videography by riverside vendors", "Change of clothes (bring your own)", "Personal insurance"],
    goodToKnow: [
      { label: "Best time", value: "May – September when water levels are ideal" },
      { label: "Fitness level", value: "Basic — should be comfortable getting wet and paddling briefly" },
      { label: "Age limit", value: "Typically 8+ years; check with our team for younger children" },
      { label: "What to bring", value: "A change of clothes, quick-dry footwear, and a waterproof phone pouch" },
    ],
    faqs: [
      { question: "Do I need to know how to swim?", answer: "No, but basic water comfort is recommended. Life jackets are mandatory and guides are trained in water rescue." },
      { question: "Is this safe for beginners?", answer: "Yes, this stretch is graded I–II, the gentlest classification, specifically chosen for first-timers and families." },
      { question: "What should I wear?", answer: "Quick-dry clothing, secured footwear (no flip-flops), and clothes you don't mind getting wet." },
    ],
    rating: 4.6,
    reviewCount: 890,
  },
  {
    slug: "pangong-tso-camping",
    name: "Overnight Camping at Pangong Tso",
    destinationSlug: "ladakh",
    location: "Pangong Tso",
    image: img("tentForestView", 900),
    gallery: [
      img("tentForestView", 1200),
      img("turquoiseLakeCloudy", 1200),
      img("turquoiseLakeSunriseReflection", 1200),
      img("starryMountains", 1200),
    ],
    price: 4500,
    priceUnit: "per person (incl. meals)",
    duration: "Overnight",
    description:
      "Pangong Tso is a 134-km glacial lake straddling the India-China border, famous for shifting through shades of blue and green across the day. An overnight camp here — in a heated deluxe tent right on the shoreline — lets you catch what day-trippers miss: a star-filled Ladakhi sky after dark and the lake's stillest, most vivid colours at sunrise.",
    highlights: [
      "Heated deluxe tents right on the lakeshore",
      "Unpolluted night skies — exceptional stargazing",
      "Sunrise over Pangong from your tent doorstep",
      "Bonfire and dinner under the stars (seasonal)",
      "Far fewer crowds than the day-trip viewpoint",
    ],
    itinerary: [
      "Arrive at Pangong Tso by early evening and check into your lakeside tent",
      "Evening tea and free time to walk the shoreline and photograph the changing light",
      "Bonfire dinner under the stars (weather permitting)",
      "Guided or independent stargazing — one of the darkest skies in India",
      "Early sunrise viewing directly from camp before breakfast and departure",
    ],
    inclusions: ["Deluxe heated tent stay", "Dinner & breakfast", "Bonfire (seasonal)", "Oxygen support on-site"],
    exclusions: ["Transport to/from Pangong Tso (bundled in full Ladakh packages)", "Alcoholic beverages", "Inner Line Permit (arranged separately, included in full packages)"],
    goodToKnow: [
      { label: "Best time", value: "May – September; nights are cold year-round (near freezing even in summer)" },
      { label: "Altitude", value: "~14,270 ft — acclimatise in Leh for at least 1 day before this trip" },
      { label: "What to bring", value: "Heavy thermals, a warm cap and gloves — temperatures drop sharply after sunset" },
      { label: "Connectivity", value: "Limited to no mobile network; inform family before you go" },
    ],
    faqs: [
      { question: "Is it too cold to camp overnight?", answer: "Our tents are insulated and heated, with layered bedding. It's genuinely cold outside after dark, but comfortable inside the tent." },
      { question: "Do I need a permit?", answer: "Yes, an Inner Line Permit is mandatory — we arrange this in advance as part of any Ladakh booking that includes this camp." },
      { question: "Will altitude sickness be an issue?", answer: "Pangong sits higher than Leh, so we require at least one acclimatisation day in Leh first, and oxygen support is kept on-site as a precaution." },
    ],
    rating: 4.9,
    reviewCount: 1240,
  },
  {
    slug: "nubra-camel-safari",
    name: "Double-Humped Camel Safari",
    destinationSlug: "ladakh",
    location: "Nubra Valley (Hunder)",
    image: img("desertCanyon", 900),
    gallery: [
      img("desertCanyon", 1200),
      img("desertHighwayMountains", 1200),
      img("mountainSunsetSilhouette", 1200),
      img("redDuskMountains", 1200),
    ],
    price: 900,
    priceUnit: "per person",
    duration: "30 minutes",
    description:
      "Hunder's sand dunes are one of the few places on Earth to ride the rare Bactrian (double-humped) camel — a species otherwise found only in Central Asia, left behind by Silk Route caravans centuries ago. The 30-minute ride crosses cold desert dunes framed by snow peaks on every side, a landscape that feels like nowhere else in India.",
    highlights: [
      "Ride the rare Bactrian double-humped camel",
      "Cold desert dunes framed by snow-capped peaks",
      "A living remnant of the old Silk Route caravan trade",
      "Quick, easy add-on to a Nubra Valley day",
      "Great photo opportunity at golden hour",
    ],
    itinerary: [
      "Arrive at the Hunder dunes camel safari point",
      "Meet your camel and handler, brief safety instructions",
      "30-minute guided ride across the dune belt",
      "Photo stop mid-ride with the mountain backdrop",
      "Return to the starting point",
    ],
    inclusions: ["Camel ride", "Local handler", "Photo stop at dunes"],
    exclusions: ["Professional photography", "Transport to Hunder (bundled in full Ladakh packages)"],
    goodToKnow: [
      { label: "Best time", value: "Golden hour (early morning or before sunset) for the best light and cooler temperatures" },
      { label: "Fitness level", value: "None — suitable for most ages, mounted and dismounted with assistance" },
      { label: "What to bring", value: "Sunglasses and a scarf — dunes can be windy and sun glare is strong" },
      { label: "Good for", value: "Families, photographers, and first-time desert visitors" },
    ],
    faqs: [
      { question: "Is it safe for children and elders?", answer: "Yes, handlers assist with mounting and dismounting, and the camels walk at a slow, controlled pace throughout." },
      { question: "Why double-humped camels here?", answer: "Bactrian camels were brought along the old Silk Route trade caravans centuries ago and remain in small numbers only in Nubra Valley within India." },
      { question: "Can we combine this with other Nubra sights?", answer: "Yes, it pairs naturally with a visit to Diskit Monastery and the giant Buddha statue nearby, both on the same day." },
    ],
    rating: 4.5,
    reviewCount: 760,
  },
  {
    slug: "khardung-la-atv-ride",
    name: "ATV Ride near Khardung La",
    destinationSlug: "ladakh",
    location: "Khardung La",
    image: img("desertHighwayMountains", 900),
    gallery: [
      img("desertHighwayMountains", 1200),
      img("mountainSunriseClouds", 1200),
      img("snowPeaksDramatic", 1200),
      img("hikerTrailValley", 1200),
    ],
    price: 2500,
    priceUnit: "per person",
    duration: "1 hour",
    description:
      "Khardung La is one of the highest motorable passes in the world, and the terrain around it — loose gravel, packed snow patches, and open high-altitude plateau — is built for an all-terrain-vehicle circuit. This guided 1-hour ATV ride is a shot of adrenaline for anyone who wants more than a photo-stop at the pass.",
    highlights: [
      "Ride near one of the world's highest motorable passes",
      "Guided circuit on varied high-altitude terrain",
      "Automatic ATVs — no manual gear experience needed",
      "Safety gear and instructor briefing included",
      "A genuine adventure add-on to the Khardung La photo stop",
    ],
    itinerary: [
      "Report to the ATV base point near Khardung La",
      "Safety briefing, gear fitting (helmet, gloves, knee guards)",
      "Practice loop with the instructor before the main circuit",
      "Guided 1-hour ATV ride across the marked high-altitude trail",
      "Return gear and depart",
    ],
    inclusions: ["ATV rental", "Safety gear", "Guide/instructor"],
    exclusions: ["Fuel surcharge on extended rides", "GoPro/photography rental", "Transport to Khardung La base (bundled in full Ladakh packages)"],
    goodToKnow: [
      { label: "Best time", value: "June – September when the pass is fully snow-clear" },
      { label: "Fitness level", value: "Moderate — some core strength and balance needed; not for those with back issues" },
      { label: "Altitude caution", value: "Above 17,000 ft — only attempt after proper acclimatisation in Leh" },
      { label: "Age & license", value: "Typically 16+ with a valid driving license for solo riding; pillion rides available for others" },
    ],
    faqs: [
      { question: "Do I need riding experience?", answer: "No prior ATV experience is required — a practice loop with the instructor is included before the main ride." },
      { question: "Is this safe at this altitude?", answer: "The ride is short and paced, with an instructor accompanying the group, but we strongly recommend at least 2 days of acclimatisation in Leh beforehand." },
      { question: "Can non-drivers still experience this?", answer: "Yes, pillion (passenger) rides are available for those who prefer not to drive themselves." },
    ],
    rating: 4.4,
    reviewCount: 410,
  },
];

export function getActivityBySlug(slug: string) {
  return activities.find((a) => a.slug === slug);
}
