'use client';

import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import logo from "../../public/logo.png"
import { usePathname } from 'next/navigation'
import {cn} from '@/lib/utils'

function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
         <Image src={logo} alt="logo" width={20} height={20} unoptimized/>
        </Link>
      </div>

      <nav>
          <Link href="/" className={cn('nav-link',{
            'is-active': pathname === '/',
            'is-home' : true
          })}>home</Link>
          <p>Search Model</p>
          <Link href="/coins" className={cn('nav-link',{
            'is-active': pathname === '/coins'
          })}>All coins</Link>
      </nav>
    </header>
  )
}

export default Header