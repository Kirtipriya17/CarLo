import React from 'react';
import { useParams } from 'react-router-dom';
import car1Image from '../assets/1.jpg';
import car2Image from '../assets/2.jpg';
import car3Image from '../assets/3.jpg';

const cars = [
  { id: 1, name: "Car Model 1", image: car1Image, review: "Great performance and style.", rating: 4 },
  { id: 2, name: "Car Model 2", image: car2Image, review: "Excellent fuel efficiency.", rating: 5 },
  { id: 3, name: "Car Model 3", image: car3Image, review: "Comfortable and spacious interior.", rating: 4.5 }
];

export default function ReviewPage() {
  return (
    <div className="container mx-auto mt-10 dark">
      <h1 className="text-3xl font-bold mb-4 text-white">Car Reviews</h1>
      <div className="grid grid-cols-3 gap-4">
        {cars.map(car => (
          <CarReview key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

function CarReview({ car }) {
  // Create an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`text-yellow-400 ${index < car.rating ? 'fill-current' : 'fill-transparent'} text-2xl`}>
      ★
    </span>
  ));

  return (
    <div className="relative">
      <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-md transition duration-300 ease-in-out transform hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 rounded-b-md opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        {stars}
        <p className="text-white font-semibold ml-2">{car.review}</p>
      </div>
    </div>
  );
}
