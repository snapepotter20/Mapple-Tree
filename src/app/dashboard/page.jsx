"use client"
import React , {useState} from "react";
import SideBar from "@/components/Common/SideBar/page.jsx";
import Header from "@/components/Common/Header/page.jsx";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar/>
       <div className="flex flex-col">
         <Header/>
       </div>
    </div>
  )
}

export default Dashboard
