import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/PortifolioPages/About";
import Works from "./pages/PortifolioPages/Works";
import Testimonies from "./pages/PortifolioPages/Testimonies";
import Contacts from "./pages/PortifolioPages/Contacts";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/About", element: <About /> },
  { path: "/Testimonies", element: <Testimonies /> },
  { path: "/Works", element: <Works /> },
  { path: "/Contacts", element: <Contacts /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
