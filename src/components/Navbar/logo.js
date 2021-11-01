
import React from "react";
import {
  Nav,
  NavLink,
} from "./NavbarElements";
import "../../styles/sidebar.css";
import "../../styles/fonts.css";

function Logo() {
  
  return (
    <div class="pageBackground">
      <Nav>
        <NavLink to="/">
          <h1 class="text">Laura Jankowski </h1>
        </NavLink>
      </Nav>
    </div>
  );
}

export default Logo;
