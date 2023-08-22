import { Button } from "@/components/ui/button.jsx";
import { Plus } from "lucide-react";
import React from "react";
import cloudinary from "cloudinary";
import AlbumCard from "@/components/AlbumCard.js";
import CreateAlbum from "@/components/CreateAlbum.js";
import { ForceRefresh } from "@/components/ForceRefresh.js";

const page = async () => {
  const { folders } = await cloudinary.v2.api.root_folders();
  return (
    <main className="py-4 px-4 ">
      <ForceRefresh/>
      <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold">Albums</h2>
      <div className="w-full flex items-center justify-end mt-2 md:mt-4">
        <CreateAlbum/>
      </div>
      <div className=" my-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {folders.map(async (folder, index) => {
          const image = await cloudinary.v2.api.resources({
            type: "upload",
            prefix: folder.name,
            max_results: 1,
          });

          return (
            <AlbumCard
              key={index}
              folder={folder.name}
              image={
                image?.resources[0]?.public_id
              }
            />
          );
        })}
      </div>
    </main>
  );
};

export default page;
