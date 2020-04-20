import React from 'react';
import classes from './Layout.module.css';

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>
      <BurgerBuilder />
    </main>
  </React.Fragment>
);

export default Layout;
