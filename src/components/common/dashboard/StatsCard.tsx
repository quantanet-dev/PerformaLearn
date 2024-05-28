import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiProgression } from "react-icons/gi";

export function StatsCard() {
  return (
    <Card className="h-full shadow-md">
      <CardHeader className="flex flex-row w-full justify-between items-center">
        <CardTitle>Your Statistics</CardTitle>
        <GiProgression className="size-5" color="#d1d5db" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-row-1 w-full h-full justify-center items-center">
          <div className="grid grid-cols-5 w-full">
            <div className="grid grid-rows-2 col-span-2 justify-end space-y-4 w-full">
              <div className="flex flex-col justify-center items-center text-center bg-gray-200 w-28 h-28 rounded-full hover:animate-bounce">
                <span className="text-xs font-bold text-center mt-3 mb-1">
                  Certifications
                </span>
                <span className="text-white font-bold text-3xl w-1/2 text-center border-t-2 border-gray-600 border-dotted">
                  12
                </span>
              </div>
              <div className="flex flex-col justify-center items-center text-center bg-black w-20 h-20 rounded-full hover:animate-spin ml-4">
                <span className="text-xs text-white font-bold text-center mt-3 mb-1">
                  Explored
                </span>
                <span className="text-white font-bold text-xl w-1/2 text-center border-t-2 border-gray-600 border-dotted">
                  9
                </span>
              </div>
            </div>
            <div className="flex flex-col col-span-3 justify-end w-full">
              <div className="flex flex-col justify-center items-center text-center bg-gray-200 w-40 h-40 hover:animate-pulse rounded-full">
                <span className="text-xs font-bold text-center mb-1">
                  Success Rate <br /> overview
                </span>
                <span className="text-black font-bold text-5xl w-3/4 text-center border-t-2 border-gray-600 border-dotted">
                  99%
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
