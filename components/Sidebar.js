"use client"
import React from "react";
import { Heart, Image, Library } from "lucide-react";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";


const sideItems=[
  {
    name:"Gallery",
    href:"/",
    icon:<Image className="h-[1.2rem] aspect-square" />
  },
  {
    name:"Favorites",
    href:"/favorite",
    icon:<Heart className="h-[1.2rem] aspect-square" />
  },
  {
    name:"Album",
    href:"/album",
    icon:<Library className="h-[1.2rem] aspect-square" />
  }
]


const Sidebar = () => {
    const currentRoute = usePathname();
  return (
    <div className="hidden md:block border-r-[0.05rem] dark:border-slate-700 border-slate-200 ">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg xl:text-xl font-semibold tracking-tight">
            Discover
          </h2>
          <ul className="space-y-1 ">
            {sideItems.map((item,index)=>
                <li key={index} className="">
                <Link href={item.href} className={`flex items-center w-full text-sm xl:text-base font-semibold  px-4 py-2 gap-x-2 rounded-md hover:glassEffect ${currentRoute===item.href?"bg-muted text-muted-foreground":""} `}>{item.icon}{item.name}</Link>
            </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
