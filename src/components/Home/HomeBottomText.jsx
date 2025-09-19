import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center text-white gap-10">
      <Link
        className="text-[8vw] uppercase border-5 rounded-full leading-[7vw] px-8 py-1"
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className="text-[8vw] uppercase border-5 rounded-full leading-[7vw]  px-8 py-1"
        to="/Agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
