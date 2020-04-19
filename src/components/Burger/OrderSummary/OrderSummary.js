import React from 'react';

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
      <p>Continue to checkout?</p>
      <button>CANCEL</button>
      <button>CONFIRM</button>
    </React.Fragment>
  );
};

export default OrderSummary;
