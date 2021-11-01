import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #dde9f0;
  height: 75px;
  display: flex;
  justify-content: center;
  z-index: 3;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #587280;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Josefin Slab', serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
  &.active {
    color: #020203;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  }
`;
