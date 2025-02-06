import { FeatureCollection, Point } from "geojson";

const geoJsonData: FeatureCollection<Point> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.858528, 1.282302] },
      properties: {
        name: "Marina Bay Sands",
        description:
          "A world-famous luxury resort and iconic landmark with a rooftop infinity pool.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.864273, 1.282375] },
      properties: {
        name: "Gardens by the Bay",
        description:
          "A futuristic park with stunning Supertree structures, flower domes, and a cloud forest.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.821999, 1.252021] },
      properties: {
        name: "Sentosa Island",
        description:
          "An island resort featuring Universal Studios Singapore, beaches, and adventure parks.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8168, 1.3138] },
      properties: {
        name: "Singapore Botanic Gardens",
        description:
          "A UNESCO World Heritage site known for its lush greenery and orchid garden.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.844223, 1.284707] },
      properties: {
        name: "Chinatown",
        description:
          "A historic district featuring vibrant markets, food stalls, and traditional temples.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.850262, 1.306879] },
      properties: {
        name: "Little India",
        description:
          "A vibrant cultural enclave with Indian restaurants, shops, and temples.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.844314, 1.291308] },
      properties: {
        name: "Clarke Quay",
        description:
          "A riverside area with bustling nightlife, restaurants, and bars.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.835984, 1.304132] },
      properties: {
        name: "Orchard Road",
        description:
          "Singapore’s main shopping district with high-end stores and luxury malls.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.854614, 1.286985] },
      properties: {
        name: "Merlion Park",
        description:
          "A famous tourist attraction featuring the iconic half-lion, half-fish statue.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.851424, 1.29027] },
      properties: {
        name: "National Gallery Singapore",
        description:
          "Home to one of the largest collections of Southeast Asian art.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.843407, 1.285265] },
      properties: {
        name: "Fort Canning Park",
        description:
          "A hilltop park rich in history, offering scenic walks and cultural landmarks.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.900394, 1.306517] },
      properties: {
        name: "Joo Chiat",
        description:
          "A neighborhood known for its colorful Peranakan shophouses and rich heritage.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.7885, 1.4043] },
      properties: {
        name: "Singapore Zoo",
        description:
          "An award-winning wildlife park known for its open-concept enclosures.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8145, 1.4044] },
      properties: {
        name: "Night Safari",
        description:
          "A nocturnal wildlife park where animals can be viewed in their natural nighttime habitats.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.7788, 1.4061] },
      properties: {
        name: "River Safari",
        description:
          "A river-themed wildlife park featuring manatees, pandas, and other animals.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.9446, 1.3023] },
      properties: {
        name: "East Coast Park",
        description:
          "A scenic beach park popular for cycling, picnics, and water sports.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.860464, 1.283519] },
      properties: {
        name: "ArtScience Museum",
        description:
          "A museum known for its innovative exhibits and iconic lotus-shaped building.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8348, 1.3742] },
      properties: {
        name: "MacRitchie Reservoir",
        description:
          "A nature reserve ideal for hiking, canoeing, and spotting wildlife.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.7659, 1.3493] },
      properties: {
        name: "Bukit Timah Nature Reserve",
        description:
          "A forest reserve featuring diverse wildlife and Singapore’s highest hill.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.967489, 1.410618] },
      properties: {
        name: "Pulau Ubin",
        description:
          "A rustic island offering cycling trails, nature walks, and a glimpse of Singapore’s past.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.9069, 1.3062] },
      properties: {
        name: "Katong",
        description:
          "A historic area known for its Peranakan culture and cuisine.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.9847, 1.3669] },
      properties: {
        name: "Changi Beach",
        description:
          "A serene beach popular for picnics, barbecues, and plane-watching.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.9648, 1.3901] },
      properties: {
        name: "Changi Village",
        description:
          "A laid-back village known for hawker centers and coastal views.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8862, 1.3181] },
      properties: {
        name: "Geylang",
        description:
          "A bustling area known for street food, vibrant nightlife, and cultural landmarks.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8608, 1.3043] },
      properties: {
        name: "Kampong Glam",
        description:
          "A historic district featuring the iconic Sultan Mosque and trendy boutiques.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8513, 1.2838] },
      properties: {
        name: "Raffles Place",
        description:
          "The financial heart of Singapore, surrounded by skyscrapers and colonial buildings.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.7991, 1.3074] },
      properties: {
        name: "Holland Village",
        description:
          "A trendy neighborhood with cafes, bars, and boutique shops.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8552, 1.2946] },
      properties: {
        name: "Raffles Hotel",
        description:
          "A colonial-era luxury hotel known for the iconic Singapore Sling cocktail.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8124, 1.3332] },
      properties: {
        name: "Dempsey Hill",
        description:
          "A lifestyle destination offering restaurants, art galleries, and boutique shops.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8603, 1.282] },
      properties: {
        name: "Helix Bridge",
        description:
          "A pedestrian bridge with a unique DNA-like structure, offering scenic views of Marina Bay.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.7076, 1.3317] },
      properties: {
        name: "Jurong Bird Park",
        description:
          "A world-renowned bird park featuring exotic and endangered species.",
      },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [103.8285, 1.3376] },
      properties: {
        name: "MacPherson",
        description:
          "A residential area with hidden local food gems and markets.",
      },
    },
  ],
};

export default geoJsonData;
