import React from 'react';
import { Menu } from '@headlessui/react';

type DropdownMenuItem = {
  href: string;
  content: React.ReactNode;
};

type Props = {
  buttonContent: React.ReactNode;
  items: DropdownMenuItem[];
  position?: 'left' | 'right';
};

export default function DropdownMenu({
  items,
  buttonContent,
  position = 'right',
}: Props) {
  return (
    <Menu as="div" className="z-10 relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm">
        {buttonContent}
      </Menu.Button>
      <Menu.Items
        className={`absolute ${position}-0 w-56 mt-2 origin-top-right bg-white dark:bg-gray-700 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {items.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <a
                href={item.href}
                className={`${
                  active
                    ? 'bg-slate-600 dark:bg-slate-500 text-white'
                    : 'text-gray-900 dark:text-white'
                } group flex items-center px-4 py-2 text-sm`}
              >
                {item.content}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
