import React from "react";
import styled from "styled-components";

import colors from "./../../config/colors";

const UserNavIcon = ({ component: Component }) => {
  const Icon = styled(Component)`
    height: 2.25rem;
    width: 2.25rem;
    fill: ${colors.greyDark1};
  `;

  return <Icon />;
};

export default UserNavIcon;
