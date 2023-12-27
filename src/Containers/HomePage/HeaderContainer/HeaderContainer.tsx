import React from "react";
import { navData } from "../../../data/navData";
import Navbar from "@/Components/Navbar/Navbar";
import { Container } from "@/Components/Container/Container";
import { FiSearch } from "react-icons/fi";

function HeaderContainer() {
  return (
    <nav className="  flex justify-between bg-primary text-secondary h-16 items-center">
      <div className=" flex mx-auto justify-between w-full max-w-[1200px] ">
        <div className=" flex gap-5 ">
          <h1 className="font-extrabold text-5xl">BRISA</h1>

          <div className="hidden md:flex gap-4 text-xl font-normal items-center ml-6">
            {navData.map((item, index) => (
              <Navbar key={index} label={item.label} url={item.url} />
            ))}
          </div>
        </div>
        <div>
          <FiSearch className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}

export default HeaderContainer;
