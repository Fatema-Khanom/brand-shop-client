import React from 'react';

const DetailsCard = ({cards}) => {
    const {_id,brand,name,rating,price,photo,type}=cards || {}
    return (
        <div>
            <img src={photo} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default DetailsCard;