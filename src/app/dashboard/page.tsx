import { BadgesCard } from "@/components/common/dashboard/BadgesCard";
import { CalendarUI } from "@/components/common/dashboard/Calendar";
import { CardUI } from "@/components/common/dashboard/Card";
import TableUI from "@/components/common/dashboard/DataTable/Table";
import { NotificationCard } from "@/components/common/dashboard/NotificationCard";
import { ProgressCard } from "@/components/common/dashboard/ProgressCard";
import { StatsCard } from "@/components/common/dashboard/StatsCard";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 gap-3 md:grid-cols-1 h-full w-full grid-rows-3 p-3">
      <div className="container m-0 p-0 pr-3 xs:pr-0">
        <CalendarUI />
      </div>
      <div className="container m-0 p-0 pr-3 xs:pr-0 2xl:col-span-2">
        <TableUI />
      </div>
      <div className="container m-0 p-0 pr-3 xs:pr-0">
        <NotificationCard />
      </div>
      <div className="container m-0 p-0 pr-3 xs:pr-0">
        <ProgressCard />
      </div>
      <div className="container m-0 p-0 pr-3 xs:pr-0 2xl:col-span-2">
        <TableUI />
      </div>
      <div className="container m-0 p-0 pr-3 xs:pr-0">
        <StatsCard />
      </div>
      <div className="container max-w-full m-0 p-0 pr-3 xs:pr-0 2xl:col-span-4 xl:col-span-2">
        <BadgesCard />
      </div>
    </div>
  );
}
