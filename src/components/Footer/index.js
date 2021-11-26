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
            <NavLink to="/contact-me" activeStyle>
              Contact Me
            </NavLink>
            {/* <a href="www.linkedin.com/in/laura-jankowski-b795611ab" class="fa fa-linkedin"></a> */}
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        </Nav>
      </div>
    </div>
  );
};

export default Footer;
