import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // NOTE: This could be a functional component, doesn't have to be a class.
  componentWillUpdate() {
    console.log('[OrderSummary] will update!');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => (
        <li key={igKey}>
          {igKey}: {this.props.ingredients[igKey]}
        </li>
      ),
    );
    return (
      <React.Fragment>
        <h2>Your Order</h2>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

OrderSummary.propTypes = {
  price: PropTypes.number.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
};

export default OrderSummary;
