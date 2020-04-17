import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  meat: 1.2,
  cheese: 0.4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = this.state.ingredients[type] + 1;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
  };

  removeIngredientHandler = (type) => {
    const updatedIngredient = { ...this.state.ingredients };
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    updatedIngredient[type] = oldCount - 1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
  };

  render() {
    const btnDisabledInfo = {...this.state.ingredients};
    // eslint-disable-next-line guard-for-in
    for(const key in btnDisabledInfo) {
      btnDisabledInfo[key] = btnDisabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={btnDisabledInfo}
          price={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
