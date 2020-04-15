import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <React.Fragment>
        <Burger />
        <div>Build control</div>
      </React.Fragment>
    );
  }
};

export default BurgerBuilder;
