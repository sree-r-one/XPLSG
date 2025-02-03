import { FeatureCollection, Point } from "geojson";

const geoJsonData: FeatureCollection<Point> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [103.8603, 1.2834],
      },
      properties: {
        name: "Marina Bay Sands",
        description:
          "A world-famous luxury resort and iconic landmark with a rooftop infinity pool.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [103.8636, 1.2816],
      },
      properties: {
        name: "Gardens by the Bay",
        description:
          "A futuristic park with stunning Supertree structures, flower domes, and a cloud forest.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [103.8219, 1.2494],
      },
      properties: {
        name: "Sentosa Island",
        description:
          "An island resort featuring Universal Studios Singapore, beaches, and adventure parks.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [103.8198, 1.3138],
      },
      properties: {
        name: "Singapore Botanic Gardens",
        description:
          "A UNESCO World Heritage site known for its lush greenery and orchid garden.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [103.843, 1.2839],
      },
      properties: {
        name: "Chinatown",
        description:
          "A historic district featuring vibrant markets, food stalls, and traditional temples.",
      },
    },
  ],
};

export default geoJsonData;
