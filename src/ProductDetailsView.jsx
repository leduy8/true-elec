import React, { Component } from "react";

import {
  IntroImages,
  IntroImage,
  IntroImageContainer,
  ImageBulletContainer,
  ImageBullet,
  ProductContentContainer,
  ProductContentTitle,
  ProductContentSpecification,
  SpecificationTitle,
  SpecificationItem,
  SpecificationPrice,
} from "./components/productDetails";
import { SectionLine, Button } from "./components/common";
import laptopServices from "./services/laptopServices";
import config from "./config.json";

class ProductDetailsView extends Component {
  state = {
    deviceDetails: null,
  };

  getDeviceById = async () => {
    const { id } = this.props.match.params;
    const { data } = await laptopServices.getById(id);
    this.setState({ deviceDetails: data });
  };

  componentDidMount() {
    this.getDeviceById();
  }

  render() {
    const { deviceDetails } = this.state;

    if (!deviceDetails) return null;

    return (
      <React.Fragment>
        <IntroImages>
          <IntroImageContainer>
            <IntroImage
              src={config.hostUrl + deviceDetails.image.url}
              alt="Introductory"
            />
          </IntroImageContainer>
          {/* <ImageBulletContainer>
            <ImageBullet isActive={true}></ImageBullet>
            <ImageBullet isActive={false}></ImageBullet>
            <ImageBullet isActive={false}></ImageBullet>
            <ImageBullet isActive={false}></ImageBullet>
          </ImageBulletContainer> */}
        </IntroImages>
        <SectionLine></SectionLine>
        <ProductContentContainer>
          <ProductContentTitle>{deviceDetails.name}</ProductContentTitle>
          <ProductContentSpecification>
            <SpecificationTitle>Thông số sản phẩm</SpecificationTitle>
            {deviceDetails.details.map((detail, index) => (
              <SpecificationItem key={index}>
                {detail.key + ": " + detail.value}
              </SpecificationItem>
            ))}
            <SpecificationPrice>
              Giá: {deviceDetails.price * 1000000}đ
            </SpecificationPrice>
          </ProductContentSpecification>
          <Button>Thêm vào giỏ hàng</Button>
        </ProductContentContainer>
      </React.Fragment>
    );
  }
}

export default ProductDetailsView;
