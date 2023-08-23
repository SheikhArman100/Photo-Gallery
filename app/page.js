import CloudinaryImage from "@/components/CloudinaryImage.js";
import FavoriteButton from "@/components/FavoriteButton.js";
import ImageOptions from "@/components/ImageOptions.js";
import MasonryGrid from "@/components/MasonryGrid.js";
import UploadButton from "@/components/UploadButton.js";
import cloudinary from "cloudinary";

import { Search } from "lucide-react";

export default async function Home() {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute();
    //console.log(results.resources)
  return (
    <main className="py-4 px-4 ">
      <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold">Gallery</h2>
      <div className="flex items-center sm:justify-between gap-x-1 mt-2 md:mt-4">
        <div className="w-full sm:w-[40%] border rounded-md px-1 py-2 sm:px-3 flex items-center  gap-x-2">
          <input
            type="text"
            className="w-full bg-transparent text-sm text-muted-foreground font-medium"
            placeholder="search photos,videos.."
          />
          <Search className="text-muted" />
        </div>
        <UploadButton />
      </div>
      
        <MasonryGrid
        images={results.resources}
        getImage={(imageData) => {
          return (
            <CloudinaryImage
              key={imageData.public_id}
              publicId={imageData.public_id}
              >
                <FavoriteButton key={imageData.public_id} publicId={imageData.public_id} tags={imageData.tags}/>
                <ImageOptions key={imageData.public_id} publicId={imageData.public_id}/>
              </CloudinaryImage>
          );
        }}
      />
      
    </main>
  );
}
