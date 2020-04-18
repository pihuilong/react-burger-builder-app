import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchasable: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((total, el) => total + el, 0);
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = this.state.ingredients[type] + 1;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredient);
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
    this.updatePurchaseState(updatedIngredient);
  };

  render() {
    const btnDisabledInfo = {...this.state.ingredients};
    // eslint-disable-next-line guard-for-in
    for(const key in btnDisabledInfo) {
      btnDisabledInfo[key] = btnDisabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={btnDisabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
