import React from "react";
import styled from "styled-components";
import colors from "./../../config/colors";

import { Link } from "react-router-dom";

const UserNavIcon = ({ component: Component, to }) => {
  const Icon = styled(Component)`
    height: 2.25rem;
    width: 2.25rem;
    fill: ${colors.greyDark1};
  `;

  const NaviLink = styled(Link)`
    color: ${colors.greyDark1};
    text-decoration: none;
  `;

  return (
    <NaviLink to={to}>
      <Icon />
    </NaviLink>
  );
};

export default UserNavIcon;
