import { Button } from '@/components/ui/button.jsx'
import React from 'react'

const page = () => {
  return (
     <main className="py-4 px-4 ">
      <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold">Albums</h2>
      <div className="w-full flex items-center justify-end mt-2 md:mt-4">
        <Button variant="secondary">Create an album</Button>
        
      </div>
      
        
      
    </main>
  )
}

export default page