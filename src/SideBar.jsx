import React from "react";
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

function SideBar() {
  return (
    <Container>
      <SideNav>
        <SideNavItem>
          <SideNavLink to="/">
            <HomeIcon />
            <span>Trang chủ</span>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavDropdown
            renderTitle={() => (
              <>
                <ProductIcon />
                Sản phẩm
              </>
            )}
            renderSubNav={() => (
              <SubSideNav>
                <SubSideNavContent>
                  <SideNavLink to="/products/laptops">Laptop</SideNavLink>
                </SubSideNavContent>
                <SubSideNavContent>
                  <SideNavLink to="/products/phones">Điện thoại</SideNavLink>
                </SubSideNavContent>
                <SubSideNavContent>
                  <SideNavLink to="/products/cameras">Máy ảnh</SideNavLink>
                </SubSideNavContent>
              </SubSideNav>
            )}
          />
        </SideNavItem>
        <SideNavItem>
          <SideNavLink to="#">
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

const HomeIcon = styled(FaHome)`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 2rem;
  fill: currentColor;

  @media only screen and (max-width: 37.5em) {
    margin-right: 0;
    margin-bottom: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ProductIcon = styled(FaPhone)`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 2rem;
  fill: currentColor;

  @media only screen and (max-width: 37.5em) {
    margin-right: 0;
    margin-bottom: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
