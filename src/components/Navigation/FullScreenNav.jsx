import React, { useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import bag from "../../assets/NavImg/bag.jpg";
import cold from "../../assets/NavImg/cold.jpg";
import gif from "../../assets/NavImg/gif.gif";
import hand from "../../assets/NavImg/hand.png";
import carl from "../../assets/NavImg/Carl.jpg";
import joel from "../../assets/NavImg/joel.jpg";
import heart from "../../assets/NavImg/heart.png";
import { NavbarContext } from "../../context/NavContext";
import { Navigate, useNavigate } from "react-router-dom";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullScreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullScreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullScreennav"
      className="fullScreennav hidden z-50 h-screen w-full absolute overflow-x-hidden  bg-black text-white pt-10"
    >
      <div className="h-screen w-full fixed">
        <div className="h-screen w-full flex ">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink  flex w-full justify-between  items-start">
          <div className="w-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
              className="p-1"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="relative h-32 w-32 cursor-pointer "
          >
            <div className=" h-40 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className=" h-40 w-1 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>
        <div>
          <div className="cursor-pointer origin-top link relative  border-t-1 border-white">
            <h1 className="font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
              PROJECTS
            </h1>
            <div className="moveLink absolute bg-[#D3FD50]  text-black top-0 flex">
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>

                <img
                  className="h-20 shrink-0 w-60 object-cover rounded-full"
                  src={bag}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>
                <img
                  className="h-20  shrink-0 w-60  object-cover rounded-full"
                  src={cold}
                  alt=""
                />
              </div>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>

                <img
                  className="h-20 shrink-0 w-60 object-cover rounded-full"
                  src={bag}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>
                <img
                  className="h-20  shrink-0 w-60  object-cover rounded-full"
                  src={cold}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="cursor-pointer  origin-top link relative  border-t-1 border-white">
            <h1 className="font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
              AGENCE
            </h1>
            <div className="moveLink absolute bg-[#D3FD50]  text-black top-0 flex">
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT SAVOIR
                </h2>

                <img
                  className="h-20 shrink-0 w-60 object-cover object-[20%_20%]  rounded-full"
                  src={carl}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT SAVOIR
                </h2>
                <img
                  className="h-20  shrink-0 w-60  object-cover object-[20%_20%] rounded-full"
                  src={joel}
                  alt=""
                />
              </div>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>

                <img
                  className="h-20 shrink-0 w-60 object-cover object-[20%_20%] rounded-full"
                  src={carl}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>
                <img
                  className="h-20  shrink-0 w-60  object-cover object-[20%_20%] rounded-full"
                  src={joel}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="cursor-pointer  origin-top link relative  border-t-1 border-white">
            <h1 className="font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
              CONTACT
            </h1>
            <div className="moveLink absolute bg-[#D3FD50]  text-black top-0 flex">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR ENVOUYER UN FAX
                </h2>
                <img
                  className="h-20 shrink-0 w-60 object-contain rounded-full"
                  src={heart}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR ENVOUYER UN FAX
                </h2>
                <img
                  className="h-20  shrink-0 w-60  object-contain rounded-full"
                  src={heart}
                  alt=""
                />
              </div>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>

                <img
                  className="h-20 shrink-0 w-60 object-contain rounded-full"
                  src={heart}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>
                <img
                  className="h-20  shrink-0 w-60  object-contain rounded-full"
                  src={heart}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="cursor-pointer  origin-top link relative  border-y-1 border-white">
            <h1 className="font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
              BLOGUE
            </h1>
            <div className="moveLink absolute bg-[#D3FD50]  text-black top-0 flex">
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  LIER LES ARTICLES
                </h2>

                <img
                  className="h-20 shrink-0 w-60 object-cover rounded-full"
                  src={gif}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  LIER LES ARTICLES
                </h2>
                <img
                  className="h-20  shrink-0 w-60  object-cover rounded-full"
                  src={hand}
                  alt=""
                />
              </div>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  LIER LES ARTICLES
                </h2>

                <img
                  className="h-20 shrink-0 w-60 object-cover rounded-full"
                  src={gif}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-bold text-center">
                  POUR TOUT VOIR
                </h2>
                <img
                  className="h-20  shrink-0 w-60  object-cover rounded-full"
                  src={hand}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
