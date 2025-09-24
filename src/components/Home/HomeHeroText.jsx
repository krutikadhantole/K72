import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-white pt-5 text-center  ">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw] justify-center flex items-start uppercase leading-[8vw]">
        qui
        <div className="h-[10vw] w-[12vw] rounded-full overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
