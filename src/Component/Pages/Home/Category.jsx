import CategoryCard from "./CategoryCard";


const Category = () => {
    return (
        <div>
            <h2 className="text-4xl  font-bold text-black flex justify-center mt-10">Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <CategoryCard></CategoryCard>
            </div>
        </div>
    );
};

export default Category;