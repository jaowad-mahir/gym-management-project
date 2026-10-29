import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      { path: "login", Component: NotFound },
      { path: "register", Component: NotFound },
      { path: "*", Component: NotFound },
    ]

  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
