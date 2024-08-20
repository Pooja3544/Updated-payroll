import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './login.css';
import googleLogo from './assets/icons8-google-logo-48.png';
import yourLogo from './assets/image (2).png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    navigate('/admin.js'); 
  };

  const handleLoginFailure = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form">
          <div className="form-logo">
            <img src={yourLogo} alt="Your Logo" className="your-logo" />
          </div>
          <h1 className='login-admin'>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="button" className="forgot-password-admin">Forgot password?</button>
          <button type="submit" className="sign-in-button">Login</button>
          <div className="button-group">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="google">
                  <img src={googleLogo} alt="Google Logo" className="google-logo" />
                  Sign in with Google
                </button>
              )}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;









