import React from "react";
interface bannerProps {
  text: String;
}

function Banner({ text }: bannerProps) {
  return (
    <div className="text-white ">
      <h1 className="text-9xl text-center leading-normal font-bold ">
        {text} <br />
        the <span className="px-1 text-violet-500">Gemini</span> era
      </h1>
    </div>
  );
}

export default Banner;
