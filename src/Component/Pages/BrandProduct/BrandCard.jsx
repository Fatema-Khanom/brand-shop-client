// import React from 'react';

// const BrandCard = ({ brandData }) => {
//   const { name, brand, type, price, description, rating, photo } = brandData || {};

//   return (
//     <div className="card w-64 mx-4 mb-4 bg-white shadow-md">
//       <img src={photo} alt={name} className="w-full h-40 object-cover" />
//       <div className="p-4">
//         <h2 className="text-xl font-semibold">{name}</h2>
//         <p className="text-gray-600">{type}</p>
//         <p className="text-gray-700">{description}</p>
//         <p className="text-red-600 font-semibold">{price}</p>
//         <p className="text-yellow-500">Rating: {rating}</p>
//       </div>
//     </div>
//   );
// };

// export default BrandCard;


import React from 'react';

const BrandCard = ({ brandData }) => {
  const { name, brand, type, price, description, rating, photo } = brandData;

  return (
    <div className="brand-card">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>Brand: {brand}</p>
      <p>Type: {type}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default BrandCard;
