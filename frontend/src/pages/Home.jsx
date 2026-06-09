import { useEffect, useState } from "react";
import { getAllFish, searchFish } from "../services/fishService";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import FishCard from "../components/FishCard";

export default function Home() {
  const [fish, setFish] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadFish();
  }, []);

  const loadFish = async () => {
    const res = await getAllFish();
    setFish(res.data);
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === "") {
      loadFish();
      return;
    }

    const res = await searchFish(value);
    setFish(res.data);
  };

  // LEFT SIDEBAR (navigation only)
  const sidebar = (
    <div>
      <h3 style={{ textAlign: "center", color: "#0f172a" }}>
  Aquarium Species
</h3>

      <input
  placeholder="Search species..."
  value={search}
  onChange={handleSearch}
  style={{
    width: "220px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    outline: "none"
  }}
/>

      {fish.map((f) => (
        <div
          key={f._id}
          onClick={() => navigate(`/fish/${f._id}`)}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #eee"
          }}
        >
          {f.name}
        </div>
      ))}
    </div>
  );

  // MAIN CONTENT (dashboard grid)
  const main = (
    <div>
      <h1 style={{ lineHeight: "1.2", marginBottom: "10px" }}>🌊 Aquarium Monitoring System</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "15px",
          padding: "10px"
        }}
      >
        {fish.map((f) => (
          <FishCard
            key={f._id}
            fish={f}
            onClick={() => navigate(`/fish/${f._id}`)}
          />
        ))}
      </div>
    </div>
  );

  return <Layout sidebar={sidebar}>{main}</Layout>;
}