"use client";

import React from "react";
import Link from "next/link";

export interface NavbarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  url: string;
}

const Navbar = ({ label, url }: NavbarProps) => {
  return (
    <>
      <div className="">
        <ul className="ul-item m-0 p-0">
          <Link className="" href={url}>
            <li key={url} className="navbar-item hover:text-[#94a3b8]">
              {label}
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
