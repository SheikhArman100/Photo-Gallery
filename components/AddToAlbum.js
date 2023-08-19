import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Album, Plus } from "lucide-react";
import { Button } from "./ui/button.jsx";

const AddToAlbum = () => {
  const [isCreatingAlbum, setIsCreatingAlbum] = useState(false);
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost" className="">
          <Album className="mr-2 h-4 w-4" />
          <span>Add to album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[17rem]">
        <DialogHeader>
          <DialogTitle>Add photo to..</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col ">
          <div className="text-center text-sm opacity-20">No album</div>
          {isCreatingAlbum ? (
            <div className=" flex items-center justify-between gap-x-1">
              <input type="text" className="border-b border-muted-foreground w-full" />
              <Button>Create</Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              className="flex items-center justify-between gap-x-2 "
              onClick={()=>setIsCreatingAlbum(true)}
            >
              <Plus />
              Create new album
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddToAlbum;
