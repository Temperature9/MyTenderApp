// LoginPage.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/auth';
import './LoginPage.css';
import loginImage from '../../assets/login.jpg';

const LoginPage = () => {
  const { login } = useAuth();
  const [userType, setUserType] = useState('contractor');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Check if the entered credentials are for the Sugar Factory admin
      if (username === 'admin' && password === 'adminpassword') {
        // Redirect to the Sugar Factory Admin Page
        history.push('/sugar-factory-admin');
        return;
      }

      // Perform login logic based on userType
      // Example: const token = await authService.login(username, password, userType);

      // Assuming you have a function to validate credentials and get the token from the backend
      const response = await fetch(`http://localhost:3001/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, userType }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const token = data.token;

      // Set the token in the AuthContext
      login(token);

      // Redirect based on user type
      if (userType === 'contractor') {
        history.push('/contractor-dashboard');
      } else if (userType === 'sugarFactory') {
        // Redirect to Sugar Factory dashboard or page
        history.push('/sugar-factory-dashboard');
      } else {
        // Redirect to other user type's dashboard or page
        // Example: history.push('/admin-dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container1">
      <div className="card-container">
        <div className="registration-form">
          <h2 className="mb-4">Login</h2>
          <div className="select-user-type">
            <label>
              Select User Type:
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="form-control"
              >
                <option value="contractor">Contractor</option>
                <option value="sugarFactory">Sugar Factory</option>
                <option value="adminSupport">Admin/Support</option>
              </select>
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <button onClick={handleLogin} className="btn btn-primary1">
              Login
            </button>
          </div>

          {/* Add a link to the registration page */}
          <Link to="/register" className="register-link">
            Create an account
          </Link>
        </div>
        <div className="image-container">
          <img src={loginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
