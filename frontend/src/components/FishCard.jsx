import { useState } from "react";

export default function FishCard({ fish, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "180px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: hover
          ? "0 8px 20px rgba(0,0,0,0.2)"
          : "0 4px 12px rgba(0,0,0,0.1)",
        cursor: "pointer",
        backgroundColor: "#fff",
        transform: hover ? "scale(1.03)" : "scale(1)",
        transition: "0.2s"
      }}
    >
      <img
        src={fish.imageUrl}
        alt={fish.name}
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "10px" }}>
        <h4 style={{ margin: 0 }}>{fish.name}</h4>
        <p style={{ fontSize: "12px", color: "#666" }}>
          {fish.scientificName}
        </p>
      </div>
    </div>
  );
}