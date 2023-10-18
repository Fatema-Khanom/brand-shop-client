import CategoryCard from "./CategoryCard";


const Category = ({category}) => {
    return (
        <div>
            <h2 className="text-6xl  font-bold text-black flex justify-center mt-10">Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {
                category?.map (card =>  <CategoryCard key={card} card={card}></CategoryCard>)
            }
            </div>
        </div>
    );
};

export default Category;