import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 45, 45, 0.8);
  color: white;
  font-size: 1.7em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background-color 0.6s ease;
  border: transparent;
  border-radius: 15px;
  cursor: pointer;
  display: block;
  margin: 15px auto;

  &:hover {
    background-color: rgb(255, 0, 0);
  }
`;

export default Button;
