import { CalendarUI } from "@/components/common/dashboard/Calendar";

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full h-min">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-5 p-5 w-full h-full">
        <div className="flex p-3 flex-row border shadow-sm rounded-xl w-full h-full">
          <CalendarUI />
        </div>
        <div className="flex p-3 flex-row border shadow-sm rounded-xl w-full h-full"></div>
        <div className="flex p-3 flex-row border shadow-sm rounded-xl w-full h-full"></div>
        <div className="flex p-3 flex-row border shadow-sm rounded-xl w-full h-full"></div>
        <div className="flex p-3 flex-row border shadow-sm rounded-xl w-full h-full"></div>
        <div className="flex p-3 flex-row border shadow-sm rounded-xl w-full h-full"></div>
      </div>
      <div className="grid grid-cols-1 pb-5 pl-5 pr-5 w-full h-64">
        <div className="flex p-3 flex-row border shadow-sm rounded-xl w-full h-full"></div>
      </div>
    </div>
  );
}
