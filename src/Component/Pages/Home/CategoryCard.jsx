import { Link } from 'react-router-dom';


const CategoryCard = ({card}) => {
    const {brand,image}=card || {}
    return (
        <div>
           <Link to={`/brandproduct/${brand}`}>
           <div  className="card w-96 bg-base-100 border shadow-xl mt-10">
            <figure className=" h-64 px- pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  w-full items-center text-center bg-red-700">
                <h2 className="card-title  text-3xl  bg-red-700 font-bold text-white ">{brand}</h2>
                
                </div>
            </div>
           </Link>
            </div>
    
    );
};

export default CategoryCard;