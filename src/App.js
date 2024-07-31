import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import AccountPage from './Components/AccountPage';
import Navbar from './Components/Navbar';

const App = () => {
  const [user, setUser] = useState(null);

  const username = localStorage.getItem('username'); // 'abhishek'
  const email = localStorage.getItem('email'); // 'abhishek@example.com'
  console.log(username,email);


  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={user ? <AccountPage user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
