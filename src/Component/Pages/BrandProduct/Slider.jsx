import React from 'react';

const Slider = () => {
    return (
        <div>
                <div className="carousel w-full bg-gray-200">
                <div id="slide1" className="carousel-item relative w-full">
                    
                    <div className="md:flex md:flex-1 items-center px-6 py-6 ">
                        <div className="md:flex-1 md:w-1/2 pl-6">
                            <p className="text-red-700 font-bold text-4xl font-semibold">SALE UP TO 30% OFF</p>
                            <h2 className="text-3xl font-bold my-5">Lamborghini Aventador</h2>
                            <p className=" text-gray-700">
                                Experience the epitome of automotive engineering with the Lamborghini Aventador.
                                This exquisite supercar offers breathtaking speed, cutting-edge design, and a
                                driving experience like no other. Now, for a limited time, enjoy exclusive savings
                                of up to 30% off. Don't miss your chance to own a piece of automotive history.
                            </p>
                        </div>

                        <img className='md:flex-1 md:w-1/2' src="https://i.ibb.co/Pz3vBSJ/bailey-mahon-JMpdblr-HTr-Q-unsplash-1-removebg-preview.png" alt="" />
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="md:flex md:flex-1 items-center px-6 py-6 ">
                            <div className="flex-1 md:w-1/2 pl-8">
                            <p className="text-red-400 text-4xl font-semibold">SALE UP TO 25% OFF</p>
                            <h2 className="text-3xl font-bold">Audi Q7</h2>
                            <p className=" text-gray-700">
                                Elevate your driving experience with the Audi Q7. This luxurious SUV offers
                                a perfect blend of performance, style, and advanced technology. With spacious
                                interiors and cutting-edge features, the Audi Q7 is designed to make every journey
                                comfortable and enjoyable. For a limited time, enjoy exclusive savings of up to 25% off.
                                Don't miss out on this opportunity to own the Audi Q7.
                            </p>
                            </div>


                            <img className='md:flex-1 md:w-1/2' src="https://i.ibb.co/8KdSRhc/devon-janse-van-rensburg-c9af81m-Mo-CA-unsplash-removebg-preview.png" alt="" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="md:flex md:flex-1 items-center px-6 py-6">
                    <div className="md:flex-1 md:w-1/2 pl-6">
                        <p className="text-red-700 font-bold text-4xl font-semibold">SALE UP TO 20% OFF</p>
                        <h2 className="text-3xl font-bold my-5">Ford Mustang</h2>
                        <p className="text-gray-700">
                        Elevate your driving experience with the Ford Mustang. This iconic American muscle
                        car delivers power, style, and performance like no other. Whether you're cruising
                        on the open road or tearing up the track, the Ford Mustang is the ultimate driving
                        machine. For a limited time, enjoy exclusive savings of up to 20% off. Don't miss your
                        chance to own this legendary vehicle.
                        </p>
                    </div>
                    <img
                        className="md:flex-1 md:w-1/2"
                        src="https://i.ibb.co/phxP0JN/mason-kiesewetter-f-YGKy-ASSuk0-unsplash-removebg-preview.png"
                        alt=""
                    />
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                
                </div>
        </div>
    );
};

export default Slider;