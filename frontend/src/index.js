import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MapView from './components/MapView';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import InputPage from './pages/InputPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/input",
    element: <InputPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route path="/" element={<MapView />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </RouterProvider>
  </React.StrictMode>
);
