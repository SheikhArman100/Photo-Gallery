"use client";
import { Album, Delete, HeartIcon, MoreVertical } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { Button } from "./ui/button.jsx";
import React, { useState, useTransition } from "react";

import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "./ui/dropdown-menu.jsx";
import { setAsFavoriteAction } from "@/app/_action.js";

const CloudinaryImage = ({ publicId, children, ...props }) => {

  return (
    <div className="relative w-full">
      <CldImage
        width="400"
        height="300"
        priority
        src={publicId}
        {...props}
        sizes="100vw"
        alt="Description of my image"
      />
      <div className="absolute top-2 left-0 flex justify-between w-full px-2">
        {children}
      </div>
    </div>
  );
};

export default CloudinaryImage;
