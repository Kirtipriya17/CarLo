import React from 'react';

function OfferPagee() {
    return (
        <div className="container mx-auto py-8 dark">
            <h1 className="text-3xl font-bold mb-4 text-white">Latest Offers</h1>
            <div className="bg-yellow-200 dark:bg-gray-800 p-4 mb-4">
                <h2 className="text-xl font-bold mb-2">Today's Offer!</h2>
                <p className="text-lg text-red-600">Limited Time Only</p>
                <div className="border border-gray-400 p-4 mt-4">
                    <h3 className="text-lg font-semibold mb-2">Car Name</h3>
                    <p className="text-gray-700 mb-2">Description of the car and its features.</p>
                    <p className="text-green-600 font-bold">$X,XXX.XX</p>
                    <img src="your-image-url.jpg" alt="Car" className="w-full h-auto rounded-md" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">View Offer</button>
                </div>
            </div>
            {/* Add more offers here */}
        </div>
    );
}

export default OfferPagee;
