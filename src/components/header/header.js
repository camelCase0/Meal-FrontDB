import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default class Header extends Component {
  render() {
    const { searchItems } = this.props;
    return (
      <div className="row header">
        <div className="col-0 col-md-1 col-lg-2"></div>
        <div className="col-2 col-md-2 col-lg-1">
          <button className="hrefmain">
            <Link to="/">Main</Link>
          </button>
        </div>
        <div className="col-2 col-md-2 col-lg-1">
          <button className="hrefdish">
            <Link to="/dishes">Dishes</Link>
          </button>
        </div>
        <div className="col-2 col-md-2 col-lg-1">
          <button className="hrefprod">
            <Link to="/fridge">My products</Link>
          </button>
        </div>
        <div className="col-2 col-md-1 col-lg-1">
          <button className="butadd">
            <p className="butaddp">Add Dish</p>
          </button>
        </div>
        <div className="col-4 col-md-3 col-lg-4 searchdiv">
          <form className="search">
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="search"
              placeholder="Start typing.."
              onChange={(e) => searchItems(e.target.value)}
            ></input>
          </form>
        </div>
        <div className="col-0 col-md-1 col-lg-2"></div>
      </div>
    );
  }
}
