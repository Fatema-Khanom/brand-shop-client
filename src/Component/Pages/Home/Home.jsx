
import { useLoaderData } from 'react-router-dom';
import Bannar from './Bannar';
import Category from './Category';
import ContactUs from './ContactUs';
import OurFeatures from './OurFeatures';

const Home = () => {
    const category=useLoaderData()
    return (
        <div className='dark:bg-black'>
            
            <Bannar></Bannar>
            <Category category={category}></Category>
            <OurFeatures></OurFeatures>
            <ContactUs></ContactUs>

            
        </div>
    );
};

export default Home;
