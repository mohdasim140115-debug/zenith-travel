export type FareClass = {
  key: string;
  name: string;
  price: number;
  cabinBaggage: string;
  checkInBaggage: string;
  cancellationFees: { window: string; fee: number }[];
  dateChangeFees: { window: string; fee: number | "free" }[];
  meal: string;
  seat: string;
};

export function getFareClasses(basePrice: number): FareClass[] {
  return [
    {
      key: "saver",
      name: "Saver (Regular)",
      price: basePrice,
      cabinBaggage: "7 KG / Adult Cabin Baggage",
      checkInBaggage: "15 KG / Adult Check-In Baggage",
      cancellationFees: [
        { window: "3 hrs – 1 day before departure", fee: 4999 },
        { window: "1 day – 3 days before departure", fee: 4999 },
        { window: "More than 3 days before departure", fee: 3999 },
      ],
      dateChangeFees: [
        { window: "3 hrs – 3 days before departure", fee: 2999 },
        { window: "More than 3 days before departure", fee: 2999 },
      ],
      meal: "Meal - Chargeable",
      seat: "Seat - Chargeable",
    },
    {
      key: "flexi",
      name: "Flexi Plus",
      price: basePrice + 315,
      cabinBaggage: "7 KG / Adult Cabin Baggage",
      checkInBaggage: "15 KG / Adult Check-In Baggage",
      cancellationFees: [
        { window: "3 hrs – 1 day before departure", fee: 3499 },
        { window: "1 day – 3 days before departure", fee: 2499 },
        { window: "More than 3 days before departure", fee: 2499 },
      ],
      dateChangeFees: [
        { window: "3 hrs – 3 days before departure", fee: 999 },
        { window: "More than 3 days before departure", fee: 299 },
      ],
      meal: "Meal - Complementary",
      seat: "Seat - Complimentary standard seat and up to 50% off on EXL",
    },
    {
      key: "upfront",
      name: "UpFront",
      price: basePrice + 1575,
      cabinBaggage: "7 KG / Adult Cabin Baggage",
      checkInBaggage: "20 KG / Adult Check-In Baggage",
      cancellationFees: [
        { window: "3 hrs – 1 day before departure", fee: 1599 },
        { window: "1 day – 3 days before departure", fee: 1199 },
        { window: "More than 3 days before departure", fee: 799 },
      ],
      dateChangeFees: [
        { window: "3 hrs – 3 days before departure", fee: 299 },
        { window: "More than 3 days before departure", fee: "free" },
      ],
      meal: "Meal - Complementary",
      seat: "Seat - Complementary economy seat",
    },
  ];
}
