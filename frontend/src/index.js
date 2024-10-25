import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<Header />}
  >
    <Route index element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);