import React from "react";
import bag from "../assets/NavImg/bag.jpg";
import cold from "../assets/NavImg/cold.jpg";
import hand from "../assets/NavImg/hand.png";
import cake from "../assets/NavImg/cake.jpg";
import capman from "../assets/NavImg/capman.jpg";
import can2 from "../assets/NavImg/can2.png";
import ProjectCard from "../components/Projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1: bag,
      image2: cold,
    },
    {
      image1: hand,
      image2: cake,
    },
    {
      image1: capman,
      image2: can2,
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",

        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="p-4">
      <div className="pt-[30vh]">
        <h2 className="font-[font2] text-[8.5vw] uppercase">projets</h2>
      </div>
      <div className="lol">
        {projects.map(function (elem, idx) {
          return (
            <div className="hero w-full h-[400px] mb-4 flex gap-3">
              <ProjectCard image1={elem.image1} image2={elem.image2} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
