import React, { Component } from "react";
import productImg from "./img/sample-laptop.png";

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

import { Button, SectionLine } from "./components/common";

class PaymentView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Thanh toán</h1>
        <MainViewPayment>
          <PaymentCart>
            <PaymentItem>
              <PaymentProduct>
                <ProductImage src={productImg} alt="" />
                <Increment class="increment">
                  <IncrementButtonLeft type="button" value="-" />
                  <IncrementLabel>1</IncrementLabel>
                  <IncrementButtonRight type="button" value="+" />
                </Increment>
                <ProductPrice>31.590.000đ</ProductPrice>
              </PaymentProduct>
              <PaymentInfomation>
                <InfomationTitle>
                  Laptop gaming Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Aperiam, fuga!
                </InfomationTitle>
              </PaymentInfomation>
              <PaymentDelete>
                <DeleteIcon />
              </PaymentDelete>
            </PaymentItem>
            <SectionLine />
            <PaymentCheckout>
              <PaymentCheckoutContent>
                Tổng tiền: 1.500.000đ
              </PaymentCheckoutContent>
            </PaymentCheckout>
          </PaymentCart>
          <SectionLine />
          <PaymentForm>
            <Form action="">
              <FormContent>
                <FormLeft>
                  <FormLeftTitle>Thông tin khách hàng</FormLeftTitle>
                  <FormLeftInput>
                    <FormLabel htmlFor="name">Tên: </FormLabel>
                    <FormInput type="text" id="name" name="name" />
                  </FormLeftInput>
                  <FormLeftInput>
                    <FormLabel htmlFor="phoneNumber">SĐT: </FormLabel>
                    <FormInputNumber
                      type="number"
                      id="phoneNumber"
                      name="phoneNumber"
                    />
                  </FormLeftInput>
                  <FormLeftInput>
                    <FormLabel htmlFor="email">Email: </FormLabel>
                    <FormInput type="email" id="email" name="email" />
                  </FormLeftInput>
                  <FormLeftInput>
                    <FormLabel htmlFor="address">Địa chỉ: </FormLabel>
                    <FormInput type="text" id="address" name="address" />
                  </FormLeftInput>
                  <FormLeftInput>
                    <FormLabel htmlFor="note">Ghi chú: </FormLabel>
                    <FormInput type="text" id="note" name="note" />
                  </FormLeftInput>
                </FormLeft>
                <FormRight>
                  <FormRightTitle>Phương thức thanh toán</FormRightTitle>
                  <FormRightInput>
                    <FormInput type="radio" name="pay" id="cash" />
                    <FormLabel htmlFor="cash">Thanh toán COD:</FormLabel>
                  </FormRightInput>
                  <FormRightInput>
                    <CreditCard type="radio" name="pay" id="credit-card" />
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
          </PaymentForm>
        </MainViewPayment>
      </React.Fragment>
    );
  }
}

export default PaymentView;
