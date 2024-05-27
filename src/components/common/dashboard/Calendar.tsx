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
      className="w-full rounded-md border"
    />
  );
}
