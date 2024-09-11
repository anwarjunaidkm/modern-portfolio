"use client";
import React from "react";
import { motion } from "framer-motion";

interface bannerProps {
  text: String;
}

function Banner({ text }: bannerProps) {
  return (
    <div className="text-white">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="md:text-9xl text-7xl text-center leading-normal font-bold "
      >
        {text} <br />
        the <span className="px-1 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" >Gemini</span> era
      </motion.h1>
    </div>
  );
}

export default Banner;
