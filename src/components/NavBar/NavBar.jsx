'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log({ session });
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
    router.push('/api/auth/signin');
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
        {session ? (
          <button onClick={handle} className="bg-blue-500 px-4 py-2">
            Sign Out
          </button>
        ) : (
          <button onClick={handle} className="bg-blue-500 px-4 py-2">
            Sign In
          </button>
        )}

        <div>
          <Image
            src={session?.data?.user?.image}
            alt={session?.data?.user?.name}
            width={40}
            height={40}
          ></Image>
          <h4>{session?.data?.user?.name}</h4>
          <p>{session?.data?.user?.type}</p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
