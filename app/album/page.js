import { Button } from "@/components/ui/button.jsx";
import { Plus } from "lucide-react";
import React from "react";
import cloudinary from "cloudinary";
import AlbumCard from "@/components/AlbumCard.js";

const page = async () => {
  const { folders } = await cloudinary.v2.api.root_folders();
  const image = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: folders[0].name, // add your folder
    sort_by:"created_at",
    max_results:1,
    
  });
  console.log(image);
  return (
    <main className="py-4 px-4 ">
      <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold">Albums</h2>
      <div className="w-full flex items-center justify-end mt-2 md:mt-4">
        <Button
          variant="secondary"
          className="flex items-center justify-between gap-x-2 "
        >
          <Plus />
          Create new album
        </Button>
      </div>
      <div className="flex flex-wrap">
        {folders.map((folder, index) => (
          <AlbumCard key={index} folder={folder.name} />
        ))}
      </div>
    </main>
  );
};

export default page;
