'use client'; // Required for the hook

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // 1. Import usePathname
import './Navbar.css';

const Navbar = () => {
  const pathname = usePathname(); // 2. Get the current path

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" className="logo" width={32} height={32} />
          </Link>
          <span className="brand">NTS Mudra</span>
        </div>
        
        <ul className="navbar-menu">
          {/* 3. Add conditional className to each Link */}
          <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link href="/wallet" className={pathname === '/wallet' ? 'active' : ''}>Wallet</Link></li>
          <li><Link href="/tasks" className={pathname === '/tasks' ? 'active' : ''}>Tasks</Link></li>
          <li><Link href="/games" className={pathname === '/games' ? 'active' : ''}>Games</Link></li>
          <li><Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Services</Link></li>
          <li><Link href="/profile" className={pathname === '/profile' ? 'active' : ''}>Profile</Link></li>
        </ul>
        
        <div className="navbar-right">
          <Link href="/profile">
            <Image src="/images/profile.jpg" alt="User Profile" className="user-icon" width={40} height={40}/>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;