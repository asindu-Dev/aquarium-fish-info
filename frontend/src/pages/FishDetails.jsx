import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFishById } from "../services/fishService";

export default function FishDetails() {
  const { id } = useParams();
  const [fish, setFish] = useState(null);

  useEffect(() => {
    loadFish();
  }, []);

  const loadFish = async () => {
    const res = await getFishById(id);
    setFish(res.data);
  };

  if (!fish) return <p>Loading...</p>;

  return (
    <div>
      <h1>🐠 {fish.name}</h1>

      <img
        src={fish.imageUrl}
        width="300"
        style={{ borderRadius: "10px" }}
      />

      <p>{fish.description}</p>

      <h2>Water Conditions</h2>

      <div style={{ display: "grid", gap: "10px" }}>
        <div>pH: {fish.phMin} - {fish.phMax}</div>
        <div>Temperature: {fish.tempMin} - {fish.tempMax} °C</div>
        <div>TDS: {fish.tdsMin} - {fish.tdsMax}</div>
        <div>Turbidity: {fish.turbidityMin} - {fish.turbidityMax}</div>
      </div>
    </div>
  );
}