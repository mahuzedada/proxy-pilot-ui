import useTheme from '../../hooks/useTheme';
import logo from '../../assets/logo.png';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Signout() {
  useTheme();
  const { logout } = useAuth();
  useEffect(() => {
    logout().then();
  }, []);
  return (
    <div className="h-screen bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
      <div className=" w-full z-10 bg-slate-600 dark:bg-slate-800 p-4">
        <div className="container mx-auto">
          <div className="">
            <img className="w-24" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">You're Signed Out</h1>
          <p className="mb-6">
            Thank you for using ProxyPilot. We hope to see you back soon!
          </p>
          <Link
            to="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300"
          >
            Sign In Again
          </Link>
        </div>
      </div>
    </div>
  );
}
