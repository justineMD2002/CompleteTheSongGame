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
    path: "/",
    element: <App />,
  },
  {
    path: "/singers/singer1",
    element: <Singer1 />,
  },
  {
    path: "/singers/singer2",
    element: <Singer2 />,
  },
  {
    path: "/singers/singer3",
    element: <Singer3 />,
  },
  {
    path: "/singers/singer4",
    element: <Singer4 />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
