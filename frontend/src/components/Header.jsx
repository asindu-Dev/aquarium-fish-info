export default function Header() {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background: "#7165eccb",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img alt="logo" src="/src/assets/guard-logo.png" style={{ height: "40px" }} />
        <h2 style={{ margin: 0 }}>G.U.A.R.D</h2>
      </div>

      <div style={{ fontSize: "12px", opacity: 0.8 }}>
        Freshwater Aquarium Intelligence System
      </div>
    </div>
  );
}
