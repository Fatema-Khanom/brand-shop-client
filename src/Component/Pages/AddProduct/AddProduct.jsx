
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const addProduct = { name, brand, type, price, description, rating, photo };
        console.log(addProduct);

        fetch(' https://brand-shop-server-m37mw4tua-fatema-khanoms-projects.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });
    };

    return (
        <div className="p-24" style={{ backgroundImage: "url('https://i.ibb.co/YyJ42yt/1-d410-Dv-Tt3-Ru-Ng-LFvcr-Pm9-A.jpg')", backgroundSize: 'cover' }}>
            <div className="bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg">
                <h2 className="font-extrabold text-3xl md:text-5xl text-red-500 mb-8">Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white font-bold">Name</span>
                            </label>
                            <label className="input-grou">
                                <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-white font-bold">Brand Name</span>
                            </label>
                            <label className="input-">
                                <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white font-bold">Type</span>
                            </label>
                            <label className="input-grou">
                                <input type="text" placeholder="Type" name="type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-white font-bold">Price</span>
                            </label>
                            <label className="input-">
                                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white font-bold">Short Description</span>
                            </label>
                            <label className="input-grou">
                                <input type="text" placeholder="Short Description" name="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-white font-bold">Rating</span>
                            </label>
                            <label className="input-">
                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-white font-bold">Photo URL</span>
                            </label>
                            <label className="input-grou">
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Product" className="btn btn-block bg-red-700 text-white border border-solid border-1 border-[#331A15]" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
