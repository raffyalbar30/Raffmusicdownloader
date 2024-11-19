import React from 'react'
import DashboardLayouts from '@/layouts/Menu/getLayouts'
import Input from '@/Components/Input'


Downloader.getLayout = (page) => <DashboardLayouts>{ page }</DashboardLayouts>


export default function Downloader() {
  return (
    <div className="w-full flex justify-center mt-4">
        <Input />
    </div>
  )
}
