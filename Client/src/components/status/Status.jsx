import React from "react";

const HealthCheck = () => {
    const [apiStatus, setApiStatus] = React.useState("Loading...");

    React.useEffect(() => {
        fetch("/api/health")
            .then((res) => res.json())
            .then((data) => setApiStatus(data.status))
            .catch(() => setApiStatus("Error"));
    }, []);

    return (
        <div>
            <h1>Frontend Health Check</h1>
            <p>API Status: {apiStatus}</p>
        </div>
    );
};

export default HealthCheck;