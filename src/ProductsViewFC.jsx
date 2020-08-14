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
  NotFoundProduct,
} from "./components/products";

const ProductsViewFC = ({ match }) => {
  const getViewTitle = () => {
    return stringManipulation.reformatString(
      stringManipulation.removePlural(match.params.category)
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

  const handleSortPrice = (data, type = "desc") => {
    let sortedData = [];
    if (type === "asc") {
      sortedData = [...sortedData, ...data.sort((a, b) => a.price - b.price)];
    } else {
      sortedData = [...sortedData, ...data.sort((a, b) => b.price - a.price)];
    }
    setDevices(sortedData);
  };

  useEffect(() => {
    const { category } = match.params;
    // console.log(devices);
    // console.log(vendors);
    getDevices(stringManipulation.removePlural(category));
  }, [match]);

  const activeVendor = vendors.find((vendor) => vendor.isActive);
  // console.log(devices);

  return (
    <React.Fragment>
      {devices.length !== 0 ? (
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
                <SortSelectButton
                  name="sortBy"
                  id="sortBy"
                  onChange={(event) =>
                    handleSortPrice(devices, event.target.value)
                  }
                >
                  <SortSelectOption value="all" defaultValue>
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
                      {stringManipulation.currencyFormat(
                        device.price * 1000000
                      )}
                      đ
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
                        {stringManipulation.currencyFormat(
                          device.price * 1000000
                        )}
                        đ
                      </ProductPrice>
                    </Product>
                  ) : null
                )}
          </Products>
        </React.Fragment>
      ) : (
        <NotFoundProduct>Không có sản phẩm trong hệ thống</NotFoundProduct>
      )}
    </React.Fragment>
  );
};

export default ProductsViewFC;
