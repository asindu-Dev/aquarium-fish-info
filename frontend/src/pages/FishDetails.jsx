import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFishById } from "../services/fishService";

export default function FishDetails() {
  const { id } = useParams();
  const [fish, setFish] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Water parameter configuration with symbols and colors
  const parameters = [
    {
      id: "ph",
      label: "pH Level",
      symbol: "🧪",
      min: fish?.phMin,
      max: fish?.phMax,
      unit: "",
      color: "#8B5CF6",
      bgColor: "#F3E8FF",
      description: "Acidity/Alkalinity"
    },
    {
      id: "temperature",
      label: "Temperature",
      symbol: "🌡️",
      min: fish?.tempMin,
      max: fish?.tempMax,
      unit: "°C",
      color: "#EF4444",
      bgColor: "#FEE2E2",
      description: "Water Heat"
    },
    {
      id: "tds",
      label: "TDS",
      symbol: "💧",
      min: fish?.tdsMin,
      max: fish?.tdsMax,
      unit: "ppm",
      color: "#06B6D4",
      bgColor: "#ECFDF5",
      description: "Dissolved Solids"
    },
    {
      id: "turbidity",
      label: "Turbidity",
      symbol: "👁️",
      min: fish?.turbidityMin,
      max: fish?.turbidityMax,
      unit: "NTU",
      color: "#F59E0B",
      bgColor: "#FFFBEB",
      description: "Water Clarity"
    }
  ];

  useEffect(() => {
    loadFish();
  }, []);

  const loadFish = async () => {
    try {
      const res = await getFishById(id);
      setFish(res.data);
    } catch (err) {
      console.log("Error fetching fish:", err);
    }
  };

  if (!fish) return <p>Loading...</p>;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      {/* Title */}
      <h1 style={{ color: "#0f172a" }}>🐠 {fish.name}</h1>

<p style={{ color: "#64748b" }}>
  {fish.scientificName}
</p>

      {/* Image */}
      <img
        src={fish.imageUrl}
        alt={fish.name}
        width="300"
        style={{ borderRadius: "10px" }}
      />

      {/* Description */}
      <p style={{ marginTop: "10px", color: "#444" }}>
        {fish.description}
      </p>

      {/* Section */}
      <h2 style={{ marginTop: "30px", color: "#0f172a", fontSize: "24px", marginBottom: "10px" }}>
        💧 Water Conditions
      </h2>
      <p style={{ color: "#64748b", marginBottom: "25px", fontSize: "14px" }}>
        Optimal aquarium parameters for this species
      </p>

      {/* Grid Cards - Modern Design */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {parameters.map((param) => (
          <div
            key={param.id}
            onMouseEnter={() => setHoveredCard(param.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: param.bgColor,
              border: `2px solid ${param.color}`,
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: hoveredCard === param.id ? "translateY(-8px)" : "translateY(0)",
              boxShadow: hoveredCard === param.id 
                ? `0 12px 24px ${param.color}33` 
                : `0 4px 12px rgba(0,0,0,0.08)`,
            }}
          >
            {/* Symbol */}
            <div
              style={{
                fontSize: "40px",
                marginBottom: "12px",
                animation: hoveredCard === param.id ? "bounce 0.6s ease" : "none",
              }}
            >
              {param.symbol}
            </div>

            {/* Label and Description */}
            <h3
              style={{
                color: param.color,
                margin: "0 0 4px 0",
                fontSize: "16px",
                fontWeight: "600"
              }}
            >
              {param.label}
            </h3>
            <p
              style={{
                color: "#64748b",
                margin: "0 0 12px 0",
                fontSize: "12px"
              }}
            >
              {param.description}
            </p>

            {/* Value Range */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                padding: "12px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "22px",
                  fontWeight: "700",
                  color: param.color
                }}
              >
                {param.min} - {param.max}
              </p>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "12px",
                  color: "#94a3b8",
                  fontWeight: "500"
                }}
              >
                {param.unit}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}