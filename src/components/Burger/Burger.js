import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) =>
    [...Array(props.ingredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    )),
  ).reduce((current, el) => {
    return current.concat(el);
  }, []);
  // eslint-disable-next-line no-console
  console.log(transformedIngredients);
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please choose some ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
