import styled from "styled-components";

const SideNavItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 56.25em) {
    &:not(:last-child) {
      margin: 0;
    }
  }

  @media only screen and (max-width: 56.25em) {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
`;

export default SideNavItem;
