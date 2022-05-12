import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import CaroselloHome from "./components/CaroselloHome"
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/carosello" element={<CaroselloHome />} />
          <Route path="/home" element={<Home />} />

          
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
