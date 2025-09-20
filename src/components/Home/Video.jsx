import React from "react";
import vdo from "../../../public/video/vdo.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video autoPlay loop muted src={vdo}></video>
    </div>
  );
};

export default Video;
