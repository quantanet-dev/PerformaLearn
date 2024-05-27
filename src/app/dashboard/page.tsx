import { CalendarUI } from "@/components/common/dashboard/Calendar";
import { CardUI } from "@/components/common/dashboard/Card";
import TableUI from "@/components/common/dashboard/DataTable/Table";

export default function DashboardPage() {
  return (
    <div className="grid grid-rows-1 gap-3 w-full p-3">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-3 sm:grid-cols-1 h-full grid-rows-2">
        <div className="w-full h-full">
          <CalendarUI />
        </div>
        <div className="w-full h-full xl:col-span-2">
          <TableUI />
        </div>
        <div className="w-full h-full">
          <CardUI />
        </div>
        <div className="w-full h-full">
          <CardUI />
        </div>
        <div className="w-full h-full xl:col-span-2">
          <TableUI />
        </div>
        <div className="w-full h-full">
          <CardUI />
        </div>
      </div>
      <div className="w-full h-min">
        <CardUI />
      </div>
    </div>
  );
}
