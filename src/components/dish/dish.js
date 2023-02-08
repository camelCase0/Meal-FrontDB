import React, { Component } from "react";
import DishImg from "./dish-img/dish-img";
import ProdLi from "./product-list";
import DishRecipe from "./dish-recipe";
import DishList from "../dish-list";
import MealService from "../../services/service-new";

import "./dish.css";
import Spinner from "../spiner";

export default class Dish extends Component {
  mealService = new MealService();
  state = {
    data: null,
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }
    this.mealService.getMealById(itemId).then((data) => {
      console.log(data);
      this.setState({ data });
    });
  }
  render() {
    const { data } = this.state;
    if (!data) return <Spinner />;
    const { meal_name, meal_image, receipt, receipts } = data;
    return (
      <div className="main-dish">
        <div className="dish">
          <div className="dish-name">
            <h3>{meal_name}</h3>
          </div>
          <div className="dish-content">
            <DishImg imgUrl={meal_image} />
            <ProdLi products={receipts} />
          </div>
          <DishRecipe receipt={receipt} />
          <h3 className="try-it">Also try it:</h3>
          <div className="dish-try-it">
            <DishList num={3} />
          </div>
        </div>
        <div className="background-dish"></div>
      </div>
    );
  }
}
