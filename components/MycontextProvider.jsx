"use client"
import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
export const MyContext = createContext()
const MycontextProvider = ({ children }) => {
    const [Apidata, setApidata] = useState([])
    let {push} = useRouter()
    let fetchAlldata = async () => {
        try {
            let { data } = await axios.get(' http://localhost:3000/api')
            setApidata(data)

        } catch (error) {
            toast.error("something went wrong")
        }
    }

    let EditData = async (id , title , desc) => {
        try {
            let res = await axios.put("http://localhost:3000/api/" + id, { "id": id, "title": title, "desc": desc })
            toast.success("value updated")
            push("/")
            fetchAlldata()

        } catch (error) {
            toast.error("someting went wrong")
        }
    }

    let Deletedata = async (id) => {
        try {
            let res = await axios.delete(`http://localhost:3000/api/${id}`)
            fetchAlldata()
            toast.success("Delete Success")
        } catch (error) {
            toast.error("something went wrong")
        }

    }

    let getUserinputs = async (title,desc) => {
        try {
            let res = axios.post("http://localhost:3000/api",{"title":title,"desc":desc})
            toast.success("added to database")
            push("/")
            fetchAlldata()
        } catch (error) {
            toast.error("something went wrong")
        }
    }

    useEffect(() => {
        fetchAlldata()
    }, [])



    return (
        <MyContext.Provider value={{ Apidata, EditData, Deletedata, getUserinputs }} >
            <div>{children}</div>
        </MyContext.Provider>
    )
}

export const useMycontext = () => {
    return useContext(MyContext)
}

export default MycontextProvider