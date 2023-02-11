import ProductList from "../product-item-list/product-list";
import React, { Component } from "react";
import MapProd from "./map-product/map-product";
import MyProdFilter from "./my-product-filter";
import "./my-product.css";

class MyProd extends Component {
  state = {
    filter: "Any",
  };
  onSetFilter = (filter) => {
    this.setState({ filter });
  };
  onUpdateProduct = (e, item) => {
    const {
      ingredient_id,
      name,
      measure,
      ingredient_image,
      expiry_date,
      category,
    } = item;

    const data = {
      name: name,
      image: ingredient_image,
      category: category,
      stored_amount: e.target.amount.value,
      measure: measure,
      expiry_date: expiry_date,
    };
    // putIngredient(ingredient_id, data);
    e.preventDefault();
  };

  render() {
    const { filter } = this.state;
    return (
      <div className="my-product-div">
        <div className="my-product-div-img-text">
          <img
            className="my-product-img"
            src="https://cutt.ly/z3uXXsZ"
            alt="My Product"
          ></img>
          <h1 className="my-product-text">Product</h1>
        </div>
        <div className="filter-product">
          <MyProdFilter onSetFilter={this.onSetFilter} />
        </div>
        <div className="my-product-list">
          <ProductList filter={filter} />
        </div>
        <MapProd />
      </div>
    );
  }
}
export default MyProd;
