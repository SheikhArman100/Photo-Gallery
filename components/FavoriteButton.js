"use client";
import { setAsFavoriteAction } from "@/app/_action.js";
import { HeartIcon } from "lucide-react";
import React, { useState, useTransition } from "react";

const FavoriteButton = ({publicId,tags}) => {
  const [isFavorite, setIsFavorite] = useState(tags.includes("favorite"));

  const [transition, startTransition] = useTransition();
  return (
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
  );
};

export default FavoriteButton;
