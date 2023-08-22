"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link.js";

const AlbumCard = ({ folder, image }) => {
  return (
    <Link href={`/album/${folder}`} className="relative col-span-1 aspect-square bg-gray-600 rounded-md">
      {image ? (
        <CldImage
          width="400"
          height="300"
          priority
          src={image}
          sizes="100vw"
          alt="album image"
          className="w-full h-full rounded-md"
        />
      ) : null}
      <div className="absolute bottom-0 left-0 w-full  glassEffect px-2 py-1 md:py-2 text-white rounded-b-md">
        <h5 className="text-base md:text-lg capitalize font-medium">{folder}</h5>
        <p className="text-xs md:text-sm text-muted">All the memories of {folder}</p>
      </div>
    </Link>
  );
};

export default AlbumCard;
