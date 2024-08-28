import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './About';
import Works from './Works';
import Testimonies from './Testimonies';
import Contacts from './Contacts';
// import HomeAdmin from './Admin';
// import AdminWorks from './Admin/AdminWorks';


const router = createBrowserRouter([
  {path: "/", element: <App />, },
  {path: "/About", element: <About />, },
  {path: "/Testimonies", element: <Testimonies />, },
  {path: "/Works", element: <Works />, },
  {path: "/Contacts", element: <Contacts />, },
  // {path: "/Admin/", element: <HomeAdmin />, },
  // {path: "/Admin/AdminWorks", element: <AdminWorks />, },
  // {path: "/Admin/Dashboard", element: <Dashboard />, },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);


