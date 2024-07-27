import { useState } from "react"

export const Filter=()=>
{
    const [location,setLocation]=useState();
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 p-6 mt-4 mb-4 md:flex-row justify-around">
                <div className="flex gap-10">
                    <select onChange={(e)=>{
                   
                    setLocation(e.target.value);
                    localStorage.setItem("location",e.target.value);
                    }} name="" id="" className="bg-sky-700 text-white p-2 border border-slate-500">
                        <option value="" className="bg-white text-black p-2 border border-slate-500">Filter By Location</option>
                        <option value="Pune" className="bg-white text-black p-2 border border-slate-500">Pune</option>
                        <option value="Mumbai" className="bg-white text-black p-2 border border-slate-500">Mumbai</option>
                    </select>

                    <select name="" id="" className="bg-sky-700 text-white p-2 border border-slate-500">
                        <option value="" className="bg-white text-black p-2 border border-slate-500">Filter By Type</option>
                        <option value="" className="bg-white text-black p-2 border border-slate-500">Yoga</option>
                        <option value="" className="bg-white text-black p-2 border border-slate-500">Meditation</option>
                    </select>
                </div>

                <div>
                        <input type="text" placeholder="Search Retreats By Filter" className="p-4 bg-sky-700 text-white border border-slate-700 rounded-md " name="" id="" />
                </div>
            </div>
        </>
    )
}