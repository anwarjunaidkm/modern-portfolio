import React from "react";
interface bannerProps {
  text: String;
}

function Banner({ text }: bannerProps) {
  return (
    <div className="text-white ">
      <h1 className="text-9xl font-bold ">{text}</h1>
    </div>
  );
}

export default Banner;
