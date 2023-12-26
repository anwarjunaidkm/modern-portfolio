import React from "react";

interface MenuProps {
  text: string;
}

function Menu({ text }: MenuProps) {
  return (
    <div className="w-full text-secondary text-center  cursor-pointer">
      <h1>{text}</h1>
    </div>
  );
}

export default Menu;
