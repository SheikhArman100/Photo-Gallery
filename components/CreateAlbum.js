"use client";
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
import { Button } from "./ui/button.jsx";
import { Loader2, Plus } from "lucide-react";
import { Label } from "./ui/label.jsx";
import { Input } from "./ui/input.jsx";
import { wait } from "@/lib/helpfulFunction.js";

import { useRouter } from "next/navigation.js";
import { createFolder } from "@/app/album/_action.js";
import { useToast } from "./ui/use-toast.js";

const CreateAlbum = () => {
 const router=useRouter()
  const [newAlbumName, setNewAlbumName] = useState("");
  const [loading, setLoading] = useState(false);
  const [open,setOpen]=useState(false)
  const { toast } = useToast()


  const handleClick = async() => {
    setLoading(true)
    await createFolder(newAlbumName)
    setLoading(false)
    setOpen(false)
    toast({
          title: `${newAlbumName} is Created`,
          description: `Now you can create memories of ${newAlbumName}`,
        })
    router.refresh()
  }
    
    
  return (
    <Dialog open={open}
      onOpenChange={() => {
        setOpen(true);
      }}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="flex items-center justify-between gap-x-2 "
        >
          <Plus className="h-[1.2rem] aspect-square" />
          Create new album
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[20rem]">
        <DialogHeader className="text-left">
          <DialogTitle>Create Album</DialogTitle>
          <DialogDescription>
            Separate your memories into different album
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4 ">
          <Label htmlFor="name" className="text-center">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="new album name..."
            value={newAlbumName}
            onChange={(e) => setNewAlbumName(e.target.value)}
            className="col-span-3 "
          />
        </div>
        <DialogFooter className="">
          {loading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating..
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={handleClick}
              disabled={newAlbumName.length === 0}
            >
              Create
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAlbum;
