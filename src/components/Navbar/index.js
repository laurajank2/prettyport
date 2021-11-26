
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from "./NavbarElements";
import "../../styles/sidebar.css";
import "../../styles/fonts.css";

function Navbar() {
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <div class="pageBackground">
      <Nav>
        <Bars
            className={sidebar ? "menu-bars active" : "menu-bars"}
            onClick={showSidebar}
          />
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <li className="navbar-toggle" onClick={showSidebar}>
            <Link to="#" className="x">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <ul className="nav-menu-items" onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          {/* <NavLink to="/community" activeStyle>
            Community
          </NavLink> */}
          <NavLink to="/engagement" activeStyle>
            Engagement
          </NavLink>
          <NavLink to="/contact-me" activeStyle>
            Contact Me
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/contact-me">Contact Me</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </div>
  );
}

export default Navbar;
