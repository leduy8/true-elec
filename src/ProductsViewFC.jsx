import React, { useState, useEffect } from "react";
import _ from "lodash";
import deviceServices from "./services/deviceServices";
import stringManipulation from "./utils/stringManipulation";
import config from "./config.json";

import {
  MainViewFilter,
  FilterType,
  FilterSort,
  TypeItem,
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

const ProductsViewFC = ({ match }) => {
  const getViewTitle = () => {
    return stringManipulation.reformatString(
      stringManipulation.removeS(match.params.category)
    );
  };

  const [devices, setDevices] = useState([]);
  const [vendors, setVendors] = useState([
    {
      name: "All",
      isActive: true,
    },
  ]);

  const getDevices = async (category) => {
    const { data } = await deviceServices.get(category);
    const formattedData = data.map((item) => ({
      ...item,
      vendor: stringManipulation.formatType(item.vendor),
    }));

    const vendors = [
      {
        name: "All",
        isActive: true,
      },
      ..._.uniqBy(formattedData, (device) => device.vendor).map((device) => ({
        name: device.vendor,
        isActive: false,
      })),
    ];

    setDevices(formattedData);
    setVendors(vendors);
  };

  const handleSortType = (activeVendor) => {
    const updatedVendors = [...vendors].map((vendor) => ({
      ...vendor,
      isActive: vendor.name === activeVendor.name,
    }));
    setVendors(updatedVendors);
  };

  useEffect(() => {
    const { category } = match.params;
    getDevices(category.slice(0, category.length - 1));
  }, [match]);

  const activeVendor = vendors.find((vendor) => vendor.isActive);
  // console.log(devices);

  return (
    <React.Fragment>
      <h1>{getViewTitle()}</h1>
      <MainViewFilter>
        <FilterType>
          {vendors &&
            vendors.map((vendor) => (
              <TypeItem
                key={vendor.name}
                isActive={vendor.isActive}
                type={vendor.name}
                onClick={() => handleSortType(vendor)}
              />
            ))}
        </FilterType>
        <FilterSort>
          <SortSelect>
            <SortSelectLabel htmlFor="sortBy"></SortSelectLabel>
            <SortSelectButton name="sortBy" id="sortBy">
              <SortSelectOption value="all" defaultValue>
                Giá tiền
              </SortSelectOption>
              <SortSelectOption value="desc">Giá cao đến thấp</SortSelectOption>
              <SortSelectOption value="asc">Giá thấp đến cao</SortSelectOption>
            </SortSelectButton>
          </SortSelect>
          {/* <SortSelect>
            <SortSelectLabel htmlFor="sortBy"></SortSelectLabel>
            <SortSelectButton name="sortBy" id="sortBy">
              <SortSelectOption value="all" defaultValue>
                Giá tiền
              </SortSelectOption>
              <SortSelectOption value="desc">Giá cao đến thấp</SortSelectOption>
              <SortSelectOption value="asc">Giá thấp đến cao</SortSelectOption>
            </SortSelectButton>
          </SortSelect> */}
        </FilterSort>
      </MainViewFilter>
      <Products>
        {activeVendor.name === "All"
          ? devices.map((device) => (
              <Product
                to={`/products/${match.params.category}/${device._id}`}
                key={device._id}
              >
                <ProductImage
                  src={config.hostUrl + device.image.url}
                  alt="Sample laptop"
                />
                <ProductLine />
                <ProductTitle>
                  {stringManipulation.shortenWord(device.name)}
                </ProductTitle>
                <ProductPrice>
                  {stringManipulation.currencyFormat(device.price * 1000000)}đ
                </ProductPrice>
              </Product>
            ))
          : devices.map((device) =>
              device.vendor === activeVendor.name ? (
                <Product
                  to={`/products/${match.params.category}/${device._id}`}
                  key={device._id}
                >
                  <ProductImage
                    src={config.hostUrl + device.image.url}
                    alt="Sample laptop"
                  />
                  <ProductLine />
                  <ProductTitle>
                    {stringManipulation.shortenWord(device.name)}
                  </ProductTitle>
                  <ProductPrice>
                    {stringManipulation.currencyFormat(device.price * 1000000)}đ
                  </ProductPrice>
                </Product>
              ) : null
            )}
      </Products>
    </React.Fragment>
  );
};

export default ProductsViewFC;
