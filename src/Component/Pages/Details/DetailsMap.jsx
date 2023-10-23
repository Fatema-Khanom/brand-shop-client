import React from 'react';
import DetailsCard from './DetailsCard';

const DetailsMap = ({details}) => {
     
    return (
        <div>
            <div className="">
        {details?.map((details) => (
          <DetailsCard key={details} details={details}/>
        ))}
      </div>
        </div>
    );
};

export default DetailsMap;