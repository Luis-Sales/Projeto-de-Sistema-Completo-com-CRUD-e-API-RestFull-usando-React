import React from "react";

import Home from '../Pages/Home'
import LerMais from '../Pages/LerMais'
import Edit from '../Pages/Edit'
import Create from '../Pages/Create'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/LerMais/:id",
    element: <LerMais/>,
  },
  {
    path: "/edit/:id",
    element: <Edit/>,
  },
  {
    path: "/create",
    element: <Create/>,
  },



]);

function Rotas(){
  return(
    <RouterProvider router={router} />
  )
}
export default Rotas