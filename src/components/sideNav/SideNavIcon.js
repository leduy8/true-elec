import React from "react";
import styled from "styled-components";

const SideNavIcon = ({ component: Component }) => {
  const Icon = styled(Component)`
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 2rem;
    fill: currentColor;

    @media only screen and (max-width: 37.5em) {
      margin-right: 0;
      margin-bottom: 0.7rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  `;

  return React.createElement(Icon);
};

export default SideNavIcon;
