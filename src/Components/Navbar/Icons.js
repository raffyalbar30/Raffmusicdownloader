" use client"

import React from 'react'
import { GoHome } from "react-icons/go";
import { MdCloudDownload } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { Poppins } from "next/font/google";
import { FaInstagram } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { useRouter } from 'next/navigation'
 

const font = Poppins({
  weight: '500',
  subsets: ['latin'] 
});

const Menubar = [
     {
       id: 0,
       icons : <GoHome />, 
       Title : "Home",
       Url: "/dashboard"
     }, 
     {
      id: 1,
      icons : <MdCloudDownload />, 
      Title : "Downloader",
      Url: "/dashboard/downloader"
     },
     {
      id: 2,
      icons : <MdLibraryMusic />, 
      Title : "Playlist"
     },

];

const Sosmed = [
    {
       id: 0,
       Icons: <FaInstagram />,
       Url: "Raffy"
    },
    {
      id: 1,
      Icons: <AiFillGithub />,
      Url: "Raffy"
   }, 
   {
    id: 2,
    Icons: <FaTelegram />,
    Url: "Raffy"
   }
]

export default function Icons() {

  const router = useRouter()


  
  return (
    <>
    <div className="flex items-center cursor-pointer pb-2 border border-zinc-700">
           <img src="/spotify.png" alt="music yutube downloader" className="h-[40px] pt-2 ml-2"></img>
             <p className={` ${font.className} font-semibold text-white absolute ml-8 pl-4 pt-2`}>
                 RaffMusicdownloader
             </p>
    </div>

    <div className="flex-wrap">
         {
          Menubar.map( menu => (
          <div className="hover:bg-zinc-900 active:bg-zinc-900 focus:outline-none focus:ring-inset mr-2 ml-2 rounded-md h-12">
           <div className={` ${font.className} flex  ml-4 items-center font-semibold gap-x-4 mt-4 pt-2`} key={menu.id}> 
                 <span className="text-[30px]"> {menu.icons} </span>
                 <span className="text-[20px]" onClick={() => router.push(menu.Url)}> {menu.Title} </span>
           </div>
          </div>
          ))
         }
    </div>
     <div className="mt-24 w-full pr-4 pl-4">
        <div className="w-full border-zinc-600 border border-solid">
             <span></span>
        </div>
     </div>

     <div className="mt-4">
         <p className={`${font.className} text-[15px] font-semibold text-left p-4 `}>"Jangan lupa follow akun medsos gua ygy !! Maaf kalau fitur nya belum lengkap terimakasih yang udah follow " ⭐👨‍💻🙏</p>
         <div className="flex ml-12 gap-x-6 text-3xl mt-24 items-center">
                {
                  Sosmed.map((Sosial) => (
                    <>
                      <p key={Sosial.id}>{Sosial.Icons}</p>
                    </>
                  ))
                }
         </div>
     </div>
    </>

  )
}
