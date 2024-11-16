import DashboardLayouts from '@/layouts/Menu/getLayouts'
import React from 'react'
import WrapperHome from './_components/Wrapperhome'


Home.getLayout = (page) => <DashboardLayouts>{ page }</DashboardLayouts>


export default function Home() {
  return (
     <>
        <WrapperHome />
     </>
  )
}
