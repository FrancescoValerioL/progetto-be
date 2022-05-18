import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CaroselloHome from "./components/CaroselloHome";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Horizontal from "./pages/Horizontal";
import ProfileSelection from "./pages/ProfileSelection";
import Film from "./pages/Film";
import SerieTV from "./pages/SerieTV";
import Preferiti from "./pages/Preferiti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/carosello" element={<CaroselloHome />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/horizontal" element={<Horizontal />} />
        <Route path="/serieTV" element={<SerieTV />} />
        <Route path="/film" element={<Film />} />
        <Route path="/ProfileSelection" element={<ProfileSelection />} />
        <Route path="/preferiti" element={<Preferiti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
