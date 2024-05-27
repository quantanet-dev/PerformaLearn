import SideBar from "@/components/common/dashboard/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <SideBar />
      <div className="flex flex-row w-full h-full top-0">{children}</div>
    </div>
  );
}
