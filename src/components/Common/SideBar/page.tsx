"use client";
import { ContentList } from "./SidebarContent";
import Image from "next/image";

interface SidebarProps {
  panelView: number;
  setPanelView: React.Dispatch<React.SetStateAction<number>>;
  setHomePage:any;
}

const SideBar: React.FC<SidebarProps> = ({
  panelView,
  setPanelView,
  setHomePage,
}) =>  {
  return (
    <div className="min-h-[100vh] bg-white p-4 w-[20%] flex flex-col items-center">
      <div>
        <img
          src="/Images/Logo/TAX PROJECT LOGO 1.svg"
          alt="logo"
          height={200}
          width={200}
          className="h-[80px] w-[80px]"
        />
      </div>

      <div className="flex flex-col items-start mt-8">
        {ContentList.map((item) => (
          <div
            className={`p-2 px-5 flex gap-6 mb-2 rounded-lg cursor-pointer ${panelView === item.id ? "bg-[#002E62] text-white w-full" : "text-color"}`}
            key={item.id}
            onClick={()=>{
              console.log("Yes s clicked");
              setPanelView(item.id);
              setHomePage("initialView")}}
          >
            <div className={`${panelView === item.id ? " text-white" : "text-color"}`}>
              <Image
                src={item.icon}
                alt={item.title}
                height={200}
                width={200}
                className="h-[25px] w-[25px]"
              />
            </div>
            <h2 className="my-auto">{item.title}</h2>
          </div>
        ))}
      <div className="mt-8">
        <button className="p-3 rounded-3xl theme-color text-white">
           Need help?
        </button>
      </div>
      </div>
    </div>
  );
};

export default SideBar;
