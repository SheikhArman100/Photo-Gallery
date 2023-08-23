import React from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./ui/dropdown-menu.jsx";
import { Delete, MoreVertical, Plus } from "lucide-react";

import { Button } from "./ui/button.jsx";
import {
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ui/dropdown-menu.jsx";
import AddToAlbumButton from "@/app/AddToAlbumButton.js";
import DeleteButton from "./DeleteConfirm.js";
import { AlertDialog, AlertDialogTrigger } from "./ui/alert-dialog.jsx";
import DeleteConfirm from "./DeleteConfirm.js";
import AddToAlbumDialog from "./AddToAlbumDialog.js";
import AlbumList from "./AlbumList.js";

const ImageOptions = async ({ publicId }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical
          className="h-[1.6rem] aspect-square"
          stroke="white"
          strokeWidth="3"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <AddToAlbumDialog>
              <AlbumList publicId={publicId}/>
            </AddToAlbumDialog>
             
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <AlertDialog>
              <AlertDialogTrigger
              className=""
                asChild
              >
                <Button variant="ghost" className="w-full flex items-center justify-start">
                  <Delete className="mr-2 h-4 w-4 " />
                  <span>Delete</span>
                </Button>
              </AlertDialogTrigger>
              <DeleteConfirm publicId={publicId} />
            </AlertDialog>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ImageOptions;
