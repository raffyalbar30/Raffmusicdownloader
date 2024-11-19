"use client"; 

import React from 'react'
import { IoCloudDownload } from "react-icons/io5";
import { useState } from "react";
import { fecthingApi } from '@/libs/fecthingApi';



export default function Input() {
  const [getInput, setgetInput] = useState("");
  const [getData, setgetData] = useState([]);
  const [loading, setloading] = useState(false);


  const HandleClick = async (e) => {
       e.preventDefault();
       if (!getInput || getInput.trim() == "") return
          try {
            setloading(true)
            const ResponseData = await fecthingApi(getInput)
            setgetData(ResponseData);
          } catch (error) {
             console.log(error);
          } finally {
             setloading(false)
          }

  }

  
   console.log(getData);
   
  
  return (
    <>
    <div className="flex-wrap w-1/2">
    <div className=" flex gap-x-2">
         <input type="text" className="w-full bg-zinc-800 p-2 rounded-md" placeholder="Masukan url music..." onChange={(e) => setgetInput(e.target.value)}></input>
          <button disabled={loading} className="bg-zinc-700 mx-4 w-16 rounded-md" onClick={HandleClick}>
                { 
                  loading ?
                   <svg className="mx-auto animate-spin h-6 w-6 text-slate-200" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                  </svg> :  <IoCloudDownload className="mx-auto text-xl" />
                }
          </button> 
    
    </div>

        {
           getData && getData.metadata && (
            <div className={`flex justify-center`}>
                <div className="mt-8 border border-zinc-700 p-4 rounded-md">
                  <img src={getData.metadata?.cover} alt="loading..." className="w-[300px] h-[300px] rounded-md mx-auto" />
                      <p className="mt-4">{getData.metadata?.artists}</p>
                      <p className="mt-2">{getData.metadata?.releaseDate}</p>
                      <div className="border flex justify-between border-zinc-900 rounded-md bg-zinc-900 mt-2 p-2">
                          <span className="text-[12px]">{getData.metadata?.title}</span>
                            <button className="bg-green-800 mx-4 w-[75px] rounded-md text-black ">
                              <a href={getData.link}>unduh</a>
                            </button>
                      </div>
                 </div> 
             </div>
           )
        }
    </div>
    </>
  )
}
