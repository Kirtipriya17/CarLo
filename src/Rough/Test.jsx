// import React from 'react';
// import Rough from './rough'; // Assuming ProductCard is in a separate file
// import h1 from '../assets/3.jpg'
// const Test = () => {
//     const products = [
//         {
//           id: 1,
//           name: 'Product 1',
//           description: 'Description of Product 1',
//           image: h1,
//           price: 19.99,
//         },
//         {
//           id: 2,
//           name: 'Product 2',
//           description: 'Description of Product 2',
//           image: 'https://via.placeholder.com/300',
//           price: 29.99,
//         },
//         {
//           id: 3,
//           name: 'Product 3',
//           description: 'Description of Product 3',
//           image: 'https://via.placeholder.com/300',
//           price: 39.99,
//         },
//       ];
    
//       return (
//         <div className="container mx-auto mt-4">
//           <h1 className="text-3xl font-bold mb-4">Products</h1>
//           <div className="grid grid-cols-1 gap-1">
//             {products.map((product) => (
//               <div key={product.id}>
//                 <Rough product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     };
// export default Test;



import React from 'react';

const Test = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="https://via.placeholder.com/300" alt="Car" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Maruti Suzuki Brezza</div>
          <p className="mt-2 text-gray-500">2 8.34 - 14.14 Lakh’ rice in New Delhi</p>
          <p className="mt-2 text-gray-500">Petrol/CNG + 17.38 to 19.89 kmpl » Manual/Automatic</p>
          <p className="mt-6 text-gray-500">Check February Offers</p>
        </div>
      </div>
    </div>
  );
};

export default Test;


