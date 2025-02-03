import React, { useState, useRef } from "react";
import ReactMapGL, { ViewportProps, Marker } from "react-map-gl";

const Explore: React.FC = () => {
  const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: 37.8199, // Centered on Golden Gate Bridge
    longitude: -122.4783, // Centered on Golden Gate Bridge
    zoom: 12,
    width: "100vw",
    height: "calc(100vh - 4rem)",
  });

  const mapRef = useRef<ReactMapGL | null>(null);

  return (
    <div className="relative mt-16 h-[calc(100vh-4rem)] w-full">
      {/* <div className="relative mt-16 flex flex-col items-center"> */}
      <ReactMapGL
        ref={mapRef} // Assign the map reference
        {...viewport}
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(evt) => setViewport(evt.viewState)}
      >
        <Marker latitude={37.7749} longitude={-122.4194}>
          {/* Custom marker */}
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500">
            📍
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Explore;
