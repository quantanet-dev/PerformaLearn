"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FaXmark, FaCheck, FaQuestion, FaPlay } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";

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
    cell: ({ row }) => {
      const course: string = row.getValue("course");
      return <div className="text-xs">{course}</div>;
    },
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => {
      const date = new Date(row.getValue("deadline"));
      const formattedDate: string = date.toLocaleDateString();
      return <div className="text-xs">{formattedDate}</div>;
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
            <div className="px-1 py-1 bg-gray-100 rounded-full text-center text-xs">
              Ongoing
            </div>
          );
        } else {
          return (
            <div className="px-1 py-1 bg-gray-100 rounded-full text-center text-xs">
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
    header: () => {
      return (
        <div className="flex flex-row justify-center items-center w-min">
          Certification
        </div>
      );
    },
    cell: ({ row }) => {
      const hasCert = row.getValue("certification");
      const Formatted = () => {
        if (hasCert === true) {
          return (
            <div className="flex flex-row w-full justify-center items-center">
              <FaCheck className="size-3" />
            </div>
          );
        } else {
          return (
            <div className="flex flex-row w-full justify-center items-center">
              <FaXmark className="size-3" color="#9ca3af" />
            </div>
          );
        }
      };
      return <Formatted />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const course = row.original;

      return (
        <div className="w-min flex flex-row justify-center items-center gap-2">
          <div className="xl:hidden rounded-full bg-gray-100 p-1">
            <MdMoreVert className="size-3" />
          </div>
          <button>
            <div className="hidden xl:block rounded-full bg-gray-100 p-1">
              <FaQuestion className="size-4" />
            </div>
          </button>
          <button>
            <div className="hidden xl:block rounded-full bg-gray-100 p-1">
              <FaPlay className="size-4" />
            </div>
          </button>
        </div>
      );
    },
  },
];
