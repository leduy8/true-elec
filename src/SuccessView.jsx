import React from "react";
import styled from "styled-components";
import colors from "./config/colors";

import { Button } from "./components/common";

function SuccessView({ history }) {
  const handleRedirect = () => {
    history.replace("/payments");
    history.push("/");
  };

  return (
    <SuccessContainer>
      <SuccessTitle>Bạn đã đặt hàng thành công!</SuccessTitle>
      <Button onClick={handleRedirect}>Quay về trang chủ</Button>
    </SuccessContainer>
  );
}

const SuccessContainer = styled.div`
  display: block;
  margin: 10% auto;
`;

const SuccessTitle = styled.h1`
  text-align: center;
  font-size: 3em;
  color: ${colors.greyDark1};
  margin-bottom: 10%;
`;

export default SuccessView;
