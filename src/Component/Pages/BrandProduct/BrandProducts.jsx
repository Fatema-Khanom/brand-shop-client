


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
