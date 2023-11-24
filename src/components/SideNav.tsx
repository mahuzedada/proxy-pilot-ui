import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItems = [
  { name: 'Domains', href: '/domains' },
  { name: 'Proxies', href: '/proxies' },
  { name: 'Notifications', href: '/notifications' },
  { name: 'API', href: '/api' },
  { name: 'Billing', href: '/billing' },
  { name: 'Account', href: '/account' },
];

export default function SideNav() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive ? 'block p-4 bg-blue-500 text-white' : 'block p-4'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
