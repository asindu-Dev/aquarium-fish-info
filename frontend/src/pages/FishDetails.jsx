import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFishById } from "../services/fishService";

export default function FishDetails() {
  const { id } = useParams();
  const [fish, setFish] = useState(null);

  // Reusable card style (THIS is what you asked to add)
  const box = {
    padding: "15px",
    borderRadius: "10px",
    background: "#f4f6f8",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    textAlign: "center"
  };

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
      <h1>🐠 {fish.name}</h1>

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
      <h2 style={{ marginTop: "20px" }}>Water Conditions</h2>

      {/* Grid Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "15px",
          marginTop: "10px"
        }}
      >
        <div style={box}>
          <h3>pH</h3>
          <p>{fish.phMin} - {fish.phMax}</p>
        </div>

        <div style={box}>
          <h3>Temperature</h3>
          <p>{fish.tempMin} - {fish.tempMax} °C</p>
        </div>

        <div style={box}>
          <h3>TDS</h3>
          <p>{fish.tdsMin} - {fish.tdsMax}</p>
        </div>

        <div style={box}>
          <h3>Turbidity</h3>
          <p>{fish.turbidityMin} - {fish.turbidityMax}</p>
        </div>
      </div>
    </div>
  );
}