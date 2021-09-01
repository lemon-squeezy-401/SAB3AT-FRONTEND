import React, { useEffect } from 'react';
import './login.css';

function Login() {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  });

  return (
    <div className = 'login-body'>
      <div className="login-container" id="container">
        <div className="form-container sign-up-container">
          <form className = 'login-form' action="#">
            <h1 className = 'login-h1'>Create Account</h1>
            <div className="social-container">
              {/* <a href="#dsad" className="social login-a"><i className="fab fa-facebook-f"></i></a> */}
              {/* <a href="#sdf" className="social login-a"><i className="fab fa-google-plus-g"></i></a> */}
              {/* <a href="#sd" className="social login-a"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
            {/* <span className = 'login-span'>or use your email for registration</span> */}
            <input className = 'login-input' type="text" placeholder="Name" />
            <input className = 'login-input' type="email" placeholder="Email" />
            <input className = 'login-input' type="password" placeholder="Password" />
            <select className = 'login-input' name="" id="">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button className = 'login-button'>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className = 'login-form' action="#">
            <h1 className = 'login-h1'>Sign in</h1>
            <div className="social-container">
              {/* <a href="#ds" className="social login-a"><i className="fab fa-facebook-f"></i></a> */}
              {/* <a href="#edrf" className="social login-a"><i className="fab fa-google-plus-g"></i></a> */}
              {/* <a href="#dsa" className="social login-a"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
            {/* <span className = 'login-span'>or use your account</span> */}
            <input className = 'login-input' type="email" placeholder="Email" />
            <input className = 'login-input' type="password" placeholder="Password" />
            <a className = 'login-a' href="#asd">Forgot your password?</a>
            <button className = 'login-button'>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className = 'login-h1'>Welcome Back!</h1>
              <p className = 'login-p'>To keep connected with us please login with your personal info</p>
              <button className="ghost login-button" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className = 'login-h1'>Hello, Friend!</h1>
              <p className = 'login-p'>Enter your personal details and start journey with us</p>
              <button className="ghost login-button" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


