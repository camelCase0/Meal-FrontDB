import React, { Component } from "react";
import DishImg from "./dish-img/dish-img";
import ProdLi from "./product-list";
import DishRecipe from "./dish-recipe";
import DishList from "../dish-list";
import MealService from "../../services/service-new";

import "./dish.css";
import Spinner from "../spiner";
import { withData } from "../hoc-helpers";
import withMealService from "../hoc-helpers/with-meal-service";
import { useParams } from "react-router-dom";
import DishInfo from "./dish-info";

class Dish extends Component {
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
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    if (!data) return <Spinner />;

    return (
      <div className="main-dish">
        <div className="dish">
          <DishInfo data={data} />
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

const mapMethodsToProps = (mealService) => {
  return { getData: mealService.getMealById };
};
export default withMealService(mapMethodsToProps)(Dish);
