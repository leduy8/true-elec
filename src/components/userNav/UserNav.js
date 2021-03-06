import styled from "styled-components";

import colors from "../../config/colors";

const UserNav = styled.nav`
  -ms-flex-item-align: stretch;
  align-self: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  & > *:hover {
    background-color: ${colors.greyLight2};
  }
`;

export default UserNav;
