import React, { useState } from 'react';

const AccountPage = ({ user }) => {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [name, setName] = useState(user.name || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [address, setAddress] = useState(user.address || '');
  const [dob, setDob] = useState(user.dob || '');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    const updatedUser = { email, password, name, phone, address, dob };
    localStorage.setItem(email, JSON.stringify(updatedUser));
    setSuccess('Account updated successfully!');
  };

  return (
    <div className="container mt-5">
      <h2>Account Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
        {success && <p className="text-success">{success}</p>}
        <button type="submit" className="btn btn-primary mt-5">Update</button>
      </form>
    </div>
  );
};

export default AccountPage;
