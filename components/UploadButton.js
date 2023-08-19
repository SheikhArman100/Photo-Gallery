"use client";
import React from "react";
import { Button } from "./ui/button.jsx";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation.js";

const UploadButton = () => {
  const router=useRouter()
  return (
    <Button
    
      variant="secondary"
      className="flex lg:gap-x-2 lg::text-base"
      asChild

    >
      <CldUploadButton uploadPreset="onpquaje"  onUpload={() => {
          setTimeout(() => {
            router.refresh();
          }, 2000);
        }}>
        <Upload className="h-[1.2rem] aspect-square" />
        Upload

      </CldUploadButton>
      
      
    </Button>
  );
};

export default UploadButton;
