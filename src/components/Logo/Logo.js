import React from 'react';

// NOTE: logoSrc will handle by webpack to the final path
import logoSrc from '../../assets/images/original.png';
import classes from './Logo.module.css'

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={logoSrc} alt='HiramBurger' />
  </div>
);

export default Logo;
