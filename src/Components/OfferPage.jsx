import React from 'react';
import { useParams } from 'react-router-dom';
import image1 from '../assets/k.jpg';
import image2 from '../assets/q.jpg';
import image3 from '../assets/8.jpg';

export default function OfferPage() {
  // Assuming you have some way to get offer details based on the offer ID
  let { offerId } = useParams();
  
  // Dummy offer data
  const offerData = {
    id: 1,
    title: "Special Offer!",
    description: "Get 20% off on all luxury cars. Limited time offer.",
    validUntil: "2024-03-31",
    terms: "Offer valid only on selected models. Cannot be combined with other offers.",
    images: [
      image1,
      image2,
      image3
    ]
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Offer Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">{offerData.title}</h2>
        <p className="text-gray-700 mb-4">{offerData.description}</p>
        <p className="text-gray-700 mb-4">Valid until: {offerData.validUntil}</p>
        <p className="text-sm text-gray-600">{offerData.terms}</p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {offerData.images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Car ${index + 1}`} className="w-full rounded-md transition duration-300 ease-in-out transform hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                <p className="text-white font-semibold">View Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}