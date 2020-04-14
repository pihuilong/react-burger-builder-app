import React from 'react';
import classes from './Layout.module.css';

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const Layout = (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      <BurgerBuilder />
    </main>
  </React.Fragment>
);

export default Layout;
