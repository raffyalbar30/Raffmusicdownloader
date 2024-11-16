"use client"; 

import React from 'react'
import { IoCloudDownload } from "react-icons/io5";
import { useState } from "react";
import { fecthingApi } from '@/libs/fecthingApi';



export default function Input() {
  const [getInput, setgetInput] = useState("");
  const [getData, setgetData] = useState([]);


  const HandleClick = async (e) => {
       e.preventDefault();
       try {
          const ResponseData = await fecthingApi(getInput)
          setgetData(ResponseData);
       } catch (error) {
          console.log(error);
       }
  }

  console.log(getData);
  
   
  
  return (
    <>
    <div className="flex-wrap w-1/2">
    <div className=" flex gap-x-2">
         <input type="text" className="w-full bg-zinc-800 p-2 rounded-md" placeholder="Masukan url music..." onChange={(e) => setgetInput(e.target.value)}></input>
          <button className="bg-zinc-700 mx-4 w-16 rounded-md" onClick={HandleClick}>
              <IoCloudDownload className="mx-auto text-xl" />
          </button>
    </div>

    <div className="flex justify-center">
      {
          getData && (
          <div className="mt-12 border border-zinc-700 p-4 rounded-md">
            <img src={getData.metadata?.cover} alt="cover" className="w-[300px] h-[300px] rounded-md" />
             <p className="mt-4">{getData.metadata?.artists}</p>
             <p className="mt-2">{getData.metadata?.releaseDate}</p>
            <div className="border flex justify-between border-zinc-900 rounded-md bg-zinc-900 mt-2 p-2">
                <span>{getData.metadata?.title}</span>
                  <button className="bg-green-800 mx-4 w-[75px] rounded-md text-black ">
                    <a href={getData.link}>unduh</a>
                  </button>
            </div>
           </div>
        )
      }
    </div>

    </div>
    </>
  )
}
