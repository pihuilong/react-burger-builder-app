import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

// NOTE: Temporarily set it here, will remove to state later.
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((ctl) => (
      <BuildControl
        key={ctl.label}
        added={() => props.ingredientAdded(ctl.type)}
        removed={() => props.ingredientRemoved(ctl.type)}
        label={ctl.label}
        disabled={props.disabledInfo[ctl.type]}
      />
    ))}
  </div>
);

export default BuildControls;
