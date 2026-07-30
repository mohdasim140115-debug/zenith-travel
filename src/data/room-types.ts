export type RoomType = {
  key: string;
  name: string;
  price: number;
  originalPrice?: number;
  size: string;
  sleeps: number;
  badge?: string;
  inclusions: string[];
};

export function getRoomTypes(basePrice: number): RoomType[] {
  return [
    {
      key: "standard",
      name: "Standard Room",
      price: basePrice,
      originalPrice: Math.round(basePrice * 1.12),
      size: "220 sq.ft",
      sleeps: 2,
      inclusions: ["Breakfast included", "Free Wi-Fi", "Daily housekeeping"],
    },
    {
      key: "deluxe",
      name: "Deluxe Room",
      price: basePrice + 1200,
      originalPrice: Math.round((basePrice + 1200) * 1.15),
      size: "320 sq.ft",
      sleeps: 3,
      badge: "Most Popular",
      inclusions: ["Breakfast + dinner included", "Free Wi-Fi", "Better view / higher floor", "Daily housekeeping"],
    },
    {
      key: "premium",
      name: "Premium Suite",
      price: basePrice + 2800,
      originalPrice: Math.round((basePrice + 2800) * 1.18),
      size: "450 sq.ft",
      sleeps: 4,
      badge: "Best Value",
      inclusions: ["All meals included", "Free Wi-Fi", "Best view in the property", "Priority check-in", "Complimentary airport transfer"],
    },
  ];
}
