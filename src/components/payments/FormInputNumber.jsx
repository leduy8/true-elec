import styled from "styled-components";
import colors from "../../config/colors";

const FormInputNumber = styled.input`
  border: 1px solid ${colors.greyLight4};
  padding: 5px;
  font-size: 1.4em;
  color: rgb(82, 82, 82);
  background-color: white;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export default FormInputNumber;
