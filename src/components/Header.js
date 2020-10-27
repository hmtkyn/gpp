import React from 'react';
import iconAccount from './../icons/account_circle-24px.svg';
import './Header.css';

function Header({ name }) {
  return (
    <div id="header">
      <div className="total-time">Total time = 00:00</div>
      <div className="account">
        <img src={iconAccount} alt="Account Icon" />
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Header;
