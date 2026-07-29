export type Testimonial = {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  tour: string;
  category: string;
  tourManager: string;
  date: string;
  review: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ritika & Arjun Malhotra",
    location: "Delhi",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    tour: "Kashmir Honeymoon Bliss",
    category: "Honeymoon",
    tourManager: "Faizan Ahmed",
    date: "Jun 2026",
    review:
      "From the houseboat décor to the candlelight dinner, every detail felt personal. Our tour manager Faizan was on WhatsApp within minutes whenever we needed anything. Best decision for our honeymoon.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sameer Khanna",
    location: "Pune",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    tour: "Ladakh Explorer — 8 Days",
    category: "Adventure",
    tourManager: "Tashi Namgyal",
    date: "Aug 2026",
    review:
      "Genuinely the best-organised high-altitude trip I've done. The acclimatisation day made a huge difference — nobody in our group of 8 had altitude issues. Pangong camp at night was unforgettable.",
    image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "The Iyer Family",
    location: "Chennai",
    avatar: "https://i.pravatar.cc/100?img=32",
    rating: 5,
    tour: "Kashmir Family Fiesta",
    category: "Family",
    tourManager: "Meher Kaul",
    date: "Oct 2026",
    review:
      "Travelling with my parents and two kids is never easy, but the pace was just right. The tour manager adjusted the Sonamarg day when my father needed extra rest. Highly recommend for multi-gen families.",
  },
  {
    name: "Neha Chopra",
    location: "Mumbai",
    avatar: "https://i.pravatar.cc/100?img=45",
    rating: 4,
    tour: "Kashmir Classic — 6 Days",
    category: "Best Selling",
    tourManager: "Faizan Ahmed",
    date: "Sep 2026",
    review:
      "Beautiful itinerary and great hotels. Only reason for 4 stars — wish we had one more day in Pahalgam. Everything else, from booking to the actual trip, was smooth and well-priced.",
  },
  {
    name: "Vikram Rathore",
    location: "Jaipur",
    avatar: "https://i.pravatar.cc/100?img=15",
    rating: 5,
    tour: "Ladakh Luxury Escape",
    category: "Luxury",
    tourManager: "Tashi Namgyal",
    date: "Jul 2026",
    review:
      "Worth every rupee. The Pangong glamp with a proper heated tent and champagne breakfast overlooking the lake — surreal. Our guide's knowledge of local history made the monastery visits so much richer.",
    image: "https://images.unsplash.com/photo-1601921004897-b7d1a5a37f47?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ananya & friends",
    location: "Bengaluru",
    avatar: "https://i.pravatar.cc/100?img=25",
    rating: 5,
    tour: "Srinagar Weekend Getaway",
    category: "Weekend",
    tourManager: "Meher Kaul",
    date: "May 2026",
    review:
      "Perfect for a 4-day office break. Landed Friday night, was back at my desk Monday morning, and still felt like I'd properly disconnected. The gondola ride was the highlight.",
  },
];
