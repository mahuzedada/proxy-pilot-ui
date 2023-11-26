import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import ErrorPage from './error-page';
import Home from './pages/Home';
import AddDomainForm from './pages/AddDomainForm';
import Preferences from './pages/Preferences';
import ApiConfig from './pages/ApiConfig';
import Billing from './pages/Billing';
import DomainTracking from './pages/DomainTracking';
import ProxyList from './pages/Proxy/ProxyList';
import Notifications from './pages/Notifications';
import AuthProvider from './components/auth/AuthProvider';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import NewPasswordForm from './components/auth/NewPasswordForm';
import AuthCallback from './components/auth/AuthCallback';
import ResetPassword from './components/auth/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/domain/new',
        element: <AddDomainForm />,
      },
      {
        path: '/domain/all',
        element: <DomainTracking />,
      },
      {
        path: '/proxy/all',
        element: <ProxyList />,
      },
      {
        path: '/api-config',
        element: <ApiConfig />,
      },
      {
        path: '/preferences',
        element: <Preferences />,
      },
      {
        path: '/billing',
        element: <Billing />,
      },
      {
        path: '/notifications',
        element: <Notifications />,
      },
    ],
  },
  {
    path: '/login',
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: '/new-password',
    element: (
      <AuthProvider>
        <NewPasswordForm />
      </AuthProvider>
    ),
  },
  {
    path: '/auth-callback',
    element: (
      <AuthProvider>
        <AuthCallback />
      </AuthProvider>
    ),
  },
  {
    path: '/new-password',
    element: (
      <AuthProvider>
        <NewPasswordForm />
      </AuthProvider>
    ),
  },
  {
    path: '/reset-password',
    element: (
      <AuthProvider>
        <ResetPassword />
      </AuthProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
