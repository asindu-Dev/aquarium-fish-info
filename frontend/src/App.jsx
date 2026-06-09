import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FishDetails from "./pages/FishDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fish/:id" element={<FishDetails />} />
      </Routes>
    </BrowserRouter>
  );
}