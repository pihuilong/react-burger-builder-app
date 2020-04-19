import React from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      {igKey}: {props.ingredients[igKey]}
    </li>
  ));
  return (
    <React.Fragment>
      <h2>Your Order</h2>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
  <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
