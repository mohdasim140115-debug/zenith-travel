import { img } from "./image-pool";

export type FlightRoute = {
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  image: string;
};

export const flightRoutes: FlightRoute[] = [
  { from: "Delhi", fromCode: "DEL", to: "Srinagar", toCode: "SXR", image: img("boatMountainLake", 500) },
  { from: "Mumbai", fromCode: "BOM", to: "Srinagar", toCode: "SXR", image: img("mistyMeadowSunrise", 500) },
  { from: "Bengaluru", fromCode: "BLR", to: "Leh", toCode: "IXL", image: img("mountainSunriseClouds", 500) },
  { from: "Delhi", fromCode: "DEL", to: "Leh", toCode: "IXL", image: img("turquoiseLakeSunriseReflection", 500) },
  { from: "Mumbai", fromCode: "BOM", to: "Leh", toCode: "IXL", image: img("desertCanyon", 500) },
  { from: "Chennai", fromCode: "MAA", to: "Srinagar", toCode: "SXR", image: img("skiersSnowMountains", 500) },
];
