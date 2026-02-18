import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import PlacePage from "./pages/PlacePage";
import GamePage from "./pages/GamePage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/place/:slug" element={<PlacePage />} />
        <Route path="/game/:slug" element={<GamePage />} />
      </Routes>
    </Layout>
  );
}
