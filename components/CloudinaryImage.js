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
} from "./ui/dropdown-menu.jsx";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { setAsFavoriteAction } from "@/app/_action.js";
import AddToAlbum from "./AddToAlbum.js";

const CloudinaryImage = ({ publicId, tags, ...props }) => {
  const [isFavorite, setIsFavorite] = useState(tags.includes("favorite"));
  const [transition, startTransition] = useTransition();

  return (
    <div className="relative w-full">
      <CldImage
        width="400"
        height="300"
        priority
        src={publicId}
        {...props}
        //sizes="100vw"
        alt="Description of my image"
      />
      <div className="absolute top-2 left-0 flex justify-between w-full px-2">
        <button
          onClick={() => {
            setIsFavorite(!isFavorite);
            startTransition(() => {
              setAsFavoriteAction(publicId, !isFavorite);
            });
          }}
        >
          <HeartIcon
            className={`h-[1.6rem] aspect-square ${
              isFavorite ? "text-red-500" : "text-white hover:text-red-500"
            } `}
            strokeWidth="3"
            fill={isFavorite ? "red" : "none"}
          />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical
              className="h-[1.6rem] aspect-square"
              stroke="white"
              strokeWidth="3"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <AddToAlbum />
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button variant="ghost">
                  <Delete className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CloudinaryImage;
