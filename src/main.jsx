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
      element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
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
      element: <BrandProducts></BrandProducts>,
      loader: ({ brand }) => fetch(` https://brand-shop-server-m37mw4tua-fatema-khanoms-projects.vercel.app/addproduct/${brand}`),
    },
    {
      path: "/details/:id",
      element:<PrivateRoute><Details></Details></PrivateRoute>,
      loader: ({params }) => fetch(` https://brand-shop-server-m37mw4tua-fatema-khanoms-projects.vercel.app/addproduct/id/${params.id}`),
      
    },
    
    {
      path: `/update`,
      element:<PrivateRoute><Update></Update></PrivateRoute>,
     // loader:({id }) => fetch(` https://brand-shop-server-m37mw4tua-fatema-khanoms-projects.vercel.app/addproduct/id/${id}`),
      
      
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
