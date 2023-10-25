// import React from 'react';
// import DetailsCard from './DetailsCard';

// const DetailsMap = ({details}) => {
    
//         if (!Array.isArray(details)) {
//           return null; 
//         }
     
//     return (
//         <div>
//             <div className="">
//         {details?.find((cards) => (
//           <DetailsCard key={cards} details={cards}/>
//         ))}
//       </div>
//         </div>
//     );
// };

// export default DetailsMap;

import React from 'react';
import DetailsCard from './DetailsCard';

const DetailsMap = ({ details }) => {
  if (!Array.isArray(details) || details.length === 0) {
    // Handle the case when details is not an array or is an empty array
    return <div>No details available</div>;
  }

  const detail = details[0]; // Assuming details should be an array with a single object

  return (
    <div>
      <DetailsCard key={detail._id} details={detail} />
    </div>
  );
};

export default DetailsMap;
