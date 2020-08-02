import React from "react";
import styled from "styled-components";
import colors from "./config/colors";
import defaultStyles from "./config/defaultStyles";

import logo from "./img/logo.png";
import userImg from "./img/user.jpg";
import productImg from "./img/sample-laptop.png";
import { GoSearch } from "react-icons/go";
import {
  FaShoppingCart,
  FaBell,
  FaHome,
  FaPhone,
  FaPiggyBank,
} from "react-icons/fa";
import {
  UserNav,
  UserNavIconBox,
  UserNavIcon,
  UserNavNotification,
  UserNavUserContainer,
  UserNavUserName,
  UserNavUserPhoto,
} from "./components/userNav";
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
import {
  MainViewFilter,
  FilterType,
  FilterSort,
  TypeItem,
  TypeItemActive,
  SortSelect,
  SortSelectButton,
  SortSelectLabel,
  SortSelectOption,
  Products,
  Product,
  ProductPrice,
  ProductTitle,
  ProductLine,
  ProductImage,
} from "./components/products";

const laptops = [
  {
    id: 1,
    image: productImg,
    name: "Laptop MSI gaming",
    price: 3250,
  },
  {
    id: 2,
    image: productImg,
    name: "Laptop MSI gaming",
    price: 3250,
  },
  {
    id: 3,
    image: productImg,
    name: "Laptop MSI gaming",
    price: 3250,
  },
  {
    id: 4,
    image: productImg,
    name: "Laptop MSI gaming",
    price: 3250,
  },
];

function App() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />
        <SearchBox>
          <SearchInput type="text" placeholder="Bạn muốn tìm gì?" />
          <SearchButton>
            <GoSearch />
          </SearchButton>
        </SearchBox>

        <UserNav>
          <UserNavIconBox>
            <UserNavIcon component={FaShoppingCart} />
          </UserNavIconBox>
          <UserNavIconBox>
            <UserNavIcon component={FaBell} />
            <UserNavNotification numNotifications={13} />
          </UserNavIconBox>
          <UserNavUserContainer>
            <UserNavUserPhoto src={userImg} alt="User photo" />
            <UserNavUserName name="Jonas" />
          </UserNavUserContainer>
        </UserNav>
      </Header>

      <Content>
        <SideBar>
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
        </SideBar>

        <MainView>
          <h1 class="main-view__title">Laptop</h1>
          <MainViewFilter>
            <FilterType>
              <TypeItemActive>All</TypeItemActive>
              <TypeItem>Dell</TypeItem>
              <TypeItem>HP</TypeItem>
              <TypeItem>Acer</TypeItem>
              <TypeItem>Asus</TypeItem>
            </FilterType>
            <FilterSort>
              <SortSelect>
                <SortSelectLabel for="sortBy"></SortSelectLabel>
                <SortSelectButton name="sortBy" id="sortBy">
                  <SortSelectOption value="all" selected>
                    Giá tiền
                  </SortSelectOption>
                  <SortSelectOption value="desc">
                    Giá cao đến thấp
                  </SortSelectOption>
                  <SortSelectOption value="asc">
                    Giá thấp đến cao
                  </SortSelectOption>
                </SortSelectButton>
              </SortSelect>
              <SortSelect>
                <SortSelectLabel for="sortBy"></SortSelectLabel>
                <SortSelectButton name="sortBy" id="sortBy">
                  <SortSelectOption value="all" selected>
                    Giá tiền
                  </SortSelectOption>
                  <SortSelectOption value="desc">
                    Giá cao đến thấp
                  </SortSelectOption>
                  <SortSelectOption value="asc">
                    Giá thấp đến cao
                  </SortSelectOption>
                </SortSelectButton>
              </SortSelect>
              <SortSelect>
                <SortSelectLabel for="sortBy"></SortSelectLabel>
                <SortSelectButton name="sortBy" id="sortBy">
                  <SortSelectOption value="all" selected>
                    Giá tiền
                  </SortSelectOption>
                  <SortSelectOption value="desc">
                    Giá cao đến thấp
                  </SortSelectOption>
                  <SortSelectOption value="asc">
                    Giá thấp đến cao
                  </SortSelectOption>
                </SortSelectButton>
              </SortSelect>
            </FilterSort>
          </MainViewFilter>
          <Products>
            {laptops.map((laptop) => (
              <Product key={laptop.id}>
                <ProductImage src={laptop.image} alt="Sample laptop" />
                <ProductLine></ProductLine>
                <ProductTitle>{laptop.name}</ProductTitle>
                <ProductPrice>{laptop.price * 1000}đ</ProductPrice>
              </Product>
            ))}
          </Products>
        </MainView>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.greyLight1};
  -webkit-box-shadow: ${defaultStyles.shadowDark};
  box-shadow: ${defaultStyles.shadowDark};
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 1.4rem;
  height: 10vh;
  background-color: #fff;
  border-bottom: ${colors.line};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 3.25rem;
  margin-left: 2rem;
`;

const SearchBox = styled.form`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40%;
  flex: 0 0 40%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media only screen and (max-width: 31.25em) {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    background-color: ${colors.greyDark2};
  }
`;

const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: ${colors.greyLight2};
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 90%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  margin-right: -3.25rem;

  &:focus {
    outline: none;
    width: 100%;
    background-color: ${colors.greyLight3};
  }

  &::-webkit-input-placeholder {
    font-weight: 100;
    color: ${colors.greyLight4};
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: ${colors.greyLight2};

  &:focus {
    outline: none;
  }

  &:active {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
`;

const Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  @media only screen and (max-width: 56.25em) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

const SideBar = styled.nav`
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

const MainView = styled.main`
  height: 90vh;
  overflow-y: scroll;
  width: 100%;
  padding: 2%;
`;

export default App;
