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


// import React from 'react';
// import Card from './Card';

// const BrandCard = ({brandProduct }) => {

//   return (
//     <div>
//             <h2 className="text-6xl  font-bold text-black flex justify-center mt-10">Category</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
//                 {
//                 brandProduct?.find (product =>  <Card key={product.brand} product={product.brand}></Card>)
//             }
//             </div>
//         </div>
//   );
// };

// export default BrandCard;
import React from 'react';
import Card from './Card';

const BrandCard = ({ brandProducts }) => {
  // Check if brandProduct is an array before using filter
  

  return (
    <div>
      <h2 className="text-6xl font-bold text-black flex justify-center mt-10"></h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {brandProducts?.map((product) => (
          <Card key={product} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default BrandCard;

