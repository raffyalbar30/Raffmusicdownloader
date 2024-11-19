import React from 'react'
import Image from 'next/image'
import { FaPlay } from "react-icons/fa";

const Recomended = [
    {
        id: 0, 
        img: "/AptRose.jpg",
        Title: "APT-APT Rose & Bruno Mars Song..",
        Icons: <FaPlay/>
    }, 
    {
        id: 1, 
        img: "/sombodyplasure.jpeg",
        Title: "Sombody Plasure Azis Hendra song ..",
        Icons: <FaPlay/>
    }, 
    {
        id: 2, 
        img: "/wannabeyours.jpeg",
        Title: " I wanna be yours Artice Monkey song ..",
        Icons: <FaPlay/>
    }, 
    {
        id: 3, 
        img: "/lanadel.webp",
        Title: "Say yes to haven lana del rey song ..",
        Icons: <FaPlay/>
    }, 
    {
        id: 4, 
        img: "/Jamesartur.jpeg",
        Title: "Say yes to haven lana del rey song ..",
        Icons: <FaPlay/>
    }, 

];

export default function Recomend() {
  return (
    <div className="mt-1">
    <h1 className="text-[32px] pt-2 text-white font-semibold cursor-pointer ml-20"> 
        Recomended Music
   </h1> 
   <div className="flex justify-center gap-x-4 pb-4 p-2">
        {
           Recomended.map((viral) => (
            <>
                <div className="group hover:bg-zinc-800 w-1/6 mt-4 rounded-md" key={viral.id}>
                <Image src={viral.img} alt="Bruno Mars Apt"  width={170} height={30} className="h-[175px] rounded-md mx-auto mt-2 mb-2"/>
                    <p className="ml-2 text-sm mr-2 text-zinc-400 font-semibold p-2">{viral.Title}</p>
                    <div className="ml-32 opacity-0 group-hover:opacity-100">
                    <div className="absolute bg-green-500 w-[40px] h-[40px] rounded-full top-56 cursor-pointer hover:bg-green-600 mr-2 transition ease-in-out delay-150 duration-300 group-hover:-translate-y-3 group-hover:scale-110">
                        <span className="text-black flex justify-center mt-3">{viral.Icons}</span>
                    </div>

                    </div>
            </div>
           </>
           ))
        }
   </div>
</div>
  )
}
