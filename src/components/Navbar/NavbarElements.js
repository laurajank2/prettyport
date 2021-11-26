import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #dde9f0;
  height: 100%;
  display: flex;
  justify-content: space-between;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #587280;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  font: 3vh bolder;
  font-family: 'Josefin Slab', serif;
  margin: auto;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
  &.active {
    color: #020203;
    font-family: 'Josefin Slab', serif;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #587280;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20%, 20%);
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 10px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-family: 'Josefin Slab', serif;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
    color: #587280;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #587280;
  padding: 12px 20px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Josefin Slab', serif;
  font-size: 2.5vh;
  

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #85b5cc;
    color: #010606;
  }
`;