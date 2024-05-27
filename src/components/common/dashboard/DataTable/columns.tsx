"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Recommendation = {
  id: string;
  course: string;
  status: boolean;
  deadline: Date;
  certification: boolean;
};

export const columns: ColumnDef<Recommendation>[] = [
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => {
      const date = new Date(row.getValue("deadline"));
      const formatted = date.toLocaleDateString();
      return formatted;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const Formatted = () => {
        if (status === true) {
          return (
            <div className=" border px-1 py-1 bg-gray-200 rounded-full text-center text-xs">
              Ongoing
            </div>
          );
        } else {
          return (
            <div className=" border px-1 py-1 bg-gray-200 rounded-full text-center text-xs">
              Not Started
            </div>
          );
        }
      };
      return <Formatted />;
    },
  },
  {
    accessorKey: "certification",
    header: "Certification",
    cell: ({ row }) => {
      const hasCert = row.getValue("certification");
      const Formatted = () => {
        if (hasCert === true) {
          return (
            <div className="flex flex-row w-full justify-center items-center">
              <FaCheck className="size-4" />
            </div>
          );
        } else {
          return (
            <div className="flex flex-row w-full justify-center items-center">
              <FaXmark className="size-4" color="#9ca3af" />
            </div>
          );
        }
      };
      return <Formatted />;
    },
  },
];
