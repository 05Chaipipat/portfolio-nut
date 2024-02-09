import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './About.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Project",
    element:<Project/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)