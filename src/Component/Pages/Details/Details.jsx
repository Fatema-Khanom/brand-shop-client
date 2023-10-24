import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsMap from './DetailsMap';

const Details = () => {
    
    const { id } = useParams();
    const [details, setDetails] = useState([]);
  
    useEffect(() => {
      
      fetch(`http://localhost:5001/addproduct/brand/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDetails(data);
        });
    }, [id]);
  
    return (
        <div>
            <DetailsMap details={details}></DetailsMap>
        </div>
    );
};

export default Details;