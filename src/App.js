import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import colors from "./config/colors";
import defaultStyles from "./config/defaultStyles";

import AppContext from "./context/AppContext";
import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./Header";
import SideBar from "./SideBar";
import ProductsViewFC from "./ProductsViewFC";
import ProductDetailsView from "./ProductDetailsView";
import PaymentView from "./PaymentView";
import SuccessView from "./SuccessView";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const existedItem = cart.find(
      (existedDevice) => existedDevice.deviceId === item.deviceId
    );

    let updatedCart;
    if (existedItem) {
      updatedCart = [...cart];
      const index = cart.indexOf(existedItem);
      existedItem.quantity++;
      updatedCart[index] = existedItem;
    } else {
      updatedCart = [...cart, item];
    }

    setCart(updatedCart);
  };

  const handleDeleteFromCart = (deletedItem) => {
    const updatedCart = cart.filter((item) => item !== deletedItem);
    setCart(updatedCart);
  };

  const handleEmptyCart = () => setCart([]);

  return (
    <AppContext.Provider
      value={{
        cart: {
          data: cart,
          handler: {
            addToCart: handleAddToCart,
            deleteFromCart: handleDeleteFromCart,
            emptyCart: handleEmptyCart,
          },
        },
      }}
    >
      <Container>
        <Header />
        <Content>
          <SideBar />

          <MainView>
            <Switch>
              <Route
                path="/products/:category/:id"
                component={ProductDetailsView}
              ></Route>
              <Route
                path="/products/:category"
                render={(props) => <ProductsViewFC {...props} />}
              ></Route>
              <Route path="/payments/success" component={SuccessView}></Route>
              <Route path="/payments" component={PaymentView}></Route>
              <Route path="/NotFound" component={NotFound}></Route>
              <Route exact path="/" component={Home} />
              <Redirect to="/NotFound"></Redirect>
            </Switch>
          </MainView>
        </Content>
      </Container>
    </AppContext.Provider>
  );
}

const Container = styled.div`
  background-color: ${colors.greyLight1};
  -webkit-box-shadow: ${defaultStyles.shadowDark};
  box-shadow: ${defaultStyles.shadowDark};
  height: 100vh;
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

const MainView = styled.main`
  height: 90vh;
  overflow-y: scroll;
  width: 100%;
  padding: 2%;
`;

export default App;
