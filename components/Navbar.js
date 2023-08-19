import React from "react";
import { ThemeButton } from "./ThemeButton.js";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
  return (
    <section className="flex items-center justify-between py-3 px-3 md:px-6 xl:px-10 border-b-[0.05rem] dark:border-slate-700 border-slate-200">
      <h3 className="text-2xl md:text-3xl font-bold">Memories</h3>
      <div className="flex items-center gap-x-2">
        <ThemeButton />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </section>
  );
};

export default Navbar;
