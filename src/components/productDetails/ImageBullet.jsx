// import styled from "styled-components";

// const ImageBullet = styled.div`
//   height: 10px;
//   width: 10px;
//   border-radius: 5px;
//   background-color: grey;
//   margin: 0 0.6%;
//   cursor: pointer;
// `;

// export default ImageBullet;

import React from "react";
import styled from "styled-components";

const ImageBullet = ({ isActive }) => {
  const Bullet = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: grey;
    margin: 0 0.6%;
    cursor: pointer;
  `;

  const BulletActive = styled(Bullet)`
    background-color: black;
  `;

  return isActive ? <BulletActive /> : <Bullet />;
};

export default ImageBullet;
