
import { useLoaderData } from 'react-router-dom';
import Bannar from './Bannar';
import Category from './Category';
import Footer from './Footer';
import Navbar from './Navbar';
import ContactUs from './ContactUs';

const Home = () => {
    const category=useLoaderData()
    return (
        <div>
            
            <Bannar></Bannar>
            <Category category={category}></Category>
            <ContactUs></ContactUs>

            
        </div>
    );
};

export default Home;