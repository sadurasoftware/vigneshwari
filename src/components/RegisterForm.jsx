// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import Ecomstore from '../store/Ecomstore'; // Import Zustand store
import './RegisterForm.css';

function RegisterForm() {
  // Local state for name, password, and error
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const registerUser = Ecomstore((state) => state.registerUser); // Get registerUser action from Zustand store

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !password) {
      setError('Both fields are required.');
      return;
    }

    // Register user in Zustand store
    registerUser(name, password);

    console.log('User registered:', { name, password });

    // Reset form fields
    setName('');
    setPassword('');
    setError('');
  };

  // Generalized handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="register-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
