import React from "react";
import cloudinary from "cloudinary";
import AddToAlbumButton from "@/app/AddToAlbumButton.js";

const AlbumList = async ({publicId}) => {
  const { folders } = await cloudinary.v2.api.root_folders();

  

  return (
    <div className="flex flex-col gap-y-2">
      {folders.map((folder, index) => {
        return (
          <AddToAlbumButton
            key={index}
            album={folder.name}
            publicId={publicId}
          />
        );
      })}
    </div>
  );
};

export default AlbumList;
