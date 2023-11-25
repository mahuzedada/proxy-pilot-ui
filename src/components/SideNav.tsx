import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItems = [
  { name: 'Domains', href: '/domain/all' },
  { name: 'Proxies', href: '/domain/all' },
  { name: 'Notifications', href: '/notifications' },
  { name: 'API', href: '/api-config' },
  { name: 'Billing', href: '/billing' },
  { name: 'Account Preferences', href: '/preferences' },
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
                isActive
                  ? 'block p-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
                  : 'block p-4'
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
