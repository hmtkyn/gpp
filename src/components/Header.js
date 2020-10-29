import React from 'react';
import iconAccount from './../icons/account_circle-24px.svg';
import './Header.css';

function Header({ name, hour, minute, second }) {

  return (
    <div id="header">
      <div className="total-time">Total time = {hour}:{minute}:{second}</div>
      <div className="account">
        <img src={iconAccount} alt="Account Icon" />
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Header;
