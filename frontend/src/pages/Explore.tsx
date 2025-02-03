import { useRef, useEffect, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const INITIAL_CENTER: [number, number] = [103.7972, 1.3552];
const INITIAL_ZOOM: number = 10.8;

const Explore: React.FC = () => {
  const mapRef = useRef<Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const [center, setCenter] = useState<[number, number]>(INITIAL_CENTER);
  const [zoom, setZoom] = useState<number>(INITIAL_ZOOM);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/mapbox/streets-v12",
      center: center,
      zoom: zoom,
    });

    mapRef.current.on("move", () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapRef.current?.getCenter();
      const mapZoom = mapRef.current?.getZoom();

      // update state
      if (mapCenter && mapZoom !== undefined) {
        setCenter([mapCenter.lng, mapCenter.lat]);
        setZoom(mapZoom);
      }
    });

    new mapboxgl.Marker().setLngLat(INITIAL_CENTER).addTo(mapRef.current);

    return () => {
      mapRef.current?.remove(); // Safely clean up map instance
    };
    // return () => mapRef.current.colorremove();
  }, []);

  const resetMap = () => {
    mapRef.current?.flyTo({
      center: INITIAL_CENTER, // Example coordinates
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
