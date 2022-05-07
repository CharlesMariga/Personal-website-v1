import React from "react";
import styled from "styled-components";

import { navLinks } from "../config";

const NavigationDots = ({ idName }) => {
  return (
    <NavDots>
      {navLinks.map((item, index) => (
        <NavDot
          key={item.name + index}
          href={`#${item.id}`}
          style={idName === item.id ? { backgroundColor: "var(--primary)" } : { opacity: 0.5 }}
        >
          {""}
        </NavDot>
      ))}
    </NavDots>
  );
};

const NavDots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: absolute;
  top: 0;
  right: -20vw;
  height: 100%;
  justify-content: center;

  @media screen and (${({ theme }) => theme.bp.desktopXS}) {
    display: none;
  }

  @media screen and (${({ theme }) => theme.bp.desktopM}) {
    right: -9vw;
  }

  @media screen and (${({ theme }) => theme.bp.desktopL}) {
    right: -14vw;
  }
`;

const NavDot = styled.a`
  text-decoration: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--text-color);

  &:hover {
    background-color: var(--primary);
  }
`;

export default NavigationDots;
