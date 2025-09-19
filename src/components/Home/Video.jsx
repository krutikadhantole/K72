import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1758195623~exp=1758199223~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=e56a03362d8c8de603840347d1c22da98d898028092464a55d077e7c65df69cb&r=dXMtZWFzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;
