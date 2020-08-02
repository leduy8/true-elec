import React from "react";
import styled from "styled-components";

import colors from "./../../config/colors";

const UserNavNotification = ({ numNotifications }) => {
  const Notification = styled.span`
    font-size: 0.8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: ${colors.primary};
    color: #fff;
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  `;

  return <Notification>{numNotifications}</Notification>;
};

export default UserNavNotification;
