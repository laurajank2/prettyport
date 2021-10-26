import React from "react";
import { Nav, NavLink, NavMenu } from "./FooterElements.js";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="phantom">
      <div className="footer">
        <Nav>
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/services" activeStyle>
              Services
            </NavLink>
            <NavLink to="/contact-me" activeStyle>
              Contact Me
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        </Nav>
      </div>
    </div>
  );
};

export default Footer;
