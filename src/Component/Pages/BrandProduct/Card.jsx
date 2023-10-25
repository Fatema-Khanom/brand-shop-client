import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product}) => {
    const {brand,name,rating,price,photo,type}=product || {}
    return (
        <div>
             <div  className="card w- bg-base-100 shadow-xl mt-10">
            <figure className=" h-64 px- pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  w-full items-center text-center">
                <h2 className="card-title  text-3xl  font-bold text- ">{name}</h2>
                <div className="grid grid-cols-2 gap-2 md:gap-20">
                <p className="md:text-xl"><span className='text-black font-semibold '>Brand Name:</span> <span className='font-bold'>{brand}</span></p>
                <p className="md:text-xl"><span className='text-black font-semibold '>Type:</span> <span className='font-bold'>{type}</span></p>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-16">
                <p className=""><span className='text-black font-semibold '>Price:</span> <span className='font-bold'>{price}</span></p>
                <p className=""><span className='text-black font-semibold '>Rating:</span> <span className='font-bold'>{rating}</span></p>
                </div>
                <div className="grid grid-cols-2 gap-12 mt-8 -mb-8 md:gap-48">
               <Link to={"/details/:id"}> <button className="px-4 py-2 bg-red-800 text-white rounded">Details</button></Link>
               <Link to={"/update"}> <button className="px-4 py-2 bg-red-800 text-white rounded">Update</button></Link>
                </div>

                
                </div>
            </div>
        </div>
    );
};

export default Card;