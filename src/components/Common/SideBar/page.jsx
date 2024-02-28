"use client";
import { ContentList } from "./SidebarContent";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="h-screen bg-white p-6 w-[20%] flex flex-col items-center">
      <div>
        <Image
          src="/Images/Logo/TAX PROJECT LOGO 1.svg"
          alt="logo"
          height={200}
          width={200}
          className="h-[80px] w-[80px]"
        />
      </div>

      <div className="flex flex-col items-start">
        {ContentList.map((item) => (
          <div
            className="p-3 flex gap-3 mb-2 rounded-xl cursor-pointer"
            key={item.id}
          >
            <div className=" text-color">
              <Image
                src={item.icon}
                alt={item.title}
                height={200}
                width={200}
                className="h-[20px] w-[20px]"
              />
            </div>
            <h2 className="my-auto text-color">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
