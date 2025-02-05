"use client"
import { useMycontext } from '@/components/MycontextProvider'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = ({ params }) => {
  let { id } = React.use(params)
  let { EditData } = useMycontext()
  let getdata = async () => {
    let { data } = await axios.get("http://localhost:3000/api/" + id)
    settitle(data.title)
    setdesc(data.desc)
  }

  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')

  let handleOnSubmit = async (e) => {
    e.preventDefault()
    EditData(id , title ,desc)
  }

  useEffect(() => { getdata() }, [id])

  return (
    <>
      <div className='flex justify-center items-center h-screen '>
        <form onSubmit={handleOnSubmit} className='p-3 shadow-xl border flex flex-col gap-6'>
          <h1 className='text-center font-semibold'>Edit Post</h1>
          <input type="text" className='border px-5 py-2 rounded-lg' value={title} onChange={(e) => settitle(e.target.value)} id="" />
          <input type="text" className='border px-5 py-2 rounded-lg' value={desc} onChange={(e) => setdesc(e.target.value)} id="" />
          <input type="submit" className='bg-black rounded-lg py-2 text-white' />
        </form>
      </div>
    </>
  )
}

export default page