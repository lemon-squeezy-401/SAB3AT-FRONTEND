import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import './signin.css';

function SignIn() {
  const authSettings = useContext(AuthContext);
  /*==================Login===================== */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    authSettings.login(email, password);
  };
  /*==================Login===================== */
  return (
    <>
      <div id="login-box">
        <div class="left-signin">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={handleEmail}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlePassword}
            />

            <input type="submit" name="signup_submit" value="Sign me In" />
          </form>
        </div>

        <div class="right">
          <span class="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
      </div>
    </>
  );
}

export default SignIn;
