import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CaroselloHome from "./components/CaroselloHome";
import Home2 from "./pages/Home2";
import ProfileSelection from "./pages/ProfileSelection";
import Film from "./pages/Film";
import SerieTV from "./pages/SerieTV";
import Preferiti from "./pages/Preferiti";
import Notifiche from "./pages/Notifiche";
import RicercaPerTitolo from "./pages/RicercaPerTitolo";
import PaginaUtente from "./pages/PaginaUtente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/carosello" element={<CaroselloHome />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/serieTV" element={<SerieTV />} />
        <Route path="/film" element={<Film />} />
        <Route path="/ProfileSelection" element={<ProfileSelection />} />
        <Route path="/preferiti" element={<Preferiti />} />
        <Route path="/notifiche" element={<Notifiche />} />
        <Route path="/ricerca" element={<RicercaPerTitolo />} />
        <Route path="/paginaUtente" element={<PaginaUtente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
