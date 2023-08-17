import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
import Layouts from './Components/Layouts';
import Home from './Components/Cards/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Product from './Components/Product/Product';
import CheckOut from './Components/CheckOut/checkOut';
import { Provider } from 'react-redux';
import { store } from './rtk/store';

import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartShop from './Components/cart/Cart-shop';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
            {
        path: "/Cartshop",
        element: <CartShop />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
    ]
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<Provider store={store}>

  <RouterProvider router={router} />
</Provider>
  
);


