import React, { Component } from "react";

import "./my-product-filter.css";

export default class MyProdFilter extends Component {
  render() {
    const arr = [
      "Any",
      "Vegetables",
      "Fruits",
      "Cereals",
      "Tubers",
      "Legumes",
      "Dairy",
      "Meat",
      "Seafoods",
      "Sweeteners",
      "Dishes",
      "Nuts",
      "Condiments",
      "Fluids",
    ];
    const { onSetFilter } = this.props;
    const res = arr.map((name) => {
      return (
        <button
          className="my-product-filter-button"
          onClick={() => onSetFilter(name)}
        >
          <p>{name}</p>
        </button>
      );
    });
    return (
      <div className="my-product-filter">
        <h3 className="my-product-filter-text">Category:</h3>
        <div className="my-product-filter-button-group">{res}</div>
      </div>
    );
  }
}
