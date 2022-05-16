import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CaroselloHome from "./components/CaroselloHome";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Horizontal from "./pages/Horizontal";
import RicercaPerGenere from "./pages/Ricerca";
import RicercaPerTitolo from "./pages/RicercaPerTitolo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/carosello" element={<CaroselloHome />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/horizontal" element={<Horizontal />} />
        <Route path="/ricercaPerGenere" element={<RicercaPerGenere />} />
        <Route path="/ricercaPerTitolo" element={<RicercaPerTitolo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
