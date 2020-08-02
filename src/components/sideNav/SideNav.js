import React from "react";
import styled from "styled-components";

const SideNav = ({ children }) => {
  const Nav = styled.ul`
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;

    @media only screen and (max-width: 56.25em) {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: 0;
    }
  `;

  return <Nav>{children}</Nav>;
};

export default SideNav;
