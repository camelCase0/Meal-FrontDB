import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchBar from "./search-bar";

class Header extends Component {
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
          <SearchBar searchItems={searchItems} />
        </div>
        <div className="col-0 col-md-1 col-lg-2"></div>
      </div>
    );
  }
}
export default Header;
