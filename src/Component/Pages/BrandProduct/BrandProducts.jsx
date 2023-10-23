// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Slider from './Slider';

// const BrandProducts = () => {
//   const { brand } = useParams(); 
//   const [brandProducts, setBrandProducts] = React.useState([]);

//   React.useEffect(() => {
//     fetch(`http://localhost:5001/addproduct/${brand}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setBrandProducts(data);
//       });
//   }, [brand]);

//   return (
//     <div>
//       <h1 className='text-4xl font-bold'>{brand}</h1>
     
      
//     </div>
//   );
// };

// export default BrandProducts;

// BrandProducts.jsx

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import BrandCard from './BrandCard';

// const BrandProducts = () => {
//   const { brand } = useParams();
//   const [brandProducts, setBrandProducts] = useState([]);
//   // Assuming you have an array of brand names
//   const brandNames = ['Toyota', 'Ford', 'Audi']; // Replace with your brand names

//   useEffect(() => {
//     // Fetch brand-specific products based on the "brand" parameter
//     fetch(`http://localhost:5001/addproduct/${brand}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setBrandProducts(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [brand]);

//   return (
//     <div>
//       <h1 className="text-4xl font-bold">{brand}</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {brandNames.map((brandData) => (
//           <BrandCard key={brandData} brandData={brandData} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrandProducts;


import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BrandCard from './BrandCard';
import Slider from './Slider';

const BrandProducts = () => {

    // const brandProduct=useLoaderData()
  const { brand } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);

  useEffect(() => {
    
    fetch(`http://localhost:5001/addproduct/${brand}`)
      .then((response) => response.json())
      .then((data) => {
        setBrandProducts(data);
      });
  }, [brand]);

  return (
    <div>
         <Slider></Slider>
      <h1 className="text-4xl text-black font-bold mt-10">{brand}</h1>
      <BrandCard brandProducts={brandProducts}></BrandCard>
     
    </div>
  );
};

export default BrandProducts;
