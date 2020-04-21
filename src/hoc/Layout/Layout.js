import React, { Component } from 'react';
import classes from './Layout.module.css';

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((previousState) => ({
      showSideDrawer: !previousState.showSideDrawer,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.closeSideDrawerHandler}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
