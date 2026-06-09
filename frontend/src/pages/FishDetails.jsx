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
      <h1>{fish.name}</h1>

      <img src={fish.imageUrl} width="300" />

      <p>{fish.description}</p>

      <h3>Water Conditions</h3>
      <p>pH: {fish.phMin} - {fish.phMax}</p>
      <p>Temperature: {fish.tempMin} - {fish.tempMax}</p>
      <p>TDS: {fish.tdsMin} - {fish.tdsMax}</p>
      <p>Turbidity: {fish.turbidityMin} - {fish.turbidityMax}</p>
    </div>
  );
}