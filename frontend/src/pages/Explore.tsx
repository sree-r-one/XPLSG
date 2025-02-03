import { useRef, useEffect, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geoJsonData from "../data/places.geojson"; // Import GeoJSON data containing location points
import { Point } from "geojson"; // Import Point type for type-safe access to coordinates

// Initial map center (longitude, latitude) focused on Singapore
const INITIAL_CENTER: [number, number] = [103.7972, 1.3552];
// Initial zoom level for the map
const INITIAL_ZOOM: number = 10.8;

const Explore: React.FC = () => {
  // Reference to the Mapbox map instance
  const mapRef = useRef<Map | null>(null);
  // Reference to the map container HTML element
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  // State to track the current center of the map (for display purposes)
  const [center, setCenter] = useState<[number, number]>(INITIAL_CENTER);
  // State to track the current zoom level of the map (for display purposes)
  const [zoom, setZoom] = useState<number>(INITIAL_ZOOM);

  useEffect(() => {
    // Set Mapbox access token from environment variable
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

    // Initialize the Mapbox map instance only if the container is available
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current as HTMLDivElement, // Reference to the div where the map will render
        style: "mapbox://styles/mapbox/streets-v12", // Map style
        center: INITIAL_CENTER, // Initial map center (Singapore)
        zoom: INITIAL_ZOOM, // Initial zoom level
      });

      // Listen to 'move' events to update the center and zoom state variables
      mapRef.current.on("move", () => {
        const mapCenter = mapRef.current?.getCenter(); // Get the current center of the map
        const mapZoom = mapRef.current?.getZoom(); // Get the current zoom level of the map

        // Update the state with the new center and zoom values
        if (mapCenter && mapZoom !== undefined) {
          setCenter([mapCenter.lng, mapCenter.lat]);
          setZoom(mapZoom);
        }
      });

      // Iterate through each feature in the GeoJSON data and add a marker to the map
      geoJsonData.features.forEach((feature) => {
        const { coordinates } = feature.geometry as Point; // Get the coordinates of the feature

        // Ensure coordinates are in the expected [longitude, latitude] format
        const lngLatCoordinates: [number, number] = [
          coordinates[0], // Longitude
          coordinates[1], // Latitude
        ];

        // Get the name and description properties from the feature
        const { name, description } = feature.properties as {
          name: string;
          description: string;
        };

        // Add a marker to the map with a popup containing the feature's name and description
        if (mapRef.current) {
          new mapboxgl.Marker()
            .setLngLat(lngLatCoordinates) // Set the position of the marker
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // Create a popup with some spacing from the marker
                .setHTML(
                  `<h3>${name}</h3><p>${description}</p>`, // HTML content of the popup
                ),
            )
            .addTo(mapRef.current); // Add the marker to the map
        }
      });
    }

    // Cleanup function to remove the map when the component unmounts
    return () => {
      mapRef.current?.remove(); // Safely clean up the map instance to avoid memory leaks
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  // Function to reset the map view to the initial center and zoom level
  const resetMap = () => {
    mapRef.current?.flyTo({
      center: INITIAL_CENTER, // Reset to the initial map center
      zoom: INITIAL_ZOOM, // Reset to the initial zoom level
    });
  };

  return (
    <>
      {/* Display the current longitude, latitude, and zoom level */}
      <div className="mt-20 flex items-center justify-center pb-2">
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} |
        Zoom: {zoom.toFixed(2)}
        <button
          onClick={resetMap} // Trigger map reset when the button is clicked
          className="ml-4 rounded bg-blue-600 px-2 py-1 text-white hover:bg-blue-500"
          aria-label="Reset map to initial view"
        >
          Reset Map
        </button>
      </div>

      {/* Map container where the Mapbox map will render */}
      <div
        id="map-container"
        ref={mapContainerRef} // Reference to the container for the map
        style={{ height: "90vh", width: "100%" }} // Full-height responsive map
      />
    </>
  );
};

export default Explore;
