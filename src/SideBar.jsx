import React, { Component } from "react";
import styled from "styled-components";

import { FaHome, FaPhone, FaPiggyBank } from "react-icons/fa";

import {
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavIcon,
  SideNavCopyright,
  SideNavDropdown,
  SubSideNav,
  SubSideNavContent,
} from "./components/sideNav";

class SideBar extends Component {
  render() {
    return (
      <Container>
        <SideNav>
          <SideNavItem>
            <SideNavLink href="#">
              <SideNavIcon component={FaHome} />
              <span>Trang chủ</span>
            </SideNavLink>
          </SideNavItem>
          <SideNavItem>
            <SideNavDropdown
              renderTitle={() => (
                <>
                  <SideNavIcon component={FaPhone} />
                  Sản phẩm
                </>
              )}
              renderSubNav={() => (
                <SubSideNav>
                  <SubSideNavContent>
                    <SideNavLink href="#">Laptop</SideNavLink>
                  </SubSideNavContent>
                  <SubSideNavContent>
                    <SideNavLink href="#">Điện thoại</SideNavLink>
                  </SubSideNavContent>
                  <SubSideNavContent>
                    <SideNavLink href="#">Máy ảnh</SideNavLink>
                  </SubSideNavContent>
                </SubSideNav>
              )}
            />
          </SideNavItem>
          <SideNavItem>
            <SideNavLink href="#">
              <SideNavIcon component={FaPiggyBank} />
              <span>Khuyến mãi</span>
            </SideNavLink>
          </SideNavItem>
        </SideNav>

        <SideNavCopyright>
          &copy; 2020 by TrueElec. All rights reserved.
        </SideNavCopyright>
      </Container>
    );
  }
}

export default SideBar;

const Container = styled.nav`
  background-color: white;
  border-right: 1px solid #f0eeee;
  margin-right: 1%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 18%;
  flex: 0 0 18%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 90vh;
`;
