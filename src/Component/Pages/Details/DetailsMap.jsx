import React from 'react';
import DetailsCard from './DetailsCard';

const DetailsMap = ({details}) => {
    
        if (!Array.isArray(details)) {
          return null; 
        }
     
    return (
        <div>
            <div className="">
        {details?.map((cards) => (
          <DetailsCard key={cards} details={cards}/>
        ))}
      </div>
        </div>
    );
};

export default DetailsMap;