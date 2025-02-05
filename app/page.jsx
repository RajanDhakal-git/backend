"use client"
import { useRouter } from "next/navigation"
import { useMycontext } from "@/components/MycontextProvider"

const Page = () => {
  let { Apidata, Deletedata } = useMycontext()
  let { push } = useRouter()

  return (
    <div className="px-32 py-10">
      <h1 className="p-5 mb-5 text-center text-orange-500 text-4xl font-extrabold">Welcome to My Todo App</h1>
     <div className="border p-4 min-h-[40vh]">
     <button className="shadow-lg border px-5 py-2 rounded-lg mb-5 bg-emerald-500 text-white" onClick={()=>push("/form")}>Add todo</button>
     <div className="grid grid-cols-4 gap-7">
     {Apidata?.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-3 shadow-lg p-5 border rounded-md">
            <span className="font-semibold">{item.title}</span>
           <span> {item.desc}</span>

            <div className="flex gap-4">
            <button className=" bg-red-500 text-white shadow-lg border px-5 py-2 rounded-lg" onClick={() => Deletedata(item.id)}>Delete</button>
              <button className=" bg-orange-500 text-white shadow-lg border px-5 py-2 rounded-lg" onClick={() => push("/edit/"+item.id)}>Edit</button>
            </div>
          </div>
        )
      })}
     </div>
     </div>
    </div>
  )
}

export default Page
