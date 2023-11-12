import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <div id="detail" className="mt-16">
        <Outlet />
      </div>
    </div>
  );
}
