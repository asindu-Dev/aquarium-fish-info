export default function Layout({ sidebar, children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "250px",
        borderRight: "1px solid #ddd",
        overflowY: "auto"
      }}>
        {sidebar}
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: "20px",
        overflowY: "auto"
      }}>
        {children}
      </div>

    </div>
  );
}