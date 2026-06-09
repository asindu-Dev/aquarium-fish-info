export default function Header() {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      <h2 style={{ margin: 0 }}>🐠 AquaSense Monitor</h2>

      <div style={{ fontSize: "12px", opacity: 0.8 }}>
        Freshwater Aquarium Intelligence System
      </div>
    </div>
  );
}