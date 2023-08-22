import React from 'react'
import cloudinary from "cloudinary";
import CloudinaryImage from '@/components/CloudinaryImage.js';
import { ForceRefresh } from '@/components/ForceRefresh.js';

const page =async({params}) => {
    const {albumname}=params
    const results = await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumname}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()
    console.log(results)
  return (
    <main className='py-4 px-4 '>
      <ForceRefresh/>
        <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold capitalize">{albumname}</h2>
        <div className=' mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {results?.resources?.map((image,index)=>{
                return <CloudinaryImage publicId={image.public_id} key={index} />
            })}


        </div>

    </main>
  )
}

export default page