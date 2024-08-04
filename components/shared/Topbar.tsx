import Link from 'next/link'
import React from 'react'
import { Logo } from '../icons'
import { User } from './user'

const Topbar = () => {
  return (
    <header className="flex fixed z-20 left-0 right-0 h-14 md:h-[60px] lg:h-[60px] items-center gap-4 border-b bg-white px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <Link
                className="flex items-center gap-2 font-semibold md:opacity-0"
                href="/"
              >
                <Logo />
                <span className="">مسابقات قرآنية</span>
              </Link>
              <User />
            </header>
  )
}

export default Topbar