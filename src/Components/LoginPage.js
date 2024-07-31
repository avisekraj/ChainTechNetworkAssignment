import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// The LoginPage component handles user login functionality
const LoginPage = ({ onLogin }) => {
  // useState hooks to manage local state for email, password, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // useNavigate hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Simulate API call by getting the stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));
    // Check if the user exists and the password matches
    if (storedUser && storedUser.password === password) {
      onLogin(storedUser); // Call the onLogin function passed as a prop with the stored user
      navigate('/account'); // Navigate to the account page
    } else {
      setError('Invalid email or password'); // Set error message if authentication fails
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {/* Form for user login */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          {/* Input field for email */}
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          {/* Input field for password */}
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Display error message if exists */}
        {error && <p className="text-danger">{error}</p>}
        {/* Submit button for the form */}
        <button type="submit" className="btn btn-primary mt-5">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
