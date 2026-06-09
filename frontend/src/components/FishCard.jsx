export default function FishCard({ fish, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "200px",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        cursor: "pointer",
        backgroundColor: "#fff",
        transition: "0.25s"

      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.12)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 6px 18px rgba(0,0,0,0.08)";
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
        <h4 style={{ margin: 0, color: "#0f172a" }}>
          {fish.name}
        </h4>

        <p style={{ fontSize: "11px", color: "#64748b" }}>
          {fish.scientificName}
        </p>
      </div>
    </div>
  );
}