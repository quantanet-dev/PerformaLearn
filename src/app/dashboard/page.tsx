import { CalendarUI } from "@/components/common/dashboard/Calendar";
import { Calendar } from "@/components/ui/calendar";
import { CardUI } from "@/components/common/dashboard/Card";
import TableUI from "@/components/common/dashboard/DataTable/Table";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="grid grid-rows-1 gap-3 w-full h-full p-3">
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 gap-3 md:grid-cols-1 h-full grid-rows-3">
        <div className="container m-0 p-0">
          <CalendarUI />
        </div>
        <div className="container m-0 p-0 2xl:col-span-2">
          <TableUI />
        </div>
        <div className="container m-0 p-0">
          <CardUI />
        </div>
        <div className="container m-0 p-0">
          <CardUI />
        </div>
        <div className="container m-0 p-0 2xl:col-span-2">
          <TableUI />
        </div>
        <div className="container m-0 p-0">
          <CardUI />
        </div>
        <div className="container m-0 p-0 max-w-full 2xl:col-span-4 xl:col-span-2">
          <CardUI />
        </div>
      </div>
    </div>
  );
}
