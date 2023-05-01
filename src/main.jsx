import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Main from './layouts/Home/Main.jsx';
import Home from './Components/Home/Home/Home.jsx';
import Booking from './Components/Booking/Booking.jsx';
import Destination from './Components/Destination/Destination.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider/AuthProvider.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import Hotels from './Components/Hotels/Hotels.jsx';
import Blog from './Components/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
     {
      path : '/',
      element: <Home></Home>
     },
     {
      path : 'blog',
      element: <Blog></Blog>,
      loader: ()=> fetch('https://travel-guru-server-mahmudev.vercel.app/blog')
     },
     {
      path : 'destinations',
      element: <Destination></Destination>,
      loader: ()=> fetch("https://travel-guru-server-mahmudev.vercel.app/destinations")
     },
     {
      path : 'destination/:id',
      element: <PrivateRoutes><Booking></Booking></PrivateRoutes>,
      loader: ({params})=> fetch(`https://travel-guru-server-mahmudev.vercel.app/destination/${params.id}`)
     },
     {
      path: 'hotels',
      element: <Hotels></Hotels>,
      loader: ()=> fetch("https://travel-guru-server-mahmudev.vercel.app/hotels")
     },
     {
      path: 'login',
      element: <Login></Login>
     },
     {
      path: 'register',
      element: <Register></Register>
     },
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
