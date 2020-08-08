import React, { Component } from "react";
import stringManipulation from "./utils/stringManipulation";
import deviceServices from "./services/deviceServices";
import config from "./config.json";

import {
  Product,
  ProductImage,
  ProductLine,
  ProductTitle,
  ProductPrice,
} from "./components/products";

import {
  MainViewBestSeller,
  BestSellerTitle,
  BestSellerProducts,
} from "./components/home";

class Home extends Component {
  state = {
    devices: [],
  };

  async getDevices() {
    const devices = await deviceServices.get();
    this.setState({ devices });
  }

  componentDidMount() {
    this.getDevices();
  }

  render() {
    const { data: devices } = this.state.devices;
    return (
      <MainViewBestSeller>
        <BestSellerTitle>Sản phẩm bán chạy</BestSellerTitle>
        <BestSellerProducts>
          {devices &&
            devices.slice(0, 6).map((device) => (
              <Product
                to={`/products/${device.category}s/${device._id}`}
                key={device._id}
              >
                <ProductImage
                  src={config.hostUrl + device.image.url}
                  alt="Sample device"
                />
                <ProductLine></ProductLine>
                <ProductTitle>
                  {stringManipulation.shortenWord(device.name)}
                </ProductTitle>
                <ProductPrice>
                  {stringManipulation.currencyFormat(device.price * 1000000)}đ
                </ProductPrice>
              </Product>
            ))}
        </BestSellerProducts>
      </MainViewBestSeller>
    );
  }
}

export default Home;
