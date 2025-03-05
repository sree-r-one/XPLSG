import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";
const ENV_MODE = import.meta.env.VITE_ENV || "unknown";

const HealthCheck: React.FC = () => {
  const [status, setStatus] = useState<string>("Checking...");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/health`);
        if (!res.ok) {
          throw new Error("Error fetching health");
        }

        const data = await res.json();
        setStatus(`✅ Backend is UP: ${JSON.stringify(data)}`);
      } catch (error) {
        setStatus("❌ Backend is DOWN");
        console.error("Error fetching health:", error);
      }
    };

    checkHealth();
  }, []);

  return (
    <div>
      <p>{status}</p>
      <p>API Base URL: {API_BASE_URL}</p>
      <p>Environment: {ENV_MODE}</p>
    </div>
  );
};

export default HealthCheck;
