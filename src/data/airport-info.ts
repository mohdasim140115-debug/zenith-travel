export const airportInfo: Record<string, { name: string; terminal: string }> = {
  DEL: { name: "Indira Gandhi International Airport", terminal: "Terminal 3" },
  BOM: { name: "Chhatrapati Shivaji Maharaj International Airport", terminal: "Terminal 1" },
  BLR: { name: "Kempegowda International Airport", terminal: "Terminal 1" },
  MAA: { name: "Chennai International Airport", terminal: "Terminal 1" },
  SXR: { name: "Sheikh ul-Alam International Airport", terminal: "Terminal 1" },
  IXL: { name: "Kushok Bakula Rimpochee Airport", terminal: "Terminal 1" },
};

export function getAirportCode(label: string) {
  const match = label.match(/\(([A-Z]{3})\)/);
  return match ? match[1] : "";
}

export function getCityName(label: string) {
  return label.split(" (")[0];
}
