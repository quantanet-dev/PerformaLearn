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
      className="flex flex-row w-auto h-full rounded-md border shadow-md"
      classNames={{
        months: "flex w-full h-full flex-col",
        month: "space-y-4 w-full h-full flex flex-col",
        table: "w-full flex-1 border-collapse space-y-1",
        head_row: "",
        row: "w-full mt-2",
        day: "rounded-md w-full h-full",
      }}
    />
  );
}
