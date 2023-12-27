"use client";
import Menu from "@/Components/Menu/Menu";
import React, { useEffect, useRef, useState } from "react";
import { menuData } from "../../../data/menuData";

function MenuContaner() {
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const menuTop = menuRef.current.getBoundingClientRect().top;
        console.log("ScrollTop:", window.scrollY);
        console.log("MenuTop:", menuTop);

        setIsScrolled(menuTop < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`bg-primary p-3 `}>
      <div
        ref={menuRef}
        className={`max-w-[600px] mx-auto rounded-[25px] p-4 border-solid bg-[#464344] ${
          isScrolled
            ? "fixed top-3 w-full z-50 left-1/2 transform -translate-x-1/2 will-change"
            : ""
        }`}
      >
        <div className="flex gap-3">
          {menuData.map((item, index) => (
            <Menu key={index} text={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuContaner;
