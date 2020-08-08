import React, { useContext, useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import stringManipulation from "./utils/stringManipulation";

import {
  MainViewPayment,
  PaymentCart,
  PaymentItem,
  PaymentProduct,
  ProductImage,
  Increment,
  IncrementButtonLeft,
  IncrementButtonRight,
  IncrementLabel,
  ProductPrice,
  PaymentInfomation,
  InfomationTitle,
  PaymentDelete,
  DeleteIcon,
  PaymentCheckout,
  PaymentCheckoutContent,
  PaymentForm,
  Form,
  FormContent,
  FormLeft,
  FormLeftTitle,
  FormLeftInput,
  CreditCard,
  CreditCardInfo,
  FormLabel,
  FormInput,
  FormInputNumber,
  FormRightInput,
  FormRightTitle,
  FormRight,
  FormSubmit,
} from "./components/payments";
import AppContext from "./context/AppContext";
import { Button, SectionLine } from "./components/common";
import deviceServices from "./services/deviceServices";
import config from "./config.json";
import orderServices from "./services/orderServices";
import { Redirect } from "react-router-dom";

const validationSchema = Yup.object().shape({
  customerName: Yup.string().required().label("Customer's name"),
  address: Yup.string().required().label("Address"),
  phoneNumber: Yup.string().min(10).max(10).required().label("Phone Number"),
  email: Yup.string().required().email().label("Email"),
});

function PaymentView({ match, history }) {
  const [itemsInCart, setItemsInCart] = useState([]);
  const { cart } = useContext(AppContext);

  const getDevices = async () => {
    const items = [];
    for (const item of cart.data) {
      const { data } = await deviceServices.getById(item.deviceId);
      data.cartInfo = item;
      items.push(data);
    }

    setItemsInCart(items);
  };

  useEffect(() => {
    getDevices();
  }, [cart]);

  const getCheckoutContent = (itemsInCart) => {
    let sum = 0;
    if (itemsInCart.length === 0)
      return "Bạn chưa thêm sản phẩm nào vào giỏ hàng.";

    itemsInCart.forEach((item) => {
      sum += item.price * item.cartInfo.quantity;
    });
    return `Tổng tiền: ${stringManipulation.currencyFormat(sum * 1000000)}đ`;
  };

  const handleIncrementButton = ({ target }, index) => {
    const items = [...itemsInCart];
    if (target.value === "+") {
      items[index].cartInfo.quantity += 1;
    } else {
      if (items[index].cartInfo.quantity > 1)
        items[index].cartInfo.quantity -= 1;
    }
    setItemsInCart(items);
  };

  const handleSubmit = async (values, { resetForm }) => {
    if (cart.data.length === 0)
      return toast.error("Please add at least one item to cart before payment");

    try {
      const preparedData = {
        devices: cart.data,
        ...values,
      };

      console.log(preparedData);

      await orderServices.post(preparedData);
      cart.handler.emptyCart();
      history.push("/payments/success");
    } catch (error) {
      toast.error("An unexpected error has occurred");
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <h1>Thanh toán</h1>
      <MainViewPayment>
        <PaymentCart>
          {itemsInCart.map((item, index) => (
            <PaymentItem key={index}>
              <PaymentProduct>
                <ProductImage src={config.hostUrl + item.image.url} alt="" />
                <Increment
                  className="increment"
                  onClick={(event) => handleIncrementButton(event, index)}
                >
                  <IncrementButtonLeft
                    type="button"
                    value="-"
                    name="quantity"
                  />
                  <IncrementLabel htmlFor="quantity">
                    {item.cartInfo.quantity}
                  </IncrementLabel>
                  <IncrementButtonRight
                    type="button"
                    value="+"
                    name="quantity"
                  />
                </Increment>
                <ProductPrice>{`${stringManipulation.currencyFormat(
                  item.price * 1000000 * item.cartInfo.quantity
                )}đ`}</ProductPrice>
              </PaymentProduct>
              <PaymentInfomation>
                <InfomationTitle>{item.name}</InfomationTitle>
              </PaymentInfomation>
              <PaymentDelete>
                <DeleteIcon
                  onClick={() => cart.handler.deleteFromCart(item.cartInfo)}
                />
              </PaymentDelete>
            </PaymentItem>
          ))}
          <SectionLine />
          <PaymentCheckout>
            <PaymentCheckoutContent>
              {getCheckoutContent(itemsInCart)}
            </PaymentCheckoutContent>
          </PaymentCheckout>
        </PaymentCart>
        <SectionLine />
        <PaymentForm>
          <Formik
            initialValues={{
              customerName: "",
              address: "",
              phoneNumber: "",
              email: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <FormContent>
                  <FormLeft>
                    <FormLeftTitle>Thông tin khách hàng</FormLeftTitle>
                    <FormLeftInput>
                      <FormLabel htmlFor="name">Tên: </FormLabel>
                      <FormInput
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={handleChange("customerName")}
                      />
                    </FormLeftInput>
                    <FormLeftInput>
                      <FormLabel htmlFor="phoneNumber">SĐT: </FormLabel>
                      <FormInputNumber
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        onChange={handleChange("phoneNumber")}
                      />
                    </FormLeftInput>
                    <FormLeftInput>
                      <FormLabel htmlFor="email">Email: </FormLabel>
                      <FormInput
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handleChange("email")}
                      />
                    </FormLeftInput>
                    <FormLeftInput>
                      <FormLabel htmlFor="address">Địa chỉ: </FormLabel>
                      <FormInput
                        type="text"
                        id="address"
                        name="address"
                        required
                        onChange={handleChange("address")}
                      />
                    </FormLeftInput>
                  </FormLeft>
                  <FormRight>
                    <FormRightTitle>Phương thức thanh toán</FormRightTitle>
                    <FormRightInput>
                      <FormInput type="radio" name="pay" id="cash" required />
                      <FormLabel htmlFor="cash">Thanh toán COD:</FormLabel>
                    </FormRightInput>
                    <FormRightInput>
                      <CreditCard
                        type="radio"
                        name="pay"
                        id="credit-card"
                        required
                      />
                      <FormLabel htmlFor="credit-card">
                        Thanh toán thẻ tín dụng:
                      </FormLabel>
                      <CreditCardInfo id="credit-card__info">
                        <FormRightInput>
                          <FormLabel htmlFor="credit-name">
                            Chủ tài khoản:
                          </FormLabel>
                          <FormInput
                            type="text"
                            id="credit-name"
                            name="credit-name"
                          />
                        </FormRightInput>
                        <FormRightInput>
                          <FormLabel htmlFor="credit-number">
                            Số tài khoản:
                          </FormLabel>
                          <FormInputNumber
                            type="number"
                            id="credit-number"
                            name="credit-number"
                          />
                        </FormRightInput>
                      </CreditCardInfo>
                    </FormRightInput>
                  </FormRight>
                </FormContent>
                <FormSubmit>
                  <Button type="submit">Thanh toán ngay</Button>
                </FormSubmit>
              </Form>
            )}
          </Formik>
        </PaymentForm>
      </MainViewPayment>
    </React.Fragment>
  );
}

export default PaymentView;
