import React from "react";
import styled from "styled-components";

const UserNavIconBox = ({ children }) => {
  const IconBox = styled.div`
    position: relative;
  `;

  return <IconBox>{children}</IconBox>;
};

export default UserNavIconBox;
