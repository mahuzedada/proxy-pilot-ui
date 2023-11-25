import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import ErrorPage from './error-page';
import Home from './pages/Home';
import AddDomainForm from './pages/AddDomainForm';
import SSLCertificates from './pages/SSLCertificates';
import Preferences from './pages/Preferences';
import ApiConfig from './pages/ApiConfig';
import Billing from './pages/Billing';

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
        element: <SSLCertificates />,
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
