import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./Components/Home";
import Details from "./Components/Details";
import ShoppingCart from "./Components/ShoppingCart";


export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
        path: "/shoppingcart/",
        element: <ShoppingCart />,
      },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
