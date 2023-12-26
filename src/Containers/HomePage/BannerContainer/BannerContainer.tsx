import Banner from "@/Components/Banner/Banner";
import React from "react";
import MenuContaner from "../MenuContaner/MenuContaner";

function BannerContainer() {
  return (
    <div className="h-[31rem] w-full flex flex-col justify-center items-center bg-primary">
      <Banner text={"Welcome to the Gemini era"} />
    </div>
  );
}

export default BannerContainer;
