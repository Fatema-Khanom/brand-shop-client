import React from 'react';

const DetailsCard = ({details}) => {
    const {_id,brand,name,rating,price,photo,type}=details || {}
    return (
        <div>
            <img src={photo} alt="" />
        </div>
    );
};

export default DetailsCard;