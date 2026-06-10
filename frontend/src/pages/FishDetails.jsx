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
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 15s ease infinite",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(40px)"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          width: "250px",
          height: "250px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          filter: "blur(50px)"
        }}
      />

      {/* Main content container */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px",
          fontFamily: "Arial",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Content Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.7)"
          }}
        >
          {/* Title */}
          <h1 style={{ 
            color: "#0f172a",
            fontSize: "36px",
            margin: "0 0 8px 0",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            🐠 {fish.name}
          </h1>

          <p style={{ 
            color: "#64748b", 
            fontSize: "14px",
            marginBottom: "20px",
            fontStyle: "italic"
          }}>
            {fish.scientificName}
          </p>

          {/* Image */}
          <div
            style={{
              background: "linear-gradient(135deg, #e0e7ff 0%, #f0e7ff 100%)",
              borderRadius: "16px",
              padding: "20px",
              marginBottom: "20px",
              textAlign: "center"
            }}
          >
            <img
              src={fish.imageUrl}
              alt={fish.name}
              width="300"
              style={{ 
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.2)"
              }}
            />
          </div>

          {/* Description */}
          <p style={{ 
            marginTop: "20px",
            color: "#334155",
            lineHeight: "1.6",
            fontSize: "15px"
          }}>
            {fish.description}
          </p>

          {/* Section */}
          <h2 style={{ 
            marginTop: "40px",
            color: "#0f172a",
            fontSize: "24px",
            marginBottom: "8px"
          }}>
            💧 Water Conditions
          </h2>
          <p style={{ 
            color: "#64748b",
            marginBottom: "25px",
            fontSize: "14px"
          }}>
            Optimal aquarium parameters for this species
          </p>

          {/* Grid Cards - Modern Design */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
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
          </div>
        ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}