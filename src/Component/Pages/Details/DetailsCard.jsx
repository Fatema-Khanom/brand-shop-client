// import React from 'react';

// const DetailsCard = ({cards}) => {
//     const {_id,brand,name,rating,price,photo,type}=cards || {}
//     return (
//         <div>
//             <img src={photo} alt="" />
//             <p>{name}</p>
//         </div>
//     );
// };

// export default DetailsCard;

import React from 'react';

const DetailsCard = ({ details }) => {
  if (!details) {
    // If details are not available, you can render a loading state or an error message
    return (
      <div>
        Loading...
      </div>
    );
  }

  const { name, brand, type, price, description, rating, photo } = details;

  return (
    <div className="details-card">
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

export default DetailsCard;
