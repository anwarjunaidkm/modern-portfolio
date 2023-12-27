"use client";
import React from "react";
import { motion } from "framer-motion";

function TextSection() {
  return (
    <div>
      <div className="h-screen bg-primary flex justify-center flex-col items-center text-secondary w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" w-[60%] leading-relaxed font-extralight text-6xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-8xl font-semibold"
          >
            Our Story
          </motion.h1>
          In a world brimming with possibilities, we sprouted, seizing our
          destiny to create an extraordinary narrative - a tale that
          encapsulates laughter, tears, challenges, and triumphs...!
          <div>
            <button className=" border px-5 text-4xl my-4 ">More info</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TextSection;
