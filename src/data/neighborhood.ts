import amenitiesRaw from "./amenities.geojson?raw";

export type CategoryId =
  | "gov"
  | "emp"
  | "arts"
  | "rest"
  | "cafe"
  | "bar"
  | "lib"
  | "fit"
  | "groc"
  | "park"
  | "trans";

export interface Category {
  id: CategoryId;
  label: string;
  color: string;
}

export interface AmenityFeature {
  type: "Feature";
  geometry: { type: "Point"; coordinates: [number, number] };
  properties: { name: string; cat: CategoryId; addr: string };
}

export interface AmenityCollection {
  type: "FeatureCollection";
  features: AmenityFeature[];
}

export const buildingAnchor = { lat: 37.540339, lng: -77.4389019 };

export const categories: Category[] = [
  { id: "gov", label: "Government & Civic", color: "#3A3A3A" },
  { id: "emp", label: "Major Employers", color: "#3A3A3A" },
  { id: "arts", label: "Performing Arts", color: "#6B4E71" },
  { id: "rest", label: "Restaurants", color: "#B26B45" },
  { id: "cafe", label: "Cafes", color: "#C9A84C" },
  { id: "bar", label: "Bars", color: "#7A2E2E" },
  { id: "lib", label: "Libraries & Museums", color: "#3D5A80" },
  { id: "fit", label: "Fitness", color: "#6B8E5A" },
  { id: "groc", label: "Grocery", color: "#7A8C4A" },
  { id: "park", label: "Parks", color: "#3F6B4A" },
  { id: "trans", label: "Transit", color: "#5A6470" },
];

export const amenities: AmenityCollection = JSON.parse(amenitiesRaw);
