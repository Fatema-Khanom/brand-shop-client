// Details.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import DetailsMap from './DetailsMap';

const Details = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5001/addproduct/id/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, [_id]);

  return (
    <div>
      <DetailsMap details={details} />
    </div>
  );
};

export default Details;
