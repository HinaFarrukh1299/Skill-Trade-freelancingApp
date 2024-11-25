import React from "react";

const HealthCheck = () => {
  const [apiStatus, setApiStatus] = React.useState("Loading...");

  React.useEffect(() => {
    // Ensure the correct backend URL is used (e.g., http://localhost:8105/api/health)
    fetch("http://localhost:8105/api/health")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text(); // First get the raw response as text
      })
      .then((data) => {
        console.log("API response:", data); // Log the response to check its content
        try {
          const jsonData = JSON.parse(data); // Attempt to parse the response as JSON
          setApiStatus(jsonData.status); // If valid JSON, update status
        } catch (e) {
          console.error("Error parsing JSON:", e);
          setApiStatus("Error parsing JSON"); // Show error if parsing fails
        }
      })
      .catch((error) => {
        console.error("Error fetching API:", error);
        setApiStatus("Error fetching data"); // Show error if fetch fails
      });
  }, []);

  return (
    <div>
      <h1>Frontend Health Check</h1>
      <p>API Status: {apiStatus}</p>
    </div>
  );
};

export default HealthCheck;
