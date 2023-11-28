import React from 'react';
import { Menu } from '@headlessui/react';

type DropdownMenuItem = {
  href: string;
  content: React.ReactNode;
};

type Props = {
  buttonContent: React.ReactNode;
  items: DropdownMenuItem[];
};

export default function DropdownMenu({ items, buttonContent }: Props) {
  return (
    <Menu as="div" className="z-10 relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {buttonContent}
      </Menu.Button>
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {items.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <a
                href={item.href}
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
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
