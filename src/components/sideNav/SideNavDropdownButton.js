import styled from "styled-components";

import colors from "./../../config/colors";

const SideNavDropdownButton = styled.label`
  color: ${colors.greyDark1};
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  padding: 1.5rem 3rem;
  position: relative;
  z-index: 10;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 56.25em) {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 1.5rem 0.5rem;
  }
`;

export default SideNavDropdownButton;
