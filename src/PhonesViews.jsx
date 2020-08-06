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

import phoneServices from "./services/phoneServices";

class PhonesView extends Component {
  state = {
    phones: [],
  };

  async getPhones() {
    const phones = await phoneServices.get();
    this.setState({ phones });
  }

  componentDidMount() {
    this.getPhones();
  }

  render() {
    console.log(this.state.phones);
    return (
      <React.Fragment>
        <h1>Phone</h1>
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
          {this.state.phones.data &&
            this.state.phones.data.map((phone) => (
              <Product to="/products/phones/:id" key={phone.id}>
                <ProductImage src={productImg} alt="Sample phone" />
                <ProductLine></ProductLine>
                <ProductTitle>{phone.name}</ProductTitle>
                <ProductPrice>{phone.price * 1000000}đ</ProductPrice>
              </Product>
            ))}
        </Products>
      </React.Fragment>
    );
  }
}

export default PhonesView;
