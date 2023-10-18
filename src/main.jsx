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
import AddCart from './Component/Pages/MyCart/MyCart.jsx';
import MyCart from './Component/Pages/MyCart/MyCart.jsx';
import SignUp from './Component/Pages/SignUp/SignUp.jsx';
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
      element:<AddProduct></AddProduct>
    },
    {
      path:"/mycart",
      element:<MyCart></MyCart>
    },
    
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/signup",
      element:<SignUp></SignUp>
    }
    
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
