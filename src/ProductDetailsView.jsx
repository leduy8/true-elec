import React, { useContext, useState, useEffect } from "react";

import {
  IntroImages,
  IntroImage,
  IntroImageContainer,
  // ImageBulletContainer,
  // ImageBullet,
  ProductContentContainer,
  ProductContentTitle,
  ProductContentSpecification,
  SpecificationTitle,
  SpecificationItem,
  SpecificationPrice,
} from "./components/productDetails";
import { SectionLine, Button } from "./components/common";
import deviceServices from "./services/deviceServices";
import config from "./config.json";
import stringManipulation from "./utils/stringManipulation";
import AppContext from "./context/AppContext";

function ProductDetailsView({ match }) {
  const [deviceDetails, setDeviceDetails] = useState(null);
  const { cart } = useContext(AppContext);

  const getDeviceById = async () => {
    const { id } = match.params;
    const { data } = await deviceServices.getById(id);
    setDeviceDetails(data);
  };

  useEffect(() => {
    getDeviceById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = (event) => {
    event.preventDefault();

    cart.handler.addToCart({ deviceId: deviceDetails._id, quantity: 1 });
  };

  return (
    <>
      {deviceDetails ? (
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
                  {stringManipulation.reformatString(detail.key) +
                    ": " +
                    detail.value}
                </SpecificationItem>
              ))}
              <SpecificationPrice>
                Giá:{" "}
                {stringManipulation.currencyFormat(
                  deviceDetails.price * 1000000
                )}
                đ
              </SpecificationPrice>
            </ProductContentSpecification>
            <Button onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
          </ProductContentContainer>
        </React.Fragment>
      ) : null}
    </>
  );
}

export default ProductDetailsView;
