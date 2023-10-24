
import React from 'react';
import Card from './Card';

const BrandCard = ({ brandProducts }) => {
  
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

