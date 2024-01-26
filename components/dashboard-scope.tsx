import DashboardProject from "@/components/dashboard-project";
import { SlashIcon, TriangleIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardScope() {
  return (
    <div className="flex items-center flex-1 pr-6">
      <Link href="#" className="md:block hidden">
        <TriangleIcon className="size-7 text-foreground fill-foreground" />
      </Link>
      <SlashIcon className="md:block hidden text-foreground/10 size-4 -rotate-[15deg] mx-3" />
      <DashboardProject />
    </div>
  );
}
