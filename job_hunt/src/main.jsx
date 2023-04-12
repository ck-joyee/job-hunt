import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from "./components/Statistics";
import Details from "./components/Details";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Notfound from "./components/Notfound";
import AppliedJob from "./components/AppliedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Details/:id",
        element: <Details />,
        loader: () => fetch("/featured_job.json"),
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Applied_Jobs",
        element: <AppliedJob></AppliedJob>,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound></Notfound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
