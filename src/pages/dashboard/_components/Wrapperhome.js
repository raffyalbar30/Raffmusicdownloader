import Mostviral from '@/Components/Mostviral'
import Recomend from '@/Components/Recomend'
import React from 'react'

export default function WrapperHome() {
  return (
    <div className="w-full shadow-inner rounded-md bg-neutral-900 shadow-neutral-800h-auto relative mb-2">
         <Mostviral />
         <div className="relative">
           <Recomend />
         </div>
    </div>
  )
}
