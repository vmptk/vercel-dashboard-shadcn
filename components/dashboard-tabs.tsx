import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardTabs() {
  return (
    <div className="relative mr-auto w-full h-[52px] -mt-2 border-b bg-transparent">
      <div className="flex overflow-x-scroll no-scrollbar pl-4 w-full justify-start">
        <DashboardTab active>Overview</DashboardTab>
        <DashboardTab>Integrations</DashboardTab>
        <DashboardTab>Activity</DashboardTab>
        <DashboardTab>Domains</DashboardTab>
        <DashboardTab>Usage</DashboardTab>
        <DashboardTab>Monitoring</DashboardTab>
        <DashboardTab>Storage</DashboardTab>
        <DashboardTab>Settings</DashboardTab>
      </div>
    </div>
  );
}

function DashboardTab({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href="#"
      className={cn(
        "relative inline-block no-underline text-sm font-normal transition-all duration-200 cursor-pointer px-3 py-4 hover:text-primary text-muted-foreground",
        active &&
          "before:content-[''] before:block before:absolute before:h-0 before:border-b-2 before:border-solid before:bottom-0 before:inset-x-[9px] before:border-primary text-primary"
      )}
    >
      {children}
    </Link>
  );
}
