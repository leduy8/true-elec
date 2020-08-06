import styled from "styled-components";
import colors from "../../config/colors";

const IncrementLabel = styled.label`
  font-size: 1.6em;
  text-align: center;
  min-width: 30px;
  max-width: 80px;
  border: none;
  border-left: 1px solid ${colors.greyDark5};
  border-right: 1px solid ${colors.greyDark5};
  background-color: white;
`;

export default IncrementLabel;
