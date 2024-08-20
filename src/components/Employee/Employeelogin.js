import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './Employeelogin.css';
import googleLogo from '../../assets/icons8-google-logo-48.png';
import yourLogo from '../../assets/image (2).png';

const EmployeeLoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log('Custom Login Success:', response);
    navigate('/employee'); 
  };

  const handleLoginFailure = (response) => {
    console.log('Custom Login Failed:', response);
  };

  return (
    <div className="custom-login-page">
      <div className="custom-login-container">
        <form className="custom-login-form">
          <div className="custom-form-logo">
            <img src={yourLogo} alt="Your Logo" className="custom-your-logo" />
          </div>
          <h1 className='log-in'>Login</h1> 
          <div className="custom-form-group">
            <label className='email-emp' htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="custom-form-group">
            <label className='email-emp'htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="button" className="custom-forgot-password-button">Forgot password?</button>
          <button type="submit" className="custom-sign-in-button">Login</button>
          <div className="custom-button-group">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="custom-google">
                  <img src={googleLogo} alt="Google Logo" className="custom-google-logo" />
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

export default EmployeeLoginPage;
