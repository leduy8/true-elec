import React, { Component } from "react";

import {
  IntroImages,
  IntroImage,
  IntroImageContainer,
  ImageBulletContainer,
  ImageBullet,
  ImageBulletActive,
  ProductContentContainer,
  ProductContentTitle,
  ProductContentSpecification,
  SpecificationTitle,
  SpecificationItem,
  SpecificationPrice,
} from "./components/productDetails";

import { SectionLine, Button } from "./components/common";

class ProductDetailsView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <IntroImages>
          <IntroImageContainer>
            <IntroImage src="img/sample-laptop.png" alt="Introductory" />
          </IntroImageContainer>
          <ImageBulletContainer>
            <ImageBulletActive></ImageBulletActive>
            <ImageBullet></ImageBullet>
            <ImageBullet></ImageBullet>
            <ImageBullet></ImageBullet>
          </ImageBulletContainer>
        </IntroImages>
        <SectionLine></SectionLine>
        <ProductContentContainer>
          <ProductContentTitle>
            Laptop gaming MSI CL69 - AMD Ryzen5 3550H 521GB
          </ProductContentTitle>
          <ProductContentSpecification>
            <SpecificationTitle>Thông số sản phẩm</SpecificationTitle>
            <SpecificationItem>CPU: AMD Ryzen5 3550H</SpecificationItem>
            <SpecificationItem>RAM: 8GB</SpecificationItem>
            <SpecificationItem>Ổ cứng: 512GB SSD</SpecificationItem>
            <SpecificationItem>VGA: NVIDIA GTX1650 4GB</SpecificationItem>
            <SpecificationItem>Màn hình: 15.6inch FHD 120Hz</SpecificationItem>
            <SpecificationItem>HĐH: Windows 10</SpecificationItem>
            <SpecificationItem>Màu: Xám</SpecificationItem>
            <SpecificationPrice>Giá: 32.590.000đ</SpecificationPrice>
          </ProductContentSpecification>
          <Button>Thêm vào giỏ hàng</Button>
        </ProductContentContainer>
      </React.Fragment>
    );
  }
}

export default ProductDetailsView;
