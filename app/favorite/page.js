import CloudinaryImage from "@/components/CloudinaryImage.js";
import MasonryGrid from "@/components/MasonryGrid.js";
import UploadButton from "@/components/UploadButton.js";
import cloudinary from "cloudinary";

import { Search } from "lucide-react";

export default async function Favorite() {
  const results = await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute();
    //console.log(results.resources)
  return (
    <main className="py-4 px-4 ">
      <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold">Favorites</h2>
     
      
        <MasonryGrid
        images={results.resources}
        getImage={(imageData) => {
          return (
            <CloudinaryImage
              key={imageData.public_id}
              publicId={imageData.public_id}
              tags={imageData.tags}
              
            />
          );
        }}
      />
      
    </main>
  );
}
