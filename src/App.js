import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero.jsx";   // Ensure correct import
import AboutUs from "./Components/AboutUs.jsx"; 
import Scanner from "./Components/Scanner.jsx"; 
import Pagi from "./Components/Pagi.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/pagi-gen" element={<Pagi />} />
      </Routes>
    </Router>
  );
}

export default App;
