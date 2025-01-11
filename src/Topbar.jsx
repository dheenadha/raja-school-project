import React from 'react'
import Header from './Header'
import { Outlet } from "react-router-dom"
import Firsttopbar from './Firsttopbar'


export default function Topbar() {
  return (
   <>
   <Firsttopbar></Firsttopbar>
    <div >

        <Header/>
        <div>
          <div>
            <Outlet/>
          </div>
        </div>
      </div></>
  )
}
