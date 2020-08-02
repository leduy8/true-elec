import styled from "styled-components";

import SubSideNav from "./SubSideNav";

const SideNavDropdownCheckbox = styled.input`
  display: none;

  &:checked + ${SubSideNav} {
    height: initial;
    overflow: initial;
    transition: all 0.3s;
  }
`;

export default SideNavDropdownCheckbox;
