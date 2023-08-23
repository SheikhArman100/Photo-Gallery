"use client"
import React from "react";
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



const AddToAlbumDialog = ({children}) => {


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />
        <span>Add to album</span>
        </Button>

      </DialogTrigger>
      <DialogContent className="w-[14rem] md:w-[15rem]">
        <DialogHeader className="text-left">
          <DialogTitle>Add memory to</DialogTitle>
          <DialogDescription>
            Separate your memories into different album 
          </DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddToAlbumDialog;
