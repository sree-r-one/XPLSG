import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Explore.css"; // Import custom CSS for marker

const Explore: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  // Set Mapbox access token
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    // Initialize map centered on Singapore Central Catchment Reserve
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!, // Reference to the map container
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [103.7767, 1.3604], // Correct [longitude, latitude]
      zoom: 11.5, // Zoom level to cover the reserve
    });

    // Add navigation controls (zoom in/out buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add marker after the map has fully loaded
    map.on("load", () => {
      // Create custom marker using CSS styles
      const markerDiv = document.createElement("div");
      markerDiv.className = "custom-marker"; // Apply custom styles

      // Create and add the marker
      new mapboxgl.Marker(markerDiv).setLngLat([103.7767, 1.3604]).addTo(map);
    });

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="mt-16 h-[calc(100vh-4rem)] w-full rounded-lg shadow-lg"
    />
  );
};

export default Explore;
