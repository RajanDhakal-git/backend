import { NextResponse } from "next/server"
import axios from "axios"
 

export const GET = async()=>{
    let {data} = await axios.get("http://localhost:4000/todos")
    return NextResponse.json(data)
}


export const POST = async (req )=>{
    let data = await req.json()
  try {
    let res = await axios.post("http://localhost:4000/todos",data)
    return NextResponse.json({msg:"posted success"})
  } catch (error) {
    return NextResponse.json({msg:error})
  }
}

