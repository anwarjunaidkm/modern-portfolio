import Menu from "@/Components/Menu/Menu";
import React from "react";
import { menuData } from "../../../data/menuData";

function MenuContaner() {
  return (
    <div className="bg-primary p-3">
      <div className=" max-w-[600px] mx-auto rounded-[25px]  p-4 border-solid bg-[#464344]">
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
