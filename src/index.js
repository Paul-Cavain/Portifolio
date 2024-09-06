import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './About';
import Works from './Works';
import Testimonies from './Testimonies';
import Contacts from './Contacts';


const router = createBrowserRouter([
  {path: "/", element: <App />, },
  {path: "/About", element: <About />, },
  {path: "/Testimonies", element: <Testimonies />, },
  {path: "/Works", element: <Works />, },
  {path: "/Contacts", element: <Contacts />, },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);


