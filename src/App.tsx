import { Outlet } from 'react-router-dom';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import useTheme from './hooks/useTheme';

export default function App() {
  useTheme();
  return (
    <div className="flex flex-col min-h-screen overflow-y-scroll">
      <TopNav />
      <div className="flex-1 flex h-full">
        <SideNav />
        <main className="flex-1 h-full-50 overflow-y-scroll p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
