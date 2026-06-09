import Header from "./Header";

export default function Layout({ sidebar, children }) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* TOP HEADER */}
      <Header />

      {/* MAIN AREA */}
      <div style={{ display: "flex", flex: 1 }}>
        
        {/* SIDEBAR */}
        <div style={{
          width: "280px",
          background: "#f1f5f9",
          borderRight: "1px solid #e2e8f0",
          padding: "10px"
        }}>
          {sidebar}
        </div>

        {/* CONTENT */}
        <div style={{
          flex: 1,
          padding: "20px",
          background: "#ffffff"
        }}>
          {children}
        </div>

      </div>
    </div>
  );
}