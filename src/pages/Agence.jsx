import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Carl from "../assets/img1_files/Carl.jpg";
import CAMILLE from "../assets/img1_files/CAMILLE.jpg";
import ChantalG from "../assets/img1_files/ChantalG.jpg";
import Claire from "../assets/img1_files/Claire.jpg";
import Hugo from "../assets/img1_files/Hugo.jpg";
import joel from "../assets/img1_files/joel.jpg";
import Lawrence from "../assets/img1_files/Lawrence.jpg";
import maxime from "../assets/img1_files/MAXIME.jpg";
import meggie from "../assets/img1_files/MEGGIE.jpg";
import mel from "../assets/img1_files/MEL.jpg";
import michele from "../assets/img1_files/Michele.jpg";
import myleneS from "../assets/img1_files/MyleneS.jpg";
import olivier from "../assets/img1_files/Olivier.jpg";
import SophieA from "../assets/img1_files/SophieA.jpg";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const [currentImg, setCurrentImg] = useState(Carl);

  const imageArray = [
    Carl,
    CAMILLE,
    ChantalG,
    Claire,
    Hugo,
    joel,
    Lawrence,
    maxime,
    meggie,
    mel,
    michele,
    myleneS,
    olivier,
    SophieA,
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,

        start: "top 28%",
        end: "top -180%",
        scrub: true,
        pin: true,
        // onUpdate: (elem) => {
        //   let imageIndex;
        //   if (elem.progress < 1) {
        //     imageIndex = Math.floor(elem.progress * imageArray.length);
        //   } else {
        //     imageIndex = imageArray.length - 1;
        //   }

        //   console.log(imageDivRef.current.children[0].src);
        // },

        onUpdate: (self) => {
          // Calculate which image to show based on scroll progress
          const index =
            self.progress < 1
              ? Math.floor(self.progress * imageArray.length)
              : imageArray.length - 1;

          console.log(setCurrentImg(imageArray[index]));
        },
      },
    });
  });

  return (
    <div>
      <div className="section-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl  top-[20vh] left-[30vw]"
        >
          <img
            className="h-full w-full object-cover"
            src={currentImg}
            alt="scroll changing"
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="pl-[40%]">
            <p className="text-6xl ">
              <span className="pl-[35%]"> &nbsp; Notre curiosité</span> <br />
              nourrit notre créativité. On reste humbles et on dit non aux gros
              egos, même le vôtre. Une marque est vivante. Elle a des valeurs,
              une personnalité, une histoire. Si on oublie ça, on peut faire de
              bons chiffres à court terme, mais on la tue à long terme. C’est
              pour ça qu’on s’engage à donner de la perspective, pour bâtir des
              marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
