import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) =>
    [...Array(props.ingredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    )),
  );
  // eslint-disable-next-line no-console
  console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
