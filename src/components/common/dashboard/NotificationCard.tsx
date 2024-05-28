import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdAddCircleOutline } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { MdTravelExplore } from "react-icons/md";

export function NotificationCard() {
  return (
    <Card className="h-full shadow-md">
      <CardHeader className="flex flex-row w-full justify-between items-center">
        <CardTitle>New Notifications</CardTitle>
        <button className="text-sm text-gray-400 hover:text-black">
          Clear All
        </button>
      </CardHeader>
      <CardContent>
        <div className="grid w-full justify-between items-center gap-4 h-full">
          <div className="flex flex-row justify-center space-x-4 w-full items-center">
            <div className="flex flex-row justify-center items-center bg-black p-1 rounded-xl">
              <MdAddCircleOutline className="size-8" color="white" />
            </div>
            <span className="w-full">
              New course recommendation from the AI system.
            </span>
          </div>
          <div className="flex flex-row justify-center space-x-4 items-center">
            <div className="flex flex-row justify-center items-center bg-black p-2 rounded-xl">
              <FaGift className="size-6" color="white" />
            </div>
            <span className="w-full">Certification approved successfully!</span>
          </div>
          <div className="flex flex-row justify-center space-x-4 items-center">
            <div className="flex flex-row justify-center items-center bg-black p-1 rounded-xl">
              <MdTravelExplore className="size-8" color="white" />
            </div>
            <span className="w-full">Explore new workshops for your team!</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
