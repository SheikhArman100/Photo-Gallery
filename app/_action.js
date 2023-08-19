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
