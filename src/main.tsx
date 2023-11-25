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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
