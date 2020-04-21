import React, { Component } from 'react';
import classes from './Layout.module.css';

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawerHandler} />
        <main className={classes.Content}>
          <BurgerBuilder />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
