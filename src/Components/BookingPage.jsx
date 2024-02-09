import React, { useState } from 'react';

const BookingPage = () => {
  // State for selected car
  const [selectedCar, setSelectedCar] = useState(null);
  
  // State for selected dates
  const [selectedDates, setSelectedDates] = useState({ startDate: null, endDate: null });
  
  // State for customer information
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Function to handle car selection
  const handleCarSelection = (car) => {
    setSelectedCar(car);
  };

  // Function to handle date selection
  const handleDateSelection = (startDate, endDate) => {
    setSelectedDates({ startDate, endDate });
  };

  // Function to handle customer information input
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking submission logic here
    console.log("Booking submitted:", selectedCar, selectedDates, customerInfo);
    // Reset form after submission
    setSelectedCar(null);
    setSelectedDates({ startDate: null, endDate: null });
    setCustomerInfo({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className='flex justify-center self-center h-[100vh] items-center bg-slate-400'>
      <h1>Car Booking</h1>
      <form onSubmit={handleSubmit} action=""className='flex flex-col'>
        <label>
          Select Car:
          <select value={selectedCar} onChange={(e) => handleCarSelection(e.target.value)}>
            <option value="">Select a car</option>
            <option value="car1">Car 1</option>
            <option value="car2">Car 2</option>
            <option value="car3">Car 3</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />
        <label>
          Select Dates:
          <input type="date" value={selectedDates.startDate} onChange={(e) => handleDateSelection(e.target.value, selectedDates.endDate)} />
          <input type="date" value={selectedDates.endDate} onChange={(e) => handleDateSelection(selectedDates.startDate, e.target.value)} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={customerInfo.name} onChange={handleCustomerInfoChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={customerInfo.email} onChange={handleCustomerInfoChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={customerInfo.phone} onChange={handleCustomerInfoChange} />
        </label>
        <br />
        <button type="submit" disabled={!selectedCar || !selectedDates.startDate || !selectedDates.endDate || !customerInfo.name || !customerInfo.email || !customerInfo.phone}>Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;

