'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contacts',
      path: '/contacts',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Portfolio',
      path: '/portfolio',
    },
    {
      title: 'Blogs',
      path: '/blogs',
    },
    {
      title: 'Posts',
      path: '/posts',
    },
    {
      title: 'Meals',
      path: '/meals',
    },
  ];

  const handle = () => {
    router.push('/portfolio');
  };

  if (pathName.includes('/dashboard'))
    return <div className="bg-green-400"> dashboard Layout</div>;
  return (
    <div>
      <nav className="bg-red-500 py-4 px-5 flex text-white justify-between items-center">
        <h4 className="text-3xl">
          Next<span className="text-blue-800"> Hero</span>
        </h4>
        <ul className="flex items-center justify-between space-x-3">
          {links.map(link => (
            <li key={link.path}>
              <Link
                className={pathName === link.path && 'text-yellow-400'}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="bg-slate-100 px-5 py-2  rounded text-black"
          onClick={handle}
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
