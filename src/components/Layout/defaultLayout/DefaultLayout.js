import React from "react";
import { NavBar } from "../navBar/NavBar";

const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main className='main '>{children}</main>
    </div>
  );
};

export default DefaultLayout;
