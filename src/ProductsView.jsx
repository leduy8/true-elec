import React, { Component } from "react";
import _ from "lodash";

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
import deviceServices from "./services/deviceServices";
import stringManipulation from "./utils/stringManipulation";
import config from "./config.json";

class ProductsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devices: [],
      vendors: [
        {
          name: "All",
          isActive: true,
        },
      ],
    };
  }

  async getDevices(category) {
    const { data } = await deviceServices.get(category);
    const vendors = [
      {
        name: "All",
        isActive: true,
      },
      ..._.uniq(data, (device) => device.vendor).map((device) => ({
        name: device.vendor,
        isActive: false,
      })),
    ];
    this.setState({ devices: data, vendors });
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    this.getDevices(category.slice(0, category.length - 1));
  }

  handleSortType = (activeVendor) => {
    const updatedVendors = [...this.state.vendors].map((vendor) => ({
      ...vendor,
      isActive: vendor.name === activeVendor.name,
    }));
    this.setState({ vendors: updatedVendors });
  };

  render() {
    const { vendors, devices } = this.state;
    const activeVendor = vendors.find((vendor) => vendor.isActive);

    return (
      <React.Fragment>
        <h1>Laptop</h1>
        <MainViewFilter>
          <FilterType>
            {vendors &&
              vendors.map((vendor) => (
                <TypeItem
                  key={vendor.name}
                  isActive={vendor.isActive}
                  type={vendor.name}
                  onClick={() => this.handleSortType(vendor)}
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
                <SortSelectOption value="desc">
                  Giá cao đến thấp
                </SortSelectOption>
                <SortSelectOption value="asc">
                  Giá thấp đến cao
                </SortSelectOption>
              </SortSelectButton>
            </SortSelect>
            <SortSelect>
              <SortSelectLabel htmlFor="sortBy"></SortSelectLabel>
              <SortSelectButton name="sortBy" id="sortBy">
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
            <SortSelect>
              <SortSelectLabel htmlFor="sortBy"></SortSelectLabel>
              <SortSelectButton name="sortBy" id="sortBy">
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
          </FilterSort>
        </MainViewFilter>
        <Products>
          {activeVendor.name === "All"
            ? devices.map((device) => (
                <Product
                  to={`/products/laptops/${device._id}`}
                  key={device._id}
                >
                  <ProductImage
                    src={config.hostUrl + device.image.url}
                    alt="Sample laptop"
                  />
                  <ProductLine></ProductLine>
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
                    to={`/products/laptops/${device._id}`}
                    key={device._id}
                  >
                    <ProductImage
                      src={config.hostUrl + device.image.url}
                      alt="Sample laptop"
                    />
                    <ProductLine></ProductLine>
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
    );
  }
}

export default ProductsView;
