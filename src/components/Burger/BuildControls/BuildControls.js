import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

// NOTE: Temporarily set it here, will remove to state later.
const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctl) => <BuildControl key={ctl.label} label={ctl.label} />)}
  </div>
);

export default BuildControls;
