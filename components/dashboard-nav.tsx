import DashboardLinks from "@/components/dashboard-links";
import DashboardScope from "@/components/dashboard-scope";

export default function DashboardNav() {
  return (
    <nav className="flex mx-auto items-center px-6 h-16 relative">
      <DashboardScope />
      <DashboardLinks />
    </nav>
  );
}
