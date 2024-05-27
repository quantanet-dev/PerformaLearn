"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarUI() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="w-full h-full rounded-md border"
      classNames={{
        months:
          "flex w-full h-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
        month: "space-y-4 w-full h-full flex flex-col",
        table: "w-full h-full border-collapse space-y-1",
        head_row: "",
        row: "w-full mt-2",
        day: "rounded-md w-full h-full",
      }}
    />
  );
}
