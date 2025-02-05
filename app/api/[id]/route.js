import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  let { id } = await params;
 try {
    let { data } = await axios.get(`http://localhost:4000/todos/${id}`);
    return NextResponse.json(data);
 } catch (error) {
    return NextResponse.json({msg:error.status})
 }
};


export const DELETE = async (req, { params }) => {
  let { id } = await params;
  try {
    let { data } = await axios.delete(`http://localhost:4000/todos/${id}`);
    return NextResponse.json({ msg: data });
  } catch (error) {
    return NextResponse.json({ msg: "no data found" });
  }
};


export const PUT = async (req, { params }) => {
  let { id } = await params;
  let data = await req.json();
  try {
    let res = await axios.put(`http://localhost:4000/todos/${id}`, data);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ msg: error });
  }
};
