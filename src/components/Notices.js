import React from 'react';
import iconWarning from './../icons/icon-warning.svg';
import iconWarningClose from './../icons/icon-warning-close.svg';
import './Notices.css'

function Notices() {
  return (
    <div className="notice notice-warning">
      <div className="notice-header">
        <img src={iconWarning} alt="icon" />
        <h3>Uyarı</h3>
        <img src={iconWarningClose} alt="icon" />
      </div>
      <p>Lütfen bu uygulamayı çözünürlüğü minimum <b>600x600</b> piksel olan cihazlarda kullanınız.</p>
    </div>
  )
}
export default Notices;