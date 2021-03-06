import React, { useContext } from "react";
import styled from "styled-components";
import colors from "./config/colors";
import logo from "./img/logo.png";
import userImg from "./img/user.jpg";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart, FaBell } from "react-icons/fa";
import {
  UserNav,
  UserNavIconBox,
  UserNavIcon,
  UserNavNotification,
  UserNavUserContainer,
  UserNavUserName,
  UserNavUserPhoto,
} from "./components/userNav";
import AppContext from "./context/AppContext";

function countItems(data) {
  let count = 0;
  for (const item of data) {
    count += item.quantity;
  }
  return count;
}

function Header() {
  const { cart } = useContext(AppContext);

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <SearchBox>
        <SearchInput type="text" placeholder="Bạn muốn tìm gì?" />
        <SearchButton>
          <GoSearch />
        </SearchButton>
      </SearchBox>

      <UserNav>
        <UserNavIconBox>
          <UserNavIcon component={FaShoppingCart} to="/payments" />
          <UserNavNotification numNotifications={countItems(cart.data)} />
        </UserNavIconBox>
        {/* <UserNavIconBox>
            <UserNavIcon component={FaBell} to="/notifications" />
            <UserNavNotification numNotifications={13} />
          </UserNavIconBox> */}
        <UserNavUserContainer>
          <UserNavUserPhoto src={userImg} alt="User photo" />
          <UserNavUserName name="Jonas" />
        </UserNavUserContainer>
      </UserNav>
    </Container>
  );
}

const Container = styled.h1`
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

export default Header;
