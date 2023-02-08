import React, { Component } from "react";

import "./dish-item-dif.css";

export default class ListDif extends Component {
  render() {
    const { compl } = this.props;

    const a = ["", "", "", "", ""];
    const arr = a.map((el, index) => {
      const clasiks = compl <= index ? "star-none" : "star";
      return <span key={index} className={clasiks}></span>;
    });

    return <div className="star-div">{arr}</div>;
  }
}
