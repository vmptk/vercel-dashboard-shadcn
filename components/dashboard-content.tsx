import DashboardAdd from "@/components/dashboard-add";
import DashboardSearch from "@/components/dashboard-search";
import DashboardSwitch from "@/components/dashboard-switch";
import DashboardGridCard from "@/components/dashboard-grid-card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import DashboardRowCard from "@/components/dashboard-row-card";

export default function DashboardContent() {
  return (
    <Tabs defaultValue="grid">
      <div className="max-w-6xl min-h-[calc(100vh-85px)] px-6 my-6 mx-auto w-full">
        <div>
          <div className="flex items-center space-x-2 pb-6">
            <DashboardSearch />
            <DashboardSwitch />
            <DashboardAdd />
          </div>
          <TabsContent
            value="grid"
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-5"
          >
            <DashboardGridCard
              name="tesla"
              url="www.tesla.com"
              commit="Update prices"
              timeAgo="5m"
              branch="main"
            />
            <DashboardGridCard
              name="space-x"
              url="www.spacex.com"
              commit="Update prices"
              timeAgo="10m"
              branch="main"
            />
            <DashboardGridCard
              name="starlink"
              url="www.starlink.com"
              commit="Update prices"
              timeAgo="15m"
              branch="master"
            />
          </TabsContent>
          <TabsContent value="rows" className="grid gap-5">
            <DashboardRowCard
              name="tesla"
              url="www.tesla.com"
              commit="Update prices"
              timeAgo="5m"
              branch="main"
            />
            <DashboardRowCard
              name="space-x"
              url="www.spacex.com"
              commit="Update prices"
              timeAgo="10m"
              branch="main"
            />
            <DashboardRowCard
              name="starlink"
              url="www.starlink.com"
              commit="Update prices"
              timeAgo="15m"
              branch="master"
            />
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
