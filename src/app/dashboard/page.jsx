"use client";
import React, { useState } from "react";
import SideBar from "@/components/Common/SideBar/page.tsx";
import Header from "@/components/Common/Header/page.tsx";
import Home from "@/components/Home/page";

const Dashboard = () => {
  const [panelView, setPanelView] = useState(1);
  const [homePage,setHomePage] = useState("initialView")
  return (
    <div className="flex w-full">
      <SideBar panelView={panelView} setPanelView={setPanelView} setHomePage={setHomePage}/>
      <div className="flex flex-col w-[80%]">
        <Header />
        <div>{panelView === 1 && <Home homePage={homePage} setHomePage={setHomePage}/>}</div>
      </div>
    </div>
  );
};

export default Dashboard;
