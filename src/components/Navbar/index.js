import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import '../../styles/logo.css';

const Navbar = () => {
  return (
    <div class="pageBackground">
      <Nav>
        <NavLink to='/'>
          <h1 class="text" >Laura Jankowski </h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/contact-me'>Contact Me</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;