import { img } from "./image-pool";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  tags: string[];
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-to-visit-kashmir",
    title: "Best Time to Visit Kashmir: A Season-by-Season Guide",
    excerpt:
      "From spring tulips to winter snowfall, here's exactly which month suits your Kashmir trip — whether you're chasing snow, greenery, or fewer crowds.",
    content: [
      "Kashmir changes character completely across the year, and picking the right season matters more here than almost anywhere else in India.",
      "March to May brings the Tulip Garden in bloom and mild, photogenic weather — ideal if you want greenery without peak-season crowds.",
      "June to August is the classic summer escape, cool compared to the plains, and the best window for Sonamarg and higher meadows.",
      "September to November turns the valley gold with chinar leaves — many photographers consider this the most underrated season.",
      "December to February is for snow-chasers: Gulmarg turns into a ski resort and Dal Lake's edges freeze over.",
    ],
    category: "Travel Guide",
    tags: ["Kashmir", "Best Time to Visit", "Seasons"],
    author: "Meher Kaul",
    authorAvatar: "https://i.pravatar.cc/100?img=5",
    date: "2026-06-02",
    readTime: "6 min read",
    image: img("autumnRoad", 1200),
  },
  {
    slug: "ladakh-altitude-sickness-guide",
    title: "How to Avoid Altitude Sickness in Ladakh: A Practical Guide",
    excerpt:
      "Leh sits at over 11,000 feet. Here's what actually works to acclimatise properly — and the warning signs you should never ignore.",
    content: [
      "Acute Mountain Sickness (AMS) is the single biggest risk on a Ladakh trip, and almost entirely preventable with the right pacing.",
      "Spend your first full day in Leh doing nothing strenuous — no treks, no high passes, minimal exertion.",
      "Hydrate aggressively (3-4 litres a day), avoid alcohol for the first 48 hours, and eat light, carb-rich meals.",
      "Diamox (acetazolamide) is commonly used preventively — consult your doctor before the trip, not on the day.",
      "Know the red flags: persistent headache, breathlessness at rest, confusion — descend immediately and seek medical help if these appear.",
    ],
    category: "Travel Tips",
    tags: ["Ladakh", "Altitude Sickness", "Health"],
    author: "Dr. Tashi Namgyal",
    authorAvatar: "https://i.pravatar.cc/100?img=8",
    date: "2026-05-18",
    readTime: "7 min read",
    image: img("mountainSunriseClouds", 1200),
  },
  {
    slug: "kashmir-vs-ladakh-which-to-choose",
    title: "Kashmir vs Ladakh: Which Should You Choose First?",
    excerpt:
      "Both sit in the same state, but couldn't feel more different. Here's how to decide based on your travel style, fitness, and time.",
    content: [
      "Kashmir is lush, green, and comfortable at low altitude — ideal for families, honeymooners, and first-time Himalaya travellers.",
      "Ladakh is stark, high-altitude, and adventure-forward — better suited to travellers comfortable with longer drives and thinner air.",
      "If you have under a week, Kashmir's compact circuit (Srinagar-Gulmarg-Pahalgam) fits comfortably; Ladakh needs at least 7-8 days including acclimatisation.",
      "Travelling with elders or young children? Kashmir is the easier, lower-risk choice.",
      "Many of our guests do both across two trips rather than combining them — the road link via Zoji La is seasonal and long.",
    ],
    category: "Travel Guide",
    tags: ["Kashmir", "Ladakh", "Trip Planning"],
    author: "Meher Kaul",
    authorAvatar: "https://i.pravatar.cc/100?img=5",
    date: "2026-04-22",
    readTime: "5 min read",
    image: img("wideValleyPineSnow", 1200),
  },
  {
    slug: "what-to-pack-himalayan-trip",
    title: "What to Pack for a Kashmir or Ladakh Trip",
    excerpt:
      "A no-nonsense packing list built from thousands of departures — including the two things every first-timer forgets.",
    content: [
      "Layering is everything — even summer evenings in both regions drop below 10°C.",
      "Kashmir: waterproof jacket, sturdy walking shoes, sunscreen (UV is stronger than it feels), and a light woollen even in June.",
      "Ladakh: thermal base layers, lip balm with SPF, sunglasses rated for high-altitude glare, and a reusable water bottle.",
      "The two most forgotten items: a power bank (cold drains batteries fast) and prescription medication with a printed copy of the prescription.",
      "Carry a printed copy of your ID and permits for Ladakh — connectivity for digital copies can be patchy at checkpoints.",
    ],
    category: "Travel Tips",
    tags: ["Packing", "Kashmir", "Ladakh"],
    author: "Arjun Bhat",
    authorAvatar: "https://i.pravatar.cc/100?img=33",
    date: "2026-03-30",
    readTime: "4 min read",
    image: img("sunlitAutumnForest", 1200),
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}
