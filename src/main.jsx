import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage.jsx";
import Registration from "./components/pages/registration/Registration.jsx";
import Login from "./components/pages/login/Login.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import WorkSpaceLayout from "./components/Workspaces/WorkSpaceLayout.jsx";
import store from "./components/redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: '/workspaces',
    element: <WorkSpaceLayout></WorkSpaceLayout>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    </React.StrictMode>
  </AuthProvider>
);
