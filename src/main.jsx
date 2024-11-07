import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Statistics from "./components/Statistics/Statistics";
import Upcoming from "./components/Upcoming/Upcoming";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Gadgets from "./components/Gadgets/Gadgets";
import DetailsPage from "./components/Gadgets/DetailsPage";
import DetailsPages from "./components/Gadgets/DetailsPages";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "category/:category",
            element: <Gadgets></Gadgets>,
          },
        ],
      },
      {
        path: "details",
        element:<DetailsPages></DetailsPages>,
      },
      {
        path: "home",
        element: <Home></Home>,
        children: [
          {
            path: "category/:category",
            element: <Gadgets></Gadgets>,
          },
        ],
      },
      {
        path: "home/details",
        element:<DetailsPages></DetailsPages>,
      },

      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "home/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "upcoming",
        element: <Upcoming></Upcoming>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
