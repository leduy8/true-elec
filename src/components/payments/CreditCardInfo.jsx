import styled from "styled-components";
import CreditCard from "./CreditCard";

const CreditCardInfo = styled.div`
  display: none;

  ${CreditCard}:checked ~ & {
    display: block;
  }
`;

export default CreditCardInfo;
