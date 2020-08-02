import styled from "styled-components";
import colors from "../../config/colors";
import TypeItem from "./TypeItem";

const TypeItemActive = styled(TypeItem)`
  color: ${colors.greyDark1};
  border-bottom: 1px solid ${colors.greyDark1};
`;

export default TypeItemActive;
