import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../../img/header-logo.png';

function Logo() {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Bosa Noga" />
    </Link>
  );
}

export default Logo;
