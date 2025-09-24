import React from "react";
import bag from "../../assets/NavImg/bag.jpg";

const ProjectCard = (props) => {
  return (
    <>
      <div className="w-1/2 h-full group  relative transition-all  hover:rounded-[50px] overflow-hidden">
        <img className="h-full w-full " src={props.image1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10  ">
          <h2 className="text-3xl font-[font1] border-2 p-2 text-white border-white rounded-full ">
            VIOR LE PROJETS
          </h2>
        </div>
      </div>
      <div className="w-1/2 h-full group  relative transition-all  hover:rounded-[50px] overflow-hidden">
        <img className="h-full w-full " src={props.image2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10  ">
          <h2 className="text-3xl font-[font1] border-2 p-2 text-white border-white rounded-full ">
            VIOR LE PROJETS
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
