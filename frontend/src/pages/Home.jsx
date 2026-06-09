import { useEffect, useState } from "react";
import { getAllFish, searchFish } from "../services/fishService";
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
    setSearch(e.target.value);

    if (e.target.value === "") {
      loadFish();
      return;
    }

    const res = await searchFish(e.target.value);
    setFish(res.data);
  };

  return (
    <div>
      <h1>Aquarium Fish</h1>

      <input
        placeholder="Search fish..."
        value={search}
        onChange={handleSearch}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {fish.map((f) => (
          <div
            key={f._id}
            onClick={() => navigate(`/fish/${f._id}`)}
            style={{ border: "1px solid black", margin: 10, padding: 10 }}
          >
            <img src={f.imageUrl} width="120" />
            <h3>{f.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}