import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal extends Component {
  componentWillUpdate() {
    console.log('[Modal] will be updated')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.show !== nextProps.show;
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
