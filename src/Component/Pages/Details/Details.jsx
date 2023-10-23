import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsMap from './DetailsMap';

const Details = () => {
    
    const { _id } = useParams();
    const [details, setDetails] = useState([]);
  
    useEffect(() => {
      
      fetch(`http://localhost:5001/details/${_id}`)
        .then((response) => response.json())
        .then((data) => {
          setBrandProducts(data);
        });
    }, [_id]);
  
    return (
        <div>
            <DetailsMap details={details}></DetailsMap>
        </div>
    );
};

export default Details;