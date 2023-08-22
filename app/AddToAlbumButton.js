"use client";
import { Button } from "@/components/ui/button.jsx";

import { addImageToAlbum } from "./_action.js";
import { useToast } from "@/components/ui/use-toast.js";


const AddToAlbumButton = ({ album, publicId }) => {
  const {toast}=useToast()

  return (
    <Button
      variant="outline"
      className="py-1 capitalize"
      onClick={async() => {
         await addImageToAlbum(album, publicId);
        toast({
          title: "Successfully Added",
          description: `image moved to ${album} album`,
        })
      }}
      
    >
      {album}
    </Button>
  );
};

export default AddToAlbumButton;
