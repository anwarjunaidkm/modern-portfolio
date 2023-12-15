import React from "react";
import { navData } from "../../../data/navData";
import Navbar from "@/Components/Navbar/Navbar";
import { Container } from "@/Components/Container/Container";

function HeaderContainer() {
  return (
    <Container>
      <nav className=" flex justify-between">
        <div className=" flex gap-5 ">
          <h1>logo</h1>

          <div className=" flex gap-3">
            {navData.map((item, index) => (
              <Navbar key={index} label={item.label} url={item.url} />
            ))}
          </div>
        </div>
        <div>
          <h1>serach icon</h1>
        </div>
      </nav>
    </Container>
  );
}

export default HeaderContainer;
