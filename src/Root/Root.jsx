import { Outlet } from "react-router-dom";
import Navbar from "../Component/Pages/Home/Navbar";
import Footer from "../Component/Pages/Home/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;