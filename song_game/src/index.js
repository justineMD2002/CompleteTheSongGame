import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Singer1 from './Routes/Singer1';
import Singer2 from './Routes/Singer2';
import Singer3 from './Routes/Singer3';
import Singer4 from './Routes/Singer4';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/singer",
    element: <App />,
  },
  {
    path: "/singer/singer1",
    element: <Singer1 />,
  },
  {
    path: "/singer/singer2",
    element: <Singer2 />,
  },
  {
    path: "/singer/singer3",
    element: <Singer3 />,
  },
  {
    path: "/singer/singer4",
    element: <Singer4 />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
