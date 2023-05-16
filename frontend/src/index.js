import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MapView from './pages/MapView';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/map",
    element: <MapView />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },{
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/" element={<MapView />} />
      <Route path="/login" element={<LoginPage />} />
    </RouterProvider>
  </React.StrictMode>
);
