

const CategoryCard = ({card}) => {
    const {brand,image}=card || {}
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl bg-black mt-10">
            <figure className=" h-64 px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold text-white ">{brand}</h2>
                
                </div>
            </div>
            </div>
    
    );
};

export default CategoryCard;