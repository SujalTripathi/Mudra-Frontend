'use client'; // This is required to use the hook

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation'; // 1. Import usePathname

const Header = () => {
  const pathname = usePathname(); // 2. Get the current path

  return (
    <nav className="bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-1">
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-semibold text-lg text-gray-800">NTS Mudra</span>
        </Link>
      </div>

      <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
        {/* 3. Add conditional className to each Link */}
        <li>
          <Link href="/" className={pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/wallet" className={pathname === '/wallet' ? 'text-blue-600' : 'hover:text-blue-600'}>
            Wallet
          </Link>
        </li>
        <li>
          <Link href="/tasks" className={pathname === '/tasks' ? 'text-blue-600' : 'hover:text-blue-600'}>
            Tasks
          </Link>
        </li>
        <li>
          <Link href="/games" className={pathname === '/games' ? 'text-blue-600' : 'hover:text-blue-600'}>
            Games
          </Link>
        </li>
        <li>
          <Link href="/projects" className={pathname === '/projects' ? 'text-blue-600' : 'hover:text-blue-600'}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/profile" className={pathname === '/profile' ? 'text-blue-600' : 'hover:text-blue-600'}>
            Profile
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-3">
        <Link href="/profile">
          <Image src="https://placehold.co/40x40/cccccc/ffffff?text=U" alt="User Avatar" className="w-10 h-10 rounded-full" width={40} height={40} />
        </Link>
      </div>
    </nav>
  );
}

export default Header;