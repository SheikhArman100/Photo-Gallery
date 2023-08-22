"use server";
import cloudinary from "cloudinary";

export async function setAsFavoriteAction(publicId, isFavorite) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
    console.log(`${publicId}===>${isFavorite}`)
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
    console.log(`${publicId}===>${isFavorite}`)

  }
}

export async function addImageToAlbum(album,publicId) {

  try {
    await cloudinary.v2.uploader.rename(publicId, `${album}/${publicId}`);
    console.log(`added to folder ${album}` )
    
  } catch (error) {
    console.log(error)
  }
}

export async function deleteImage(publicId){
  try {
    await cloudinary.uploader.destroy(publicId)
    console.log(`${publicId} is deleted`)
  } catch (error) {
    console.log(error)
  }
}
 export async function fetchFolders(){
  const { folders } = await cloudinary.v2.api.root_folders();
  console.log(folders);
  return folders;
 }