"use client"
import { useMycontext } from "@/components/MycontextProvider"
import axios from "axios"
import { useState } from "react"


const page = () => {
 let {getUserinputs} = useMycontext()
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    let handleOnSubmit = async (e) => {
      e.preventDefault()
      getUserinputs(title ,desc)
    }
  return (
    <div>
       <div className='flex justify-center items-center h-screen '>
        <form onSubmit={handleOnSubmit} className='p-3 shadow-xl border flex flex-col gap-6'>
          <h1 className='text-center font-semibold'>Add Post</h1>
          <input type="text" className='border px-5 py-2 rounded-lg' value={title} onChange={(e) => settitle(e.target.value)} id="" />
          <input type="text" className='border px-5 py-2 rounded-lg' value={desc} onChange={(e) => setdesc(e.target.value)} id="" />
          <input type="submit" className='bg-black rounded-lg py-2 text-white' />
        </form>
      </div>
    </div>
  )
}

export default page