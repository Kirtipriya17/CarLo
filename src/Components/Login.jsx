// components/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 hover:text-blue-400">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">Login</button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;