// Curated pool of verified, license-free Unsplash photos used across the site.
// Each entry's content has been visually verified — swap these for licensed
// on-location photography before a real production launch.

const ids = {
  mountainSunriseClouds: "1506905925346-21bda4d32df4",
  starryMountains: "1519681393784-d120267933ba",
  greenValleyRoad: "1470071459604-3b5ec3a7fe05",
  boatMountainLake: "1476514525535-07fb3b4ae5f1",
  redDuskMountains: "1477346611705-65d1883cee1e",
  mountainSunsetSilhouette: "1500534623283-312aade485b7",
  turquoiseLakeCloudy: "1502786129293-79981df4e689",
  desertCanyon: "1509316785289-025f5b846b35",
  autumnRoad: "1476820865390-c52aeebb9891",
  snowPeaksDramatic: "1544198365-f5d60b6d8190",
  tentForestView: "1504280390367-361c6d9f38f4",
  turquoiseLakeSunriseReflection: "1493246507139-91e8fad9978e",
  hikerTrailValley: "1533240332313-0db49b459ad6",
  desertHighwayMountains: "1494783367193-149034c05e8f",
  wideValleyPineSnow: "1464822759023-fed622ff2c3b",
  sunlitAutumnForest: "1523712999610-f77fbcfc3843",
  mistyMeadowSunrise: "1470252649378-9c29740c9fa8",
  skiersSnowMountains: "1605540436563-5bca919ae766",
} as const;

export type ImageKey = keyof typeof ids;

export function img(key: ImageKey, width = 1200): string {
  return `https://images.unsplash.com/photo-${ids[key]}?q=80&w=${width}&auto=format&fit=crop`;
}
