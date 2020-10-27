import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from './../context/Users';
import Notices from './../components/Notices';
import './Login.css';

function Login() {
  const { user, setUser } = useContext(UsersContext);
  const [cName, setCname] = useState('');
  const [cCountry, setCcountry] = useState('');

  user.name = cName;
  user.country = cCountry;
  const onSubmit = (e) => {
    e.preventDefault();

    setUser(user);
  }

  return (
    <div id="login">
      <Notices />
      <div className="login-form">
        <h1>GPP Application</h1>
        <h3>Welcome</h3>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <label htmlFor="#login-name">Name</label>
            <input required type="text" id="login-name" defaultValue="" onChange={(e) => setCname(e.target.value)} placeholder="Name" />
          </div>
          <div className="form-row">
            <label htmlFor="#login-country">Country</label>
            <select required id="login-country" onChange={(e) => setCcountry(e.target.value)}>
              <option defaultValue="0">Select a Country</option>
              <option defaultValue="Turkey">Turkey</option>
              <option defaultValue="Canada">Canada</option>
              <option defaultValue="BAE">BAE</option>
              <option defaultValue="USA">USA</option>
            </select>
          </div>
          {cName.length > 0 && cCountry.length > 0 ?
            <div className="form-row button">
              <Link to="/questions">
                <button id="login-button">Sign in</button>
              </Link>
            </div>
            :
            <div className="form-row button disable">
              <Link to="/questions">
                <button id="login-button" disabled>Sign in</button>
              </Link>
            </div>
          }
        </form>
      </div>
    </div>
  );
}

export default Login;
