
const Bannar = () => {
    return (
        <div className="w-11/12 m-auto my-10">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ysytt0x/raphael-maksian-Qn7b-Jt56s-GY-unsplash.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-white">Explore Our Exquisite Car Collection</h1>
            
                <p className="mb-5">Discover the latest models and experience luxury like never before. Explore our wide range of vehicles, each designed to elevate your driving experience.</p>
                <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-500">Explore Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Bannar;
