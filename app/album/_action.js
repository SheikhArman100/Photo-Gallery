"use server";
import cloudinary from "cloudinary";

export async function createFolder(folderName){
    

   await cloudinary.v2.api.create_folder(`/${folderName}`)

   console.log(`${folderName} is created`)

}