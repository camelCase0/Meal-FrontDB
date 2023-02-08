import React from "react";

import "./product-list.css";

const ProdLi = ({ products }) => {
  const elements = products.map(({ name, amount, measure, stored_amount }) => {
    const cls = amount >= stored_amount ? "prod-li" : "prod-li-yes";
    return (
      <li className={cls}>
        <span>
          {name} {amount} {measure}
        </span>
      </li>
    );
  });
  return (
    <div className="prod-lu-div">
      <h3>The ingredients:</h3>
      <ul className="prod-lu">{elements}</ul>
    </div>
  );
};

export default ProdLi;
