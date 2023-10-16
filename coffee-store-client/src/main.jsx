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
import Root from './Components/Root';
import AuthProvider from './AuthProvider';
import Register from './Components/Authenticate/Register';
import AllUser from './Components/Authenticate/AllUser';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/update-coffee',
        element: <UpdateCoffee></UpdateCoffee>
      },
      {
        path: '/view-coffee/:id',
        element: <ViewCoffee></ViewCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)

      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/all-user',
        element: <AllUser></AllUser>,
        loader: () =>fetch('http://localhost:5000/user')
      }

    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
