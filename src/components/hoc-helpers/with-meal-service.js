import React from "react";
import { MealServiceConsumer } from "../meal-service-context";

const withMealService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <MealServiceConsumer>
        {(mealService) => {
          const serviceProps = mapMethodsToProps(mealService);

          return <Wrapped {...props} {...serviceProps} />;
        }}
      </MealServiceConsumer>
    );
  };
};

export default withMealService;
