import { useRef, useEffect, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geoJsonData from "../data/places.geojson";
import { FeatureCollection, Point } from "geojson";

const INITIAL_CENTER: [number, number] = [103.7972, 1.3552];
const INITIAL_ZOOM: number = 10.8;

const Explore: React.FC = () => {
  const mapRef = useRef<Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const [center, setCenter] = useState<[number, number]>(INITIAL_CENTER);
  const [zoom, setZoom] = useState<number>(INITIAL_ZOOM);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current as HTMLDivElement,
        style: "mapbox://styles/mapbox/streets-v12",
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM,
      });

      mapRef.current.on("move", () => {
        const mapCenter = mapRef.current?.getCenter();
        const mapZoom = mapRef.current?.getZoom();
        if (mapCenter && mapZoom !== undefined) {
          setCenter([mapCenter.lng, mapCenter.lat]);
          setZoom(mapZoom);
        }
      });

      // Add markers from GeoJSON data
      geoJsonData.features.forEach((feature) => {
        const { coordinates } = feature.geometry as Point;
        // const { name, description } = feature.properties as {
        //   name: string;
        //   description: string;
        // };
        // Ensure coordinates is of type [number, number]
        const lngLatCoordinates: [number, number] = [
          coordinates[0],
          coordinates[1],
        ];

        const { name, description } = feature.properties as {
          name: string;
          description: string;
        };

        if (mapRef.current) {
          new mapboxgl.Marker()
            .setLngLat(lngLatCoordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h3>${name}</h3><p>${description}</p>`,
              ),
            )
            .addTo(mapRef.current);
        }
      });
    }

    return () => {
      mapRef.current?.remove(); // Clean up map instance
    };
  }, []);

  const resetMap = () => {
    mapRef.current?.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });
  };

  return (
    <>
      <div className="mt-20 flex items-center justify-center pb-2">
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} |
        Zoom: {zoom.toFixed(2)}
        <button
          onClick={resetMap}
          className="ml-4 rounded bg-blue-600 px-2 py-1 text-white hover:bg-blue-500"
          aria-label="Reset map to initial view"
        >
          Reset Map
        </button>
      </div>
      <div
        id="map-container"
        ref={mapContainerRef}
        style={{ height: "90vh", width: "100%" }}
      />
    </>
  );
};

export default Explore;
