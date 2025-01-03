import React from 'react';
import ReactDOM from 'react-dom/client';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';

import Home from './pages/Home';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import './index.css';
import Register from './pages/Register';

const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Navigate to="/home" replace />} />
            <Route element={<AuthOutlet fallbackPath="/login" />}>
                <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>,
    ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider store={store}>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
);
