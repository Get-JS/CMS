import { Fragment } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import tw from 'twin.macro';

import logoImg from '@assets/images/logo/logo4.png';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const Header = () => {
  return (
    <Disclosure as="header" tw="flex flex-wrap items-center bg-gray-800 max-w-full px-8 py-3 sm:px-6">
      {({ open }) => (
        <>
          <div tw="sm:hidden">
            <Disclosure.Button
              tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                    hover:text-white hover:bg-gray-700
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                  "
            >
              <span tw="sr-only">Open main menu</span>
              {open ? (
                <XIcon tw="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon tw="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>

          <div tw="flex justify-center flex-1 sm:flex-initial sm:justify-start">
            <img tw="block h-8 w-auto" src={logoImg} alt="gitdog" />
          </div>

          <div tw="flex-nowrap order-2 w-full sm:flex-1 sm:order-none">
            <nav tw="flex flex-col space-y-1 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0" css={[!open && tw`hidden`]}>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  tw="px-3 py-2 rounded-md text-sm font-bold text-white"
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </nav>
          </div>

          <div tw="flex pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" tw="ml-3 relative">
              <div>
                <Menu.Button tw="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span tw="sr-only">Open user menu</span>
                  <img
                    tw="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items tw="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="$" css={[active && tw`bg-gray-100`, tw`block px-4 py-2 text-sm text-gray-700`]}>
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="$" css={[active && tw`bg-gray-100`, tw`block px-4 py-2 text-sm text-gray-700`]}>
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
