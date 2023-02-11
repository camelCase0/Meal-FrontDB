import ProductList from "../product-item-list/product-list";
import React, { Component } from "react";
import MapProd from "./map-product/map-product";
import MyProdFilter from "./my-product-filter";
import "./my-product.css";
import withMealService from "../hoc-helpers/with-meal-service";

class MyProd extends Component {
  state = {
    filter: "Any",
  };
  onSetFilter = (filter) => {
    this.setState({ filter });
  };
  onUpdateProduct = (e, item) => {
    item.stored_amount = e.target.amount.value;
    this.props.putIngredient(item.ingredient_id, item);
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
          <ProductList filter={filter} onUpdateProduct={this.onUpdateProduct} />
        </div>
        <MapProd />
      </div>
    );
  }
}
const mapMethodsToProps = (mealService) => {
  return { putIngredient: mealService.putIngredient };
};
export default withMealService(mapMethodsToProps)(MyProd);
