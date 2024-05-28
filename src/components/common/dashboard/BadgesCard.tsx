import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiAchievement } from "react-icons/gi";

export function BadgesCard() {
  return (
    <Card className=" h-full max-h-48 shadow-md">
      <div className="grid h-full grid-cols-10">
        <CardHeader className="flex col-span-3 flex-row w-full justify-start items-start">
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-5 col-span-7 p-0 justify-center items-center w-full h-full">
          <span className="bg-gray-100 p-2 w-min rounded-full">
            <GiAchievement className="size-8 md:size-10 2xl:size-20" />
          </span>
          <span className="bg-gray-100 p-2 w-min rounded-full">
            <GiAchievement className="size-8 md:size-10 2xl:size-20" />
          </span>
          <span className="bg-gray-100 p-2 w-min rounded-full">
            <GiAchievement className="size-8 md:size-10 2xl:size-20" />
          </span>
          <span className="bg-gray-100 p-2 w-min rounded-full">
            <GiAchievement className="size-8 md:size-10 2xl:size-20" />
          </span>
          <span className="bg-gray-100 p-2 w-min rounded-full">
            <GiAchievement className="size-8 md:size-10 2xl:size-20" />
          </span>
        </CardContent>
      </div>
    </Card>
  );
}
