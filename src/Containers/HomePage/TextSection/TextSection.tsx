import React from "react";

function TextSection() {
  return (
    <div>
      <div className="h-screen bg-primary flex justify-center flex-col items-center text-secondary w-full">
        <p className=" w-[60%] leading-relaxed font-extralight text-6xl">
          <h1 className="text-8xl font-semibold">Our Story</h1>
          In a world brimming with possibilities, we sprouted, seizing our
          destiny to create an extraordinary narrative - a tale that
          encapsulates laughter, tears, challenges, and triumphs...!
          <div>
            <button className=" border px-5 text-4xl my-4 ">More info</button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default TextSection;
