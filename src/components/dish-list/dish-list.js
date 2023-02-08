import React from "react";
import MealService from "../../services/service-new";
import DishItem from "./dish-item/dish-item";
import { withData } from "../hoc-helpers";
import "./dish-list.css";
import ErrorBoundry from "../error-boundry/error-boundry";

// const canCook = ({ receipts }) => {
//   receipts.forEach((el) => {
//     if (el.stored_amount < el.amount) return false;
//   });
//   return true;
// };

const DishList = ({
  data,
  num,
  view,
  canCook = false,
  dfilter = 0,
  search = "",
}) => {
  // const num = 7; // number of elements we want to get
  const shuffledArray = data.sort(() => 0.5 - Math.random()); // shuffles array
  const resData = shuffledArray.slice(0, num);
  const elements = resData
    .filter((el) => {
      const { meal_name } = el;
      return meal_name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    })
    .filter((el) => {
      const { difficulty } = el;
      if (dfilter === 0) return true;
      return difficulty === dfilter;
    })
    .filter(({ receipts }) => {
      if (!canCook) return true;
      const flag = receipts.every((el) => {
        if (el.stored_amount < el.amount) {
          return false;
        }
        return true;
      });
      return flag;
    })
    .map((item) => {
      const { meal_id, ...itemProps } = item;
      return (
        <li key={meal_id} className="dish-main-list-item">
          <DishItem id={meal_id} {...itemProps} />
        </li>
      );
    });
  return (
    <ErrorBoundry>
      <div className="dish-main-list">
        {elements}
        {view}
      </div>
    </ErrorBoundry>
  );
};
const { getMeal } = new MealService();
export default withData(DishList, getMeal);
