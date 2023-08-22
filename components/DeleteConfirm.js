"use client";
import { deleteImage } from "@/app/_action.js";
import { Delete } from "lucide-react";
import { useRouter } from "next/navigation.js";
import React from "react";
import { Button } from "./ui/button.jsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "./ui/use-toast.js";


const DeleteConfirm = ({ publicId }) => {
  const router = useRouter();
  const {toast}=useToast()
  return (
    <AlertDialogContent className='w-[16rem]'>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the image .
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button
            variant="ghost"
            className=""
            onClick={() => {
              deleteImage(publicId);
              router.refresh();
              toast({
                title:"Image is deleted"

              })
            }}
          >
            
            <span>Delete</span>
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteConfirm;
