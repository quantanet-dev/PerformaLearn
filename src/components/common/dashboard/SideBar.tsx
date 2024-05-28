"use client";
import { LuLayoutDashboard, LuCalendarDays } from "react-icons/lu";
import {
  MdOutlineClass,
  MdOutlineFindInPage,
  MdOutlineAccountCircle,
} from "react-icons/md";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosSettings,
} from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import Logo from "../../../../public/assets/PerformaLearnLogoSVG.svg";
import { useState } from "react";
import Image from "next/image";

export default function SideBar() {
  const [showMenu, setShowMenu] = useState(false);

  if (!showMenu) {
    return (
      <div className="sticky w-min md:max-w-32 h-full top-0 left-0">
        <button
          className="mt-24 -ml-6 mr-6 bg-slate-100 rounded-full border border-opacity-75 shadow-md bg-opacity-75 px-0.5 py-8"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoIosArrowForward className="ml-6 w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="sticky w-full max-w-32 h-full bg-slate-100 top-0 left-0 shadow-md border border-gray-200 ">
      <div className="flex h-full w-full flex-col space-y-6 justify-between items-center">
        <div
          id="mobileMenuTop"
          className="flex flex-col justify-center items-center w-full h-full"
        >
          <div className="flex flex-row items-center h-min justify-center w-full">
            <div className="flex flex-row justify-end w-full">
              <button className="p-2" onClick={() => setShowMenu(!showMenu)}>
                <IoIosArrowBack className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="flex flex-row w-full h-full justify-center items-center">
            <Image src={Logo} alt="performalearn-logo" width={24} height={24} />
          </div>
        </div>
        <div
          id="mobileMenuMiddle"
          className="flex h-full flex-col space-y-8 md:justify-center md:items-center p-2"
        >
          <button className="flex flex-col items-center justify-center text-lg md:text-base font-bold">
            <LuLayoutDashboard className="size-8" />
            Dashboard
          </button>
          <button className="flex flex-col items-center justify-center text-lg md:text-base font-bold">
            <MdOutlineClass className="size-8" />
            Courses
          </button>
          <button className="flex flex-col items-center justify-center text-lg md:text-base font-bold">
            <LuCalendarDays className="size-8" />
            Calendar
          </button>
          <button className="flex flex-col items-center justify-center text-lg md:text-base font-bold">
            <MdOutlineFindInPage className="size-8" />
            Discover
          </button>
        </div>
        <div
          id="mobileMenuBottom"
          className="flex flex-col space-x-0 space-y-3 w-full h-full justify-center p-4 items-center"
        >
          <button className="flex flex-col items-center justify-center text-sm font-bold">
            <MdOutlineAccountCircle className="size-6" />
            Profile
          </button>
          <button className="flex flex-col items-center justify-center text-sm font-bold">
            <IoIosSettings className="size-6" />
            Settings
          </button>
          <button className="flex flex-col items-center justify-center text-sm font-bold">
            <IoLogOutOutline className="size-6" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
