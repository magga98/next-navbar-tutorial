// components/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
    <div className="navbar bg-neutral px-9">
      <div className="flex-1">
        <a className="font-PlayfairDisplay normal-case text-3xl text-primary">B&H</a>
      </div>
      <div className="hidden md:flex justify-center">
        <ul className="font-PlayfairDisplay menu menu-horizontal px-1 ">
          <li>
            <Link href="/" className="text-primary hover:text-accent">Heim</Link>
          </li>
          <li>
            <Link href="/athofnin" className="text-primary hover:text-accent">Athöfnin</Link>
          </li>
          <li>
            <Link href="/veislan" className="text-primary hover:text-accent">Veislan</Link>
          </li>
          <li>
            <Link href="/gjafir" className="text-primary hover:text-accent">Gjafahugmyndir</Link>
          </li>
          <li>
            <Link href="/faq" className="text-primary hover:text-accent">Matseðill</Link>
          </li>
          <li>
            <Link href="/sagan" className="text-primary hover:text-accent">Sagan</Link>
          </li>
        </ul>
      </div>
      <button onClick={()=> { document.querySelector('.mobile-menu')?.classList.toggle('hidden');}} className='md:hidden flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>
      </div>
      <div className='mobile-menu font-PlayfairDisplay hidden md:hidden flex flex-col items-end space-y-2 px-9 pt-3 pb-3 text-sm bg-neutral'>
        <Link href="/" className="text-primary hover:text-white hover:text-base">Heim</Link>
        <Link href="/athofnin" className="text-primary hover:text-white hover:text-base">Athöfnin</Link>
        <Link href="/veislan" className="text-primary hover:text-white hover:text-base">Veislan</Link>
        <Link href="/gjafir" className="text-primary hover:text-white hover:text-base">Gjafahugmyndir</Link>
        <Link href="/faq" className="text-primary hover:text-white hover:text-base">FAQ</Link>
        <Link href="/sagan" className="text-primary hover:text-white hover:text-base">Sagan</Link>
      </div>
    </div>
  );
};
export default Navbar;
