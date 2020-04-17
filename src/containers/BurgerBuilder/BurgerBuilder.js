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
      salad: 1,
      bacon: 1,
      meat: 1,
      cheese: 1,
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

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
