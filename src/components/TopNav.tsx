import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function TopNav() {
  return (
    <div className=" w-full z-10 bg-slate-600 dark:bg-slate-800 p-4">
      <div className="container mx-auto">
        {/* Desktop/Tablet */}
        <div className="hidden md:flex justify-between items-center">
          <Link to="/">
            <img className="w-24" src={logo} alt="logo" />
          </Link>

          <div className="space-x-4">
            <Link to="/domain/all">
              <span className="text-white">Domains</span>
            </Link>
            <Link to="/settings">
              <span className="text-white">Settings</span>
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">
            <img className="w-24" src={logo} alt="logo" />
          </Link>
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button>
                  <Bars3Icon className="w-6 h-6 text-white" />
                </Menu.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/domain/all"
                            className={`${
                              active
                                ? 'bg-slate-600 dark:bg-slate-500 text-white'
                                : 'text-gray-900 dark:text-white'
                            } block px-4 py-2 text-sm`}
                          >
                            Domains
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/settings"
                            className={`${
                              active
                                ? 'bg-slate-600 dark:bg-slate-500 text-white'
                                : 'text-gray-900 dark:text-white'
                            } block px-4 py-2 text-sm`}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
