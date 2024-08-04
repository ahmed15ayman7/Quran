'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'
import { SidebarLinks } from '../icons'

const Bottombar = () => {
  let pathname= usePathname();

  return (
    <section className='bottombar'>
     <div className="bottombar_container">
      {SidebarLinks.map((link, index) => {
        let isActive=(pathname.includes(link.route)&&link.route.length>1)||pathname === link.route;
        return(
        <Link key={index} href={link.route} className={`bottombar_link ${isActive && ' bg-primary-500'}`}>
            {isActive?link.imgURL:link.imgURLh}
            <span className=' text-black hidden sm:block'>{link.label.split(/\s+/)[0]}</span>
          </Link>
        )}
        )}
        </div>
    </section>
  )
}

export default Bottombar