import React from 'react';
import classes from './Layout.module.css';

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <main className={classes.Content}>
      <BurgerBuilder />
    </main>
  </React.Fragment>
);

export default Layout;
