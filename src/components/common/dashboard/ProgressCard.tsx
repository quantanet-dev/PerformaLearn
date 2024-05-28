import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiProgression } from "react-icons/gi";

export function ProgressCard() {
  return (
    <Card className="h-full shadow-md">
      <CardHeader className="flex flex-row w-full justify-between items-center">
        <CardTitle>View your learning progress</CardTitle>
        <GiProgression className="size-5" color="#d1d5db" />
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-row justify-between items-center">
            <span>Check your course inbox</span>
            <span>5</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>Courses successfully completed</span>
            <span>12</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>Achieved certifications</span>
            <span>9</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>Time invested in learning</span>
            <span>11h 34m</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>Upcoming courses</span>
            <span>2</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>Organize your courses efficiently</span>
            <span>1</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
