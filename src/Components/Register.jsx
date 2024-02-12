// components/RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-400 flex items-center justify-center">
            <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center mb-6 hover:text-blue-400">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">Register</button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-700">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
