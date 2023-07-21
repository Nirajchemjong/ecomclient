import React from "react";
import { NavBar } from "../navBar/NavBar";
import { SideBarWithNav } from "../navBar/SideBarWithNav";

const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      {/* <SideBarWithNav></SideBarWithNav> */}
      <main className='main '>{children}</main>
    </div>
  );
};

export default DefaultLayout;
