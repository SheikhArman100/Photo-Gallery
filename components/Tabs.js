"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import React from 'react'

const tabItems=[
  {
    name:"Gallery",
    href:"/"
  },
  {
    name:"Favorite",
    href:"/favorite"
  },
  {
    name:"Album",
    href:"/album"
  }
]

const Tabs = () => {
  const currentRoute = usePathname();

  return (
    <ul className= "flex items-center justify-between  mx-4 mt-4 p-1 rounded-md bg-muted text-muted-foreground md:hidden">
      {tabItems.map((item,index)=>
        <li key={index} className={`py-1.5 flex-1 text-center whitespace-nowrap rounded-md text-sm font-medium ${currentRoute===item.href?"bg-background text-foreground":""}`}><Link href={item.href}>{item.name}</Link></li>
      )}

    </ul>
  )
}

export default Tabs