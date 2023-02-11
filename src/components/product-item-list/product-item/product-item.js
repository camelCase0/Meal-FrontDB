import React from "react";

import "./product-item.css";

const ProdItem = ({ item, filter, onUpdateProduct }) => {
  const {
    name,
    stored_amount,
    measure,
    ingredient_image,
    expiry_date,
    category,
  } = item;
  const currentDate = new Date().toJSON().slice(0, 10);
  const cls = expiry_date >= currentDate ? "expiry-date" : "expiry-date red";
  if (filter !== "Any" && filter !== category) return null;

  return (
    <div className="product-item">
      <div className="product-item-text">
        <img className="product-item-img" src={ingredient_image} alt="da"></img>
        <h3 className="product-item-name">{name}</h3>
        <form onSubmit={(e) => onUpdateProduct(e, item)}>
          <input
            className="product-item-value"
            type="number"
            name="amount"
            placeholder={`${stored_amount} ${measure}`}
          ></input>
        </form>
        <span className={cls}>{expiry_date}</span>
      </div>
    </div>
  );
};

export default ProdItem;
