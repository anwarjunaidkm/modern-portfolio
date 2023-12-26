"use client";
import React from "react";
import { motion } from "framer-motion";

interface bannerProps {
  text: String;
}

function Banner({ text }: bannerProps) {
  return (
    <div className="text-white ">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="text-9xl text-center leading-normal font-bold "
      >
        {text} <br />
        the <span className="px-1 text-violet-500">Gemini</span> era
      </motion.h1>
    </div>
  );
}

export default Banner;
