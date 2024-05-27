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
      <div className="sticky w-min md:max-w-32 h-min top-0 left-0 hover:animate-bounce">
        <button
          className="mt-2 ml-2 bg-slate-100 rounded-full border border-opacity-75 shadow-sm bg-opacity-75 p-1"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoIosArrowForward className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="sticky w-3/4 md:max-w-32 h-svh bg-slate-100 top-0 left-0 shadow-xl border border-gray-200 rounded-r-3xl">
      <div className="flex h-full w-full flex-col space-y-8 justify-between items-center">
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
          className="flex h-full flex-col space-y-6 md:justify-center md:items-center"
        >
          <button className="flex flex-col items-center justify-center text-lg md:text-base font-bold">
            <LuLayoutDashboard className="w-16 h-16 md:w-12 md:h-12" />
            Dashboard
          </button>
          <button className="flex flex-col items-center justify-center text-lg md:text-base font-bold">
            <MdOutlineClass className="w-16 h-16 md:w-12 md:h-12" />
            My Courses
          </button>
          <button className="flex flex-col items-center justify-center text-lg md:text-base font-bold">
            <LuCalendarDays className="w-16 h-16 md:w-12 md:h-12" />
            My Calendar
          </button>
          <button className="flex flex-col items-center justify-center text-lg md:text-base font-bold">
            <MdOutlineFindInPage className="w-16 h-16 md:w-12 md:h-12" />
            Discover
          </button>
        </div>
        <div
          id="mobileMenuBottom"
          className="flex flex-row md:flex-col md:space-x-0 md:space-y-6 w-full h-full justify-center space-x-4 p-4 items-end sm:items-center md:pb-12"
        >
          <button className="flex flex-col items-center justify-center text-sm font-bold">
            <MdOutlineAccountCircle className="w-8 h-8" />
            Profile
          </button>
          <button className="flex flex-col items-center justify-center text-sm font-bold">
            <IoIosSettings className="w-8 h-8" />
            Settings
          </button>
          <button className="flex flex-col items-center justify-center text-sm font-bold">
            <IoLogOutOutline className="w-8 h-8" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
