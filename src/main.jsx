import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Error from './Component/Pages/Error/Error.jsx';
import Home from './Component/Pages/Home/Home.jsx';
import Login from './Component/Pages/Login/Login.jsx';
import AddProduct from './Component/Pages/AddProduct/AddProduct.jsx';

import MyCart from './Component/Pages/MyCart/MyCart.jsx';
import SignUp from './Component/Pages/SignUp/SignUp.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import PrivateRoute from './Root/PrivateRoute.jsx';
import BrandProducts from './Component/Pages/BrandProduct/BrandProducts.jsx';
import Details from './Component/Pages/Details/Details.jsx';
import Update from './Component/Pages/Update/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[{
      path:"/",
      element:<Home></Home>,
      loader:()=> fetch("/data.json"),
    },
    {
      path:"/addproduct",
      element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
    },
    {
      path:"/mycart",
      element:<MyCart></MyCart>,
    },
    
    {
      path:"/login",
      element:<Login></Login>,
    },
    {
      path:"/signup",
      element:<SignUp></SignUp>,
    },
    {
      path: `/brandproduct/:brand`,
      element: <PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>,
      loader: ({ brand }) => fetch(`http://localhost:5001/addproduct/${brand}`),
    },
    {
      path: `/details`,
      element:<Details></Details>,
      loader: ({ _id }) => fetch(`http://localhost:5001/details/${_id}`),
      
    },
    
    {
      path: `/update`,
      element:<Update></Update>
      
    },
    
    
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
