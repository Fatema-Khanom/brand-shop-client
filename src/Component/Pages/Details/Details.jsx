// Details.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import DetailsMap from './DetailsMap';

const Details = () => {
  // const [seemore, setSeemore] = useState(null);
  //const { id } = useParams(); 
  // const seemoreData = useLoaderData(); 

  // useEffect(() => {
    
  //     const findDetails = seemoreData?.find(seeMore => seeMore.id === id); 
  //     setSeemore(findDetails);
  // }, [id, seemoreData]); 

  // const { id } = useParams();
  // const [details, setDetails] = useState({});

  // useEffect(() => {
  //   fetch(`http://localhost:5001/addproduct/id/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDetails(data);
  //     });
  // }, [id]);

  return (
    <div>
      {/* <DetailsMap details={details} /> */}
    </div>
  );
};

export default Details;
