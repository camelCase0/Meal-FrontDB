import React, { Component } from "react";
import Dishes from "../dishes/dishes";
import Dish from "../dish/dish";
import Header from "../header";
import Main from "../main";
import ScrollToTop from "../scrol-to-top";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ErrorBoundry from "../error-boundry/error-boundry";
import MyProd from "../my-product/my-product";
import Footer from "../footer/footer";
import "./app.css";

export default class App extends Component {
  // mealService = new MealService();
  state = {
    search: "",
  };
  onSearchChange = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <ErrorBoundry>
        <BrowserRouter>
          {/* <MealServiceProvider value={this.mealService}> */}
          <div className="app">
            <Header searchItems={this.onSearchChange} />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route
                  exact
                  path="/dishes"
                  element={<Dishes search={search} />}
                />
                <Route path="/fridge" element={<MyProd />} />
                <Route path="/dishes/:id" element={<DishWraper />} />
              </Routes>
            </ScrollToTop>
            <Footer />
          </div>
          {/* </MealServiceProvider> */}
        </BrowserRouter>
      </ErrorBoundry>
    );
  }
}

const DishWraper = () => {
  const { id } = useParams();
  return <Dish itemId={id} />;
};
