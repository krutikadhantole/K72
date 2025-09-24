import React, { useRef } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Agence" element={<Agence />} />
        <Route path="/FullScreenNav" element={<FullScreenNav />} />
      </Routes>
    </div>
  );
};

export default App;
