import React, { useState, useRef } from "react";
import ReactMapGL, { ViewportProps, Marker } from "react-map-gl";

const Explore: React.FC = () => {
  const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: 1.3521, // Center on Singapore
    longitude: 103.8198,
    zoom: 11, // Adjust zoom to see a good portion of Singapore
  });

  const mapRef = useRef<ReactMapGL | null>(null);

  return (
    <div className="relative mt-16 h-[calc(100vh-4rem)] w-full">
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(evt) => setViewport(evt.viewState)}
        scrollZoom={true}
      >
        {/* Marker at Changi Airport */}
        <Marker latitude={1.3644} longitude={103.9915}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500">
            📍
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Explore;
