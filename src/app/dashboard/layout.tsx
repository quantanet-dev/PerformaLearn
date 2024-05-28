import SideBar from "@/components/common/dashboard/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      <div className="fixed top-0 left-0 z-50 h-full">
        <SideBar />
      </div>
      <div className="flex flex-row w-full h-full top-0">{children}</div>
    </div>
  );
}
