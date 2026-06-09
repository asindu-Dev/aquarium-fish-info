export default function Layout({ sidebar, children }) {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      <div style={{
        width: "280px",
        borderRight: "1px solid #ddd",
        background: "#f8f9fa",
        padding: "10px"
      }}>
        {sidebar}
      </div>

      <div style={{
        flex: 1,
        padding: "20px",
        background: "#ffffff"
      }}>
        {children}
      </div>

    </div>
  );
}