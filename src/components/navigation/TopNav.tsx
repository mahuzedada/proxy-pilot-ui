import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import navigationItems from './navigationItems';
import DropdownMenu from '../utility/DropdownMenu';
import { UserCircleIcon } from '@heroicons/react/20/solid';

export default function TopNav() {
  return (
    <div className="w-full z-10 bg-slate-600 dark:bg-slate-800 p-4">
      <div className="container mx-auto">
        {/* Desktop/Tablet */}
        <div className="hidden md:flex justify-between items-center">
          <Link to="/">
            <img className="w-24" src={logo} alt="logo" />
          </Link>

          <DropdownMenu
            buttonContent={
              <UserCircleIcon className="h-5 w-5" aria-hidden="true" />
            }
            items={[{ href: '/signout', content: 'Logout' }]}
          />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center">
          <div className="flex items-center gap-2">
            <DropdownMenu
              position="left"
              buttonContent={<Bars3Icon className="w-6 h-6 text-white" />}
              items={navigationItems.map((item) => ({
                href: item.href,
                content: item.name,
              }))}
            />

            <Link to="/" className="text-white font-bold text-xl">
              <img className="w-24" src={logo} alt="logo" />
            </Link>
          </div>
          <DropdownMenu
            buttonContent={
              <UserCircleIcon className="h-5 w-5" aria-hidden="true" />
            }
            items={[{ href: '/signout', content: 'Logout' }]}
          />
        </div>
      </div>
    </div>
  );
}
