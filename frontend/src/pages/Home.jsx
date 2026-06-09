import { useEffect, useState } from "react";
import { getAllFish, searchFish } from "../services/fishService";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

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

  const sidebar = (
    <div>
      <h3 style={{ textAlign: "center" }}>🐠 Fish List</h3>

      <input
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        style={{ width: "90%", margin: "10px" }}
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

  const main = (
    <div>
      <h1>🌊 Aquarium Monitoring System</h1>
      <p>Select a fish from the left panel to view details.</p>
    </div>
  );

  return <Layout sidebar={sidebar}>{main}</Layout>;
}

