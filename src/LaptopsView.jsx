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
import laptopServices from "./services/laptopServices";
import stringManipulation from "./utils/stringManipulation";
import config from "./config.json";

class ProductsView extends Component {
  state = {
    laptops: [],
    vendors: [
      {
        name: "All",
        isActive: true,
      },
    ],
  };

  async getLaptops() {
    const { data } = await laptopServices.get();
    const vendors = [
      ...this.state.vendors,
      ..._.uniq(data, (laptop) => laptop.vendor).map((laptop) => ({
        name: laptop.vendor,
        isActive: false,
      })),
    ];
    this.setState({ laptops: data, vendors });
  }

  componentDidMount() {
    this.getLaptops();
  }

  handleSortType = (activeVendor) => {
    const updatedVendors = [...this.state.vendors].map((vendor) => ({
      ...vendor,
      isActive: vendor.name === activeVendor.name,
    }));
    this.setState({ vendors: updatedVendors });
  };

  render() {
    const { vendors, laptops } = this.state;
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
            ? laptops.map((laptop) => (
                <Product
                  to={`/products/laptops/${laptop._id}`}
                  key={laptop._id}
                >
                  <ProductImage
                    src={config.hostUrl + laptop.image.url}
                    alt="Sample laptop"
                  />
                  <ProductLine></ProductLine>
                  <ProductTitle>
                    {stringManipulation.shortenWord(laptop.name)}
                  </ProductTitle>
                  <ProductPrice>
                    {stringManipulation.currencyFormat(laptop.price * 1000000)}đ
                  </ProductPrice>
                </Product>
              ))
            : laptops.map((laptop) =>
                laptop.vendor === activeVendor.name ? (
                  <Product
                    to={`/products/laptops/${laptop._id}`}
                    key={laptop._id}
                  >
                    <ProductImage
                      src={config.hostUrl + laptop.image.url}
                      alt="Sample laptop"
                    />
                    <ProductLine></ProductLine>
                    <ProductTitle>
                      {stringManipulation.shortenWord(laptop.name)}
                    </ProductTitle>
                    <ProductPrice>
                      {stringManipulation.currencyFormat(
                        laptop.price * 1000000
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
