import React, { useRef } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const stairParentRef = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stairs", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stairs", {
      y: "0%",
    });
  });

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-screen w-full flex ">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
