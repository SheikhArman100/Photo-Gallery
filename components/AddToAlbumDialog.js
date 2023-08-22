"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "./ui/button.jsx";
import AlbumList from "./AlbumList.js";
import cloudinary from "cloudinary";

const AddToAlbumDialog = ({publicId}) => {
const [folders,setFolders]=useState(null)
const handleClick=async()=>{
    try {
        const { folders } = await cloudinary.v2.api.root_folders();
        console.log(folders)
    } catch (error) {
        console.log(error)
    }
   
}
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex items-center" onClick={handleClick}>
            <Plus className="mr-2 h-4 w-4" />
        <span>Add to album</span>
        </Button>

      </DialogTrigger>
      <DialogContent className="w-[14rem] md:w-[12rem]">
        <DialogHeader className="text-left">
          <DialogTitle>Add memory to</DialogTitle>
          <DialogDescription>
            Separate your memories into different album 
          </DialogDescription>
          {/* <AlbumList publicId={publicId} folders={folders}/> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddToAlbumDialog;
