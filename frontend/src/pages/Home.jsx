import { useEffect, useState } from "react";
import { getAllFish, searchFish } from "../services/fishService";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [fish, setFish] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Load all fish initially
  useEffect(() => {
    loadFish();
  }, []);

  const loadFish = async () => {
    setLoading(true);
    try {
      const res = await getAllFish();
      setFish(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  {fish.length === 0 && !loading && (
  <p>No fish found.</p>
)}

  // Debounced search
  useEffect(() => {
    const delay = setTimeout(async () => {
      if (search.trim() === "") {
        loadFish();
        return;
      }

      setLoading(true);
      try {
        const res = await searchFish(search);
        setFish(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <div>
      <h1>Aquarium Fish</h1>

      <input
        placeholder="Search fish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading fish...</p>}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {fish.map((f) => (
          <div
            key={f._id}
            onClick={() => navigate(`/fish/${f._id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              margin: 10,
              padding: 10,
              width: "150px",
              cursor: "pointer",
            }}
          >
            <img src={f.imageUrl} width="120" />
            <h3>{f.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}