import React from "react";
import styled from "styled-components";

const UserNavUserPhoto = ({ src, alt }) => {
  const Photo = styled.img`
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  `;

  return <Photo src={src} alt={alt} />;
};

export default UserNavUserPhoto;
