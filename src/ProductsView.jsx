import React, { Component } from "react";

import productImg from "./img/sample-laptop.png";
import {
  MainViewFilter,
  FilterType,
  FilterSort,
  TypeItem,
  TypeItemActive,
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

const laptops = [
  {
    id: 1,
    image: productImg,
    name: "Laptop MSI gaming",
    price: 3250,
  },
  {
    id: 2,
    image: productImg,
    name: "Laptop MSI gaming",
    price: 3250,
  },
  {
    id: 3,
    image: productImg,
    name: "Laptop MSI gaming",
    price: 3250,
  },
  {
    id: 4,
    image: productImg,
    name: "Laptop MSI gaming",
    price: 3250,
  },
];

class ProductsView extends Component {
  state = {
    laptops: [],
  };

  async getLaptops() {
    const laptops = await laptopServices.get();
    this.setState({ laptops });
  }

  componentDidMount() {
    this.getLaptops();
  }

  render() {
    console.log(this.state.laptops.data);
    return (
      <React.Fragment>
        <h1>Laptop</h1>
        <MainViewFilter>
          <FilterType>
            <TypeItemActive>All</TypeItemActive>
            <TypeItem>Dell</TypeItem>
            <TypeItem>HP</TypeItem>
            <TypeItem>Acer</TypeItem>
            <TypeItem>Asus</TypeItem>
          </FilterType>
          <FilterSort>
            <SortSelect>
              <SortSelectLabel htmlFor="sortBy"></SortSelectLabel>
              <SortSelectButton name="sortBy" id="sortBy">
                <SortSelectOption value="all" selected>
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
                <SortSelectOption value="all" selected>
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
                <SortSelectOption value="all" selected>
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
          {this.state.laptops.data &&
            this.state.laptops.data.map((laptop) => (
              <Product key={laptop.id}>
                <ProductImage src={productImg} alt="Sample laptop" />
                <ProductLine></ProductLine>
                <ProductTitle>{laptop.name}</ProductTitle>
                <ProductPrice>{laptop.price * 1000000}đ</ProductPrice>
              </Product>
            ))}
        </Products>
      </React.Fragment>
    );
  }
}

export default ProductsView;
