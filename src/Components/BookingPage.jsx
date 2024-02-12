// components/BookingPage.jsx
import React, { useState } from 'react';

function BookingPage() {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    numberOfGuests: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 hover:text-blue-400">Book Your Car</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="pickup-location" className="block text-gray-700 font-bold mb-2">Pickup Location</label>
            <input type="text" id="pickup-location" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="dropoff-location" className="block text-gray-700 font-bold mb-2">Dropoff Location</label>
            <input type="text" id="dropoff-location" name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="pickup-date" className="block text-gray-700 font-bold mb-2">Pickup Date</label>
            <input type="date" id="pickup-date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="dropoff-date" className="block text-gray-700 font-bold mb-2">Dropoff Date</label>
            <input type="date" id="dropoff-date" name="dropoffDate" value={formData.dropoffDate} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">Number of Guests</label>
            <input type="number" id="guests" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} className="form-input w-full border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;