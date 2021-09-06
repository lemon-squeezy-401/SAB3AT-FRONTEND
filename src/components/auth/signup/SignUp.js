import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import './signup.css';

function SignUp() {
  const authSettings = useContext(AuthContext);
  /*==================Signup===================== */
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }
  const handleRole = (event) => {
    setRole(event.target.value);
    // console.log(event.target.value);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    authSettings.signup(username, password, email, role);
  };
  /*==================Signup===================== */
  return (
    <>
      <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleUsername}
            />
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

            <select onChange={handleRole} className="login-input" name="" id="">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <input type="submit" name="signup_submit" value="Sign me up" />
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

export default SignUp;
