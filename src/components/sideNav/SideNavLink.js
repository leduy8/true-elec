import styled from "styled-components";
import colors from "./../../config/colors";
import { Link } from "react-router-dom";

const SideNavLink = styled(Link)`
  &:link,
  &:visited {
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
    text-decoration: none;
  }

  @media only screen and (max-width: 56.25em) {
    &:link,
    &:visited {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      padding: 2rem;
    }
  }

  @media only screen and (max-width: 37.5em) {
    &:link,
    &:visited {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      padding: 1.5rem 0.5rem;
    }
  }
`;

export default SideNavLink;
