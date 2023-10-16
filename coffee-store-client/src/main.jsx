import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import ViewCoffee from './Components/ViiewCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/add-coffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/update-coffee',
    element: <UpdateCoffee></UpdateCoffee>
  },
  {
    path: '/view-coffee/:id',
    element: <ViewCoffee></ViewCoffee>,
    loader: ({ params }) =>fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
