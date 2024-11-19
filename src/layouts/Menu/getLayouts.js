import React from 'react'
import Menu from '../Menu/Index'

export default function DashboardLayouts({ children }) {

  return (
   <div className="flex ">
      <Menu />
      <main className="w-full ml-4 mt-4">{ children }</main>
   </div>
  )
}
